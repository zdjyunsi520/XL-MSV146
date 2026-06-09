var status;
var talked = null;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1)
        status++;

    else
        status--;
    if (status == 0) {
        if (cm.haveItem(4033275, 1)) {
            cm.sendOk("带礼物给我也不会让我放了你，但还是谢谢了。现在滚吧！\r\n（吃苹果）\r\n啊啊啊！这是什么？毒药？啊啊啊救命啊！\r\n（死亡）");
            cm.dispose();
        }
        if (cm.haveItem(2010009, 1) && cm.haveItem(4001162, 1)) {
            cm.sendNext("恭喜你证明了自己的实力，诅咒已被解除。\r\n你的倍率现在是800倍经验、400倍枫币和3倍掉落。\r\n希望你会喜欢这个服务器，记得去论坛看看！");
			
            cm.getPlayer().dropMessage(6,"什么鬼，你是谁，你在这里做什么？\r\n无所谓了，我不喜欢不请自来的客人。感受我的愤怒吧！");
            talked = true;
		
        } else {
            cm.sendNext("你已被诅咒，所有倍率降低到1倍。\r\n要解除这个邪恶的诅咒，你需要完成一项\r\n无人达成过的壮举——杀死邪恶巫师。");
        }
    } else if (status == 1) {
	if (talked == true) {
	
	cm.warp(20000, 0);
	cm.gainExp(1300);
	cm.dispose();
	}else {
        cm.getPlayer().dropMessage(6,"你已被诅咒，所有倍率降低到1倍。\r\n要解除这个邪恶的诅咒，你需要完成一项\r\n无人达成过的壮举——杀死邪恶巫师。");
        cm.gainItem(4033275, 1);
        cm.dispose();
		}
    }
}