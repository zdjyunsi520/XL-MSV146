/* ===========================================================
			Resonance
	NPC Name: 		Scarrs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Killer Mushroom Spores(1)
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("突破屏障需要毒蘑菇盖。改变主意了来找我。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("啊！如果我没记错的话，我在小时候的一本书上见过#b杀手蘑菇孢子#k。现在我想起来了……它是用毒蘑菇中强力毒素的提取物制成的，这意味着你需要一些毒蘑菇盖。如果你能给我弄来那些，我想我就能制作它。");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("请打败#b毒蘑菇#k并带回#b100个毒蘑菇盖#k。");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("你收集到我要求的100个毒蘑菇盖了吗？");
	if (status == 1){
		qm.gainExp(13500);
		qm.gainItem(4000500, -100);
		qm.sendOk("我惊叹你竟然能收集到这100个毒蘑菇盖，这被认为是一项困难的壮举。我想我可以用这些制作出#b杀手蘑菇孢子#k。");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	