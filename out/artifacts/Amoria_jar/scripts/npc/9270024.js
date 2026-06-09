/* 	Kelvin
	SingaPore VIP Face changer
*/
var status = -1;
var beauty = 0;
var mface = Array(20109, 20110, 20106, 20108, 20112, 20013);
var fface = Array(21021, 21009, 21010, 21006, 21008, 21012);
var facenew = Array();

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("让我看看...我可以完全改变你的脸型，变成全新的样子。你不想试试吗？用#b#t5152038##k，你可以选择你喜欢的脸型。慢慢选择你偏好的脸型吧...");
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
	cm.sendStyle("享受你全新改进的脸型吧！", facenew);

    } else if (status == 2){
	    if (cm.setAvatar(5152038, facenew[selection]) == 1){
	    cm.sendOk("嗯...看起来你没有这个地方专用的券。很抱歉这么说，但没有券的话，没办法给你做整形...");
	} else {
	    cm.sendOk("嗯...看起来你没有这个地方专用的券。很抱歉这么说，但没有券的话，没办法给你做整形...");
	}
	cm.safeDispose();
    }
}