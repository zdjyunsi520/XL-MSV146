var status = -1;

function start(mode, type, selection) {
	qm.sendNext("我终于承认你是我的主人了。请收下这个技能。这是英雄之回响。");
	qm.teachSkill(20001005,1,1);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.sendNext("我终于承认你是我的主人了。请收下这个技能。这是英雄之回响。");
	qm.teachSkill(20001005,1,1);
	qm.forceCompleteQuest();
	qm.dispose();
}