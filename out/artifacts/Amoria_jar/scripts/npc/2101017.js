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

load("nashorn:mozilla_compat.js");
importPackage(Packages.tools);
importPackage(Packages.client);

status = -1;
var sel;

function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 30) && !cm.getPlayer().isGM()){
        cm.sendNext("你的等级不在20到30之间。抱歉，你不能参加。");
        cm.dispose();
        return;
    }
    if(cm.getPlayer().getMapId() % 10 == 1)
        cm.sendSimple("你有什么请求吗？\r\n#b#L0# 给我#t2270002#和#t2100067#。#l\r\n#L1# 我该做什么？#l\r\n#L2# 带我离开这里。#l");
    else
        cm.sendSimple(cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) == cm.getPlayer().getName() ? "你想开始比赛吗？#b\r\n#b#L3# 准备进入竞技场！！#l\r\n#L1# 我想踢出某个角色。#l\r\n#L2# 带我离开这里。#l" : "你想要什么？#b\r\n#L2# 带我离开这里。#l");
}

function action(mode, type, selection){
    status++;
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if(cm.getPlayer().getMapId() % 10 == 1){
        if (status == 0){
            if (sel == undefined)
                sel = selection;
            if(sel == 0){
                if(cm.haveItem(2270002))
                    cm.sendNext("你已经拥有#b#t2270002##k了。");
                else if(cm.canHold(2270002) && cm.canHold(2100067)){
                    if(cm.haveItem(2100067))
                        cm.removeAll(2100067);
                    cm.gainItem(2270002, 32);
                    cm.gainItem(2100067, 5);
                    cm.sendNext("现在降低怪物的HP，然后使用#b#t2270002##k来吸收它们的力量！");
                }else
                    cm.sendNext("请检查你的消耗品背包是否已满。");
                cm.dispose();
            }else if(sel == 1)
                cm.sendNext("你需要做什么？你一定是新来的。让我详细解释一下。");
            else
                cm.sendYesNo("你确定要离开吗？"); //No GMS like.
        } else if (status == 1){
            if(type == 1){
                cm.warp(980010020);
                cm.dispose();
                return;
            }
            cm.sendNextPrev("其实很简单。你将从我这里获得#b#t2270002##k，你的任务是消除怪物一定量的HP，然后使用#b#t2270002##k来吸收怪物的力量。");
        } else if (status == 2)
            cm.sendNextPrev("很简单。如果你用#b#t2270002##k吸收了怪物的力量，你就会制作出#b#t4031868##k，那是阿雷达女王最喜欢的东西。获得最多宝石的选手赢得比赛。阻止其他人吸收其实是个赢得比赛的好策略。");
        else if (status == 3)
            cm.sendNextPrev("还有一件事。#r这次任务中你不能使用宠物。#k明白了吗？~！");
        else if (status == 4)
            cm.dispose();
    }else{
        var nextchar = cm.getMap(cm.getPlayer().getMapId()).getCharacters().iterator();
        if(status == 0){
            if (sel == undefined)
                sel = selection;
            if(sel == 1)
                if(cm.getPlayerCount(cm.getPlayer().getMapId()) > 1){
                    var text = "你想踢出房间里的谁？"; //Not GMS like text
                    var name;
                    for(var i = 0; nextchar.hasNext(); i++){
                        name = nextchar.next().getName();
                        if(!cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1).equals(name))
                            text += "\r\n#b#L" + i + "#" + name + "#l";
                    }
                    cm.sendSimple(text);
                }else{
                    cm.sendNext("目前没有可以被踢出的角色。");
                    cm.dispose();
                }
            else if(sel == 2){
                if(cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) == cm.getPlayer().getName())
                    cm.sendYesNo("你确定要离开吗？ You're the leader of the Arena, so if you leave, the whole Battle Arena will close.");
                else
                    cm.sendYesNo("你确定要离开吗？"); //No GMS like.
            }else if(sel == 3)
                if(cm.getPlayerCount(cm.getPlayer().getMapId()) > 1)
                    cm.sendYesNo("房间已准备就绪，其他角色不能再加入这个竞技场。你想现在开始比赛吗？");
                else{
                    cm.sendNext("至少需要2名参赛者在场才能开始比赛。");
                    cm.dispose();
                }
        }else if (status == 1){
            if(sel == 1){
                for(var i = 0; nextchar.hasNext(); i++)
                    if(i == selection){
                        nextchar.next().changeMap(cm.getMap(980010000));
                        break;
                    }else
                        nextchar.next();
                cm.sendNext("玩家已被踢出竞技场。"); //Not GMS like
            }else if(sel == 2){
                if(cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) != cm.getPlayer().getName())
                    cm.warp(980010000);
                else{
                    cm.getPlayer().removeAriantRoom((cm.getPlayer().getMapId() / 100) % 10);
                    cm.mapMessage(6, cm.getPlayer().getName() + " 离开了竞技场，竞技场现在将关闭。");
                    cm.warpMap(980010000);
                }
            }else{
                cm.warpMap(cm.getPlayer().getMapId() + 1);
            //}
            //cm.getPlayer().getMap().broadcastMessage(MaplePacketCreator.updateAriantPQRanking(cm.getPlayer().getName(), 0, true));
            }
            cm.dispose();
        }
    }
}
