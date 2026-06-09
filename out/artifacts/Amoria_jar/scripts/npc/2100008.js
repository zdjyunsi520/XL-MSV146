/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Badr
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Ariant Plastic Surgery
*/

var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014);
var facenew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendStyle("嗯……美丽的容颜即使在遮蔽和灼热的沙漠下也会发光。有了#b阿里安特整形优惠券（VIP）#k，我可以让你的脸变得更加美丽。选择你想要的脸型，我将用我精湛的技艺为你做一次华丽的改造。", facenew);
			}
		else if (status == 1){
			cm.dispose();
			if (cm.haveItem(5152030) == true){
				cm.gainItem(5152030, -1);
				cm.setFace(facenew[selection]);
				cm.sendOk("享受你全新的面容吧！");
			} else {
				cm.sendNext("呃……你似乎没有这家医院的专用优惠券。没有优惠券的话，恐怕我无法为你服务。");
			}
		}
	}
}