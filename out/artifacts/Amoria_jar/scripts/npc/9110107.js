/*
	NPC Name: 		Palakeen
	Map(s): 		Zipangu - Mushroom Shrine
	Description: 		Kaede Castle teleporter
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("我们是轿子的轿夫~！让轿夫带你去任何地方，甚至是樱花的忍者城~！");
	    cm.dispose();
	    return;
	}
	status--;
    }
    switch (cm.getMapId()) {
	case 800040000: {
	    if (status == 0) {
		cm.sendNext("哦，什么？怎么了？你想去蘑菇神社吗？");
	    } else if (status == 1) {
		cm.sendYesNo("好的，我知道了！交给我们吧，你眨眼的功夫就到了！哦，这不会花你一分钱。今天我心情好，免费让你坐！现在，感觉不错吧？好了，出发！");
	    } else if (status == 2) {
		cm.sendNext("哦，什么？怎么了？你想去忍者城吗");
	    } else if (status == 3) {
		cm.warp(800000000);
		cm.dispose();
	    }
	    break;
	}
	default: {
	    if (status == 0) {
		cm.sendNext("哦，什么？怎么了？你想去蘑菇神社吗？");
	    } else if (status == 1) {
		cm.sendYesNo("哦，什么？怎么了？你想去忍者城吗");
	    } else if (status == 2) {
		cm.sendNext("哦，什么？怎么了？你想去忍者城吗");
	    } else if (status == 3) {
		cm.warp(800040000);
		cm.dispose();
	    }
	    break;
	}
    }
}