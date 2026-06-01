function enter(pi) {
    if (pi.getQuestStatus(20021) == 0) {
	pi.playerSummonHint(true);
	pi.summonMsg("欢迎来到枫之谷世界！我的名字是库，我将成为你的向导！我会在这里回答你的问题并引导你，直到你达到10级成为一名见习骑士。如果你有任何问题，双击我！");
//	pi.forceCompleteQuest(20100);
	pi.forceCompleteQuest(20021);
    }
}