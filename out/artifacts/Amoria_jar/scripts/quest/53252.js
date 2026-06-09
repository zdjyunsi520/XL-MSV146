var status = -1;
var t1 = new Date().getTime();
var t2 = new Date().getTime();
var time=0;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.EnableUI(1);
            delay(2000);
            qm.sendDirectionInfo("Effect/DirectionNewPirate.img/effect/tuto/monAttack0");
            delay(2000);
            qm.sendDirectionInfo("Effect/DirectionNewPirate.img/effect/tuto/monAttack1");
            delay(5000);
            qm.sendNext("趁现在还不算太晚，赶紧离开这里！",9270092);
        } else if (status == 1) {
            qm.sendNext(qm.getPlayer().getName()+"走吧……",9270092);
        } else if (status == 2) {
            qm.sendPlayerToNpc("跟我一起离开这里，伯克。加油");
        } else if (status == 3) {
            qm.sendNext("我犯了个错误。我贪图你的力量。我想要杀你！他们……",9270092);
        } else if (status == 4) {
            qm.sendNext("他们知道关于#b核心#k的一切。我错误地以为我可以从他们那里获得力量！对不起 "+qm.c.getPlayer().getName(),9270092);
        } else if (status == 5) {
            qm.sendPlayerToNpc("那你为什么让我活下来，伯克？");
        } else if (status == 6) {
            qm.sendNext("我感受到了那股力量，不是你的！",9270092);
        } else if (status == 7) {
            qm.sendNext("快走，我来挡住他们，他们要复活……",9270092);
        } else if (status == 8) {
            qm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/25");
            delay(2000);
            qm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/23");
            qm.sendNext("#b核心#k确实在#m240010300#，去那里吧……",9270092);
        } else if (status == 9) {
            qm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/17");
            delay(3000);
            qm.removeNpc(552000074,9270092);
            qm.removeNpc(552000074,9270090);
            qm.forceCompleteQuest();
			cm.EnableUI(0);
            qm.warp(240000000);
            qm.dispose();
        } 
    }
}

function delay(time){
    t1 = new Date().getTime();
    t2 = new Date().getTime();
    t2+=time;
    while(true){
        if(t1<t2) t1= new Date().getTime();
        else return;
    }
}
