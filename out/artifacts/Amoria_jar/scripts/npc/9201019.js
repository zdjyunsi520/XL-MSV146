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
/* Intern Shakihands
	Amoria Random Eye Change
 */
var status = 0;
var beauty = 0;
var price = 1000000;
var mface = Array(20000, 20001, 20003, 20004, 20005, 20006, 20007, 20008, 20018, 20019);
var fface = Array(21018, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21012, 21019);
var facenew = Array();

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
            cm.sendSimple(" 金币！#l\r\n\#L2#我已经有优惠券了！#l " + price + "请慢用！");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= price) {
                    cm.gainMeso(-price);
                    cm.gainItem(5152021, 1);
                    cm.sendOk("你的金币不够购买优惠券！");
                } else {
                    cm.sendOk("如果你使用普通优惠券，你的脸可能会变成随机的新样子...你确定要使用#b#t5152021##k吗？");
                }
                cm.dispose();
            } else if (selection == 2) {
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                    }
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                    }
                }
                cm.sendYesNo("享受你的全新面容吧！");
            }
        }
        else if (status == 2){			
            if (cm.haveItem(5152021) == true){
                cm.gainItem(5152021, -1);
                cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
                cm.sendOk("嗯...看来你没有这个地方专用的优惠券。很抱歉，没有优惠券的话就无法为你做整形手术...");
            } else {
                cm.sendOk("嗯...看来你没有这个地方专用的优惠券。很抱歉，没有优惠券的话就无法为你做整形手术...");
                cm.dispose();
            }
        }
    }
}