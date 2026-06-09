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
/* Dr. Roberts
	Amoria Random/VIP Eye Color Change.
 */
var status = 0;
var beauty = 0;
var regprice = 1000000;
var vipprice = 1000000;
var colors = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("你想购买哪种优惠券？\r\n#L0#隐形眼镜券，价格");						
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple(" 金币: #i5152025##t5152025##l\r\n#L1#隐形眼镜券，价格 " + regprice + " 金币: #i5152026##t5152026##l " + vipprice + "如果你使用普通优惠券，将随机获得一副隐形眼镜。你确定要使用#b#t5152025##k来改变你的双眼吗？");
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendYesNo("通过我们的专用设备，你可以提前看到治疗后的效果。你想戴哪种隐形眼镜呢？选择你喜欢的款式吧。");
            } else if (selection == 2) {
                beauty = 2;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("享受你的全新隐形眼镜吧！", colors);
            }
        }
        else if (status == 2){
            if (beauty == 1){
                if (cm.haveItem(5152025)){
                    cm.gainItem(5152025, -1);
                    cm.setFace(colors[Math.floor(Math.random() * colors.length)]);
                    cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
                } else {
                    cm.sendOk("请慢用！");
                    cm.dispose();
                }
            }
            if (beauty == 2){
                if (cm.haveItem(5152026)){
                    cm.gainItem(5152026, -1);
                    cm.setFace(colors[selection]);
                    cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
                } else {
                    cm.sendOk("请慢用！");
                    cm.dispose();
                }
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= regprice) {
                    cm.gainMeso(-regprice);
                    cm.gainItem(5152025, 1);
                    cm.sendOk("你的金币不够购买优惠券！");
                    cm.dispose();
                } else if (selection == 1 && cm.getMeso() >= vipprice) {
                    cm.gainMeso(-vipprice);
                    cm.gainItem(5152026, 1);
                    cm.sendOk("你的金币不够购买优惠券！");
                    cm.dispose();
                } else {
                    cm.sendOk("你的金币不够购买优惠券！");
                }
            }
        }
    }
}