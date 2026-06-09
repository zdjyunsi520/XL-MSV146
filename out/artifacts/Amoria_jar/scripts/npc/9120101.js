/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Unkown
	Showa Town VIP Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30000, 30120, 30140, 30190, 30210, 30360, 30220, 30370, 30400, 30440, 30790, 30800, 30810, 30770, 30760);
var fhair = Array(31030, 31050, 31000, 31070, 31100, 31120, 31130, 31250, 31340, 31680, 31350, 31400, 31650, 31550, 31800);
var hairnew = Array();

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
            cm.sendSimple("你想购买哪种优惠券？\r\n#L0#剪发券，价格");
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple(" 金币: #i5150009##t5150009##l\r\n#L1#染发券，价格 " + hairprice + " 金币: #i5151009##t5151009##l " + haircolorprice + "我可以完全改变你的发型，让你看起来非常棒。要不要换个新发型呢？如果你有#b#t5150009##k，我来帮你更换。选择你喜欢的发型吧～");
            } else if (selection == 1) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()
                            % 10));
                    }
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair()
                            % 10));
                    }
                }
                cm.sendStyle("我可以完全改变你的发色，让你看起来非常棒。要不要换个新发色呢？有了#b#t51051009##k，我来帮你更换。选择你喜欢的颜色吧。", hairnew);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()
                    /10)*10;
                for(var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("享受你的全新发型吧！", haircolor);
            }
        }
        else if (status == 2){
            cm.dispose();
            if (beauty == 1){
                if (cm.haveItem(5150009)){
                    cm.gainItem(5150009, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你剪发。抱歉...");
                } else {
                    cm.sendOk("享受你的全新发色吧！");
                }
            }
            if (beauty == 2){
                if (cm.haveItem(5151009)){
                    cm.gainItem(5151009, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
                } else {
                    cm.sendOk("请慢用！");
                }
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= hairprice) {
                    cm.gainMeso(-hairprice);
                    cm.gainItem(5150009, 1);
                    cm.sendOk("你的金币不够购买优惠券！");
                } else if (selection == 1 && cm.getMeso() >= haircolorprice) {
                    cm.gainMeso(-haircolorprice);
                    cm.gainItem(5151009, 1);
                    cm.sendOk("你的金币不够购买优惠券！");
                } else {
                    cm.sendOk("你的金币不够购买优惠券！");
                }
            }
        }
    }
}
