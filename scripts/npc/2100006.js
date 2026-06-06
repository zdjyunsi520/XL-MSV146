/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Mazra
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Hair Salon Owner
*/

var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160);
var fhair = Array(31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010);
var hairnew = Array();



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status >= 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("哈哈哈……在沙漠里还能注意到自己发型的人，那得有多少品味和风采啊。像你这样的人……如果你有#b阿里安特发型优惠券（VIP）#k或#b阿里安特发色优惠券（VIP）#k，我来给你换个全新的造型。\r\n#L0##b更换发型（VIP优惠券）#k#l \r\n#L1##b染发（VIP优惠券）#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendStyle("哈哈哈~你只需要#b阿里安特发型优惠券（VIP）#k就能改变发型。选择你想要的新风格，剩下的交给我。", hairnew);
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("偶尔换个发色也不错……很有趣的。让我——伟大的马兹拉——来为你染发，你只需要带上#b阿里安特发色优惠券（VIP）#k，然后选择你想要的新发色就行了。", haircolor);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150027) == true){
					cm.gainItem(5150027, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受你全新的发型吧！");
				} else {
					cm.sendNext("我记得跟你说过，你需要优惠券我才能施展魔法，请再确认一下。");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151022) == true){
					cm.gainItem(5151022, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("享受你全新的发色吧！");
				} else {
					cm.sendNext("我记得跟你说过，你需要优惠券我才能施展魔法，请再确认一下。");
				}
			}
		}
	}
}
