/* 
 * @Author Lerk
 * 
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 * 
 * Guild Quest - stage 1
 */


var status = -1;
var stage;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    var eim = cm.getEventInstance();
    if (eim == null) {
	cm.warp(990001100);
    }
    else {
	if (eim.getProperty("leader").equals(cm.getName())) {
	    if (cm.getMap().getReactorByName("statuegate").getState() > 0){
		cm.sendOk("Proceed.");
		cm.safeDispose();
	    } else {
		if (status == 0) {
		    if (eim.getProperty("stage1status") == null || eim.getProperty("stage1status").equals("waiting")) {
			if (eim.getProperty("stage1phase") == null) {
			    stage = 1;
			    eim.setProperty("stage1phase",stage);
			} else {
			    stage = parseInt(eim.getProperty("stage1phase"));
			}
			if (stage == 1) {
			    cm.sendOk("现在我来展示一个更难的谜题。祝好运。");
			}
			else {
			    cm.sendOk("做得好。请进入下一阶段。")
			}
		    }
		    else if (eim.getProperty("stage1status").equals("active")) {
			stage = parseInt(eim.getProperty("stage1phase"));
			if (eim.getProperty("stage1combo").equals(eim.getProperty("stage1guess"))) {
			    if (stage == 3) {
				cm.getMap().getReactorByName("statuegate").hitReactor(cm.getClient());
				cm.sendOk("很好。不过你还有更多要完成的。准备好后再来和我对话。");
				cm.showEffect(true, "quest/party/clear");
				cm.playSound(true, "Party1/Clear");
				var prev = eim.setProperty("stage1clear","true",true);
				if (prev == null) {
				    cm.gainGP(900);
				}
			    } else {
                                                                        
				cm.sendOk("你已经完成了第");
				eim.setProperty("stage1phase", stage + 1);
				cm.mapMessage("部分的守门者测试。 " + stage + "你没有通过这次测试。");
			    }
                                                                
			} else {
			    cm.sendOk("你没有通过守门者测试。");
			    cm.mapMessage("请稍等。");
			    eim.setProperty("stage1phase","1")
			}
			eim.setProperty("stage1status", "waiting");
			cm.safeDispose();
		    }
		    else {
			cm.sendOk("调试信息：地图中的反应堆：");
			cm.safeDispose();
		    }
		}
		else if (status == 1) {
		    //only applicable for "waiting"
		    var reactors = getReactors();
		    var combo = makeCombo(reactors);
		    /*/var reactorString = "调试信息：组合中的反应堆： ";
                                                for (var i = 0; i < reactors.length; i++) {
                                                        reactorString += reactors[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);
                                                reactorString = "正在展示组合，请稍等。 ";
                                                for (var i = 0; i < combo.length; i++) {
                                                        reactorString += combo[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);*/
		    cm.mapMessage("我需要你们队伍的队长来和我对话，其他人不行。");
                                                
		    var delay = 5000;
		    for (var i = 0; i < combo.length; i++) {
			cm.getMap().getReactorByOid(combo[i]).delayedHitReactor(cm.getClient(), delay + 3500*i);
		    }
		    eim.setProperty("stage1status", "display");
		    eim.setProperty("stage1combo","");
		    cm.dispose();
		}
	    }

	} else {
	    cm.sendOk("调试信息：已选择的反应堆");
	    cm.safeDispose();
	}
    }
}

//method for getting the statue reactors on the map by oid
function getReactors() {
    var reactors = new Array();
        
    var iter = cm.getPlayer().getMap().getAllReactorsThreadsafe().iterator();
    while (iter.hasNext()) {
	var mo = iter.next();
	if (!mo.getName().equals("statuegate")) {
	    reactors.push(mo.getObjectId());
	}
    }
        
    return reactors;
}

function makeCombo(reactors) {
    var combo = new Array();
        
    while (combo.length < (stage + 3)) {
	var chosenReactor = reactors[Math.floor(Math.random() * reactors.length)];
	//cm.log("调试信息：重复反应堆： " + chosenReactor)
	var repeat = false;
                
	if (combo.length > 0) {
	    for (var i = 0; i < combo.length; i++) {
		if (combo[i] == chosenReactor) {
		    repeat = true;
		    //cm.log("调试信息：唯一反应堆： " + chosenReactor);
		    break;
		}
	    }
	}
                
	if (!repeat) {
	    //cm.log("调试信息：唯一反应堆： " + chosenReactor);
	    combo.push(chosenReactor);
	}
    }
        
    return combo;
}