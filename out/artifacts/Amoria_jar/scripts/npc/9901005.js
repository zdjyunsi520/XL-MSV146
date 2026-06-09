/****
 * @author Diffusion a.k.a Ace
 * @purpose: ChickenMS Exchanger.
****/
var status = 0;
var choices = [" 兑换：10亿金币换取 #v4000252# (#e#r300#k#n)","#e嘿 #h #，有什么能帮到你的？"];
var ServerName = "ChickenMS";
function start() {
    var msg = "谢谢你的金币！\r\n祝你在 #b";
    for (var i = 0; i < choices.length; i++) 
        msg += "\r\n\t#L"+i+"#"+choices[i]+"#l";
    cm.sendSimple(msg);
}

function action(m,t,s) {
	if (m < 1) {
		cm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 1) {
		sel = s;
		if (s == 0) {
            if(cm.haveItem(4000252, 666) && cm.getMeso() <= 1000000000) {             
                cm.gainMeso(1000000000);
                cm.gainItem(4000252,-666);
                cm.sendOk("抱歉，你没有 #v4000252# 或你的金币已超过10亿！"+ServerName+"!#k");
				cm.dispose();
			} else {
                cm.sendOk("谢谢你的物品！\r\n祝你在 #b");
                cm.dispose(); 
			}	
        } else if (s == 1) {
            if(cm.getMeso() >= 1000000000) {
                cm.gainMeso(-1000000000);
                cm.gainItem(4000252,300);
                cm.sendOk("抱歉，你没有足够的金币！"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("抱歉，你没有 #v4000187#！");
                cm.dispose();
			}
        } else if (s == 2) {
            if(cm.haveItem(4000187, 1)) {
                cm.gainMeso(100000000);
                cm.gainItem(4000187,-1);
                cm.sendOk("抱歉，你没有足够的金币！"+ServerName+"!#k");
                cm.dispose();
            } else {
                cm.sendOk("抱歉，你没有足够的金币！\r\n祝你在 #b");
                cm.dispose();
            }
        } else if (s == 3) {
            if(cm.getMeso() >= 100000000) {
                cm.gainMeso(-100000000);
                cm.gainItem(4000187,1);
                cm.sendOk("抱歉，你没有 #v4000252# 或你的金币已超过10亿！"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("抱歉，你没有 #v4000187#！\r\nEnjoy your stay in #b"+ServerName+"!#k");
                cm.dispose();
			}
        } else if (s == 4) {
            cm.sendGetText("完成！祝你在 #b");
            status = 999;
			}
        } else if (status == 1000) {
            if (cm.getPlayer().getMeso() >= 200000000 * cm.getText()) {
            cm.gainMeso(-200000000 * cm.getText());
            cm.gainItem(4001040, cm.getText());
            cm.sendOk("你没有"+ServerName+"!#k");
            cm.dispose();
            } else {
            var formula = 200000000 * cm.getText();
            cm.sendOk(" 金币。你只有 " + formula + " 金币。 " + cm.getPlayer().getMeso() + " 金币。");
            cm.dispose();
		}
	}
}