var status = -1;
var nitems = Array("20000点券", "#v2340000#白卷轴（70级以上）", "#v2049100#混沌卷轴 x5（70级以上）", "#v5220000#转蛋券 x25", "#v5050000#AP重置 x5", "#v5050000#AP重置 x26", "#v5062000#奇迹方块 x4", "#v5062000#奇迹方块 x21", "#v2022179#黑苹果 x4", "#v2022179#黑苹果 x21", "#v5062001#高级奇迹方块 x2", "#v2530000#幸运日（70级以上）", "#v2531000#保护卷轴（70级以上）");
var np = Array(1, 5, 2, 1, 1, 5, 1, 5, 1, 5, 9, 5, 10);
var ditems = Array("#v5211067#1.2倍经验卡（1天）", "#v5211068#1.5倍经验卡（1天）", "#v5360000#2倍掉落/枫币卡（1天）", "#v4030004#分身（1天，不可交易）", "#v5680021#椅子转蛋券");
var dp = Array(4, 8, 3, 4, 4, 3);
var items = [
/*Common*/ [[2340000, 1, 10], [2049100, 5, 4], [5220000, 25, 2], [5050000, 6, 2], [5050000, 31, 10], [5062000, 4, 2], [5062000, 21, 10], [2022179, 3, 4], [2022179, 10, 12], [5062001, 3, 7], [2530000, 1, 10], [2531000, 1, 20], [4310015, 3, 7], [5062002, 5, 11], [5062003, 2, 11], [2049004, 1, 4]],
/*Special*/ [[5211046, 4, 3], [5360000, 4, 2], [5211046, 12, 6], [5360000, 12, 5], [5211046, 24, 10], [5360000, 24, 8], [4030004, 24, 6], [2501000, -1, 70], [5051001, -1, 35], [2450043, -1, 2], [2022531, -1, 2], [2022976, -1, 2], [5590000, 72, 5]/*, [2048203, -1, 35]*//*, [2049605, -1, 35]*/, [4031864, 4, 4], [4031864, 12, 8], [4031864, 24, 14], [5680021, -1, 2]]
];
var itemowner = "Rental";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("你好！我是 #r#e投票积分NPC#n#k。如果你在我们的网站上投过票，每次投票都会获得一个积分！我看到你有 #e#r" + cm.getPlayer().getVPoints() + "#n#k 投票积分！我可以帮你用积分兑换很酷的东西！你想要什么...？\r\n\r\n#b#L0#兑换普通物品#l\r\n#L1#兑换特殊物品#l\r\n#L2#额外吊坠槽（7天）需要20投票积分#l\r\n#L3#用积分兑换好友栏位#l#k");
    } else if (status == 1) {
        status += selection;
        var selStr;
        var extra = "";
        var extral = 0;
        if (selection == 0) {
            selStr = "#r普通物品？#k 好的，这是我的选择...\r\n\r\n";
            extra += "#b#L0#用1积分兑换5000点券#l#k\r\n";
            extra += "#b#L1#用2积分兑换11000点券#l#k\r\n";
            extra += "#b#L2#用1积分兑换2人气#l#k\r\n";
            extra += "#b#L3#用2积分兑换5人气#l#k\r\n";
            extra += "#b#L4#用3积分兑换11人气#l#k\r\n";
            extral = 5; //selections length
        } else if (selection == 1) {
            selStr = "#r特殊物品？#k 好的，这些是你在其他地方得不到的物品。这是我的选择...\r\n\r\n";
        } else if (selection == 2) {
            if (cm.getPlayer().getVPoints() < 20) {
                cm.sendOk("你的投票积分不够。你只有 " + cm.getPlayer().getVPoints());
                cm.dispose();
                return;
            }
            cm.sendYesNo("一旦你确认此操作，就无法撤回！你确定要花20投票积分购买额外吊坠槽（7天）吗？完成后，请务必重新登录以使其生效！ ");
        } else if (selection == 3) {
            if (cm.getBuddyCapacity() < 100) {
                cm.sendOk("你只能在已拥有100个好友栏位时购买额外好友栏位。");
                cm.dispose();
                return;
            }
            cm.sendSimple("你想要多少个好友栏位？\r\n#L5#额外5个栏位 需要1投票积分#l\r\n#L15#额外15个栏位 需要2投票积分#l\r\n#L25#额外25个栏位 需要3投票积分#l");
        } else {
            cm.dispose();
            return;
        }
        if (selection == 0 || selection == 1) {
            selStr += extra;
            for (var i = 0 + extral; i < items[selection].length; i++) {
                var a = items[selection][i][0];
                var b = items[selection][i][1];
                var c = items[selection][i][2];
                selStr += "#b#L" + i + "#用 " + c + " 积分兑换 #v" + a + "#" + getSpecialName(a) + (selection == 1 ? "" : " x " + b) + " ";
                if ((c == 2340000 || c == 2049100 || c == 2022179 || c == 5062001 || c == 2530000 || c == 2531000) && cm.getPlayer().getLevel() < 70) {
                    selStr += "（70级以上）";
                }
                if (selection == 1 && b > 0) {
                    if (b > 24) {
                        selStr += "(" + b / 24 + " 天）";
                    } else {
                        selStr += "(" + b + " 小时）";
                    }
                }
                selStr += "#l#k\r\n";
            }
            cm.sendSimple(selStr);
        }
    } else if (status == 2 || status == 3) {
        if (cm.getPlayer().getVPoints() < items[status - 2][selection][2]) {
            cm.sendOk("你的投票积分不够。你只有 " + cm.getPlayer().getVPoints());
        } else {
            if ((selection == 0 || selection == 1) && (status - 2) != 1) {
                if (cm.getPlayer().getCSPoints(1) + (selection == 0 ? 5000 : 11000) > (2147473647)) { //integer.max_value
                    cm.sendOk("你的点券太多了。");
                    cm.dispose();
                    return;
                } else {
                    cm.getPlayer().modifyCSPoints(1, (selection == 0 ? 5000 : 11000) * 2, false);
                }
            } else if ((selection == 2 || selection == 3 || selection == 4) && (status - 2) != 1) {
                if (cm.getPlayer().getFame() + (selection == 0 ? 2 : selection == 0 ? 5 : 11) > (32767)) { //short.max_value
                    cm.sendOk("你的人气值太高了。");
                    cm.dispose();
                    return;
                } else {
                    cm.getPlayer().addFame(selection == 0 ? 2 : selection == 0 ? 5 : 11);
                }
            } else {
                if (selection + 1 > items[status - 2].length) {
                    cm.sendOk("检测到作弊行为");
                    cm.dispose();
                    return;
                }
                var item = items[status - 2][selection][0];
                if ((item == 2340000 || item == 2049100 || item == 2022179 || item == 5062001 || item == 2530000 || item == 2531000) && cm.getPlayer().getLevel() < 70) {
                    cm.sendOk("你必须达到70级以上才能获得此物品。");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(items[status - 2][selection][0], (status - 2) == 1 ? 1 : items[status - 2][selection][1])) {
                    cm.sendOk("你的物品太多了。");
                    cm.dispose();
                    return;
                }
                if ((status - 2) == 1 && items[status - 2][selection][1] > -1) {
                    cm.gainItemPeriod(items[status - 2][selection][0], 1, items[status - 2][selection][1], true, itemowner);
                } else {
                    cm.gainItem(items[status - 2][selection][0], (status - 2) == 1 ? 1 : items[status - 2][selection][1]);
                }
            }
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - items[status - 2][selection][2]);
            cm.sendOk("感谢购买~");
        }
        cm.dispose();
    } else if (status == 4) {
        cm.addPendantSlot(7);
        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 20);
        cm.sendOk("感谢购买~");
        cm.dispose();
    } else if (status == 5) {
        if (selection + cm.getBuddyCapacity() >= 200) {
            cm.sendOk("你的好友栏位不能超过200个。");
            cm.dispose();
            return;
        }
        var vp;
        switch (selection) {
            case 5:
                vp = 1;
                break;
            case 15:
                vp = 2;
                break;
            case 25:
                vp = 3;
                break;
            default:
                cm.dispose();
                return;
        }
        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - vp);
        cm.updateBuddyCapacity(cm.getBuddyCapacity() + selection);
        cm.showMessage(7, "你失去了 " + vp + " 投票积分。");
        cm.sendOk("感谢购买~");
        cm.dispose();
    }
}

function getSpecialName(id) {
    if (id / 10000 == 421) {
        return "2倍经验卡";
    }
    if (id / 10000 == 536) {
        return "2倍掉落卡";
    }
    if (id / 10000 == 245) {
        return "2倍经验（1小时）（与家族效果不叠加）";
    }
    if (id / 10000 == 202) {
        return "2倍掉落（1小时）（与家族效果不叠加）";
    }
    if (id == 2022976) {
        return "1.5倍枫币（40分钟）（与家族效果不叠加）";
    }
    if (id== 5680021) {
	return "椅子转蛋券";
    }
    if (id == 4030004) {
        return "Clone";
    }
    if (id == 4031864) {
        return "2倍NX点券";
    }
    return "#t" + id + "#";
}