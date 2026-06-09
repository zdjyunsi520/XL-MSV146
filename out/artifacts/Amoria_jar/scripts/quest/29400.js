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
	Author : 		kevintjuh93
	Description: 		Quest - Veteran Hunter
	Quest ID : 		29400
*/

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
			qm.sendNext("准备好了再来。");
		
		    qm.dispose();
		    return;
	}
		if (status == 0)
			qm.sendAcceptDecline("#v1142004# #e#b#t1142004##k\r\n\r - 时间限制 30天\r - 狩猎100,000只怪物\r #n *只计算与你等级相同或更高的怪物。\r\n你想测试你的能力看看你是否配得上这个称号吗？");
		else if (status == 1) {
			qm.sendNext("当前排名 \r\n1. #bMoople#k : #r538,673#k 只怪物\r\n2. #bZeroQuanta#k : #r111,421#k 只怪物\r\n别忘了记录会在每月初重置。");//TODO
	        } else if (status == 2) {
			qm.sendNextPrev("我给你30天的时间来达成你的狩猎目标。一旦完成，回来见我。记住你必须在时间限制内回来见我才能获得批准。另外，除非你先完成或放弃这个挑战，否则禁止尝试其他称号。");
		} else if (status == 3) {
			qm.forceStartQuest();
			qm.dispose();
		}
}


function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0) return;	    
		else{
		    qm.dispose();
			return;
		}		
		if (status == 0) {
			qm.sendOk("尚未编写。");
			qm.dispose();
		}
	}
}