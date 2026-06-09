function start() {
    cm.sendYesNo("你好 #r#e#h ##k#n！你想要我把你的所有技能练到满级吗？");
}

function action() {
    if (cm.getPlayer().getJob() == 434 && cm.getPlayer().getLevel() >= 120) {
        cm.maxSkillsByJob();
        cm.teachSkill(4341000, 30, 30); //DB Maple Warrior
        cm.sendOk("你的技能已经全部满级了！");
    } else {
        cm.sendOk("抱歉，你必须达到120级以上并且是刀锋大师。");
    }
    cm.dispose();
}