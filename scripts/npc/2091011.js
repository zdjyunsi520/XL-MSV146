var status = -1;
var sel;
var mapid;
var typed = 0;

function start() {
    mapid = cm.getMapId();
    if (mapid == 925020001) {
        cm.sendSimple("我的师父是武陵最强的存在，而你——想挑战他？别后悔就行。#b\r #L0# 我要独自挑战武陵道场。#l \n\r #L2# 我想获得武公腰带。#l \n\r #L4# 我想看看武陵道场有什么奖励。#l \n\r #L6# 武陵道场是什么？#l \n\r #L8# 我想查看今天还能挑战多少次。#l \n\r #L7##b 我想查看我的困难模式积分和等级。#l");
    } else {
        cm.sendYesNo("什么？你想退出了？");
    }
}

function action(mode, type, selection) {
    if (mapid == 925020001) {
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            sel = selection;
            if (sel == 0) {
                //if first time - Hey there! You! This is your first time here, huh? Well, my master doesn't just meet with anyone. He's a busy man. And judging by your looks, I don't think he'd bother. Ha! But, today's your lucky day... I tell you what, if you can defeat me, I'll allow you to see my Master. So, what do you say?
                //map 925020010
                //spawn dis mobs 9300269 and 9999999
                //time 180
                //mapeffect item id 5120024 - text - Ha! Let's see what you got! I won't let you leave unless you defeat me first!
                typed = 1;
                cm.sendSimple("你可以以三种不同的难度挑战道场：#b普通、困难和排名#k。这样即使是你这样的小虾米也能参与。你需要达到#r90级#k才能进入普通模式，#r120级#k才能进入困难模式，#r130级#k才能进入排名模式。你觉得自己有多强？#b \r\n #L0# 我挺普通的，试试普通模式吧！#l \r\n #L1# 我最近没挨过揍。困难模式！#l \r\n #L2##r 我要参加排名赛！#l");
            }
            if (sel == 2) {//was3
                typed = 2;
                cm.sendYesNo("如果你有#b#i4001620# #t4001620##k，我可以给你一条#b腰带#k。不过这条腰带一周后会消失，所以如果你还想要的话，记得再收集武公徽章。");
            }
            if (sel == 4) {
                typed = 4;
                cm.sendSimple("你可以在任何难度级别收集#t4001620#，不过在#b困难模式#k和#b排名模式#k中会获得更多。当你收集了足够的#t4001620#后，就可以用来兑换#b武公腰带#k。#b \n\r #L0#武公腰带有哪几种？#l \n\r #L1#困难模式可以获得什么奖励，如何获得？#l \n\r #L2#排名模式可以获得什么奖励，如何获得？#l");
                //cm.sendSimple("你将根据在困难模式中的表现获得积分。\r\n#e你目前有#r"+cm.getDojoPoints()+" 积分#b\n\r #L0# #v2022957# #b#z2022957##r（需要50积分）#l \r\n #L1# #v1142386# #b#z1142386##r（需要50积分）#l \r\n #L2##b#e SS级：#i1022135:# #t1022135#（有效期：7天）#r（需要100积分）#b#l \r\n #L3# S级：#i1022136:# #t1022136#（有效期：7天）#r（需要50积分）#l");
            }
            if (sel == 5) {
                typed = 5;
                cm.sendSimple("要在排名模式中获得奖励，你必须进入前50名！你将与其他玩家竞争最佳时间来争夺这些奖励。觉得自己有那个实力？得了吧！不过你还是应该试试。\r\n#e <排名模式奖励：7天有效期>#n#b\n\r #L0# #i1082392:# #t1082392# #r（第1名）#b#l \r\n #L1# #i1082393:# #t1082393# #r（第2-10名）#b#l \r\n #L2# #i1082394:# #t1082394# #r（第11-50名）#l");
            }
            if (sel == 6) {
                cm.sendNext("我们的师父是武陵最强的人。他建造的地方叫做武陵道场，一座高达47层的建筑！你可以随着逐层攀升来锻炼自己。当然，以你的水平想要到达顶层是很困难的。");
                cm.dispose();
            }
            if (sel == 7) {//todo finish
                cm.sendSimple("哎呀，你目前只有#b"+cm.getDojoPoints()+"#k积分。这连B级都不到。要达到B级，你需要100000积分。再努力点吧。假装你是我在锻炼！");
                cm.dispose();
            }
            if (sel == 8) {//todo add check
                var check1 = cm.getPQLog("dojonorm");
                switch (check1) {
                    case 0:
                        check1 = 3;
                        break;
                    case 1:
                        check1 = 2;
                        break;
                    case 2:
                        check1 = 1;
                        break;
                    case 3:
                        check1 = 0;
                        break;
                }
                var check2 = cm.getPQLog("dojohard");
                switch (check2) {
                    case 0:
                        check2 = 3;
                        break;
                    case 1:
                        check2 = 2;
                        break;
                    case 2:
                        check2 = 1;
                        break;
                    case 3:
                        check2 = 0;
                        break;
                }
                var check3 = cm.getPQLog("dojorank");
                switch (check3) {
                    case 0:
                        check3 = 3;
                        break;
                    case 1:
                        check3 = 2;
                        break;
                    case 2:
                        check3 = 1;
                        break;
                    case 3:
                        check3 = 0;
                        break;
                }
                cm.sendOk("你今天还可以挑战 " + check1 + " 次普通模式， " + check2 + " 次困难模式， " + check3 + " 次排名模式。");
                cm.dispose();
            }
        } else if (status == 1) {
            if (typed == 2) {
                typed = 22;
                cm.sendSimple("你想要哪条腰带？\n\r #b#L0##i1132112:# #t1132112# #r（需要25个武公徽章）#b#l#L1##i1132113:# #t1132113# #r（需要50个武公徽章）#b#l \n\r #L2##i1132114:# #t1132114# #r（需要100个武公徽章）#b#l \n\r #L3##i1132115:# #t1132115# #r（需要125个武公徽章）#b#l");
                //cm.dispose();	
            }
            if (typed == 4) {
                if (selection == 0) {
                    cm.sendSimple("在道场中收集#i4001620# #t4001620#来兑换#b武公腰带#k。使用道场中偶尔掉落的#b腰带专用卷轴#k来升级腰带。\r\n #e <武公徽章奖励：15天有效期>#n#b \r\n #i1132112:# #t1132112# #r（需要#t4001620# x 25）#b \r\n #i1132113:# #t1132113# #r（需要#t4001620# x 50）#b \r\n #i1132114:# #t1132114# #r（需要#t4001620# x 100）#b \r\n #i1132115:# #t1132115# #r（需要#t4001620# x125）#k");
                    cm.dispose();
                    //if(cm.getDojoPoints()>=50){
                    //		cm.setDojoRecord(false, true, -50);
                    //		cm.gainItem(2022957,1);
                    //		cm.sendOk("恭喜！兑换成功！");
                    //	}else{
                    //		cm.sendOk("你没有足够的积分。");
                    //		}
                }
                if (selection == 1) {
                    cm.sendSimple("你将根据在困难模式中的表现获得积分。积分每周累计，让你达到某个等级。然后你可以根据所达到的等级获得奖励。以你这样的肌肉，想要有所成就真的得加倍努力……\r\n #e <困难模式奖励> \r\n #b#e SS级：#i1022135:# #t1022135# #r（有效期：7天）#b \r\n S级：#i1022136:# #t1022136# #r（有效期：7天）#b \r\n A级：#i2022957:# #t2022957# x3 #r（有效期：7天）#b \r\n B级：#i2001505:# #t12001505# x10 #r（有效期：7天）#b");
                    cm.dispose();
                    //	if(cm.getDojoPoints()>=50){
                    //		cm.setDojoRecord(false, true, -50);
                    //		cm.gainItem(1142386,1);
                    //		cm.sendOk("恭喜！兑换成功！");
                    //	}else{
                    //		cm.sendOk("你没有足够的积分。");
                    //	}
                }
                if (selection == 2) {
                    cm.sendSimple("要在排名模式中获得奖励，你必须进入前50名！你将与其他玩家竞争最佳时间来争夺这些奖励。觉得自己有那个实力？得了吧！不过你还是应该试试。\r\n #e <排名模式奖励：7天有效期>#n#b \r\n #i1082392:# #t1082392# #r（第1名）#b \r\n #i1082393:# #t1082393# #r（第2-10名）#b \r\n #i1082394:# #t1082394# #r（第11-50名）");
                    cm.dispose();
                    //	if(cm.getDojoPoints()>=100){
                    //		cm.setDojoRecord(false, true, -100);
                    //		cm.gainItem(1022135,1,false,168,true,1,"");
                    //		cm.sendOk("恭喜！兑换成功！");
                    //	}else{
                    //		cm.sendOk("你没有足够的积分。");
                    //	}
                }
                //if (selection == 3) {
                //	if(cm.getDojoPoints()>=50){
                //		cm.setDojoRecord(false, true, -50);
                //		cm.gainItem(1022136,1,false,168,true,1,"");
                //		cm.sendOk("恭喜！兑换成功！");
                //	}else{
                //		cm.sendOk("你没有足够的积分。");
                //	}
                //}
                cm.dispose();
                return;
            }
            if (typed == 5) {
                cm.sendOk("此功能将在排名模式完成后添加。");
                cm.dispose();
//				var dojopm=cm.getChar().getdojopm();
//				if (selection == 0) {
//					if(dojopm==1){
//						if(cm.getbosslog("dojopm",3)==0){
//							cm.delbosslog("dojopm");
//							cm.setbosslog("dojopm");
//							cm.makeitem(1082392,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("恭喜！奖励发放成功！");
//						}else{
//							cm.sendOk("抱歉。每3天一次。");
//						}
//					}else{
//						cm.sendOk("抱歉。你的排名："+cm.getChar().getdojopm()+"#r（注意：如果排名=0则表示未上榜。）");
//					}
//				}
//				if (selection == 1) {
//					if(dojopm>=2 && dojopm<=5){
//						if(cm.getbosslog("dojopm",3)==0){
//							cm.delbosslog("dojopm");
//							cm.setbosslog("dojopm");
//							cm.makeitem(1082393,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("恭喜！奖励发放成功！");
//						}else{
//							cm.sendOk("抱歉。每3天一次。");
//						}
//					}else{
//						cm.sendOk("抱歉。你的排名："+cm.getChar().getdojopm()+"#r（注意：如果排名=0则表示未上榜。）");
//					}
//				}
//				if (selection == 2) {
//					if(dojopm>=6 && dojopm<=10){
//						if(cm.getPQLog("dojopm",3)==0){//getbosslog
//							//cm.delbosslog("dojopm");
//							cm.setPQLog("dojopm");//setbosslog
//							cm.makeitem(1082394,0,0,0,0,0,0,1,3,19,"");
//							cm.sendOk("恭喜！奖励发放成功！");
//						}else{
//							cm.sendOk("抱歉。每3天一次。");
//						}
//					}else{
//						cm.sendOk("抱歉。你的排名："+cm.getChar().getdojopm()+"#r（注意：如果排名=0则表示未上榜。）");
//					}
//				}
//				cm.dispose();
//				return
            }
            if (typed == 1) {
                if (selection == 0) {
                    if (cm.getChar().getLevel() >= 90) {
                        if (cm.getPQLog("dojonorm") >= 3) {
                            cm.sendOk("抱歉。每天只能挑战3次。");
                        } else {
                            cm.setPQLog("dojonorm");
                            cm.start_DojoAgent(true, false, 925020100);
                        }
                    } else {
                        cm.sendOk("你那等级就想挑战普通模式？拜托。你至少需要达到#r90级#k。回去多喝点蛋白质奶昔、多锻炼锻炼再来吧，好吗？");
                    }
                    cm.dispose();
                }
                if (selection == 1) {
                    if (cm.getChar().getLevel() >= 120) {
                        if (cm.getPQLog("dojohard") >= 3) {
                            cm.sendOk("抱歉。每天只能挑战3次。");
                        } else {
                            cm.setPQLog("dojohard");
                            cm.start_DojoAgent(true, false, 925030100);
                        }
                    } else {
                        cm.sendOk("你那等级就想挑战困难模式？拜托。你至少需要达到#r120级#k。回去多喝点蛋白质奶昔、多锻炼锻炼再来吧，好吗？");
                    }
                    cm.dispose();
                }
                if (selection == 2) {
                    if (cm.getChar().getLevel() >= 130) {
                        if (cm.getPQLog("dojorank") >= 3) {
                            cm.sendOk("抱歉。每天只能挑战3次。");
                        } else {
                            cm.sendOk("抱歉，此模式仍在开发中。");
                            cm.dispose();
                            //cm.setPQLog("dojorank");
                            //cm.start_DojoAgent(true, false, 925040100);
                        }
                    } else {
                        cm.sendOk("你那等级就想挑战排名模式？拜托。你至少需要达到#r130级#k。回去多喝点蛋白质奶昔、多锻炼锻炼再来吧，好吗？");
                    }
                    cm.dispose();
                }
                return;
            }
        }
     else if (status == 2) {
        if (typed == 22) {
            var price = [selection + (selection < 2 ? 1 : 2)] * 25;
            var item = 1132112 + selection;
            if (!cm.haveItem(4001620, price)) {
                cm.sendOk("你没有足够的#t4001620#来兑换#t" + item  + ". ");
                cm.dispose();
                return;
            }
            cm.gainItem(4001620, -price);
            cm.gainItem(item, 1, false, 168, true, 1, "");
            cm.sendOk("Enjoy.");
            cm.dispose();
            return;
        }
     }
     //cm.warp(925020002);
       // cm.dispose();
    }
}

function get_restinFieldID(id) {
    var idd = 925020002;
    switch (id) {
        case 1:
            idd = 925020600;
            break;
        case 2:
            idd = 925021200;
            break;
        case 3:
            idd = 925021800;
            break;
        case 4:
            idd = 925022400;
            break;
        case 5:
            idd = 925023000;
            break;
        case 6:
            idd = 925023600;
            break;
    }
    for (var i = 0; i < 10; i++) {
        var canenterr = true;
        for (var x = 1; x < 39; x++) {
            var map = cm.getMap(925020000 + 100 * x + i);
            if (map.getCharactersSize() > 0) {
                canenterr = false;
                break;
            }
        }
        if (canenterr) {
            idd += i;
            break;
        }
    }
    return idd;
}

function get_stageId(mapid) {
    if (mapid >= 925020600 && mapid <= 925020614) {
        return 1;
    } else if (mapid >= 925021200 && mapid <= 925021214) {
        return 2;
    } else if (mapid >= 925021800 && mapid <= 925021814) {
        return 3;
    } else if (mapid >= 925022400 && mapid <= 925022414) {
        return 4;
    } else if (mapid >= 925023000 && mapid <= 9250213014) {
        return 5;
    } else if (mapid >= 925023600 && mapid <= 925023614) {
        return 6;
    }
    return 0;
}

function isRestingSpot(id) {
    return (get_stageId(id) > 0);
}