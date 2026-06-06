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
        Author : XxOsirisxX (BubblesDev)
        NPC Name: Kiruru
*/

status = -1;
text = [["艾琳森林是西格诺斯骑士团的根据地。那是美丽公正的女皇西格诺斯训练西格诺斯骑士团的地方。据说女皇身体非常虚弱，需要神兽的保护。", "除了神兽之外，辅助女皇的谋士内哈特也在那里。他以一边保持微笑一边吐出恶毒批评而闻名。据说就连首席骑士们在他面前都很小心，生怕预算被削减。", "首席骑士们也保护着女皇。虽然冷淡的米哈逸和冷漠的埃克哈特不太合得来，但迟钝的奥兹和正义的伊蕾娜关系比你想的更亲近。啊，还有霍克艾，嗯，他就算跟暗黑龙也能相处融洽。", "我们这些长着蓝色羽毛的是皮约族，一个喜欢人类的种族。我们只能生活在高海拔地区，所以通常没机会遇见人类。但在艾琳森林，我们很享受和人类交朋友。", "看来你已经对艾琳森林很了解了。祝你旅途愉快……"], ["无文本", "无文本", "无文本", "无文本", "看来你已经对维多利亚岛很了解了。祝你旅途愉快……"]];

function start() {
    if (cm.getPlayer().getMapId() % 2 == 0)
        cm.sendSimple("天气真好。照这样下去，我们很快就能到达艾琳森林了……你对艾琳森林了解多少？那是一个被神兽保护的浮空岛。想了解更多关于艾琳森林的事吗？#b\r\n#L0#是的，请告诉我。\r\n#L1#不用了，没关系。");
    else
        cm.sendSimple("天气真好。照这样下去，我们很快就能到魔法森林了……这是你第一次来维多利亚岛吗？如果是的话，想让我给你简单介绍一下吗？#b\r\n#L0#是的，请告诉我。\r\n#L1#不用了，没关系。");
}

function action(mode, type, selection){
    if (mode == 0 && status == 0) { // I don't want to listen to the bs
        cm.sendOk("好吧，那别因为无聊就乱来。");
    }
    status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1){
        cm.dispose();
        return;
    }
    if (status == 0){
        if (selection == 1){
            cm.sendNext(text[cm.getPlayer().getMapId() % 2][4]);
            cm.dispose();
            return;
        }
        cm.sendNext(text[cm.getPlayer().getMapId() % 2][status]);
    }else if (status == 1)
        cm.sendNextPrev(text[cm.getPlayer().getMapId() % 2][status]);
    else if (status == 2)
        cm.sendNextPrev(text[cm.getPlayer().getMapId() % 2][status]);
    else if (status == 3)
        cm.sendNextPrev(text[cm.getPlayer().getMapId() % 2][status]);
    else if (status == 4)
        cm.sendPrev("#b（奇鲁鲁继续说了很久……）");
    else if (status == 5)
        cm.dispose();
}