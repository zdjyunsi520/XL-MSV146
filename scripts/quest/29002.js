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
        Author : Generic (http://cronusemu.net)
        NPC Name:               Dalair
        Map(s):                 Every town
        Description:            Quest - Title Challenge - Celebrity!
        Quest ID :              29002
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendNext("准备好了再来。");
        qm.dispose();
    } else {
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {// Picture of 名人勋章(+blue text "名人勋章"
            qm.sendAcceptDecline("#v1142003# #e#b#t1142003##k \r\n- 时间限制 30天 \r\n- 人气度 1000提升 \r\n#n你想测试你的能力看看你是否配得上这个称号吗？");
        } else if (status == 1) {
            qm.sendNext("我给你30天的时间来达成你的目标。一旦完成，回来见我。记住你必须在时间限制内回来见我才能获得批准。另外，除非你先完成这个挑战或放弃，否则你不能尝试其他称号。");
            qm.forceStartQuest();
        }

    }
        
}