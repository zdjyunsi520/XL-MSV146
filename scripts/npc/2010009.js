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
 * Guild Alliance NPC
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
	//cm.sendOk("公会联盟功能目前正在开发中。");
	//cm.dispose();
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple("你好！我是#b莱纳里奥#k\r\n#b#L0#请告诉我公会联盟是什么？#l\r\n#L1#如何创建公会联盟？#l\r\n#L2#我想创建公会联盟。#l\r\n#L3#我想扩大公会联盟的容量。#l\r\n#L4#我想解散公会联盟。#l");
	} else if (status == 1) {
		choice = selection;
	    if (selection == 0) {
		    cm.sendOk("公会联盟顾名思义，就是多个公会联合组成一个超级团体。我负责管理这些公会联盟。");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendOk("要创建公会联盟，需要两位公会会长组队。队伍的队长将成为公会联盟的盟主。");
			cm.dispose();
		} else if(selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				cm.sendOk("你需要组建一个2人队伍才能创建联盟。"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
				cm.sendOk("你必须拥有公会才能创建公会联盟。");
				cm.dispose();
			} else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
				cm.sendOk("你的队友似乎没有公会。");
				cm.dispose();
			} else {
				var gs = cm.getGuild(cm.getPlayer().getGuildId());
				var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
				if (gs.getAllianceId() > 0) {
					cm.sendOk("如果你已经隶属于其他联盟，则无法创建公会联盟。");
					cm.dispose();
				} else if (gs2.getAllianceId() > 0) {
					cm.sendOk("你的队友已经隶属于一个公会联盟。");
					cm.dispose();
				} else if (cm.partyMembersInMap() < 2) {
					cm.sendOk("请让你的队友来到同一张地图。");
					cm.dispose();
				} else
                			cm.sendYesNo("哦，你有兴趣组建公会联盟吗？");
			}
		} else if (selection == 3) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("扩大容量需要支付1000万金币。确定要继续吗？"); //ExpandGuild Text
			} else {
			    cm.sendOk("只有公会联盟盟主才能扩大联盟容量。");
				cm.dispose();
			}
		} else if(selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("你确定要解散你的公会联盟吗？");
			} else {
				cm.sendOk("只有公会联盟盟主才能解散公会联盟。");
				cm.dispose();
			}
		}
	} else if(status == 2) {
	    if (choice == 2) {
		    cm.sendGetText("现在请输入你的新公会联盟名称。（最多12个字符）");
		} else if (choice == 3) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("无法扩大一个不存在的公会联盟。");
				cm.dispose();
			} else {
				if (cm.addCapacityToAlliance()) {
					cm.sendOk("你已成功扩大了联盟容量。");
				} else {
					cm.sendOk("你的公会联盟容量已经很大了。最大上限为5个公会。");
				}
				cm.dispose();
			}
		} else if (choice == 4) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("无法解散一个不存在的公会联盟。");
				cm.dispose();
			} else {
				if (cm.disbandAlliance()) {
					cm.sendOk("你的公会联盟已解散。");
				} else {
					cm.sendOk("解散公会联盟时发生错误。");
				}
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
	    cm.sendYesNo("#b"+ guildName + "#k将作为你的公会联盟名称？");
	} else if (status == 4) {
			if (!cm.createAlliance(guildName)) {
				cm.sendNext("此名称不可用，请选择另一个。"); //Not real text
				status = 1;
				choice = 2;
			} else
				cm.sendOk("你已成功创建了公会联盟。");
			cm.dispose();
	}
}