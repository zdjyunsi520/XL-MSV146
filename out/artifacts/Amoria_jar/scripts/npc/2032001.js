/* Spiruna
	Orbis : Old Man's House (200050001)
	
	Refining NPC: 
	* Dark Crystal - Half Price compared to Vogen, but must complete quest 
*/

var status = 0;
var selectedItem = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	cm.dispose();
    if (status == 0 && mode == 1) {
	if (cm.getQuestStatus(3034) == 2) {
	    var selStr = "你帮了我很大的忙……如果你有任何暗黑水晶矿石，我可以只收#b50万金币#k一颗帮你精炼。"
				
	    cm.sendYesNo(selStr);
	} else {
	    cm.sendOk("走开，我在冥想。");
	    cm.dispose();
	}
    } else if (status == 1 && mode == 1) {
	cm.sendGetNumber("好的，你要我做多少颗？",1,1,100);
    } else if (status == 2 && mode == 1) {
	var complete = false;
	var itemID = 4005004;
	var matID = 4004004;
	var matQty = 10;
	var cost = 500000;
		
	if (cm.getMeso() < cost * selection) {
	    cm.sendOk("抱歉，我可不会免费做。")
	    cm.dispose();
	    return;
	} else {
	    complete = cm.haveItem(matID, matQty * selection);
	}
			
	if (!complete)
	    cm.sendOk("我需要那种矿石来精炼水晶。没有例外。");
	else {
	    cm.gainItem(matID, -matQty * selection);
	    cm.gainMeso(-cost * selection);
	    cm.gainItem(itemID, selection);
	    cm.sendOk("好好使用它。");
	}
	cm.dispose();
    }
}