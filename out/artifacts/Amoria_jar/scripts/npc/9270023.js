/* 	Noel
	Singapore Random Face Changer
	Credits to aaron and cody
	Side note by aaron [If there is something wrong PM me on fMS]
*/
var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012);
var fface = Array(21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016);
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendSimple("如果你使用普通券，你的脸可能会变成随机的新样子...你还要用#b#t5152037##k来做吗？");
    } else if (status == 1) {
	cm.dispose();
    } else if (selection == 2) {
	facenew = Array();
	if (cm.getChar().getGender() == 0) {
	    for(var i = 0; i < mface.length; i++) {
		facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
	    }
	}
	if (cm.getChar().getGender() == 1) {
	    for(var i = 0; i < fface.length; i++) {
		facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
	    }
	}
	cm.sendYesNo("享受你全新改进的脸型吧！");
    } else if (status == 2) {
	if (cm.setAvatar(5152037, facenew[Math.floor(Math.random() * facenew.length)]) == 1){
	    cm.sendOk("嗯...看起来你没有这个地方专用的券。很抱歉这么说，但没有券的话，没办法给你做整形...");
	} else {
	    cm.sendOk("嗯...看起来你没有这个地方专用的券。很抱歉这么说，但没有券的话，没办法给你做整形...");
	}
    }
}