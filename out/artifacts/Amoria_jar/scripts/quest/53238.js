var status = -1;
function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("天哪。看看这些水晶。它们真是美丽又耀眼",9270091);
        } else if (status == 1) {
            qm.sendPlayerToNpc("没什么大不了的。简单的事情而已。来，拿着它们吧。");
        } else if (status == 2) {
            qm.gainItem(4033251,-30);
            qm.sendNext("谢谢你，我已经把你的枪做好了",9270091);
        } else if (status == 3) {
            qm.sendNext("看，这是我为你特别制作的枪#z1492140##i1492140#，希望你会喜欢！",9270091);
        } else if (status == 4) {
            qm.sendPlayerToNpc("它非常适合我。谢谢您，再见！");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.gainItem(1492140,1);
            qm.changeJob(570);
            qm.dispose();
        } 
    }
}
function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
