/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
* @Author : iAkira/Kevintjuh93
**/
var status = 0; 
var selected = 0;

function start() {
	if (cm.getPlayer().getMapId() == 100000000) {
		cm.sendNext("那里！你看到了吗？没看到？一个UFO刚刚飞过...在那！！看，有人被UFO拖走了...啊啊啊，是卡卡！#r卡卡刚刚被UFO绑架了！#k");
	} else if (cm.getPlayer().getMapId() == 922240200) {
		cm.sendSimple("你有什么要说的吗...？#b\b\r\n#L0#我想去营救卡卡。#l\r\n#L1#我想去太空矿场。#l");
	} else if (cm.getPlayer().getMapId() >= 922240000 && cm.getPlayer().getMapId() <= 922240019) {
		cm.sendYesNo("失败了也没关系。你有3次机会。你确定要放弃吗？"); 
	} else if (cm.getPlayer().getMapId() >= 922240100 && cm.getPlayer().getMapId() <= 922240119) {
		var text = "你费了很大力气去营救卡卡，但看来我们又回到了起点。 ";				
		var rgaga = cm.getPlayer().getEvents().getGagaRescue();
		if (rgaga.getCompleted() == 10 || rgaga.getCompleted() == 20) {
			text += "请不要在卡卡被救出之前放弃。为了感谢你到目前为止的付出，我给了你一艘太空飞船。虽然有些破旧，但应该还能用。请查看你的#b技能窗口#k。";
			rgaga.giveSkill(cm.getPlayer());
		} else 
			text += "我们回去吧。";
					
		cm.sendNext(text); 
	}
}

function action(m,t,s) { 
	if (m > 0) {
		status++; 
		if (cm.getPlayer().getMapId() == 100000000) { // warper completed
			if (status == 1) {
				if (cm.getPlayer().getLevel() >= 12) 
					cm.sendYesNo("现在怎么办？虽然还只是传言，但...我听说被外星人绑架后会发生可怕的事情...也许卡卡正在经历这些！拜托，请一定要救救卡卡！\r\n #b卡卡可能有点优柔寡断和迷糊，但#k他真的有一颗善良的心。我不能让他遭遇不测。对了！月亮上的爷爷可能知道怎么救他！我会把你送到月球上，请去找爷爷并营救卡卡");
				else 
					cm.sendOk("哦！看来你还达不到救卡卡的等级要求。请在达到12级或以上后再来。");
          
			} else if (status == 2)
				cm.sendNext("非常感谢。请营救卡卡！月亮上的爷爷会帮助你的。");
			else if (status == 3) {
				cm.warp(922240200); 
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 922240200) {
			if (status == 1) {
				if(s == 0) {
					selected = 1;
					cm.sendNext("欢迎！我从月兔宝宝那里听说了发生的事情，我很高兴你来了，因为我正计划请求帮助。卡卡是我的朋友，他以前帮助过我，也经常来问候。不幸的是，他被外星人绑架了。"); 
				} else {
					selected = 2;
					cm.sendYesNo("在太空矿场，你可以找到一种叫做#b加密水晶#k的特殊矿石，它蕴含着太空的神秘力量。#b加密水晶#l通常是翠绿色的，但如果被太空飞船的#b太空光束#k击中就会变成棕色。记住，为了挫败这个外星阴谋，#b需要10颗棕色加密水晶和10颗翠绿加密水晶#k。但即使只有#b1颗加密水晶#k也能帮上忙，请尽可能多地带给我。哦，还有一件事！太空矿场由太空变形怪守护。它们因为#b加密水晶#k的力量变得极其强大，所以不要试图击败它们。只需专注于快速收集水晶。"); 
				} 
			} else if (status == 2) {
				if(selected == 1) {
					cm.sendYesNo("如果我们就这样把卡卡留给外星人，他会遭遇可怕的事情！我借给你一艘月兔们用于旅行的太空飞船，这样你就可以去营救卡卡了。#b虽然他有时可能显得有些优柔寡断、迟钝和不成熟#k，但他真的是个好人。你想现在去营救他吗？");
				} else if(selected == 2) { 
					cm.sendOk("尚未编写，f4。"); 
					cm.dispose();
				}
			} else  if (status == 3) {
				var number = -1;
				for (var i = 0; i < 20; i++) {
					var mapFactory = cm.getClient().getChannelServer().getMapFactory();
					if (mapFactory.getMap(922240000 + i).getCharacters().isEmpty()) {
						number = i;
						break;
					}	    
				}
				if (number > -1) 
					cm.warp(922240000 + number);
				else 
					cm.sendOk("目前没有空闲的地图，请稍后再试。");
				
				cm.dispose();
			}
		} else if ((cm.getPlayer().getMapId() >= 922240000 && cm.getPlayer().getMapId() <= 922240019) || (cm.getPlayer().getMapId() >= 922240100 && cm.getPlayer().getMapId() <= 922240119)) {
			cm.warp(922240200);
			cm.dispose();
		}
	} else if (m < 1) {
		if(m == 0) {
			if (cm.getPlayer().getMapId() == 922240200)  {
				cm.sendOk("太遗憾了，等你准备好了再来吧。");
			}
		}
		cm.dispose();
	}
}