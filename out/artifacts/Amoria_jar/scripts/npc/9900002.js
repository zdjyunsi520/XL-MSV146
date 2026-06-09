/*
 * Job Advancer
 * @author Aristocat
 */


var job = [
[[100, "Warrior"], [200, "Magician"], [300, "Bowman"], [400, "Thief"], [500, "Pirate"]],
[[1100, "炎术师"], [1200, "风灵使者"], [1300, "夜行者"], [1400, "奇袭者"], [1500, "唤灵斗师"]],
[[3200, "豹弩游侠"], [3300, "法师(火毒)"], [3500, "Mechanic"]],
[[110, "Fighter"], [120, "Page"], [130, "Spearman"]],
[[210, "法师(冰雷)"], [220, "弩弓手"], [230, "Cleric"]],
[[310, "Hunter"], [320, "恶魔猎手"]],
[[410, "Assassin"], [420, "Bandit"]],
[[510, "Brawler"], [520, "Gunslinger"]],
[[3100, "恶魔复仇者"], [3101, "暗影双刀"]]];
var extrajobs = [
[2300, "Mercedes"]];
var specialextrajobs = [
[9400, "你必须用完所有SP点数才能转职。"], [9501, "Cannoneer"], [9508, "Jett"]
];
var extra = true;
var status = -1;
var select;
var tempest = true; //V123+
var jobindex;

function start() {
    //gainImperialSet();
    jobindex = null;
    select = null;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 || mode == -1 && status == 0) {
        cm.dispose();
        return;
    } else
        (mode == 1 ? status++ : status--);
    if (status == 0) {
        if ((cm.getPlayer().getLevel() >= 10 &&
            (cm.getPlayer().getJob() % 1000 == 0 || cm.getPlayer().getJob() == 501 || cm.getPlayer().getJob() == 3001 || cm.getPlayer().getJob() >= 2001 && cm.getPlayer().getJob() <= 2003) ||
            cm.getPlayer().getLevel() >= 30 && (cm.getPlayer().getJob() % 1000 > 0 && cm.getPlayer().getJob() % 100 == 0 ||
            cm.getPlayer().getJob() == 508) ||
            cm.getPlayer().getLevel() >= (tempest ? 60 : 70) && cm.getPlayer().getJob() % 10 == 0 && cm.getPlayer().getJob() % 100 != 0 ||
            cm.getPlayer().getLevel() >= (tempest ? 100 : 120) && cm.getPlayer().getJob() % 10 == 1 ||
            cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getJob() == 400 && cm.getPlayer().getSubcategory() == 1 ||
            cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 430 || cm.getPlayer().getLevel() >= (tempest ? 45 : 55) && cm.getPlayer().getJob() == 431 || cm.getPlayer().getLevel() >= (tempest ? 60 : 70) && cm.getPlayer().getJob() == 432 || cm.getPlayer().getLevel() >= (tempest ? 100 : 120) && cm.getPlayer().getJob() == 433) &&
        (cm.getPlayer().getJob() % 10 != 2 && cm.getPlayer().getJob() % 10 != 4 || cm.getPlayer().getJob() == 432)) {
            if (isExplorer(cm.getPlayer().getJob())) {
               // if (cm.getPlayer().getRemainingSp() > 0) {
                 //   cm.sendOk("你想转职吗？");
                   // cm.dispose();
                   // return;
               // }
            }
            cm.sendYesNo("成功转职为1转火枪手。");
        }
        if(cm.getChar().getJob() == 0 && cm.getPlayer().getSubcategory() == 2) //Cannoneer
        {
           cm.getChar().changeMap(100000000, 0);
           cm.getChar().changeJob(501);
           cm.sendOk("成功转职为1转阴阳师。")
           return cm.dispose();
        }
        if(cm.getChar().getJob() == 4002) // Kanna
        {
            cm.getChar().changeJob(4200);
            cm.sendOk("成功转职为1转剑豪。")
            return cm.dispose();
        }
        if(cm.getChar().getJob() == 4001) // Hayato
        {
                cm.getChar().changeJob(4100);
                cm.sendOk("成功转职为1转尖兵")
                return cm.dispose();
        }
        if(cm.getChar().getJob() == 3002) //Xwnon
        {
               cm.getChar().changeJob(3600);
               cm.sendOk("你目前的状态无法转职。")
               return cm.dispose();
        }
         else {
            cm.sendOk("发生了错误，或发现了新职业。\r\n请联系管理员。\r\n你的职业ID：");
            cm.dispose();
        }
    }
     else if (status == 1) {
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) { //你必须用完所有SP点数才能转职。
            cm.getPlayer().changeJob(400);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) { //你必须用完所有SP点数才能转职。
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
        switch (cm.getPlayer().getJob()) {
            //Jobs with selections
            case 0: // Beginner
                jobSelection(0);
                break;
            case 1000: // Noblesse
                jobSelection(1);
                break;
            //Note: Heroes doesn't get job selection, the same goes about Nova.
            case 3000: // Citizen
                jobSelection(2);
                break;
            case 100: // Warrior
                jobSelection(3);
                break;
            case 200: // Magician
                jobSelection(4);
                break;
            case 300: // Bowman
                jobSelection(5);
                break;
            case 400: // Thief
                jobSelection(6);
                break;
            case 500: // Pirate
                jobSelection(7);
                break;
            case 3001: // 恶魔复仇者
                jobSelection(8);
                break;
            //Special Jobs
            case 501: // Pirate(Cannoneer)
                cm.getPlayer().changeJob(530);
                cm.dispose();
                return;
            case 508: // Jett
                cm.getPlayer().changeJob(570);
                cm.dispose();
                return;
            case 2000: // Legend(Aran)
                cm.getPlayer().changeJob(2100);
                cm.dispose();
                return;
            case 2001: // Farmer(Evan)
                cm.getPlayer().changeJob(2200);
                cm.dispose();
                return;
            case 2002: // Mercedes
                cm.getPlayer().changeJob(2300);
                cm.dispose();
                return;
            case 2003: // Phantom
                cm.getPlayer().changeJob(2400);
                cm.dispose();
                return;
            case 2004: // Luminous
                cm.getPlayer().changeJob(2700);
                cm.dispose();
                return;
            case 4001: // Hayato
                cm.getPlayer().changeJob(4100);
                cm.dispose();
            case 4002: // Kanna
                cm.getPlayer().changeJob(4200);
                cm.dispose();
            case 5000: // Nameless Warden (Mihile)
                cm.getPlayer().changeJob(5100);
                cm.dispose();
                return;
            case 6000: // Kaiser
                cm.getPlayer().changeJob(6100);
                cm.dispose();
                return;
            case 6001: // Angelic Burster
                cm.getPlayer().changeJob(6500);
                cm.dispose();
                return;
            // 你必须用完所有SP点数才能转职。r
            case 430: // Blade Reqruit
            case 431: // Blade Acolyte
            case 432: // Blade Specialist
            case 433: // Blade Lord
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
                cm.dispose();
                return;
            //1st Job
            case 900:  // GM lol
            case 1100: // 炎术师
            case 1200: // 风灵使者
            case 1300: // 夜行者
            case 1400: // 奇袭者
            case 1500: // 唤灵斗师
            case 2100: // Aran
            case 2300: // Mercedes
            case 2400: // Phantom
            case 2700: // Luminous
            case 3100: // 恶魔复仇者
            case 3101: // 暗影双刀
            case 3200: // 豹弩游侠
            case 3300: // 法师(火毒)
            case 3500: // Mechanic
            case 4100: // Hayato
            case 4200: // Kanna
            case 5100: // Mihile
            case 6100: // Kaiser
            case 6500: // Angelic Burster
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10);
                cm.dispose();
                return;
            //2nd Job
            case 110: // Fighter
            case 120: // Page
            case 130: // Spearman
            case 210: // Wizard(F/P)
            case 220: // Wizard(I/L)
            case 230: // Cleric
            case 310: // Hunter
            case 320: // Crossbow man
            case 410: // Assassin
            case 420: // Bandit
            case 510: // Brawler
            case 520: // Gunslinger
            case 530: // Cannoneer
            case 570: // Jett
            case 1110: // 炎术师
            case 1210: // 风灵使者
            case 1310: // 夜行者
            case 1410: // 奇袭者
            case 1510: // 唤灵斗师
            case 2110: // Aran
            case 2310: // Mercedes
            case 2410: // Phantom
            case 2710: // Luminous
            case 3110: // 恶魔复仇者
            case 3120: // 暗影双刀
            case 3210: // 豹弩游侠
            case 3310: // 法师(火毒)
            case 3510: // Mechanic
            case 5110: // Mihile
            case 6110: // Kaiser
            case 6510: // Angelic Burster
            //3rd Job
            case 111: // Crusader
            case 121: // White Knight
            case 131: // Dragon Knight
            case 211: // Mage(F/P)
            case 221: // Mage(I/L)
            case 231: // Priest
            case 311: // Ranger
            case 321: // Sniper
            case 411: // Hermit
            case 421: // Chief Bandit
            case 511: // Marauder
            case 521: // Outlaw
            case 531: // Cannon Trooper
            case 571: // Jett
            case 1111: // 炎术师
            case 1211: // 风灵使者
            case 1311: // 夜行者
            case 1411: // 奇袭者
            case 1511: // 唤灵斗师
            case 2111: // Aran
            case 2311: // Mercedes
            case 2411: // Phantom
            case 2711: // Luminous
            case 3111: // 恶魔复仇者
            case 3121: // 暗影双刀
            case 3211: // 豹弩游侠
            case 3311: // 法师(火毒)
            case 3511: // Mechanic
            case 5111: // Mihile
            case 6111: // Kaiser
            case 6511: // Angelic Burster
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
                cm.dispose();
                return;
            default:
                cm.sendOk("你确定要转职为 " + cm.getPlayer().getJob() + "");
                cm.dispose();
                return;
        }
    }
    else if (status == 2) {
        select = selection;
        cm.sendYesNo(" #b"/* + selection <= job[jobindex].length ? ("作为恶魔猎手，你需要选择一个#b恶魔印记#k。\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l" + job[jobindex][selection][1] + "#k") : ""*/ + "?");
    } else if (status == 3) {
        if (select != 3100) {
            cm.getPlayer().changeJob(getRealJob(select));
            if (!specialSecondaryWeaponJob(getRealJob(select)))
                cm.dispose();
            return;
        } else
            cm.sendSimple("As a 恶魔复仇者, you will have to choose a #bDemon Marking#k.\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l");
        if (getSubcategory(select) != 0) {
            cm.getPlayer().changeJob(getRealJob(select));
            cm.getPlayer().setSubcategory(getSubcategory(select));
            cm.getPlayer().dropMessage(0, "作为恶魔猎手，你的魔法值(MP)将在登出后转变为恶魔之力(DF)。");
            cm.dispose();
            return;
        }
    } else if (status == 4) {
        cm.getPlayer().setDemonMarking(selection);
        cm.getPlayer().setSkinColor(4);
        cm.getPlayer().changeJob(getRealJob(select));
        if (select == 3100) {
            cm.sendOk("As a 恶魔复仇者, your Mana Points(MP) will turn into Demon Force (DF) as soon as you log off.");
        }
        cm.dispose();
        return;
    }
}

function jobSelection(index) {
    jobindex = index;
    var choose = "\r\n\r\n#e#b额外职业#k#n: #e#r(新)#k#n"
    for (var i = 0; i < job[index].length; i++)
        choose += "\r\n#L" + job[index][i][0] + "#" + job[index][i][1] + "#l";
    if (extra == true && index <= 2/*Beginner Jobs Only*/) {
        choose += "\r\n\r\n#e#b额外职业#k#n: #e#r(新)#k#n";
        for (var e = 0; e < extrajobs.length; e++)
            choose += "\r\n#L" + extrajobs[e][0] + "#" + extrajobs[e][1] + "#l";
        for (var s = 0; s < specialextrajobs.length; s++)
            choose += "\r\n#L" + specialextrajobs[s][0] + "#" + specialextrajobs[s][1] + "#l";
    }
    cm.sendSimple(choose);
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

function isExplorer(job) {
    return job / 1000 == 0;
}
