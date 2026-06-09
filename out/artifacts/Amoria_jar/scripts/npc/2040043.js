/*
	Blue Balloon - LudiPQ 8th stage NPC
*/

var status;
var partyLdr;
var chatState;
var party;
var preamble;

var stage8question = Array("9*9+100-143=?", "3*8+10=?");
var stage8answer = Array(Array(0, 0, 1, 0, 0, 0, 0, 1, 0), Array(0, 0, 1, 1, 0, 0, 0, 0, 0));

function start() {
    status = -1;
    preamble = null;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
	cm.dispose();
    } else {
	if (mode == 0 && status == 0) {
	    cm.dispose();
	    return;
	}
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	boxStage(cm);
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("8stageclear","true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
    cm.givePartyExp(5040, eim.getPlayers());
    // stage 9 does not have a door, might be cause of DC error
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
    var debug = false;
    var eim = cm.getEventInstance();
    var nthtext = "eighth";
    var nthobj = "boxes";
    var nthverb = "stand";
    var nthpos = "站得太靠近边缘了";
    var curcombo = stage8answer;
    var currect = cm.getMap().getAreas();
    var objset = [0,0,0,0,0,0,0,0,0];

    if (cm.isLeader()) { // leader
	if (status == 0) {
	    party = eim.getPlayers();
	    preamble = eim.getProperty("leader" + nthtext + "preamble");
	    if (preamble == null) {
		cm.sendNext("你好。欢迎来到第5阶段。我旁边有九个箱子。你所要做的是让2个人或2个物品站在上面，然后队长点击我看看是否正确。祝你好运！");
		eim.setProperty("leader" + nthtext + "preamble","done");
		var as = Math.floor(Math.random() * stage8answer.length);
		eim.setProperty("stage" + nthtext + "combo", as);
		cm.getMap().startSimpleMapEffect(stage8question[as], 5120018);
		cm.dispose();
	    } else { // otherwise, check for stage completed
		var complete = eim.getProperty("8stageclear");
		if (complete != null) {
		    var mapClear = "8stageclear";
		    eim.setProperty(mapClear,"true"); // Just to be sure
		    cm.sendNext("请尽快前往下一阶段，传送门已经开启了！");
		} else {
		    var totplayers = 0;
		    for (i = 0; i < objset.length; i++) {
			var present = cm.getMap().getNumPlayersItemsInArea(i);
			if (present != 0) {
			    objset[i] = objset[i] + 1;
			    totplayers = totplayers + 1;
			}
		    }
		    if (totplayers == 2 || debug) {
			var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
			var testcombo = true;
			for (i = 0; i < objset.length; i++) {
			    if (combo[i] != objset[i]){
				testcombo = false;
			    }
			}
			if (testcombo || debug) {
			    clear(8,eim,cm);
			    if (cm.getEventInstance().getProperty("s8start") != null) {
				var starts4Time = cm.getEventInstance().getProperty("s8start");
				var nowTime = new Date().getTime();
				if((nowTime - starts4Time) < 90000)
				    cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
			    }
			    cm.dispose();
			} else {
			    failstage(eim,cm);
			    cm.dispose();
			}
		    } else {
			if (debug) {
			    var outstring = "箱子上有："
			    for (i = 0; i < objset.length; i++) {
				outstring += "\r\n" + (i+1).toString() + ". " + objset[i].toString();
			    }
			    cm.sendNext(outstring);
			    var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
			} else {
			    cm.sendNext("看来你还没有找到那2个 " + nthobj + " 呢。请想想不同的 " + nthobj + " 组合。只允许2个 " + nthverb + " 站在 " + nthobj + " 上，如果你 " + nthpos + " 可能不算作答案，所以请记住这一点。继续加油！");
			    cm.dispose();
			}
		    }
		}
	    }
	} else {
	    cm.dispose();
	}
    } else { // not leader
	if (status == 0) {
	    var complete = eim.getProperty("8stageclear");
	    if (complete != null) {
		cm.sendNext("请尽快前往下一阶段，传送门已经开启了！");
		cm.dispose();
	    } else {
		cm.sendNext("请让队长来和我说话。");
		cm.dispose();
	    }
	} else {
	    var complete = eim.getProperty("8stageclear");
	    if (complete != null) {
		cm.sendNext("请尽快前往下一阶段，传送门已经开启了！");
		cm.dispose();
	    }
	    cm.dispose();
	}
    }
}