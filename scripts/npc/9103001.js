/**
	Rolly - Ludibirum Maze PQ
* */

var status = 0;
var minLevel = 50;
var maxLevel = 255;
var minPlayers = 2;
var maxPlayers = 6;
var time = 15;
var open = true;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
		
	if (status == 0) {
	    cm.sendSimple("请和你的队伍一起挑战迷宫任务。如果你决定挑战的话，请让你的队长来通知我！");
	 	
	} else if (status == 1) {
	    var em = cm.getEventManager("LudiMazePQ");
	    if(selection == 0) {//ENTER THE PQ
		if (!hasParty()) {//NO PARTY
		    cm.sendOk("你的队伍至少需要");
		} else if (!isLeader()) {//NOT LEADER
		    cm.sendOk("你的队伍至少需要");
		} else if (!checkPartySize()) {//PARTY SIZE WRONG
		    cm.sendOk("名成员才能挑战这个迷宫 " + minplayers + "你的一名队员未满足等级要求");
		} else if (!checkPartyLevels()) {//WRONG LEVELS
		    cm.sendOk("活动出现错误 " + minlvl + "~" + maxlvl + ".");
		} else if (em == null) {//EVENT ERROR
		    cm.sendOk("迷宫任务目前#r关闭#k。");
		} else if (!open){
		    cm.sendOk("这个迷宫对所有");
		} else {
		    cm.removeFromParty(4001106);
		    em.startInstance(cm.getParty(), cm.getMap());
		}
		cm.dispose();
	    } else if(selection == 1) {
		cm.sendOk("人及以上成员的队伍开放，所有参与者的等级必须在 " + minplayers + "之间。你将有 " + minlvl + "~" + maxlvl + "分钟的时间逃离迷宫。在房间中央，会设置一个传送口将你传送到不同的房间。这些传送口会将你传送到其他房间，你（希望能）找到出口。皮特里会在出口等着你，所以你只需要和他对话，他就会放你出去。打碎房间里的所有箱子，箱子里面的怪物会掉落优惠券。逃离迷宫后，你将根据收集到的优惠券获得经验值奖励。此外，如果队长拥有至少30张优惠券，队伍将获得一份特殊礼物。如果在规定的 " + time + "分钟内你无法逃离迷宫，你将获得0经验值。如果你在迷宫中登出游戏，你将被自动踢出迷宫。即使队伍成员在任务中途离开，剩余成员仍然可以继续完成任务。如果你处于危险状态，无法击杀怪物，你可以避开它们以保全自己。你的战斗精神和智慧将受到考验！祝好运！ " + time +"分钟内你无法逃离迷宫，你将获得0经验值。如果你在迷宫中登出游戏，你将被自动踢出迷宫。即使队伍成员在任务中途离开，剩余成员仍然可以继续完成任务。如果你处于危险状态，无法击杀怪物，你可以避开它们以保全自己。你的战斗精神和智慧将受到考验！祝好运！");
		cm.dispose();
	    }
	}
    }
}
     
function getPartySize(){
    if(cm.getParty() == null){
	return 0;
    }else{
	return (cm.getParty().getMembers().size());
    }
}

function isLeader(){
    return cm.isLeader();
}

function checkPartySize(){
    var size = 0;
    if (cm.getParty() == null){
	size = 0;
    }else{
	size = (cm.getParty().getMembers().size());
    }
    if(size < minplayers || size > maxplayers){
	return false;
    }else{
	return true;
    }
}

function checkPartyLevels(){
    var pass = true;
    var party = cm.getParty().getMembers();
    if(cm.getParty() == null){
	pass = false;
    }else{
	for (var i = 0; i < party.size() && pass; i++) {
	    if ((party.get(i).getLevel() < minlvl) || (party.get(i).getLevel() > maxlvl) || (party.get(i).getMapid() != cm.getMapId())) {
		pass = false;
	    }
	}
    }
    return pass;
}

function hasParty(){
    if(cm.getParty() == null){
	return false;
    }else{
	return true;
    }
}