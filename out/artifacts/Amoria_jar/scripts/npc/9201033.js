/* RED 1st impact
    Simon
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendNext("请随意待多久都行！这座神殿有一些很棒的拍照地点。祝你玩得开心！");
	    cm.dispose();
	} else {
	    cm.sendNext("沙洛姆神殿是一个与你见过的任何地方都不同的地方。那里也是拍照的好去处。你想去那里看看吗？");
	    cm.dispose();
	}
	}
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendYesNo("希望你在这里逛得愉快。你准备好回到原来的地方了吗？");
	} else {
	    cm.sendYesNo("好的，我们走吧！");
	}
	} else if (status == 1) {
	if (cm.getPlayer().getMapId() == 209000000) {
	    cm.sendNext("希望你再次光临神殿。保重！");
	} else {
	    cm.sendNext("希望你再次光临神殿。保重！");
	}
    } else if (status == 2) {
	cm.warp(cm.getPlayer().getMapId() == 209000000 ? 681000000 : 209000000);
	cm.dispose();
    }
  }