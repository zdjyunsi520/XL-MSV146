
var status = -1;

function start(mode, type, selection) {
    if (qm.getQuestStatus(25111) == 2 && qm.getJob() == 2410){
        if (mode == -1) {
            qm.dispose();
        } else {
            if (mode == 1)
                status++;
            else
                status--;

            if (status == 0) {
                qm.sendNext("又是 "+qm.getPlayer().getName()+"的吗？");
            } else if (status == 1) {
                qm.sendNextPrev("你已经走过了漫长的旅途才来到这里。怎么样，很有趣吧？");
            } else if (status == 2) {
                qm.sendNextPrev("我知道你是凭借力量来到这里的。力量就在你的体内，现在我将它唤醒到一个新的高度……");
            } else if (status == 3) {
                qm.sendSimple("你真的很强大。请用你的力量去帮助朋友们……还有请救救她……");
            } else if (status == 4) {
                qm.forceStartQuest();
                //qm.changeJob(2411);
                qm.dispose();
            } 
        }
    }
}

function end(mode, type, selection) {
}