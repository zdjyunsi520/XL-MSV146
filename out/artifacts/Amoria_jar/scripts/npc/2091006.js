/*
	Mu Lung Training Center entrance
*/
var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("#b（当我匆忙将手从告示上移开时，神秘的气息也随之消散了。）");
	cm.safeDispose();
	return;
    }

    if (status == 0) {
	cm.sendSimple("#e<告示>#n \r\n任何有胆量挑战武陵修炼塔的人，请立即前往修炼塔。——武公——\r\n#b#L0#挑战武陵修炼塔#l\r\n#b#L1#详细阅读告示。#l")
    } else if (status == 1) {
	sel = selection;
	if (sel == 1) {
	    cm.sendNext("#e<告示：挑战书！>#n\r\n我是武公，武陵修炼塔的合法主人。很久以前，我来到武陵希望能成为一代宗师，如今我已经达到了知晓所有武术的境界。武陵修炼塔的前主人是一个厌恶战斗的弱者。因此，从今往后，我将接管武陵修炼塔。\r\n武陵修炼塔理应由武陵最强之人拥有。\r\n如果你想向最强者学习，那就来挑战吧！我不在乎你是否想直接面对我。我会确保将伟大铭刻在你身体的每一个角落。");
	} else {
	    cm.sendYesNo("#b（当我将手放在告示上时，一股神秘的力量开始从头到脚包围着我。）#k\r\n\r\n你想被传送到武陵修炼塔吗？");
	}
    } else if (status == 2) {
	if (sel == 1) {
	    cm.sendNextPrev("附注：你一个人来也无所谓，但如果你真的是我认为的那种胆小鬼，你也可以带上你的朋友一起来。");
	} else {
	    cm.saveLocation("MULUNG_TC");
	    cm.warp(925020000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	cm.dispose();
    }
}