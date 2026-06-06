/**
 * @author: Eric
 * @npc: ????
 * @func: Development's Custom PvP Clan System
 * @todo: Implement "Leaving"
*/

var status = 0;
var menu = 0;
var kickedPlayer = 0;

function start() {
	if (cm.getPlayer().warning[12] == true && cm.getPlayer().master > 0) {
		status = 9;
		menu = -1;
		action(1, 0, 0);
	} else {
		status = -1;
		menu = -1;
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		if ((status == 10) && cm.getPlayer().warning[12] == true) {
			var clanLeader = cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().master);
			cleanLeader.dropMessage(5, cm.getPlayer().getName() + " 拒绝了你的请求。");
			cm.getPlayer().warning[12] = false;
			cm.getPlayer().master = 0;
			cm.sendOk("你已拒绝邀请。");
		}
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    }
	if (status == 0) {
		if (cm.getPlayer().getClanId() < 1) {
			cm.sendSimple("#r< #e欢迎来到家族系统！#n >#k\r\n看来你还没有加入家族。你想做什么？#b\r\n#L0#创建家族#l\r\n#L1#家族排行榜#k#l"); 
		} else if (cm.getPlayer().getClanId() > 0 && cm.getPlayer().getId() == cm.getClanLeader()) {
			cm.sendSimple("#r" + ((cm.getClanMessage() == "" || cm.getClanMessage() == "null") ? "                  < #e欢迎来到家族系统！#n >" : "< #e" + cm.getClanMessage() + "#n >") + "#k\r\n你好，#h #，欢迎来到#e" + cm.getClanName() + "#n的族长菜单！#b\r\n#L100#修改家族公告#l\r\n#L101#邀请玩家加入#e" + cm.getClanName() + "#n\r\n#L102#将玩家踢出#e" + cm.getClanName() + "#n\r\n#L103#查看#e" + cm.getClanName() + "#n的花名册\r\n#L104#修改#e" + cm.getClanName() + "#n的家族标签\r\n#L1#家族排行榜#k#l");
		} else {
			cm.sendSimple("#r" + ((cm.getClanMessage() == "" || cm.getClanMessage() == "null") ? "                  < #e欢迎来到家族系统！#n >" : "< #e" + cm.getClanMessage() + "#n >") + "#k\r\n");
		}
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.haveItem(4000999, 750) && cm.getPlayer().getLevel() >= 150) {
				cm.sendGetText("请输入你想创建的家族名称！\r\n");
				menu = 1;
			} else {
				cm.sendOk("创建家族的条件#e#r未#k#n满足！\r\n\r\n"
				+ (cm.getPlayer().getLevel() >= 150 ? "#g" : "#r") + "* 达到150级或以上#k\r\n"
				+ (cm.haveItem(4000999, 750) ? "#g" : "#r") + "* 获得750个 #i4000999:##k\r\n");
				cm.dispose();
			}
		} else if (selection == 1) {
			cm.sendOk("#e官方家族排行榜#n：\r\n" + cm.getClanRanks());
			//"#e1.#n #rFaZe#k\r\n家族等级：1 | 家族成员：1 | 胜场：14,397,012\r\n#e2.#n #rOpTic#k\r\n家族等级：1 | 家族成员：0 | 胜场：13,337\r\n#e3.#n #rSoaR#k\r\n家族等级：1 | 家族成员：0 | 胜场：666\r\n#e4.#n #rObey#k\r\n家族等级：1 | 家族成员：0 | 胜场：9,999\r\n#e5.#n #rSynergy#k\r\n家族等级：1 | 家族成员：0 | 胜场：1,234");
			cm.dispose();
		} else if (selection == 100) {
			menu = 100;
			cm.sendGetText("请在下方输入想要的家族公告。\r\n#r注意：你可以输入' #e/none#n '表示不做更改。#k");
		} else if (selection == 101) {
			menu = 101;
			cm.sendGetText("请输入你想邀请到#e" + cm.getClanName() + "#n.\r\n");
		} else if (selection == 102) {
			menu = 102;
			cm.sendSimple(cm.getClanKickMenu()); 
			//"#e" + cm.getClanName() + "#n的玩家角色名：\r\n你想将谁从#e" + cm.getClanName() + "#n中踢出？#b\r\n#L0#<3\r\n#L1#Kevin\r\n#L2#Paul\r\n#L3#.pulse\r\n#L4#Eric\r\n#L5#Republic");
		} else if (selection == 103) {
			cm.sendNext("#e" + cm.getClanName() + "#n的花名册：#b\r\n" + cm.getClanRoster());
			cm.dispose();
		} else if (selection == 104) {
			menu = 104;
			cm.sendGetText("#r< 当前家族标签：#e" + cm.getClantag() + "#n >#k\r\n为你的家族选择一个#e家族标签#n（你名字前面的前缀）！\r\n");
		} else {
			cm.dispose();
		}
	} else if (status == 2) {
		var textTransfer = cm.getText();
		if (menu == 1) {
			cm.gainItem(4000999, -750);
			cm.sendOk("你的家族#e" + textTransfer + "#n现已生效。\r\n邀请其他玩家加入你，与其他家族一较高下，争取正义与排名！");
			cm.createClan(textTransfer);
			cm.getPlayer().setClanId(cm.getClanIdByName(textTransfer));
			cm.dispose();
		} else if (menu == 100) {
			if (textTransfer.length() < 40) {
				if (textTransfer.equalsIgnoreCase("/none")) {
					cm.sendOk("你的#e家族公告#n未做任何更改。");
					cm.dispose();
					return;
				}
				cm.sendOk("你已将#e家族公告#n更改为以下内容：\r\n#r< #e" + textTransfer + "#n >#k");
				cm.setClanMessage(textTransfer);
				cm.dispose();
			} else {
				cm.sendOk("你的#e家族公告#n最多只能20个字符。");
				cm.dispose();
			}
		} else if (menu == 101) {
			if (textTransfer.length() <= 12) {
				var player = cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(textTransfer);
				if (player != null && player.warning[12] == false && player.master == 0 && player.getClanId() <= 0 && cm.getPlayer() != player) {
					player.warning[12] = true;
					player.master = cm.getPlayer().getId(); // master is useless variable, might as well make use of it
					cm.openNpc(player.getClient(), 2180001);
					cm.sendOk("你已成功向#e发送了#b家族邀请#k。" + player.getName() + "#n!");
				} else {
					cm.sendOk("我们无法找到#e" + textTransfer + "#n。请重试。");
					cm.dispose();
				}
			} else {
				cm.sendOk("我们无法找到#e" + textTransfer + "#n。请重试。");
				cm.dispose();
			}
		} else if (menu == 102) {
			status = 4;
			kickedPlayer = selection;
			cm.sendYesNo("你确定要将#e" + Packages.client.MapleCharacter.getNameById(kickedPlayer) + "#n从#e" + cm.getClanName() + "#n?");
		} else if (menu == 104) {
			if (textTransfer.length() <= 4) {
				cm.sendOk("你已将#e家族标签#n更改为以下内容：#r#e" + textTransfer + "#n#k.");
				cm.setClantag(textTransfer);
				cm.dispose();
			} else {
				cm.sendOk("一个#e家族标签#n最多只能有5个字符。");
				cm.dispose();
			}
		}
	} else if (status == 5) {
		cm.kickPlayerFromClan(kickedPlayer);
		cm.sendOk("你已成功踢出了#e" + Packages.client.MapleCharacter.getNameById(kickedPlayer) + "#n从#e" + cm.getClanName() + "#n.");
		cm.dispose();
	} else if (status == 10) {
		cm.sendAcceptDecline(cm.getClanRequest(cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().master)));
	} else if (status == 11) {
		if (mode > 0) {
			var newLeader = cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().master);
			cm.getPlayer().joinClan(newLeader.getClanId());
			cm.sendOk("你已加入#e" + cm.getClanNameNonStatic(newLeader.getClanId()) + "#n。恭喜！");
			cm.getPlayer().warning[12] = false;
			cm.getPlayer().master = 0;
			cm.dispose();
		}
	}
}