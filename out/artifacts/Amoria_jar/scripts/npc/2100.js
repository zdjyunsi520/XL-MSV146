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
/* Author: Xterminator
	NPC Name: 		Sera
	Map(s): 		Maple Road : Entrance - Mushroom Town Training Camp (0), Maple Road: Upper level of the Training Camp (1), Maple Road : Entrance - Mushroom Town Training Camp (3)
	Description: 		First NPC
*/

var status = -1;

function start() {
    if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3)
        cm.sendYesNo("欢迎来到枫之谷的世界。这个修炼营的目的是帮助新手。你想进入这个修炼营吗？有些人不参加修炼课程就直接开始了他们的旅程。但我强烈建议你先参加修炼课程。");
    else
        cm.sendNext("这是图像室，你的第一个修炼课程将在这里开始。在这个房间里，你可以提前了解你选择的职业。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(mode == 0 && status == 0){
            cm.sendYesNo("你真的想现在就开始你的冒险旅程吗？");
            return;
        }else if(mode == 0 && status == 1 && type == 0){
            status -= 2;
            start();
            return;
        }else if(mode == 0 && status == 1 && type == 1)
            cm.sendNext("请在你做出决定后再来找我。");
        cm.dispose();
        return;
    }
    if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3){
        if(status == 0){
            cm.sendNext("好的，我将让你进入修炼营。请跟随你的指导员。");
        }else if(status == 1 && type == 1){
            cm.sendNext("看来你想不参加修炼课程就直接开始冒险。那么，我将让你前往修炼场。小心哦~");
        }else if(status == 1){
            cm.warp(1);
            dispose();
        }else{
            cm.warp(40000);
            dispose();
        }
    }else
    if(status == 0)
        cm.sendPrev("当你修炼到足够强大时，你将有机会选择一个职业。你可以在射手村成为弓箭手，在魔法森林成为魔法师，在勇士部落成为战士，在废弃都市成为飞侠……");
    else
        cm.dispose();
}