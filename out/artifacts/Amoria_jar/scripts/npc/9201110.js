/* @Author SharpAceX
*/

function action(mode,type,selection) {
	switch(cm.getPlayer().getMapId()) {
		case 610030500:
        		cm.sendOk("曾经被称为"影子王子"，宗师Ryo拥有短匕首和长链爪的至高速度和力量。作为首领猎人团的兼职成员，他以无与伦比的融入夜色的能力而闻名。他的传说在与深红色巴洛格的战斗中达到巅峰，他的移动如此之快，巴洛格的攻击只打到了空气。Ryo偶尔也会为那些比自己不幸的人进行"取回"任务。");
			break;
		case 610030000:
			cm.sendOk("干得好。");
			break;
		case 610030530:
			if (cm.isAllReactorState(6108004, 1) && !cm.haveItem(4001256, 1)) {
				cm.gainItem(4001256,1);
				cm.sendOk("现在去吧，飞侠同伴，用你的机动技能摧毁所有监视之眼。完成后向我报告。");
			} else {
				cm.sendOk("现在去吧，飞侠同伴，用你的机动技能摧毁所有监视之眼。完成后向我报告。");
			}
			break;
	}
	cm.dispose();
}