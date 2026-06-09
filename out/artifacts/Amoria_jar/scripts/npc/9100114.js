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
/*
 * Gachapon Script 
*/

var ids = [1382001,1002064,1050049,1302027,1051023,1332013,1312001,1040080,1061087,1050054,1051047, 1312030,1050008,1051027,1051055,1372003,1061083,1050055,1442017,1442009,1372010,2022113, 1302019,1051017,1002245,1002084,1050056,1422005,2000005,1002028,2002018,1050003,1002143, 1322010];
var status = 0;

function start() {
    if (cm.haveItem(5451000)) {
        cm.gainItem(5451000, -1);
        cm.processGachapon(ids, true);
        cm.dispose();
    } else if (cm.haveItem(5220000))
        cm.sendYesNo("欢迎来到");
    else {
        cm.sendSimple("转蛋机。有什么我可以帮你的？\r\n\r\n#L0#转蛋机是什么？#l\r\n#L1#在哪里可以买到转蛋券？#l " + cm.getPlayer().getMap().getMapName() + "使用转蛋机可以获得稀有的卷轴、装备、椅子、技能书和其他酷炫物品！你只需要一张#b转蛋券#k就有机会获得各种随机物品。");
    }
}

function action(mode, type, selection){
    if (mode == 1 && cm.haveItem(5220000)) {
        cm.processGachapon(ids, false);
        cm.dispose();
    } else {
        if (mode > 0) {
            status++;
            if (selection == 0) {
                cm.sendNext("转蛋券可以在#r点券商店#k中购买，使用NX或枫叶点数即可。点击屏幕右下角红色的SHOP按钮进入#r点券商店#k购买票券。");
            } else if (selection == 1) {
                cm.sendNext("你可以从");
                cm.dispose();
            } else if (status == 2) {
                cm.sendNext("转蛋机中获得各种物品，但你最有可能获得的是与该地区相关的物品和卷轴，因为 " + cm.getPlayer().getMap().getMapName() + "是这个小镇的特色。 " + cm.getPlayer().getMap().getMapName() + "是这个小镇的特色。");
                cm.dispose();
            }
        }
    }
}