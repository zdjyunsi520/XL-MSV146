load("nashorn:mozilla_compat.js");
importPackage(java.lang);

var status = 0;
var minLevel = 30;
var maxLevel = 250;
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = false; //open or not
var PQ = 'coockpq';

function start() {
    status = -1;
    action(1, 0, 0);
}
   function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
		cm.dispose();
	return;
    }
    if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (cm.getPlayer().getMapId() != 910002000) { // not in pq lobby
		cm.sendSimple("你想为诺特勒斯的船员们做些美味的菜肴吗？我可以教你。#b\r\n#L0#前往组队任务大厅。")
	} else if (cm.getPlayer().getMapId() == 910002000) { // Normal
		cm.sendSimple("你想为诺特勒斯的船员们做些美味的菜肴吗？我可以教你。\r\n #b#L1# 和唐允一起开始烹饪。#l \r\n #b#L4# 获取唐允的厨师服装。#l \r\n #L3# 听取关于唐允烹饪的说明。#l \r\n #L5# 查看今天剩余的挑战次数。#l");
	} else {
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.saveLocation("MULUNG_TC"); 
	    cm.warp(910002000,0);
        cm.dispose();
	} else if (selection == 1) {
     if (cm.getParty() == null) { // No Party
     	cm.sendSimple("这个地方被满月的神秘气息所环绕，你无法独自进入。如果你想进入，必须让你的队伍队长和我对话。");
     	cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("这由你的队伍队长来决定。");
        cm.dispose();
	} else if (cm.getPQLog(PQ) >= 10){ // Done for today
        cm.sendOk("抱歉。你今天已经超过了最大尝试次数。请明天再来。");
        cm.dispose();
    } else if (!cm.allMembersHere()) { // Check for members
    	cm.sendSimple("抱歉，你所在的队伍不足2名成员。请调整你的队伍，确保至少有2名等级在30以上的成员。准备好了告诉我。");
        cm.dispose();
    } else {

	// Check if all party members are over correct lvl
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;
	var it = party.iterator();

	while (it.hasNext()) {
	    var cPlayer = it.next();
	if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
		levelValid += 1;
	} else {
        cm.sendOk("你的等级需要在 " + minLevel + " 到 " + maxLevel + " 之间才能接受这项挑战！");
        cm.dispose();
		next = false;
    } 
	if (cPlayer.getMapid() == mapId) {
		inMap += 1; 
	}
	}
	if (party.size() > maxPlayers || inMap < minPlayers) {
	    next = false;
	}//check if all party members here i think
	if (next) {
	    var em = cm.getEventManager("CookingPQ");
	if (em == null || open == false) {
		cm.sendSimple("此组队任务目前未开放。");
        cm.dispose();
	} else {
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {
		em.startInstance(cm.getParty(),cm.getMap(), 70);
	} else {
		cm.sendSimple("已有人在尝试此组队任务。请等待他们完成，或换一个频道。");
	}
		cm.removeAll(4001453);
        cm.setPQLog(PQ);
        cm.dispose();
	} 
    } else { // Not correct lvl or members
	    cm.sendYesNo("你的队伍人数不在 " + minPlayers + " 到 " + maxPlayers + "名队员之间。请调整到 " + minPlayers + " 到 " + maxPlayers + "名队员后再来。");
	} 
    }
	} else if (selection == 3) {
        cm.sendOk("#e <Party Quest: Moon Bunny's Rice Cake>#n \r\n A mysterious Moon Bunny that only appears in #b#m910010000##k durning full moons. #b#p1012112##k of #b#m100000200##k is looking for Maplers to find #rMoon Bunny's Rice Cake#k for #b#p1012114##k. If you want to meet the Moon Bunny, plant Primrose Seeds in the designated locations 到 summon forth a full moon. Protect the Moon Bunny from wild animals until all #r10 Rice Cakes#k are made.\r\n #e - Level:#n 10 or above #r (Recommended Level: 10 - 20)#k \r\n #e - Time Limit:#n 10 min \r\n #e - Number of Participants:#n 3 to 6 \r\n #e - Reward:#n #i1003266:# Rice Cake Topper #b \r\n(obtained by giving Tory 100 Rice Cakes)#k \r\n #e - Items:#n #i1002798:# A Rice Cake on Top of My Head #b \r\n(obtained by giving Tory 10 Rice Cakes).");
        cm.dispose();
	} else if (selection == 4) {
		cm.sendOk("哦，天哪！你给我带来了月妙的年糕？我准备了一些礼物表示感谢。你想给我多少个年糕？#b\r\n#L10#月妙年糕 x10 - 我头上的年糕#l\r\n#L11#月妙年糕 x100 - 年糕头饰");
	} else if (selection == 5) {
    var pqtry = 10 - cm.getPQLog(PQ);
    if (pqtry >= 10){
        cm.sendOk("抱歉，你今天已经超过了最大尝试次数。请明天再来。");
        cm.dispose();   
	} else {
        cm.sendOk("此任务每天可做10次。你今天已经做了 " + pqtry + " 次。");
		cm.dispose();
	}
	}
    } else if (status == 2) { 
	if (selection == 10) {
		if (!cm.canHold(1002798,1)) {
		cm.sendOk("请为这顶帽子腾出空间。");
	}else if (cm.haveItem(4001101,10)) {
		cm.gainItem(1002798, 1);
		cm.gainItem(4001101, -10);
		cm.sendOk("非常感谢。我真的会很享受这些年糕的！");
		cm.dispose();
	}else{
        cm.sendOk("请确保你有足够数量的年糕。");
		cm.dispose();
	}  
	} else if (selection == 11) {
	if (!cm.canHold(1003266,1)) {
		cm.sendOk("请为这顶帽子腾出空间。");
	}else if (cm.haveItem(4001101,100)) {
		cm.gainItem(1003266, 1);
		cm.gainItem(4001101, -100);
		cm.sendOk("非常感谢。我真的会很享受这些年糕的！");
		cm.dispose();
	} else{
        cm.sendOk("请确保你有足够数量的年糕。");
		cm.dispose();
	}
	} if (mode == 0) { 
        cm.dispose();
    } 
}
}