var chose = false;
var price = 20000000;
var jobs, weapon, skill;

//Declaration of Quest
var free_advancement = 53748264; //Quest ID which is not being used.
//End declaration of quest

//Declaration of states:
var 
state_available = 0,
state_unavailable = 1;
//End declaration of states

function start() {
    loadAvailableJobs();
    cm.sendYesNo(
        "\r\n为此，你需要满足一些条件。" +
        "\r\n- 你必须是四转冒险家。" +
        "\r\n- 你必须有" +
        "枫币。 " + price + "\r\n- 你每天只能转职一次。" +
        "\r\n使用免费转职系统后，以下规则将适用。" +
        "\r\n- 你所有的SP和技能熟练度将被重置。" +
        "\r\n- 如果你转到的职业使用不同的主属性，你的AP将被切换。" +
        "\r\n- 如果你转到的职业拥有链接技能，你将获得该链接技能。" +
        "\r\n- 转职后，你将获得转职职业的100级武器。" +
        "\r\n\r\n你想使用免费转职系统吗？\r\n" +
        "你今天不能再使用免费转职系统了。"
        );
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (!chose) {
        if (getState() == state_unavailable) {
            cm.sendOk("发生了一个问题，请重试。");
            cm.dispose();
            return;
        }
        if (getState() != state_available) {
            cm.sendOk("你必须是一名四转冒险家。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getJob() > 1000 || cm.getPlayer().getJob() % 100 != 12) {
            cm.sendOk("你必须有");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getMeso() < price) {
            cm.sendOk("你想转成什么职业？\r\n " + price + "\r\n- 你每天只能转职一次。");
            cm.dispose();
            return;
        }
        cm.sendSimple("#L999#我不想使用免费转职系统。\r\n" + 
            "黑骑士" + getJobSelection());
    } else {
        if (selection == 999) {
            cm.dispose();
            return;
        }
        if (jobs[selection] == null) {
            cm.sendOk("你必须是一名四转冒险家。");
            cm.dispose();
            return;
        }
        //cm.getPlayer().freeAdvancement(cm.getPlayer().getJob(), jobs[selection]);
        cm.getPlayer().changeJob(jobs[selection]);
        if (weapon != 0) {
            cm.gainItem(weapon, 1);
        }
        if (skill != 0) {
            
        }
    }
}

function loadAvailableJobs() {
    var job = cm.getPlayer().getJob();
    switch (job) {
        case 112:
            jobs = [[122, "Paladin"], [132, "冰雷大魔导士"]];
            break;
        case 122:
            jobs = [[112, "Hero"], [132, "冰雷大魔导士"]];
            break;
        case 132:
            jobs = [[112, "Hero"], [122, "Paladin"]];
            break;
        case 212:
            jobs = [[222, "火毒大魔导士"], [232, "Bishop"]];
            break;
        case 222:
            jobs = [[212, "双刀"], [232, "Bishop"]];
            break;
        case 232:
            jobs = [[212, "双刀"], [222, "火毒大魔导士"]];
            break;
        case 312:
            jobs = [[322, "Marksman"]];
            break;
        case 322:
            jobs = [[312, "Bowmaster"]];
            break;
        case 412:
            jobs = [[422, "Shadower"], [432, "暗影飞侠"]];
            break;
        case 422:
            jobs = [[412, "暗影飞侠"], [432, "暗影飞侠"]];
            break;
        case 432:
            jobs = [[412, "暗影飞侠"], [422, "Shadower"]];
            break;
        case 512:
            jobs = [[522, "Corsair"], [532, "Cannoneer"]];
            break;
        case 522:
            jobs = [[512, "Buccaneer"], [532, "Cannoneer"]];
            break;
        case 532:
            jobs = [[512, "Buccaneer"], [522, "Corsair"]];
            break;
        default:
            jobs = null;
    }
}

function loadBonuses(job) {
    switch (job) {
        case 112:
            weapon = 0;
            break;
        case 122:
            weapon = 0;
            break;
        case 132:
            weapon = 0;
            break;
        case 212:
            weapon = 0;
            break;
        case 222:
            weapon = 0;
            break;
        case 232:
            weapon = 0;
            break;
        case 312:
            weapon = 0;
            break;
        case 322:
            weapon = 0;
            break;
        case 412:
            weapon = 0;
            break;
        case 422:
            weapon = 0;
            break;
        case 432:
            weapon = 0;
            skill = 0;
            break;
        case 512:
            weapon = 0;
            break;
        case 522:
            weapon = 0;
            break;
        case 532:
            weapon = 0;
            skill = 0;
            break;
    }
    if (skill == null) {
        skill = 0;
    }
    if (weapon == null) {
        weapon = 0;
    }
}

function getJobSelection() {
    var selStr = "";
    for (var j = 0; j < jobs.length; j++) {
        selStr += "#L" + j + "#" + jobs[j][1] + "#l\r\n";
    }
    return selStr;
}

function getState() {
    if (cm.getPlayer().getIntNoRecord(free_advancement) == 0) {
        return 0;
    }
    return (cm.currentTimeMillis() / (60 * 1000) - cm.getPlayer().getIntNoRecord(free_advancement)) >= 24 * 60 ? 1 : 2;
}

function setUnavailable() {
    cm.getPlayer().getQuestNAdd(cm.getQuestById(free_advancement)).setCustomData("" + cm.currentTimeMillis() / (60 * 1000));
}