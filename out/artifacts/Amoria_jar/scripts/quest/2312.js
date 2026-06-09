/* ===========================================================
			Resonance
	NPC Name: 		Head Patrol Officer
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  The Test
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
			qm.sendOk("嗯……你一定是对自己的战斗能力不太有信心。我们会在这里等你的，准备好了再来找我们。");
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我们需要你的帮助，高尚的冒险者。我们的王国目前正面临巨大的威胁，我们急需一位勇敢的冒险者为我们而战，这就是为什么你会来到这里。但请理解，既然我们要将信任寄托于你，我们必须先测试一下你的能力才能坚定地站在你这边。你可以为我们做这件事吗？");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("继续前进，你会看到#b叛变孢子#k，那些背叛了蘑菇王国的孢子。如果你能给它们一些教训，并带回#b50个变异孢子#k，我们将不胜感激。");
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
		qm.sendOk("你教训了那些叛变孢子了吗？");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(11500);
		qm.gainItem(4000499, -50);
		qm.sendOk("太厉害了。很抱歉我曾经怀疑你的能力。请从这场危机中拯救我们的蘑菇王国！");
		qm.dispose();
		}
	}
	