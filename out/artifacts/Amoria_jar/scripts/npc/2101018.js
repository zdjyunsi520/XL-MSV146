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
function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 30) && !cm.getPlayer().isGM()){
        cm.sendNext("你的等级不在20到30之间。抱歉，你不能参加。");
        cm.dispose();
        return;
    }
    action(1,0,0);
}

function action(mode, type, selection){
    status++;
    if (status == 4){
        cm.getPlayer().saveLocation("ARIANT");
        cm.warp(980010000, 3);
        cm.dispose();
    }
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0)
        cm.sendNext("我在阿里安特为枫之谷的伟大战士们准备了一场盛大的庆典。它叫做#b阿里安特竞技场挑战赛#k。");
    else if (status == 1)
        cm.sendNextPrev("阿里安特竞技场挑战赛是一场比拼怪物战斗技巧的竞赛。在这场比赛中，你的目标不是猎杀怪物；而是要#b消除怪物一定量的HP，然后用宝石吸收它的力量#k。#b最终获得最多宝石的战士将赢得比赛。#k");
    else if (status == 2)
        cm.sendSimple("如果你是来自#b勇士部落#k、在武断修炼的强大勇敢的战士，那么你有兴趣参加阿里安特竞技场挑战赛吗？！\r\n#b#L0# 我很想参加这场伟大的比赛。#l");
    else if (status == 3)
        cm.sendNext("好的，现在我将把你送到竞技场。我希望看到你凯旋而归！");
}