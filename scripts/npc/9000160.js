
var job = [ 
[[100, "Warrior"], [200, "Magician"], [300, "Bowman"], [400, "Thief"], [500, "Pirate"]], 
[[1100, "魂骑士"], [1200, "炎术士"], [1300, "风灵使者"], [1400, "夜行者"], [1500, "奇袭者"]], 
[[3200, "战法"], [3300, "豹弩游侠"], [3500, "Mechanic"]], 
[[110, "Fighter"], [120, "Page"], [130, "Spearman"]], 
[[210, "法师（火毒）"], [220, "法师（冰雷）"], [230, "Cleric"]], 
[[310, "Hunter"], [320, "弩弓手"]], 
[[410, "Assassin"], [420, "Bandit"]], 
[[510, "Brawler"], [520, "Gunslinger"]],
[[3100, "恶魔猎手"], [3101, "恶魔复仇者"]]]; 
var status = 0; 
var select; 


function start() { 
    status = -1; 
    action(1, 0, 0); 
}  


function action(mode, type, selection) { 
    if (mode == 1) 
        status++; 
    else if (mode == -1) 
        status--; 
    else { 
        cm.dispose(); 
        return; 
    } 
    if (status == 0) { 
        if (cm.getPlayer().getLevel() >= 10 && (cm.getPlayer().getJob() % 1000 == 0 || cm.getPlayer().getJob() == 501 || cm.getPlayer().getJob() == 507 || cm.getPlayer().getJob() == 3001 || cm.getPlayer().getJob() == 6001 || cm.getPlayer().getJob() == 3002 || cm.getPlayer().getJob() == 4001 || cm.getPlayer().getJob() == 4002 || cm.getPlayer().getJob() >= 2001 && cm.getPlayer().getJob() <= 2004) || cm.getPlayer().getLevel() >= 30 && (cm.getPlayer().getJob() % 1000 > 0 && cm.getPlayer().getJob() % 100 == 0 || cm.getPlayer().getJob() == 508) || cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() % 10 == 0 && cm.getPlayer().getJob() % 100 != 0 || cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() % 10 == 1 || cm.getPlayer().getLevel() >= 55 && cm.getPlayer().getJob() == 431) 
            cm.sendYesNo("你想进行转职吗？"); 
        else { 
            cm.sendOk("你目前的状态无法转职。"); 
            cm.dispose(); 
        } 
    } else if (status == 1) { 
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) { //Dual Blade 
            cm.getPlayer().changeJob(400); 
            cm.dispose(); 
            return; 
        } 
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) { //Dual Blade 
            cm.getPlayer().changeJob(430); 
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
            case 3001: // Demon 
                jobSelection(8); 
                break; 
            //Special Jobs 
            case 501: // Pirate(Cannoneer) 
                cm.getPlayer().changeJob(530); 
                cm.dispose(); 
                break; 
            case 507: // Jett 
                cm.getPlayer().changeJob(508); 
                cm.dispose(); 
                break; 
            case 508: // Pirate(Jett) 
                cm.getPlayer().changeJob(570); 
                cm.dispose(); 
                break; 
            case 2000: // Legend(Aran) 
                cm.getPlayer().changeJob(2100); 
                cm.dispose(); 
                break; 
            case 2001: // Farmer(Evan) 
                cm.getPlayer().changeJob(2200); 
                cm.dispose(); 
                break; 
            case 2002: // Mercedes 
                cm.getPlayer().changeJob(2300); 
                cm.dispose(); 
                break; 
            case 2003: // Phantom Jr. 
                cm.getPlayer().changeJob(2400); 
                cm.dispose(); 
                break;
            case 2004: // Luminous
                cm.getPlayer().changeJob(2710); 
                cm.dispose(); 
                break; 
            case 3001: // 恶魔猎手 
                cm.getPlayer().changeJob(3100); 
                cm.dispose(); 
                break;
            case 3101: // 恶魔复仇者 
                cm.getPlayer().changeJob(3120); 
                cm.dispose(); 
                break;
            case 3002: // Xenon 
                cm.getPlayer().changeJob(3600); 
                cm.dispose(); 
                break;
            case 6000: // Kaiser 
                cm.getPlayer().changeJob(6100); 
                cm.dispose(); 
                break; 
            case 6001: // Angelic Buster 
                cm.getPlayer().changeJob(6500); 
                cm.dispose(); 
                break;
            case 4001: // Hayato  
                cm.getPlayer().changeJob(4100); 
                cm.dispose(); 
                break;
            case 4002: // Kanna
                cm.getPlayer().changeJob(4200); 
                cm.dispose(); 
                break;
            case 5000: // Nameless Warden (Mihile) 
                cm.getPlayer().changeJob(5100); 
                cm.dispose(); 
                break; 
            // Dual Blader 
            case 430: // Blade Reqruit 
            case 431: // Blade Acolyte 
            case 432: // Blade Specialist 
            case 433: // Blade Lord 
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1); 
                cm.dispose(); 
                break; 
           
             //Nova coming soon....
                
            //1st Job 
            case 1100: // 魂骑士 
            case 1200: // 炎术士 
            case 1300: // 风灵使者 
            case 1400: // 夜行者 
            case 1500: // 奇袭者 
            case 2100: // Aran 
            case 2300: // Mercedes 
            case 2400: // Phantom 
            case 3100: // 恶魔猎手 
            case 3200: // 战法 
            case 3300: // 豹弩游侠 
            case 3500: // Mechanic 
            case 5100: // Mihile 
            case 10000: // Zero
            case 2700: // Luminous
            case 3600: // Xenon    
            case 6100: // Kaiser
            case 6500: // Angelic Buster
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10); 
                cm.dispose(); 
                break; 
           
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
            case 1110: // 魂骑士 
            case 1210: // 炎术士 
            case 1310: // 风灵使者 
            case 1410: // 夜行者 
            case 1510: // 奇袭者 
            case 2110: // Aran 
            case 2310: // Mercedes 
            case 2410: // Phantom 
            case 3110: // 恶魔猎手
            case 3120: // 恶魔复仇者 
            case 3210: // 战法 
            case 3310: // 豹弩游侠 
            case 3510: // Mechanic 
            case 5110: // Mihile
            case 10010: // Zero
            case 2710: // Luminous
            case 3610: // Xenon 
            case 6010: // Kaiser
            case 6510: // Angelic Buster
            case 4110: // Hayato
            case 4210: // Kanna
            
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
            case 1111: // 魂骑士 
            case 1211: // 炎术士 
            case 1311: // 风灵使者 
            case 1411: // 夜行者 
            case 1511: // 奇袭者 
            case 2111: // Aran 
            case 2311: // Mercedes 
            case 2411: // Phantom 
            case 3111: // 恶魔猎手
            case 3121: // 恶魔复仇者
            case 3211: // 战法 
            case 3311: // 豹弩游侠 
            case 3511: // Mechanic 
            case 5111: // Mihile
            case 10011: // Zero
            case 2711: // Luminous
            case 3611: // Xenon 
            case 6011: // Kaiser
            case 6511: // Angelic Buster
            case 4111: // Hayato
            case 4211: // Kanna
            
            
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1); 
                cm.dispose(); 
                break; 
            default: 
                cm.sendOk("发生了一个错误，或发现了新职业。\r\n请在论坛上向管理员报告 www.aetherstory.com/forum 谢谢~。\r\n你的职业ID： " + cm.getPlayer().getJob() + ""); 
                cm.dispose(); 
        } 
    } else if (status == 2) { 
        select = selection; 
        cm.sendYesNo("你确定要转职吗？"); 
    } else if (status == 3) { 
        cm.getPlayer().changeJob(select); 
        cm.dispose(); 
    } 
} 


function jobSelection(index) { 
    var choose = "请选择你的职业：" 
    for (var i = 0; i < job[index].length; i++) 
        choose += "\r\n#L" + job[index][i][0] + "#" + job[index][i][1] + "#l"; 
    cm.sendSimple(choose); 
}  