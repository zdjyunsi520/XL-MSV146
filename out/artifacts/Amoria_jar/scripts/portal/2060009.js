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
 * �����¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * Translated / Recoded by JakeK from AthenaMS .
 */
function start() {
    var text = "大海将各地连接在一起。步行无法到达的地方可以轻松乘船到达。今天要不要和我们一起搭乘#b海豚出租车#k呢？\r\n";
    if (cm.haveItem(4031242))
        text += "#L0##b使用海豚出租车优惠券#k前往#b锋利的未知之地#k#l";
    text += "#\r\n#L1#支付#b10000金币#k后前往#b药草村#k#l。";
    cm.sendSimple(text);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection == 0) {
            if (!cm.haveItem(4031242)) {
                cm.sendOk("你没有海豚出租车优惠券！"); // need GMS text
            } else {
                cm.gainItem(4031242, -1);
                cm.warp(230030200);
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getMeso() < 10000) {
                cm.sendOk("你需要10000金币！"); // need GMS text
            } else {
                cm.gainMeso(-10000);
                cm.warp(251000100);
            }
        }
    }
    cm.dispose();
}