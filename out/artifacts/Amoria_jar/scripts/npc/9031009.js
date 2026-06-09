function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1) 
        status++;

    else 
        status--;
    if (status == 0) { 
    var marr = cm.getQuestRecord(160150);
    var data = marr.getCustomData();
	var time = parseInt(data);
	//      cm.sendSimple("欢迎来到EternalStory v144.3\r\n请在下方选择你的职业！ \r\n-#b选择职业后，系统会根据你的职业发放武器，部分职业可能不会获得武器\r\n感谢你的加入，祝你游戏愉快！\r\n#b#L100#冒险家#l\r\n#b#L101#反抗者#l\r\n#L102#暗影双刀#l\r\n#L103#幻影#l\r\n#L104#米哈尔#l\r\n#L105#骑士团#l\r\n#L106#凯撒#l\r\n#L107#夜光#l\r\n#L108#天使祝福者#l\r\n#L109#杰诺#l\r\n#L110#Mercedes#l\r\n#L111#Jett#l\r\n#L112#恶魔复仇者#l\r\n#L113#恶魔猎手#l\r\n#L114#花狐#l\r\n#L115#隼人#l\r\n#L116#阿兰#l\r\n#L117#埃文#l\r\n#L118#炮手#l");
	//	  cm.dispose();
        cm.sendSimple("使用地图右侧的传送口去练级吧！");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100: //Explorer
               //    cm.warp(321100000);
			       cm.changeJob(0);
				   cm.teachSkill(0000190, 1, 1);
				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
				   cm.warp(100000000);
				 //  cm.sendNext("你必须切换频道才能查看暗影双刀技能组 \r\n20级时去找 Lady Syl 进行职业转职");
				   cm.dispose();
                    break;
		        case 101: //Resistance
                 //    cm.warp(322000000);
				     cm.changeJob(3000);
					 cm.teachSkill(30000190, 1, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
				//	 cm.sendNext("你必须切换频道才能查看暗影双刀技能组 \r\n20级时去找 Lady Syl 进行职业转职");
					 cm.dispose();
                    break;
		        case 102: //DualBlade
			         cm.setSubcategory(1);
					 cm.changeJob(400);
					 cm.maxSkillsByJob();
					 cm.teachSkill(0000190, 1, 1);
					 cm.gainItem(1342000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
				//	 cm.warp(100000000);
					 cm.sendNext("好了，别让任何人知道我让你直接跳到了30级，否则我打断你的腿，明白吗？");
					 cm.dispose();
					 break;
			    case 103: //Phantom
					 cm.changeJob(2400);
					 cm.teachSkill(20030206, 1, 1);
					 cm.teachSkill(20030207, 1, 1);
					 cm.teachSkill(20031203, 1, 1);
					 cm.teachSkill(20030204, 1, 1);
					 cm.teachSkill(20030190, 1, 1);
					 cm.teachSkill(20031207, 1, 1);
					 cm.teachSkill(20030206, 1, 1);
					 cm.teachSkill(20031208, 1, 1);
					 cm.gainItem(1362000, 1);
					 cm.gainItem(1352100, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					// cm.teachSkill(30010242, 1, 1);
					 cm.dispose();
					 break;
				case 104: //Mihile
					 cm.changeJob(5100);
					 cm.teachSkill(50000190, 1, 1);
					 cm.teachSkill(50001214, 1, 1);
					 cm.teachSkill(50000074, 1, 1);
					 cm.teachSkill(50001075, 1, 1);
					 cm.gainItem(1302000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
				//	 cm.teachSkill(20030190, 1, 1);
					 cm.dispose();
					 break;
				case 105: //Cygnus
					 cm.changeJob(1000);
					 cm.teachSkill(10000190, 1, 1); //10000074
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					// cm.teachSkill(10000074, 1, 1);
					 cm.dispose();
					 break;
				case 106: //Kaiser
					 cm.changeJob(6100);
					 cm.teachSkill(60000222, 1, 1);
					 cm.teachSkill(60000219, 1, 1);
					 cm.teachSkill(60000220, 1, 1);
					 cm.teachSkill(60000221, 1, 1);
					 cm.teachSkill(60001218, 1, 1);
					 cm.teachSkill(60001216, 1, 1);
					 cm.teachSkill(60001217, 1, 1);
					 cm.teachSkill(60000190, 1, 1);
					 cm.gainItem(1402000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					 cm.dispose();
					 break;
				case 107: //Luminous
					 cm.changeJob(2700);
					 cm.teachSkill(20040190, 1, 1);
					 cm.teachSkill(20040217, 1, 1);
					 cm.teachSkill(20040218, 1, 1);
					 cm.teachSkill(20040219, 1, 1);
					 cm.teachSkill(20041239, 1, 1);
					 cm.teachSkill(20040220, 1, 1);
					 cm.teachSkill(20040221, 1, 1);
					 cm.teachSkill(20041222, 1, 1);
					 cm.teachSkill(27001100, 1, 1);
					 cm.teachSkill(27001201, 1, 1);
					 cm.gainItem(1212001, 1);
					 cm.gainItem(1352400, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					 cm.dispose();
					 break;
					 case 108: //Angellic Buster
					 cm.changeJob(6500);
					 cm.teachSkill(60010190, 1, 1);
					 cm.teachSkill(60011216, 1, 1);
					 cm.teachSkill(60010217, 1, 1);
					 cm.teachSkill(60011218, 1, 1);
					 cm.teachSkill(60011219, 1, 1);
					 cm.teachSkill(60011220, 1, 1);
					 cm.teachSkill(60011221, 1, 1);
					 cm.teachSkill(60011222, 1, 1);
					 cm.gainItem(1222000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					// cm.teachSkill(27001201, 1, 1);					 
					 cm.dispose();
					 break;
					 case 109: //Xenon
					 cm.changeJob(3600);
					 cm.teachSkill(30020190, 1, 1);
					 cm.teachSkill(30020232, 1, 1);
					 cm.teachSkill(30020233, 1, 1);
					 cm.teachSkill(30020234, 1, 1);
					 cm.teachSkill(30021235, 1, 1);
					 cm.teachSkill(30021236, 1, 1);
					 cm.teachSkill(30020240, 1, 1);
					 cm.gainItem(1242000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					// cm.teachSkill(60011222, 1, 1);
					// cm.teachSkill(27001201, 1, 1);					 
					 cm.dispose();
					 break;
				 case 110: //Mercedes
					 cm.changeJob(2300);
					 cm.teachSkill(20020109, 1, 1);
					 cm.teachSkill(20020111, 1, 1);
					 cm.teachSkill(20020112, 1, 1);
					 cm.teachSkill(20020190, 1, 1);
					 cm.teachSkill(20021110, 1, 1);
					 cm.gainItem(1522000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					// cm.teachSkill(30021236, 1, 1);
					// cm.teachSkill(30020240, 1, 1);
					// cm.teachSkill(60011222, 1, 1);
					// cm.teachSkill(27001201, 1, 1);					 
					 cm.dispose();
					 break;
				 case 111: //Jett
					 cm.changeJob(508);
					 cm.teachSkill(0000190, 1, 1);
					 cm.gainItem(1492000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					 cm.dispose();
					 break;
				 case 112: //Demon Avenger
					 cm.changeJob(3101);
					 cm.teachSkill(30010230, 1, 1);
					 cm.teachSkill(30010185, 1, 1);
					 cm.teachSkill(30010190, 1, 1);
					 cm.teachSkill(30010110, 1, 1);
					 cm.teachSkill(30010241, 1, 1);
					 cm.teachSkill(30010242, 1, 1);
					 cm.gainItem(1232000, 1);
					 cm.maxSkillsByJob();
				   cm.gainExp(16); //2
				   cm.gainExp(36); //3
				   cm.gainExp(58); //4
				   cm.gainExp(93);//5
				   cm.gainExp(135);//6
				   cm.gainExp(373);//7
				   cm.gainExp(561);//8
				   cm.gainExp(841);//9
				   cm.gainExp(1243);  //10
				   cm.gainExp(1243); //11
				   cm.gainExp(1243); //12
				   cm.gainExp(1243); //13
				   cm.gainExp(1243); //14
				   cm.gainExp(1243); //15
				   cm.gainExp(1491); //16
				   cm.gainExp(1789); //17
				   cm.gainExp(2146); //18
				   cm.gainExp(2575); //19
				   cm.gainExp(3089); //20
				   cm.gainExp(3706); //21
				   cm.gainExp(4447); //22
				   cm.gainExp(5336); //23
				   cm.gainExp(5403); //24
				   cm.gainExp(7683); //25
				   cm.gainExp(9219); //26
				   cm.gainExp(11062); //27
				   cm.gainExp(13274); //28
				   cm.gainExp(15928); //29
				   cm.gainExp(20213); //30
				   cm.maxSkillsByJob();
					 cm.warp(100000000);
					  cm.sendNext("好了，别让任何人知道我让你直接跳到了30级，否则我打断你的腿，明白吗？");
					 cm.dispose();
					 break;
				 case 113: //Demon Slayer
					 cm.changeJob(3100);
					 cm.teachSkill(30010112, 1, 1);
					 cm.teachSkill(30010111, 1, 1);
					 cm.teachSkill(30010190, 1, 1);
					 cm.teachSkill(30010110, 1, 1);
					 cm.teachSkill(30010185, 1, 1);
				//	 cm.teachSkill(30010242, 1, 1);	
                     cm.gainItem(1322122, 1);
                      				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
                     cm.warp(100000000);					 
					 cm.dispose();
					 break;
		    	 case 114: //Kanna
					 cm.changeJob(4200);
					 cm.teachSkill(40020001, 1, 1);
					 cm.teachSkill(40020002, 1, 1);
					 cm.teachSkill(40020109, 1, 1);
					 cm.teachSkill(40021023, 1, 1);
				//	 cm.teachSkill(30010185, 1, 1);
				//	 cm.teachSkill(30010242, 1, 1);	
                     cm.gainItem(1552000, 1);	
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
                     cm.warp(100000000);					 
					 cm.dispose();
					 break;
		     	 case 115: //Hayato
					 cm.changeJob(4100);
					 cm.teachSkill(40010001, 1, 1);
					 cm.teachSkill(40010000, 1, 1);
					 cm.teachSkill(40010067, 1, 1);
					 cm.teachSkill(40011002, 1, 1);
				//	 cm.teachSkill(30010185, 1, 1);
				//	 cm.teachSkill(30010242, 1, 1);
                     cm.gainItem(1542000, 1);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
                      cm.warp(100000000);					 
					 cm.dispose();
					 break;
				 case 116: //Aran
					 cm.changeJob(2100);
					 cm.teachSkill(20000190, 1, 1);
					 cm.teachSkill(20000194, 1, 1);
				//	 cm.teachSkill(40010067, 1, 1);
				//	 cm.teachSkill(40011002, 1, 1);
				//	 cm.teachSkill(30010185, 1, 1);
				//	 cm.teachSkill(30010242, 1, 1);	
								   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
                     cm.warp(100000000);				
					 cm.dispose();
					 break;
					 case 117: //Evan
					 cm.changeJob(2200);
					 cm.teachSkill(20010194, 1, 1);
					 cm.teachSkill(20010190, 1, 1);
				//	 cm.teachSkill(40010067, 1, 1);
				//	 cm.teachSkill(40011002, 1, 1);
				//	 cm.teachSkill(30010185, 1, 1);
				//	 cm.teachSkill(30010242, 1, 1);	
								   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
				     cm.warp(100000000);
					 cm.dispose();
					 break;
					 case 118: //Cannoneer
					// cm.setSubcategory(1);
					 cm.teachSkill(0000110, 1, 1);
					 cm.teachSkill(0000190, 1, 1);
					 cm.changeJob(501);
					 				   cm.gainExp(16);
				   cm.gainExp(36);
				   cm.gainExp(58);
				   cm.gainExp(93);
				   cm.gainExp(135);
				   cm.gainExp(373);
				   cm.gainExp(561);
				   cm.gainExp(841);
				   cm.gainExp(1243);  
					 cm.warp(100000000);
					 cm.dispose();
					 break;
            }
        }
}
}