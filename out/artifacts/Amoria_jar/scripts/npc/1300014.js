/* ===========================================================
			Resonance
	NPC Name: 		SELF
	Map(s): 		Mushroom Castle: Deep inside Mushroom Forest(106020300)
	Description: 	Upon reaching the magic barrier.
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if (mode == 1)
            status++;
        else
            status--;
		}
	if(status == 0){
		if(cm.isQuestActive(2314))
			cm.PlayerToNpc("这是一个强大的魔法结界，将#b蘑菇孢子#k转化为了一种强大的魔法形态。这无法用蛮力突破。我最好将此事报告给#b内政大臣#k。");
		else if(cm.isQuestActive(2322))
			cm.PlayerToNpc("巨大的城堡墙壁表面缠绕着令人胆寒的荆棘藤蔓。我到底该怎么进入城堡呢？算了，我还是先向#b#p1300003##k报告吧。");
		else {
			cm.PlayerToNpc("我想我可以用#t2430014#来打破结界。");
			cm.dispose();
		}
	}if(status == 1){
		if(cm.isQuestActive(2314)){
			cm.ShowWZEffect("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon1");
			cm.forceCompleteQuest(2314);
			cm.dispose();
		} else {
			cm.playerMessage("请回到内政大臣那里报告结果。");
		}
	}
}
			