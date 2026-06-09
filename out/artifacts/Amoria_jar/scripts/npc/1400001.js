function start() {
	cm.sendNext("你好，我是#b塞尔日#k！\r\n我出售#r手杖#k。你需要一把吗？");
}

function action (m, t, s) {
  if (m > 0 ) {
	cm.openShop(313);
  }
  cm.dispose();
}