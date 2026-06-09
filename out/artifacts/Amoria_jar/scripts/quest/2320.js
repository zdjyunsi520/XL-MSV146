/* ===========================================================
			Resonance
	NPC Name: 		Scarrs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  A Friendship with Bruce
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/


var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("我想让你亲自把这个好消息告诉#b布鲁斯#k，但如果你忙的话我也理解。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我还有一个请求。你想听听吗？");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4032389, 1);
		qm.sendOk("说实话，这些#b杀手蘑菇孢子#k并不完全是我自己的成果。你记得在#b射手村#k的#b布鲁斯#k吗？我和他从小就是朋友，#b杀手蘑菇孢子#k是在他与分享了研究成果后才完成的。这一切都要归功于他，所以我想让你替我把这个交给他。");
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
		qm.sendOk("哦！你是代表#b斯卡斯#k来的？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 8800 经验");
	if (status == 1){
		qm.gainExp(8800);
		qm.gainItem(4032389, -1);
		qm.sendOk("啊，这就是我过去一直在研究的#b杀手蘑菇孢子#k。我很难收集到材料，所以只停留在理论阶段，但他居然完成了，还有样品可以展示。请告诉他我赞赏他的出色工作。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	