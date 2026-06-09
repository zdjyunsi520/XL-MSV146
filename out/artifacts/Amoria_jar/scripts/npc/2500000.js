/* Grand Athenaeum
    Skylark Rita
    Made by Daenerys
*/
//todo: handle the selections
load("nashorn:mozilla_compat.js");
importPackage(Packages.tools.packet);

var status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
	} else {
		status++;
    if (status == 0) {
	    cm.sendSimple("你好！你想要哪个捐赠奖励？你有#r0#k积分\r\n#b#L0#满属性装备 - 5美元\r\n#b#L1#5件满属性装备 - 15美元\r\n#b#L2#捐赠者指令 - 10美元#l\r\n#b#L3#超级捐赠者指令 - 30美元#l\r\n#b#L5#200000 NX - 2美元#l\r\n#b#L6#改名 - 10美元#l");
    } else if (status == 1) {
		if (mode != 0) {
		cm.dispose();
		}
	if (selection == 0) {		
	    cm.sendNext("你需要#r5#k积分才能获得此捐赠奖励！");
		cm.dispose();
	} else if (selection == 1) {	
		//cm.sendNext("你需要#r15#k积分才能获得此捐赠奖励！");
                for(i=0;i<1;i++) {
                cm.getPlayer().getClient().getSession().write(CWvsContext.sendWelcomeBack(cm.getPlayer()));
                }
		cm.dispose();
	} else if (selection == 2) {	
		cm.sendNext("你需要#r10#k积分才能获得此捐赠奖励！");
		cm.dispose();
	} else if (selection == 3) {	
		cm.sendNext("你需要#r30#k积分才能获得此捐赠奖励！");
		cm.dispose();
	} else if (selection == 5) {	
		cm.sendNext("你需要#r2#k积分才能获得此捐赠奖励！");
		cm.dispose();
	} else if (selection == 6) {	
		cm.sendNext("你需要#r10#k积分才能获得此捐赠奖励！");
		cm.dispose();
   }
  }
 }
}