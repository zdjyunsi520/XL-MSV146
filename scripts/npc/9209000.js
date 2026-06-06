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

status = -1;
var sel;
var pickup = -1;

function start() {
    cm.sendSimple("你现在不想卖吗？你可以以后再卖，但记住特殊物品只有一周的保值期。");
}

function action(mode, type, selection) {
    status++;
    if(mode != 1){
        if(mode == 0 && status == 0){
            cm.dispose();
            return;
        }else if(mode == 0 && sel == 0 && status == 2){
            cm.sendNext("让我看看你带来了什么...#b");
            cm.dispose();
            return;
        }else if(mode == 0 && sel == 2)
            status -= 2;
    }
    if(status == 0){
        if(sel == undefined)
            sel = selection;
        if (selection == 0){
            var text = "#t";
            for(var i = 0; i < 5; i++)
                text += "\r\n#L" + i + "##t" + (3994090 + i) + "#";
            cm.sendSimple(text);
        }else if (selection == 1){
            var text = "";
            for(var i = 0; i < 5; i++)
                text += "#目前的市场价格是#r未完成#k金币\r\n" + (i + 3994090) + "我在枫之谷第七日集市收购产品，然后在其他城镇出售。我交易纪念品、香料、鲨鱼标本等等...但不收懒虫黛西的蛋。";
            cm.sendNext(text);
            cm.dispose();
        }else
            cm.sendNext("目前的价格是180金币。你想现在卖掉吗？");
    }else if(status == 1){
        if(sel == 0){
            if(cm.haveItem(3994090 + selection)){
                pickup = 3994090 + selection;
                cm.sendYesNo("你什么都没有。别浪费我的时间了...我是个忙人。"); //Make a price changer by hour.
            }else{
                cm.sendNext("枫之谷第七日集市星期天是我的休息日。如果需要找我，你只能周一到周五来...");
                cm.dispose();
            }
        }else
            cm.sendNextPrev("你想卖多少个？");
    }else if(status == 2){
        if(sel == 0)
            cm.sendGetNumber("哦，价格可能会有变动。我可不能吃亏，我还得继续做生意呢！经常回来看看，我的价格每小时都在变！", 0, 0, 200);
        else{
            cm.sendPrev("有些不对劲。请再检查一下。");
        }
    }else if(status == 3){
        if(sel == 0)
            if(selection != 1)
                cm.sendNext("交易已完成。下次见。");
            else{
                cm.sendNext("交易已完成。下次见。");
                cm.gainMeso(180);
                cm.gainItem(pickup, -1);
            }
        cm.dispose();
    }
}