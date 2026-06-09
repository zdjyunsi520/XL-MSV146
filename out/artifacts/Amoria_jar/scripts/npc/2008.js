 var status;    

function start() {
    status = -1; 
    action(1, 0, 0); 
} 
var status; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        status++; 
    }else{ 
        status--; 
    } 
     
    if (status == 0) {
        cm.sendNext("嗨，欢迎来到阿莫利亚。祝你的故事精彩纷呈！");
    } else if (status == 1) {
        cm.sendOk("你现在位于枫之岛。在这里你可以从容地了解游戏基础，至少训练到10级。\r\n\r\n最右边是一个港口，当你达到10级时可以从那里离岛。\r\n\r\n枫之岛也是为了让你评估职业选择而存在的。你可以在岛屿尽头选择你喜欢的职业。你将获得一个新手礼包并开始你的冒险之旅！\r\n\r\n你也可以使用@help！来查看一些命令！@home很有用，但你需要达到50级才能使用。祝你玩得开心！~~");
    } else {
			cm.dispose();
		}
    }




/* var status;    

function start() {
    status = -1; 
    action(1, 0, 0); 
} 
var status; 

function start() { // starts the NPC 
    status = -1; // sets the status of the NPC to -1 
    action(1, 0, 0); // sets the mode to 1, type to 0, and selection to 0 for the NPC 
} // closes off the start function 

function action(mode, type, selection) { // calls what you set above in function start, almost all actions are done here 
    if (mode == 1) { // the mode is set to 1 because of the function start, as shown above 
        status++; // advances the NPC to the next status, in this case, status 0 
    }else{ // if mode does not equal 1 
        status--; // does not advance the NPC to the next status. 
    } 
     
    if (status == 0) {
        cm.sendNext("你好 #e#h ##n！我在这里用于测试目的。用我做一些事情吧..");
    }else if (status == 1) {
        cm.sendSimple("#L0#装备凯撒10级副武器#l\r\n#L1#满级职业技能#l");
    }else if (status == 2) {
        if (selection == 1) {
            cm.maxSkillsByJob();
            cm.dispose();
        }
		else if (selection == 0) {
            cm.equipSecondaryByID(1352500);
			cm.reloadChar();
            cm.sendOk("我已经为你装备了副武器！");
            cm.dispose();
        }
		else {
			cm.dispose();
		}
    }
}*/