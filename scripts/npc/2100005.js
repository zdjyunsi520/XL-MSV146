/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Shati
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Assistant Hairdresser
*/

var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
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
			cm.sendNext("我想你还没准备好做改变。准备好了告诉我！");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("你好！我是莎蒂，马兹拉的学徒。如果你有#b阿里安特发型优惠券（普通）#k或#b阿里安特发色优惠券（普通）#k，不如让我来帮你打理头发？\r\n#L0##b更换发型（普通优惠券）\r\n#L1##b染发（普通优惠券）");
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
				cm.sendYesNo("如果你使用普通优惠券，你的发型将随机变成一个新造型。你还可以使用我研发的、VIP优惠券无法获得的新发型。你想用#b阿里安特发型优惠券（普通）#k来换一个全新的造型吗？");
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("如果你使用普通优惠券，你的发色将随机变成一种新颜色。你确定要使用#b#t5151021##k来随机改变你的发色吗？");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150026) == true){
					cm.gainItem(5150026, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("享受你全新的发型吧！");
				} else {
					cm.sendNext("我只有在你带来优惠券时才能帮你换发型。你没忘记吧？");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151021) == true){
					cm.gainItem(5151021, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("享受你全新的发色吧！");
				} else {
					cm.sendNext("我只有在你带来优惠券时才能帮你换发型。你没忘记吧？");
				}
			}
		}
	}
}