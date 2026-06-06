/*
	NPC Name: 		Cygnus
	Description: 		Quest - Encounter with the Young Queen
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("你好，首席骑士。目前枫之谷世界正处于巨大的危险之中。我们需要更强大的军队来保护这里免受黑魔法师的侵害。为了建立更强大的军队，我决定与冒险者首领们结盟。我们用联合力量创造了终极冒险者。");
    } else if (status == 1) {
	qm.sendYesNo("终极冒险者从50级开始，天生就拥有非常特殊的技能。你想重生为终极冒险者吗？");
    } else if (status == 2) {
	if (!qm.getClient().canMakeCharacter(qm.getPlayer().getWorld())) {
	    qm.sendOk("没有角色栏的话无法创建角色。");
	} else {
	    qm.sendUltimateExplorer();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}