/* Author: aaroncsn (MapleSea Like)(INcomplete- HairStyle)
	NPC Name: 		Wi
	Map(s): 		Thailand:Floating Market(500000000)
	Description: 		Thailand Hair Salon
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
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("我可以完全改变你的发型，让它看起来非常棒。用#b浮空市场发型券（VIP）#k选择你喜欢的吧。何不换个造型？我来帮你改。慢慢选~");
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
				cm.sendStyle("我可以完全改变你的发色，让它看起来非常棒。何不换个颜色？用#b浮空市场染发券（VIP）#k我来帮你改。选择你喜欢的吧。", hairnew);
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("享受你全新改进的发型吧！", haircolor);
			}
		}
		else if (status == 2){
			if (beauty == 1){
				if (cm.haveItem(5150037) == true){
					cm.gainItem(5150037, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你理发。抱歉。");
				} else {
					cm.sendNext("享受你全新改进的发色吧！");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151031) == true){
					cm.gainItem(5151031, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你染发。抱歉。");
				} else {
					cm.sendNext("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你染发。抱歉。");
				}
			}
		}
	}
}