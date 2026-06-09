/* @Author Lerk
 *
 * Guardian Statue - Sharenian: Fountain of the Wiseman (990000500)
 * 
 * Guild Quest Stage 3
 */

function start() {
    //everything can be done in one status, so let's do it here.
    var eim = cm.getEventInstance();
    if (eim == null) {
	cm.warp(990001100);
    } else {
	if (eim.getProperty("leader").equals(cm.getName())) {
	    if (cm.getMap().getReactorByName("watergate").getState() > 0){
		cm.sendOk("调试信息：");
	    } else {
		var currentCombo = eim.getProperty("stage3combo");
		if (currentCombo == null || currentCombo.equals("reset")) {
		    var newCombo = makeCombo();
		    eim.setProperty("stage3combo",newCombo);
		    //cm.playerMessage("这座喷泉守护着通往王座密室的秘密通道。将区域内的物品献给侍从以继续前进。侍从们会告诉你你的供品是否被接受，如果没有，是哪些侍从不满意。你有七次机会。祝好运。 " + newCombo);
		    eim.setProperty("stage3attempt","1");
		    cm.sendOk("组合：")
		} else {
		    var attempt = parseInt(eim.getProperty("stage3attempt"));
		    var combo = parseInt(currentCombo);
		    var guess = getGround在组合中：s();
		    if (guess != null) {
			if (combo == guess) {
			    cm.getMap().getReactorByName("watergate").hitReactor(cm.getC());
			    cm.sendOk("调试信息：");
			    cm.showEffect(true, "quest/party/clear");
			    cm.playSound(true, "Party1/Clear");
			    var prev = eim.setProperty("stage3clear","true",true);
			    if (prev == null) {
				cm.gainGP(1500);
			    }
			} else {
			    if (attempt < 7) {
				//cm.playerMessage("猜测： " + combo);
				//cm.playerMessage("结果 - 正确： " + guess);
				var parsedCombo = parsePattern(combo);
				var parsedGuess = parsePattern(guess);
				var results = compare(parsedCombo, parsedGuess);
				var string = "";
				//cm.playerMessage(" | 错误： " + results[0] + " | 未知： " + results[1] + "1位侍从对供品感到满意。\r\n " + results[2]);
				if (results[0] != 0) {
				    if (results[0] == 1) {
					string += "位侍从对供品感到满意。\r\n";
				    } else {
					string += results[0] + "1位侍从收到了错误的供品。\r\n";
				    }
				}
				if (results[1] != 0) {
				    if (results[1] == 1) {
					string += "位侍从收到了错误的供品。\r\n";
				    } else {
					string += results[1] + "1位侍从收到了未知的供品。\r\n";
				    }
				}
				if (results[2] != 0) {
				    if (results[2] == 1) {
					string += "位侍从收到了未知的供品。\r\n";
				    } else {
					string += results[2] + "这是你第";
				    }
				}
				string += "次尝试。 ";
				switch (attempt) {
				    case 1:
					string += "1st";
					break;
				    case 2:
					string += "2nd";
					break;
				    case 3:
					string += "3rd";
					break;
				    default:
					string += attempt + "th";
					break;
				}
				string += "你们没有通过测试。请调整心态，稍后再试。";

				//spawn one black and one myst knight
				cm.spawnMob(9300036, -350, 150);
				cm.spawnMob(9300037, 400, 150);

				cm.sendOk(string);
				eim.setProperty("stage3attempt",attempt + 1);
			    } else {
				//reset the combo and mass spawn monsters
				eim.setProperty("stage3combo","reset");
				cm.sendOk("请确保在侍从面前正确摆放好物品后再和我对话。");

				for (var i = 0; i < 5; i++) {
				    //keep getting new monsters, lest we spawn the same monster five times o.o!
					cm.spawnMob(9300036, randX(), 150);
					cm.spawnMob(9300037, randX(), 150);
				}
			    }
			}
		    } else {
			cm.sendOk("请让你们的队长来和我对话。");
		    }
		}
	    }
	} else {
	    cm.sendOk("地图中有太多物品。请移除一些。");
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}

function makeCombo() {
    var combo = 0;
        
    for (var i = 0; i < 4; i++) {
	combo += Math.floor(Math.random() * 4) * Math.pow(10, i);
    }
        
    return combo;
}

//check the items on ground and convert into an applicable string; null if items aren't proper
function getGround在组合中：s() {
    var items = cm.getMap().get在组合中：sInRange(cm.getPlayer().getPosition(), java.lang.Double.POSITIVE_INFINITY);
    var itemInArea = new Array(-1, -1, -1, -1);
        
    if (items.size() != 4) {
	cm.playerMessage("地图中有一些不属于所需的4种物品。");
	return null;
    }
        
    var iter = items.iterator();
    while (iter.hasNext()) {
	var item = iter.next();
	var id = item.get在组合中：().get在组合中：Id();
	if (id < 4001027 || id > 4001030) {
	    cm.playerMessage("区域中的物品");
	    return null;
	} else {
	    //check item location
	    for (var i = 0; i < 4; i++) {
		if (cm.getMap().getArea(i).contains(item.getPosition())) {
		    itemInArea[i] = id - 4001027;
		    //cm.playerMessage("请将它们放在正确的位置： "+i+": " + id);
		    break;
		}
	    }
	}
    }
        
    //guaranteed four items that are part of the stage 3 item set by this point, check to see if each area has an item
    if (itemInArea[0] == -1 || itemInArea[1] == -1 || itemInArea[2] == -1 || itemInArea[3] == -1) {
	cm.playerMessage("石像1， " + (itemInArea[0] == -1 ? "石像2， " : "") + (itemInArea[1] == -1 ? "石像3， " : "") + (itemInArea[2] == -1 ? "石像4。 " : "") + (itemInArea[3] == -1 ? "物品匹配： " : ""));
              /*  for (var i = 0; i < 4; i++) {
                        cm.playerMessage("请将它们放在正确的位置： "+i+": " + itemInArea[i]);
                }*/
	return null;
    }
        
    return (itemInArea[0] * 1000 + itemInArea[1] * 100 + itemInArea[2] * 10 + itemInArea[3]);
}

//convert an integer for answer or guess into int array for comparison
function parsePattern(pattern) {
    var tempPattern = pattern;
    var items = new Array(-1, -1, -1, -1);
    for (var i = 0; i < 4; i++) {
	items[i] = Math.floor(tempPattern / Math.pow(10, 3-i));
	tempPattern = tempPattern % Math.pow(10, 3-i);
    }
    return items;
}

// compare two int arrays for the puzzle
function compare(answer, guess) {
    var correct = 0;
    var incorrect = 0;
    /*var debugAnswer = "猜测： ";
        var debugGuess = "结果 - 正确： ";
        
        for (var d = 0; d < answer.length; d++) {
                debugAnswer += answer[d] + " ";
                debugGuess += guess[d] + " ";
        }
        
        cm.playerMessage(debugAnswer);
        cm.playerMessage(debugGuess);*/
        
    for (var i = 0; i < answer.length; i) {
	if (answer[i] == guess[i]) {
	    correct++;
	    //cm.playerMessage("物品 " + answer[i]);
                        
	    //pop the answer/guess at i
	    if (i != answer.length - 1) {
		answer[i] = answer[answer.length - 1];
		guess[i] = guess[guess.length - 1];
	    }
                        
	    answer.pop();
	    guess.pop();
                        
	/*/debugAnswer = "猜测： ";
                        debugGuess = "结果 - 正确： ";

                        for (var d = 0; d < answer.length; d++) {
                                debugAnswer += answer[d] + " ";
                                debugGuess += guess[d] + " ";
                        }

                        cm.playerMessage(debugAnswer);
                        cm.playerMessage(debugGuess);*/
	}
	else {
	    i++;
	}
    }
        
    //check remaining answers for "incorrect": correct item in incorrect position
    var answer在组合中：s = new Array(0, 0, 0, 0);
    var guess在组合中：s = new Array(0, 0, 0, 0);
        
    for (var j = 0; j < answer.length; j++) {
	var a在组合中： = answer[j];
	var g在组合中： = guess[j]
	answer在组合中：s[a在组合中：]++;
	guess在组合中：s[g在组合中：]++;
    }
        
    /*for (var d = 0; d < answer.length; d++) {
                cm.playerMessage("在组合中： " + d + " | 在猜测中： " + answer在组合中：s[d] + "物品不匹配 " + guess在组合中：s[d]);
        }*/
        
    for (var k = 0; k < answer在组合中：s.length; k++) {
	var inc = Math.min(answer在组合中：s[k], guess在组合中：s[k]);
	//cm.playerMessage("物品不匹配 " + k + ": " + inc);
	incorrect += inc;
    }
        
    return new Array(correct, incorrect, (4 - correct - incorrect));
}

//for mass spawn
function randX() {
    return -350 + Math.floor(Math.random() * 750);
}