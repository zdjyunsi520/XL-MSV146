package server;

import client.LoginCrypto;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import database.DatabaseConnection;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class HttpRegisterServer {

    private static final int PORT = 9999;
    private static final int ONE_HUNDRED_MILLION = 100000000;

    public static void start() {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
            server.createContext("/register", new RegisterHandler());
            server.setExecutor(null);
            server.start();
            System.out.println("HTTP Register Server is listening on port " + PORT + ".");
        } catch (IOException e) {
            System.err.println("Failed to start HTTP Register Server: " + e.getMessage());
        }
    }

    static class RegisterHandler implements HttpHandler {

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equals(exchange.getRequestMethod())) {
                sendResponse(exchange, 405, "{\"code\":405,\"msg\":\"Method Not Allowed\"}");
                return;
            }

            Map<String, String> params = parseQuery(exchange.getRequestURI().getQuery());
            String username = params.get("username");
            String password = params.get("password");

            if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
                sendResponse(exchange, 400, "{\"code\":400,\"msg\":\"Missing username or password\"}");
                return;
            }

            if (username.length() > 13) {
                sendResponse(exchange, 400, "{\"code\":400,\"msg\":\"Username too long (max 13 chars)\"}");
                return;
            }

            if (password.length() < 4) {
                sendResponse(exchange, 400, "{\"code\":400,\"msg\":\"Password too short (min 4 chars)\"}");
                return;
            }

            // gm parameter: not passed -> 0 (normal user), passed -> use the value
            int gmLevel = 0;
            String gmParam = params.get("gm");
            if (gmParam != null && !gmParam.isEmpty()) {
                try {
                    gmLevel = Integer.parseInt(gmParam);
                    if (gmLevel < 0 || gmLevel > 127) {
                        sendResponse(exchange, 400, "{\"code\":400,\"msg\":\"gm must be 0~127\"}");
                        return;
                    }
                } catch (NumberFormatException e) {
                    sendResponse(exchange, 400, "{\"code\":400,\"msg\":\"gm must be a number\"}");
                    return;
                }
            }

            try {
                Connection con = DatabaseConnection.getConnection();

                // Check if account already exists
                try (PreparedStatement ps = con.prepareStatement("SELECT id FROM accounts WHERE name = ?")) {
                    ps.setString(1, username);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        sendResponse(exchange, 409, "{\"code\":409,\"msg\":\"Account already exists\"}");
                        return;
                    }
                }

                String sql = "INSERT INTO accounts (name, password, email, birthday, macs, SessionIP, gm, "
                        + "ACash, mPoints, points, vpoints, dpoints, epoints, nxCredit) "
                        + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                try (PreparedStatement ps = con.prepareStatement(sql)) {
                    ps.setString(1, username);
                    ps.setString(2, LoginCrypto.hexSha1(password));
                    ps.setString(3, "register@http.com");
                    ps.setString(4, "2008-04-07");
                    ps.setString(5, "00-00-00-00-00-00");
                    ps.setString(6, "/127.0.0.1");
                    ps.setInt(7, gmLevel);
                    ps.setInt(8, ONE_HUNDRED_MILLION);
                    ps.setInt(9, ONE_HUNDRED_MILLION);
                    ps.setInt(10, ONE_HUNDRED_MILLION);
                    ps.setInt(11, ONE_HUNDRED_MILLION);
                    ps.setInt(12, ONE_HUNDRED_MILLION);
                    ps.setInt(13, ONE_HUNDRED_MILLION);
                    ps.setString(14, String.valueOf(ONE_HUNDRED_MILLION));
                    ps.executeUpdate();
                }

                sendResponse(exchange, 200, "{\"code\":200,\"msg\":\"Account created successfully\",\"username\":\"" + username + "\",\"gm\":" + gmLevel + "}");
            } catch (SQLException e) {
                System.err.println("HTTP Register Error: " + e.getMessage());
                sendResponse(exchange, 500, "{\"code\":500,\"msg\":\"Database error: " + e.getMessage() + "\"}");
            }
        }

        private Map<String, String> parseQuery(String query) {
            Map<String, String> result = new HashMap<>();
            if (query == null || query.isEmpty()) {
                return result;
            }
            for (String param : query.split("&")) {
                String[] pair = param.split("=", 2);
                if (pair.length == 2) {
                    try {
                        result.put(pair[0], URLDecoder.decode(pair[1], "UTF-8"));
                    } catch (Exception e) {
                        result.put(pair[0], pair[1]);
                    }
                }
            }
            return result;
        }

        private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
            exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
            byte[] bytes = response.getBytes("UTF-8");
            exchange.sendResponseHeaders(statusCode, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }
}
