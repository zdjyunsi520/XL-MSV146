var letters0 = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var answers0 = Array("APPLE", "BEAR", "CHEESE", "DOUGHNUT", "EARTH", "FLY", "GOLD", "HALLOWEEN", "ICE", "JEWELRY", "KING", "LOVE", "MOUNTAIN", "NOTE", "ORANGE", "POLICE", "QUIZ", "ROSE", "SNAKE", "TEA", "UFO", "VIP", "WOOD", "XMAS", "YOUNG", "ZZZ");
var letters1 = Array(2010000, 2010001, 2010002, 2010003, 2010004, 2010005, 2010009, 2020000, 2020001, 2020002, 2020003, 2020004, 2020005, 2020007, 2020008, 2020009, 2020010, 2020012, 2020013, 2020014, 2020015, 2020016);
var answers1 = Array("APPLE", "MEAT", "EGG", "ORANGE", "LEMON", "HONEY", "GREENAPPLE", "SALAD", "FRIEDCHICKEN", "CAKE", "PIZZA", "HAMBURGER", "HOTDOG", "DRIEDSQUID", "FATSAUSAGE", "ORANGEJUICE", "GRAPEJUICE", "MELTINGCHEESE", "REINDEERMILK", "SUNRISEDEW", "SUNSETDEW", "CHEESECAKE");
var letters2 = Array("Lirin最喜欢的动物是什么？", "Yeti金字塔区域的主要颜色是什么？", "请给我带来字母 [REINDEER]", "哪种情人节玫瑰是48级的？", "从1级到2级需要多少经验值？", "谁在FM兑换投票点数？", "这个服务器的所有者是谁（提示：A _ _ _ _ _ _）？", "新手多少级可以成为魔法师？", "Evan在哪个城镇开始？", "哪个城镇是黑翼组织的根据地？", "狂猎者、战斗法师和机械师是什么？", "Mir是什么类型的龙？", "Mir的祖先是谁？", "Aran使用什么武器？", "Mechanic的职业导师是谁？", "三转需要什么物品？", "哪个NPC给你Pokemon初始宠物？", "狂猎者骑乘的动物是什么？", "完成这个职业名称：骑士团？", "潜能等级依次为：稀有、史诗、？", "粉红 Bean顶部雕像的名字是什么？", "哪个城镇离暗黑龙王最近？", "多少级可以去扎昆？");
var answers2 = Array("WOLF", "YELLOW", "REINDEER", "BLUE", "FIFTEEN", "PHOENIX", "AWESOME", "EIGHT", "HENESYS", "EDELSTEIN", "RESISTANCE", "ONYX", "AFRIEN", "POLEARM", "CHECKY", "DARKCRYSTAL", "GAGA", "JAGUAR", "CYGNUS", "UNIQUE", "ARIEL", "LEAFRE", "FIFTY");

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(mapid) {

    var eim = em.newInstance("English" + mapid);
    eim.setInstanceMap(702090101 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090102 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090103 + (parseInt(mapid) * 100)).resetFully();
    
	eim.setProperty("mode", mapid);
	if (eim.getProperty("mode").equals("0")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters0.length);
		eim.setProperty("question", letters0[ee]);
		eim.setProperty("answer", answers0[ee]);
	} else if (eim.getProperty("mode").equals("1")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters1.length);
		eim.setProperty("question", letters1[ee]);
		eim.setProperty("answer", answers1[ee]);
	} else if (eim.getProperty("mode").equals("2")) {
		var ee = java.lang.Math.floor(java.lang.Math.random() * letters2.length);
		eim.setProperty("question", letters2[ee]);
		eim.setProperty("answer", answers2[ee]);
	}
    eim.startEventTimer(300000); //5 mins lol

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	if (eim.getProperty("mode").equals("0")) {
		player.sendEnglishQuiz("字母 [" + eim.getProperty("question") + "] 看起来像什么？");
	} else if (eim.getProperty("mode").equals("1")) {
		player.sendEnglishQuiz("请给我带来 #i" + parseInt(eim.getProperty("question")) + "# 的所有字母。");
	} else if (eim.getProperty("mode").equals("2")) {
		player.sendEnglishQuiz(eim.getProperty("question"));
	}
}

function playerDead(eim, player) {
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 702090101: // 1st Stage
	case 702090102: // 2nd Stage
	case 702090103: // 3rd Stage
	case 702090201:
	case 702090202:
	case 702090203:
	case 702090301:
	case 702090302:
		case 702090303:
	    return; // Everything is fine
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {			
    // If only 2 players are left, uncompletable
    if (!eim.disposeIfPlayerBelow(2, 702090400)) {
	playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, 702090400);
}


function scheduledTimeout(eim) {
    clearPQ(eim);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var exit = eim.getMapFactory().getMap(702090400);
    player.changeMap(exit, exit.getPortal(0));
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function clearPQ(eim) {
    // KPQ does nothing special with winners
    eim.disposeIfPlayerBelow(100, 702090400);
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}