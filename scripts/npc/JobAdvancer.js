var job = [
[[100, "Warrior"], [200, "Magician"], [300, "Bowman"], [400, "Thief"], [500, "Pirate"]],
[[1100, "炎术士"], [1200, "风灵使者"], [1300, "夜行者"], [1400, "奇袭者"], [1500, "战斗法师"]],
[[3200, "豹弩游侠"], [3300, "法师（火/毒）"], [3500, "Mechanic"]],
[[110, "Fighter"], [120, "Page"], [130, "Spearman"]],
[[210, "法师（冰/雷）"], [220, "弩弓手"], [230, "Cleric"]],
[[310, "Hunter"], [320, "恶魔猎手"]],
[[410, "Assassin"], [420, "Bandit"]],
[[510, "Brawler"], [520, "Gunslinger"]]];
var extrajobs = [
[2300, "Mercedes"], [3100, "双刀"]
];
var specialextrajobs = [
[9400, "你必须用完所有的SP才能进行转职。"], [9501, "Cannoneer"], [9508, "Jett"]
];
var extra = true;
var npc_state = -1;
var select;
var jobindex;

function start() {
    jobindex = null;
    select = null;
    npc_state = -1;
    if (canAdvance(cm.getPlayer().getJob(), cm.getPlayer().getLevel())) {
        if (isExplorer(cm.getPlayer().getJob())) {
            if (cm.getPlayer().getRemainingSp() > 0) {
                cm.sendOk("你想进行转职吗？");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("你目前无法转职。");
    } else {
        cm.sendOk("发现未知职业。");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    npc_state++;
    switch (npc_state) {
        case 0:
            if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) { //你必须用完所有的SP才能进行转职。
                cm.getPlayer().changeJob(400);
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) { //你必须用完所有的SP才能进行转职。
                cm.getPlayer().changeJob(430);
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getSubcategory() == 10 && cm.getPlayer().getJob() == 0) { //Jett
                cm.getPlayer().changeJob(508);
                cm.getPlayer().forceChangeChannel(cm.getPlayer().getClient().getChannel());
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getSubcategory() == 2 && cm.getPlayer().getJob() == 0) { //Cannoneer
                cm.getPlayer().changeJob(501);
                cm.dispose();
                return;
            }
            if (isBeginnerJob(cm.getPlayer().getJob())) {
                var dispose = true;
                switch (cm.getPlayer().getJob()) {
                    //Jobs with selections
                    case 0: // Beginner
                        dispose = false;
                        jobSelection(0);
                        break;
                    case 1000: // Noblesse
                        dispose = false;
                        jobSelection(1);
                        break;
                    case 3000: // Citizen
                        dispose = false;
                        jobSelection(2);
                        break;
                    case 100: // Warrior
                        dispose = false;
                        jobSelection(3);
                        break;
                    case 200: // Magician
                        dispose = false;
                        jobSelection(4);
                        break;
                    case 300: // Bowman
                        dispose = false;
                        jobSelection(5);
                        break;
                    case 400: // Thief
                        dispose = false;
                        jobSelection(6);
                        break;
                    case 500: // Pirate
                        dispose = false;
                        jobSelection(7);
                        break;
                    //Special Jobs
                    case 501: // Pirate(Cannoneer)
                        cm.getPlayer().changeJob(530);
                        break;
                    case 508: // Jett
                        cm.getPlayer().changeJob(570);
                        break;
                    case 2000: // Legend(Aran)
                        cm.getPlayer().changeJob(2100);
                        break;
                    case 2001: // Farmer(Evan)
                        cm.getPlayer().changeJob(2200);
                        break;
                    case 2002: // Mercedes
                        cm.getPlayer().changeJob(2300);
                        break;
                    case 2003: // Phantom
                        cm.getPlayer().changeJob(2400);
                        break;
                    case 2004: // Luminous
                        cm.getPlayer().changeJob(2700);
                        break;
                    case 3001: // 双刀
                        cm.getPlayer().changeJob(3100);
                        break;
                    case 5000: // Nameless Warden (Mihile)
                        cm.getPlayer().changeJob(5100);
                        break;
                    case 6000: // Kaiser
                        cm.getPlayer().changeJob(6100);
                        break;
                    case 6001: // Angelic Burster
                        cm.getPlayer().changeJob(6500);
                        break;
                    default:
                        cm.sendOk("你确定要转职为");
                        break;
                }
                if (dispose) {
                    cm.dispose();
                    return;
                }
            } else if (is1stJob(cm.getPlayer().getJob())) {
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10);
                cm.dispose();
                return;
            } else if (is2ndJob(cm.getPlayer().getJob()) || is3rdJob(cm.getPlayer().getJob())) {
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
                cm.dispose();
                return;
            }
            break;
        case 1:
            select = selection;
            if (!isValidJob(select)) { //Exploit
                cm.dispose();
                return;
            }
            cm.sendYesNo("成为一名#b" + selection <= job[jobindex].length ? ("作为恶魔猎手，你需要选择一个#b恶魔印记#k。\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l" + job[jobindex][selection][1] + "#k") : "" + "?");
            break;
        case 2:
            if (select != 3100) {
                cm.getPlayer().changeJob(getRealJob(select));
                if (!specialSecondaryWeaponJob(getRealJob(select)))
                    cm.dispose();
                return;
            } else 
                cm.sendSimple("As a 双刀, you will have to choose a #bDemon Marking#k.\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l");
            if (getSubcategory(select) != 0) {
                cm.getPlayer().changeJob(getRealJob(select));
                cm.getPlayer().setSubcategory(getSubcategory(select));
                cm.getPlayer().dropMessage(0, "作为恶魔猎手，你的魔法值(MP)将在你登出后转变为恶魔之力(DF)。");
                cm.dispose();
                return;
            }
            break;
        case 3:
            cm.getPlayer().setDemonMarking(selection);
            cm.getPlayer().setSkinColor(4);
            cm.getPlayer().changeJob(getRealJob(select));
            if (select == 3100) {
                cm.sendOk("As a 双刀, your Mana Points(MP) will turn into Demon Force (DF) as soon as you log off.");
            }
            cm.dispose();
            return;
            break;
        default:
            cm.dispose();
            return;
    }
}

function isExplorer(job) {
    return job / 1000 == 0;
}

function isBeginnerJob(job) {
    return job % 1000 < 100;
}

function is1stJob(job) {
    return job % 1000 >= 100 && job % 100 == 0;
}

function is2ndJob(job) {
    return job % 100 == 10;
}

function is3rdJob(job) {
    return !isBeginnerJob() && job % 10 == 1;
}

function isDualBlade(job)  {
    return job >= 430 && job <= 434 || cm.getPlayer().getSubcategory() == 1;
}

function canAdvance(job, level) {
    if (level >= 10 && isBeginnerJob(job)) return true;
    if (level >= 30 && is1stJob(job)) return true;
    if (level >= 70 && is2ndJob(job)) return true;
    if (level >= 120 && is3rdJob(job)) return true;
    if (isDualBlade(job)) {
        if (level >= 20 && job == 400) return true;
        if (level >= 30 && job == 430) return true;
        if (level >= 55 && job == 431) return true;
        if (level >= 70 && job == 432) return true;
        if (level >= 120 && job == 433) return true;
    }
    return false;
}

function jobSelection(index) {
    jobindex = index;
    var choose = "\r\n\r\n#e#b额外职业#k#n：#e#r（新）#k#n"
    for (var i = 0; i < job[index].length; i++)
        choose += "\r\n#L" + job[index][i][0] + "#" + job[index][i][1] + "#l";
    if (extra == true && index <= 2/*Beginner Jobs Only*/) {
        choose += "\r\n\r\n#e#b额外职业#k#n：#e#r（新）#k#n";
        for (var e = 0; e < extrajobs.length; e++)
            choose += "\r\n#L" + extrajobs[e][0] + "#" + extrajobs[e][1] + "#l";
        for (var s = 0; s < specialextrajobs.length; s++)
            choose += "\r\n#L" + specialextrajobs[s][0] + "#" + specialextrajobs[s][1] + "#l";
    }
    cm.sendSimple(choose);
}

function isValidJob(jobId) {
    var j;
    var i;
        outer:
        for (j = 0; j < jobId.length; j++) {
            for (i = 0; i < job[j].length; i++) {
                if (job[j][i][0] == jobId) {
                    break outer;
                }
            }
        }
    for (i = 0; i < extrajobs.length; i++) {
        if (extrajobs[i][0] == jobId) {
            break;
        }
    }
    for (i = 0; i < specialextrajobs.length; i++) {
        if (specialextrajobs[i][0] == jobId) {
            break;
        }
    }
}

function getSubcategory(special) {
    switch (special) {
        case 9400:
        case 430:
        case 431:
        case 432:
        case 433:
        case 434:
            return 1;
        case 9501:
            return 2;
        case 9508:
            return 10;
    }
    return 0;
}

function getRealJob(fakejob) {
    switch (fakejob) {
        case 9400:
            return 400;
        case 9501:
            return 501;
        case 9508:
            return 508;
    }
    return fakejob;
}

function specialSecondaryWeaponJob(job) {
    switch (job) {
        case 508:
        case 570:
        case 571:
        case 572:
        case 3001:
        case 3100:
        case 3110:
        case 3111:
        case 3112:
        case 5100:
        case 5110:
        case 5111:
        case 5112:
            return true;
    }
    return false;
}