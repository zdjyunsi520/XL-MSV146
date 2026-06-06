/* RED 1st impact
    Job selection
	Sugar
    Made by Daenerys
*/

var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 7) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
        qm.sendNextS("你打倒了怪物，真的帮了我大忙，#h #。你似乎已经准-准备好选择职业了。你决定了要选哪个吗？",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("#b嗯？职业？#k",17);
	} else if (status == 2) {
	    qm.sendNextPrevS("冒险家有五种不同的职业。你可以在维多利亚岛进行转职。嗯，分别是战士、魔法师、弓箭手、飞侠和海盗。",1);
	} else if (status == 3) {
		qm.sendNextPrevS("#b它们是什么样的？#k",17);
	} else if (status == 4) {
	    qm.sendNextPrevS("让我想想。战士拥有强大的力量和防御力，擅长近战。魔法师使用魔法，所以他们更看-看重智力而非力量，擅长对多个敌人进行远程战斗。",1);
	} else if (status == 5) {
	    qm.sendNextPrevS("弓-弓箭手也擅长远程战斗。他们从远处射箭，能让敌人保持距离。还有，让我想想……飞侠是近战的，和战士一样，但他们注重速度而不是力量。",1);
	} else if (status == 6) {
	    qm.sendNextPrevS("最后，海盗……就是海盗。有些用拳头近战，有些从远处开枪或炮。不管哪种方式，他们的攻击都相当花哨。",1);
	} else if (status == 7) {
        qm.sendSimple("如果你现在选择职业，船长答应在我们靠岸后立刻联系你的新职业教官。那么，#h #，你想选哪个职业？\r\n\r\n#b#L0# 战士，强大而防御力高#l\r\n#L1# 魔法师，聪慧而精通魔法#l\r\n#L2# 弓箭手，远程而精准#l\r\n#L3# 飞侠，敏捷而隐秘#l\r\n#L4# 海盗，花哨而独特#l#k");
    } else if (status == 8) {
        sel = selection;
	if (selection == 0) {		
	   qm.sendNextS("哦，当-当然！#h #，你会成为一个出色的战士！",1);
        } else if (selection == 1) {
		qm.sendNextS("哦，当-当然！#h #，你会成为一个出色的魔法师！",1);
        } else if (selection == 2) {
		qm.sendNextS("哦，当-当然！#h #，你会成为一个出色的弓箭手！",1);
        } else if (selection == 3) {
		qm.sendNextS("哦，当-当然！#h #，你会成为一个出色的飞侠！",1);
        } else if (selection == 4) {
		qm.sendNextS("哦，当-当然！#h #，你会成为一个出色的海盗！",1);
		}
	} else if (status == 9) {
	  if (sel == 0) {
        qm.sendNextS("#h #！如果你要做战士，我该做魔法师吗？我很弱，但也许有了魔法，我就能帮助别人了。",1);
        } else if (sel == 1) {
		qm.sendNextS("也许我应该成为战士。我想学会自立，用我的力量帮助别人。",1);
        } else if (sel == 2) {
		qm.sendNextS("也许我应该成为飞侠。我想学会自立，用我的力量帮助别人。",1);
        } else if (sel == 3) {
		qm.sendNextS("也许我应该成为海盗。我想学会自立，用我的力量帮助别人。",1);
        } else if (sel == 4) {
		qm.sendNextS("也许我应该成为弓箭手。我想学会自立，用我的力量帮助别人。",1);
		}
    } else if (status == 10) {
	  if (sel == 0) {
	    qm.forceStartQuest(1401);
        qm.showAdvanturerBoatScene();
		qm.dispose();
        } else if (sel == 1) {
		qm.forceStartQuest(1402);
		qm.showAdvanturerBoatScene();
		qm.dispose();
        } else if (sel == 2) {
		qm.forceStartQuest(1403);
		qm.showAdvanturerBoatScene();
		qm.dispose();
        } else if (sel == 3) {
		qm.forceStartQuest(1404);
		qm.showAdvanturerBoatScene();
		qm.dispose();
        } else if (sel == 4) {
		qm.forceStartQuest(1405);
		qm.showAdvanturerBoatScene();
		qm.dispose();
	   }
	    qm.dispose();
    }
}