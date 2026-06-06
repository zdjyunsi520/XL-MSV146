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
/**
	Ames the Wise
-- By ---------------------------------------------------------------------------------------------
	Xelkin
-- Edited by --------------------------------------------------------------------------------------
	Angel (get31720 ragezone
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3 (BENG)] & [XotiCraze]
-- Fixed Dispose ----------------------------------------------------------------------------------
        Fixed by Moogra
---------------------------------------------------------------------------------------------------
**/
var status = -1;

function start() {
    var rings = new Array(1112806, 1112803, 1112807, 1112809);
    var hasRing = false;
    for (var x = 0; x < rings.length && !hasRing; x++)
        if (cm.haveItem(rings[x])) {
            hasRing = true;
            break;
        }
    if (hasRing)
        cm.sendNext("哇，婚礼这么快就结束了？那就再见啦！");
    else if (cm.haveItem(4000313)) {
        cm.sendNext("你没有金色枫叶也没有婚礼戒指，所以我将带你回到阿莫利亚。");
        status = 20;
    } else {
        cm.sendNext("那就再见啦");
        status = 21;
    }
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.sendOk("那就再见啦");
        cm.dispose();
    } else {
        status++;
        if (status == 1) {
            cm.gainItem(4031424,1);
            cm.gainItem(4031423,1);
            cm.dispose();
        } else if (status == 21) {
            cm.gainItem(4000313,-1);
            cm.gainItem(4031423,1);
        }
        cm.warp(680000000);
        cm.dispose();
    }
}
