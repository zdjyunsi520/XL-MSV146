// Phantom Warper : To Henesys

function start() {
	cm.sendYesNo("你想去#b射手村#k吗？");
}

function action (m, t, s) {
  if (m > 0) {
	cm.warp(100000000, 0);
  }
  cm.dispose();
}