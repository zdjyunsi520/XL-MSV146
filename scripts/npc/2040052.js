/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Wiz the Librarian - Helios Tower <Library>(222020000)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var questid = new Array(3615,3616,3617,3618,3630,3633,3639);
var questitem = new Array(4031235,4031236,4031237,4031238,4031270,4031280,4031298);
var i;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	var counter = 0;
	var books = "";

	for (var i = 0; i < questid.length; i++) {
	    if (cm.getQuestStatus(questid[i]) == 2) {
		counter++;
		books += "\r\n#v"+questitem[i]+"# #b#t"+questitem[i]+"##k";
	    }
	}
	if(counter == 0) {
	    cm.sendOk("#b#h ##k还没有归还过一本故事书。");
	    cm.safeDispose();
	} else {
	    cm.sendNext("让我看看……#b#h ##k总共归还了#b"+counter+"#k本书。归还的书籍清单如下："+books);
	}
    } else if (status == 1) {
	cm.sendNextPrev("多亏了#b#h ##k的大力帮助，图书馆现在安定多了。如果故事再次被打乱，我还要拜托你来修复。");
    } else if (status == 2) {
	cm.dispose();
    }
}