/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Limbo
	Map(s): 		Thailand:Floating Market(500000000)
	Description: 		Thailand Hair Salon
*/

var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30270, 30230, 30260, 30280, 30240, 30290, 30340, 30370, 30630, 30530, 30760);
var fhair = Array(31040, 31000, 31250, 31220, 31260, 31240, 31110, 31270, 31030, 31230, 31530, 31710, 31320, 31650, 31630);
var hairnew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 1) {
			cm.sendNext("我是浮空市场美发助理林波。虽然我的头衔只是助理，但别担心！我的技术很好的！如果你有#b浮空市场发型券（普通）#k的话，要不要让我帮你换个发型？\r\n#L0##b理发（普通券）#k#l \r\n#L1##b染发（普通券）#k#l");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("如果使用普通券，你的发型将会随机改变。你还要使用#b#t5150023##k来改变发型吗？");
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
				cm.sendYesNo("如果使用普通券，你的发色将会随机改变。你还要使用#b#t5151018##k来改变发色吗？");
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("享受你全新改进的发型吧！");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150023) == true){
					cm.gainItem(5150023, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你理发。抱歉。");
				} else {
					cm.sendNext("享受你全新改进的发色吧！");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151018) == true){
					cm.gainItem(5151018, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你染发。抱歉。");
				} else {
					cm.sendNext("嗯...看起来你没有我们指定的券。恐怕没有券我无法给你染发。抱歉。");
				}
			}
		}
	}
}