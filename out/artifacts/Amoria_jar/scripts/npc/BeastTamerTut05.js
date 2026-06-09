/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextS("谢谢你，好心的陌生人！我叫Arby，是动物冠军团的骄傲成员！",1);
    } else if (status == 1) {
		cm.sendNextPrevS("动物冠军团？没听说过。",1);
    } else if (status == 2) {
	    cm.sendNextPrevS("我们才刚刚起步，但很快我们就会壮大的！整个枫之谷世界都会呼喊我们的名字！'Arby！Arby！Arby！'就像那样",15);
	} else if (status == 3) {
	    cm.sendNextPrevS("我们才刚刚起步，但很快我们就会壮大的！整个枫之谷世界都会呼喊我们的名字！'Arby！Arby！Arby！'就像那样",1);
	} else if (status == 4) {
	    cm.warp(866107000,0);
		cm.dispose();
	}
}
