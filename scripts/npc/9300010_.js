var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
   if (mode == 1) {
        status++;
    } else {
        status--;
  }
    if (status == 0) {
      if (cm.getLevel() > 199) {
	cm.sendSimple("你还没有证明你的实力。\r\n请先达到#r200级#k再来找我。");
    } else {
        cm.sendOk("你已经转生了！当你想#r转职#k时来找我。");
	cm.safeDispose();
    }
 }
  if (selection == 1337) {
	cm.getPlayer().doReborn();
	cm.getPlayer().levelUp();
        cm.sendOk("等你觉得自己足够强大可以#b转生#k时再来找我吧。");
        cm.dispose();
   } else if (selection == 1336) {
	cm.sendOk("等你觉得自己足够强大可以#b转生#k时再来找我吧。");
        cm.dispose();
   }
}