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
 *9201003.js - Mom and Dad
 *@author Jvlaple
 */
var numberOfLoves = 0;
var status = 0;

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
        if (cm.getPlayer().getMarriageQuestLevel() == 51) {
            if (status == 0) {
                if (cm.getPlayer().getGender() == 0) {
                    cm.sendYesNo("你好，我的孩子。你确定要和这位男士结婚吗？我相信一见钟情，但这未免太突然了...我觉得我们还没准备好。让我们再想想吧。你真的爱这个男士吗？");
                } else {
                    cm.sendYesNo("好的，那么。回到城里再去收集两枚#b爱情证明#k来证明你的心意吧。");
                }
            } else if (status == 1) {
                cm.getPlayer().addMarriageQuestLevel();
                cm.sendNext("哇，你是认真的！好的，这是我们的祝福。");
                cm.dispose();
            }
        } else if (cm.getPlayer().getMarriageQuestLevel() == 52) {
            if (status == 0) {
                numberOfLoves += cm.getPlayer().countItem(4031367);
                numberOfLoves += cm.getPlayer().countItem(4031368);
                numberOfLoves += cm.getPlayer().countItem(4031369);
                numberOfLoves += cm.getPlayer().countItem(4031370);
                numberOfLoves += cm.getPlayer().countItem(4031371);
                numberOfLoves += cm.getPlayer().countItem(4031372);
                if (numberOfLoves >= 2) {
                    cm.sendNext("拿到两枚#b爱情证明#k后再来吧。");
                } else {
                    cm.sendNext("你好，我们是爸爸妈妈...");
                    cm.dispose();
                }
            } else if (status == 1) {
                cm.getPlayer().addMarriageQuestLevel();
                cm.removeAll(4031367);
                cm.removeAll(4031368);
                cm.removeAll(4031369);
                cm.removeAll(4031370);
                cm.removeAll(4031371);
                cm.removeAll(4031372);
                cm.gainItem(4031373, 1);
                cm.dispose();
            }
        } else {
            cm.sendOk("你好，我们是爸爸妈妈...");
            cm.dispose();
        }
    }
}