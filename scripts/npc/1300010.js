/* ===========================================================
			Resonance
	NPC Name: 		Killer Mushroom Spore
	Map(s): 		Mushroom Castle: Deep inside Mushroom Forest(106020300)
	Description: 	Breaking the Barrier
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
		if(status == 0 && mode == 0){
			cm.sendNext("你已取消使用该道具。");
			cm.gainItem(2430014, 1);
			cm.dispose();
		}
		if (mode == 1)
            status++;
        else
            status--;
		}
	if(status == 0){
		cm.sendYesNo("你要使用#b毒蘑菇孢子#k吗？....#e#r* 注意事项#n..请勿直接涂抹于身体！..如不慎吞食，请立即就医！");
	}if(status == 1)
		cm.PlayerToNpc("太棒了，结界被打破了！！！");
	if(status == 2){
		cm.playerMessage("蘑菇森林的结界已被移除并突破。");
		cm.dispose();
	}
}
			