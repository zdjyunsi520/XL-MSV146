var letters = Array("Lirin最喜欢的动物是什么？", "Yeti金字塔区域的主要颜色是什么？", "请给我带来字母 [REINDEER]", "哪种情人节玫瑰是48级的？", "从1级到2级需要多少经验值？", "谁在FM兑换投票点数？", "这个服务器的所有者是谁（提示：A _ _ _ _ _ _）？", "新手多少级可以成为魔法师？", "Evan在哪个城镇开始？", "哪个城镇是黑翼组织的根据地？", "狂猎者、战斗法师和机械师是什么？", "Mir是什么类型的龙？", "Mir的祖先是谁？", "Aran使用什么武器？", "Mechanic的职业导师是谁？", "三转需要什么物品？", "哪个NPC给你Pokemon初始宠物？", "狂猎者骑乘的动物是什么？", "完成这个职业名称：骑士团？", "潜能等级依次为：稀有、史诗、？", "粉红 Bean顶部雕像的名字是什么？", "哪个城镇离暗黑龙王最近？", "多少级可以去扎昆？");
var answers = Array("WOLF", "YELLOW", "REINDEER", "BLUE", "FIFTEEN", "PHOENIX", "AWESOME", "EIGHT", "HENESYS", "EDELSTEIN", "RESISTANCE", "ONYX", "AFRIEN", "POLEARM", "CHECKY", "DARKCRYSTAL", "GAGA", "JAGUAR", "CYGNUS", "UNIQUE", "ARIEL", "LEAFRE", "FIFTY");

function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("state", "1");

    var eim = em.newInstance("English0");
    eim.setInstanceMap(702090301).resetFully();
    eim.setInstanceMap(702090302).resetFully();
    eim.setInstanceMap(702090303).resetFully();
    var ee = java.lang.Math.floor(java.lang.Math.random() * letters.length);
    eim.setProperty("question", letters[ee]);
    eim.setProperty("answer", answers[ee]);
    eim.startEventTimer(300000); //5 mins lol

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.sendEnglishQuiz(eim.getProperty("question"));
}

function playerDead(eim, player) {
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 702090301: // 1st Stage
	case 702090302: // 2nd Stage
	case 702090303: // 3rd Stage
	    return; // Everything is fine
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(2, 702090400)) {
	em.setProperty("state", "0");
    }
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {			
    // If only 2 players are left, uncompletable
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
	em.setProperty("state", "0");
    } else {
	playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, 702090400);

    em.setProperty("state", "0");
}


function scheduledTimeout(eim) {
    clearPQ(eim);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var exit = eim.getMapFactory().getMap(702090400);
    player.changeMap(exit, exit.getPortal(0));
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
	em.setProperty("state", "0");
    }
}

function clearPQ(eim) {
    // KPQ does nothing special with winners
    eim.disposeIfPlayerBelow(100, 702090400);

    em.setProperty("state", "0");
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}