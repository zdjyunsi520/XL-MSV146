/**
 * @author: Eric
 * @rev: 1.1 - Lithium Support for Maple Ascension
 * @desc: Auto-Tip for v1.17.2
*/

var setupTask;
var serverName = "Development"

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis())
        nextTime += 900 * 1000; //420 * 1000 = 7minutes
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array("欢迎来到 " + serverName + "，祝您游戏愉快！", "你知道我们的倍率是 5倍经验 3倍金币 2倍掉落吗？", "你知道 " + serverName + " 支持 Windows 8 (专业版，非8.1) 吗？我们支持！", "你是大神吗？会说1337吗？试试命令 @leet！", "查看命令列表，请输入 @commands！", "在 " + serverName + " 的玩家对战中与朋友战斗吧！输入 @pvp", "每6小时投票一次可获得货币和NX奖励！", "请勿使用我们提供以外的任何 .WZ 编辑器。", "别忘了使用 @save 来避免数据回档，因为我们无法强制保存！", "禁止使用任何外挂程序，否则后果自负！", "封包编辑器会被检测，不要尝试。", "使用非官方客户端会导致封号，请使用我们提供的客户端。", "我们客户端目前支持：UFJ、Tubi、无呼吸、无伤害上限、可掉落NX！", "可通过Paypal捐款，捐款者将获得游戏内特殊奖励！");
    em.getChannelServer().yellowWorldMessage("[" + serverName + "] " + Message[Math.floor(Math.random() * Message.length)]);
}
