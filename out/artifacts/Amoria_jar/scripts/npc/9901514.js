var talk = "战士套装 - 1000捐赠积分"; 
var chosen = 1;
var Error;
var one;
var menu = ["法师套装 - 1000捐赠积分","弓手套装 - 1000捐赠积分","飞侠套装 - 1000捐赠积分","海盗套装 - 1000捐赠积分\r\n","战士武器 - 500捐赠积分","法师武器 - 500捐赠积分","弓手武器 - 500捐赠积分","飞侠武器 - 500捐赠积分","海盗武器 - 500捐赠积分","你的捐赠积分不足！\r\n你有#r"]; 
var empeq = [
/*warrioreq */[1003172, 1082295, 1052314, 1072485, 1102275],
/*mageeq*/[1003173, 1082296, 1052315, 1072486, 1102276],
/*boweq */[1003174, 1082297, 1052316, 1072487, 1102277],
/*thiefeq*/ [1003175, 1082298, 1052317, 1072488, 1102278],
/*pirateeq*/ [1003176, 1082299, 1052318, 1072489, 1102279],

/*Warriorwep*/[1302152,1312065,1322096,1402095,1412065,1422066,1432086,1442116],
/*MageWep*/   [1372084, 1382104],
/*Bowmanwep*/ [1462099, 1522018, 1452111],
/*Thiefwep*/  [1342036, 1362019, 1472122, 1332130],
/*Piratewep*/ [1492085, 1482084, 1532018]];
var c; 
status = 0; 
function start() {
    Error = "捐赠积分"+cm.getDPoints()+"嗨#b#h ##k，我是#rViciousMS#k的捐赠NPC\r\n\r\n#b1)当你捐赠时，你可以获得各种奖励作为我们的感谢！\r\n2)要使用捐赠者命令，你至少需要捐赠$20\r\n3)除了捐赠者命令外，你还会在游戏中获得蓝色文字\r\n4)当你捐赠时，你还会获得论坛的捐赠者头衔，至少$5\r\n5)你可以在论坛的捐赠专区查看所有捐赠者命令\r\n6)还有捐赠者职业，更多信息请查看网站并点击捐赠页面！\r\n#r如果你接受这些条款，请点击接受";
	
    cm.sendAcceptDecline("你有#b");
} 
function action(m,t,selection) { 
    chosen = selection;
    if (m != 1) { 
        cm.dispose(); 
        return; 
    }else{ 
        status++; 
    } 
    if (status == 1) {
        cm.sendSimple ("#k捐赠积分#k\r\n#L0##bNX奖品#l\r\n#L1#女皇套装#l\r\n#L2#奇迹方块#l\r\n#L3#更换NPC包 - 20000捐赠积分\r\n#L4#改名服务 - 10000捐赠积分\r\n#L5#满属物品 - 10000捐赠积分\r\n#L6#天使祝福戒指#l\r\n#L7#安卓+心脏#l"+cm.getDPoints()+"#k捐赠积分\r\n#b#L100#12000 NX - 100捐赠积分#l\r\n#L110#75000 NX - 500捐赠积分#l\r\n#L120#250000 NX - 1500捐赠积分#l\r\n#L130#100万NX - 3500捐赠积分#l");
    }
    else if (status == 2) { 
        if (selection == 0) {//NX
            cm.sendSimple("#k捐赠积分#k\r\n#L0##bNX奖品#l\r\n#L1#女皇套装#l\r\n#L2#奇迹方块#l\r\n#L3#更换NPC包 - 20000捐赠积分\r\n#L4#改名服务 - 10000捐赠积分\r\n#L5#满属物品 - 10000捐赠积分\r\n#L6#天使祝福戒指#l\r\n#L7#安卓+心脏#l"+cm.getDPoints()+"你好#r#h ##k。你有#b");
        }else if (selection == 1) {//Empress
            var text = "Hello #r#h ##k. #k捐赠积分#k\r\n#L0##bNX奖品#l\r\n#L1#女皇套装#l\r\n#L2#奇迹方块#l\r\n#L3#更换NPC包 - 20000捐赠积分\r\n#L4#改名服务 - 10000捐赠积分\r\n#L5#满属物品 - 10000捐赠积分\r\n#L6#天使祝福戒指#l\r\n#L7#安卓+心脏#l"+cm.getDPoints()+"#k捐赠积分\r\n#b#L200#超级奇迹方块x10 - 500捐赠积分#l\r\n#L201#超级奇迹方块x50 - 2000捐赠积分#l\r\n#L202#超级奇迹方块x150 - 5000捐赠积分#l\r\n#L203#启迪奇迹方块x10 - 250捐赠积分#l\r\n#L204#启迪奇迹方块x50 - 1000捐赠积分#l\r\n#L205#启迪奇迹方块x150 - 2500捐赠积分#l"+talk+""; 
            for (var z = 0; z < menu.length; z++) 
                text+= "#L"+z+"##b"+menu[z]+"#l\r\n"; 
            one = false;
            cm.sendSimple(text); 
        } else if (selection == 2) {//Cubes
            cm.sendSimple("#k捐赠积分#k\r\n#L0##bNX奖品#l\r\n#L1#女皇套装#l\r\n#L2#奇迹方块#l\r\n#L3#更换NPC包 - 20000捐赠积分\r\n#L4#改名服务 - 10000捐赠积分\r\n#L5#满属物品 - 10000捐赠积分\r\n#L6#天使祝福戒指#l\r\n#L7#安卓+心脏#l"+cm.getDPoints()+"#k捐赠积分\r\n#b#L200#超级奇迹方块x10 - 500捐赠积分#l\r\n#L201#超级奇迹方块x50 - 2000捐赠积分#l\r\n#L202#超级奇迹方块x150 - 5000捐赠积分#l\r\n#L203#启迪奇迹方块x10 - 250捐赠积分#l\r\n#L204#启迪奇迹方块x50 - 1000捐赠积分#l\r\n#L205#启迪奇迹方块x150 - 2500捐赠积分#l#b#L200#Super Miracle Cubes x10 - 500 DP#l\r\n#L201#Super Miracle Cubes x50 - 2000 DP#l\r\n#L202#Super Miracle Cube x150 - 5000 DP#l\r\n#L203#Enlightening Miracle Cubes x10 - 250 DP#l\r\n#L204#Enlightening Miracle Cubes x50 - 1000 DP#l\r\n#L205#Enlightening Miracle Cubes x150 - 2500 DP#l");
        }else if (selection == 3) {//Change NPC Pack
            cm.sendSimple("你想要什么名字？\r\n#e不能包含特殊字符#n（数字也算）#e，否则后果自负#n\r\n请#e#r格外#k#n小心输入，你无法重做！");
        }else if (selection == 4) {//Name Changer
            if (cm.getDPoints() > 9999) {  
                cm.sendGetText("#r#e装备的属性会被覆盖，所以如果它已经是满属物品，属性也会被再次覆盖#n#k请选择你想要作为满属物品的装备或NX。请确认你的背包有足够的空间，因为我们不接受退款。祝你好运！\r\n\r\n");
            }else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 5) {//MSI
            if (cm.getDPoints() > 9999) {  
                var String = "选择一个天使祝福戒指：\r\n#L300##i1112585# - 500捐赠积分#l\r\n#L302##i1112663# - 1500捐赠积分";
                cm.sendSimple(String+cm.EquipList(cm.getC()));
                one = true;
            }else  {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 6) {//Angelic Blessing
            cm.sendSimple("安卓套装包含一个心脏。\r\n选择一个安卓：\r\n#L400##i1662002# + #i1672005# - 5000捐赠积分\r\n#L401##i1662003# + #i1672005# - 5000捐赠积分#l");
        }else if (selection == 7) {//Android
            cm.sendSimple("[DMSI通知]恭喜");
        }
    } else if (status == 3) {
        var name = cm.getText();
        //Starting NX
        if (selection == 100) {
            if (cm.getDPoints() > 99) {      
                cm.setDPoints(-100);                    
                cm.gainNX(24000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 110) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainNX(140000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 120) {
            if (cm.getDPoints() > 1499) {      
                cm.setDPoints(-1500);                    
                cm.gainNX(500000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 130) {
            if (cm.getDPoints() > 3499) {      
                cm.setDPoints(-3500);                    
                cm.gainNX(2000000);//1million
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        //End of NX      
        //Start of Cubes
        else if (selection == 200) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainItem(5062002, 10);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 201) {
            if (cm.getDPoints() > 1999) {      
                cm.setDPoints(-2000);                    
                cm.gainItem(5062002, 50);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 202) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(5062002, 150);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 203) {//enlightening cubes
            if (cm.getDPoints() > 249) {      
                cm.setDPoints(-250);                    
                cm.gainItem(5062005, 10);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 204) {
            if (cm.getDPoints() > 999) {      
                cm.setDPoints(-1000);                    
                cm.gainItem(5062005, 50);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 205) {
            if (cm.getDPoints() > 2499) {      
                cm.setDPoints(-2500);                    
                cm.gainItem(5062005, 150);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        //End of cubes
        //Angelic Blessing Rings
        }else if (selection == 300) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainItem(1112585, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 302) {
            if (cm.getDPoints() > 1499) {      
                cm.setDPoints(-1500);                    
                cm.gainItem(1112663, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        //End of Angelic Blessing Rings
        //Start of Android
        else if (selection == 400) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(1662002, 1);
                cm.gainItem(1672005, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 401) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(1662003, 1);
                cm.gainItem(1672005, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            //End of Android
            }
        }else if(selection == 500) {
            if (cm.getDPoints() > 19999) {     
                cm.gainItem(4031544 , 1);
                cm.setDPoints(-20000);
                cm.dispose();
            }else {
                cm.sendOk(Error);
                cm.dispose();
            }	
        //End of Android
        }else {
            //MSI
            if (one == true) {
                cm.MakeMSIItem(chosen, cm.getChar(), true);//false for a 1-200 range of watt/matt || true for a higher range
                cm.reloadChar();
                cm.setDPoints(-10000);
                cm.msiMessage("获得了全新的捐赠满属物品 "+cm.getPlayer().getName()+"你的名字中包含空格，请输入不含空格的名字");
                cm.dispose();	
            }
            //Name Changer
            if (name != null) {
                if(name.contains(" ")) {
                    cm.sendOk("你输入的名字已经存在");
                    cm.dispose();
                }else {
                    if (cm.isValid(name) == true) {
                        if (cm.ifNameExist(name) == false) {
                            //Changing the name here
                            cm.setDPoints(-10000); 
                            cm.setName(name);
                            cm.dispose();
                        }else {
                            cm.sendOk("你输入的名字包含特殊字符");
                            cm.dispose();
                        }
                    }else {
                        cm.sendOk("你将获得所有");
                        cm.dispose();
                    }
                }
            }
            //Empress equips
            if (one == false) {
                c = selection; 
                for (var i = 0; i < empeq[c].length; i++) 
                    talk+="#L"+i+"##e#i"+empeq[c][i]+":##k#l"; 
                cm.sendSimple("件物品\r\n#r#e你需要点击这些物品中的任意一个来领取。#k#n\r\n "+empeq[c].length+"选择="+talk);
                one = false;
            }
        }
    }else if (status == 4) {
        //Empress item getting process
        if (one == false) {
            if (c >= 5) {
                if (cm.getDPoints() > 499) {//Weapons
                    cm.setDPoints(-500); 
                    var w = empeq[c][selection];
                    //cm.sendOk("C= "+c+"选择= "+selection+"\r\n"+w);
                    cm.gainItem(w, 1);
                    cm.dispose(); 
                }else {
                    cm.sendOk(Error);
                    cm.dispose();
                }
            }else {
                if (cm.getDPoints() > 999) {//Armor
                    cm.setDPoints(-1000); 
                    for (var i = 0; i < empeq[c].length; i++) {
                    var w = empeq[c][i];					
                        cm.gainItem(w, 1);
                    }
                    //var w = empeq[c][selection];
                    //cm.sendOk("C= "+c+"选择= "+selection+"\r\n"+w);
                    cm.dispose(); 
			
                }else {
                    cm.sendOk(Error);
                    cm.dispose();  
                }              
            }	
        }
    }
}