var status = 0;
var mapid = 90000002; // map id to warp to

function start() {
 status = -1;
 action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1)
	 status++;
	  else 
	 status--;
	   if (status == 0) {
	     cm.sendNext("如果你有幸一睹他们的风采...你应该表示尊重而不是蔑视。\r\n\r\n传说归传说，现在让我向你展示这个世界的机制。来吧，继续...");
	   } else if (status == 1) {
	     cm.sendOk("如果你有幸一睹他们的风采...你应该表示尊重而不是蔑视。\r\n\r\n传说归传说，现在让我向你展示这个世界的机制。来吧，继续...");
	   } else if (status == 2) {
	     cm.warp(mapid, 0);
		 cm.dispose();
	   }
}