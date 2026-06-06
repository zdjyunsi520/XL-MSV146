function start() {
    if(cm.getLevel() >= 30) {
    cm.sendSimple("想看看你劳动成果吗？所有兼职工作的奖励都由我 #b拨款小姐#k 来处理。\r\n#b#e#L0# 领取兼职工作奖励。#l");
       }
    else {
    cm.sendOk ("你好。我是拨款小姐，负责兼职工作。恐怕你需要达到 #e30级#n 我才能给你安排工作，等你达到那个等级后再来找我吧。");
    }

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getPartTime(cm.getPlayer().getId()).getJob() > 0) {
        cm.sendNext("劳动的果实总是甜的。希望再次见到你。");
        //cm.partTimeReward();
    } else {
        cm.sendOk("嗯...你确定完成了兼职工作吗？目前没有可领取的奖励。");
    }
    cm.dispose();
  }
 }