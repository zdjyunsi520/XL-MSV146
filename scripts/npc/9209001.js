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
var sel, sel2;

function start() {
    cm.sendSimple("好的，我们将把你送到枫之谷第七日集市地图。");
}

function action(mode, type, selection) {
    status++;
    if (status == 6 && mode == 1) {
        sel2 = undefined;
        status = 0;
    }
    if (mode != 1) {
        if (mode == 0 && type == 0)
            status -= 2;
        else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (sel == undefined)
            sel = selection;
        if (selection == 0) {
            cm.sendNext("你想了解枫之谷第七日集市的什么？#b\r\n#L0#枫之谷第七日集市在哪里举办？\r\n#L1#枫之谷第七日集市可以做什么？\r\n#L2#我没有问题了。");
        } else
            cm.sendSimple("枫之谷第七日集市只在周日开放。只要在任何城镇找到我就能进入，射手村、新叶城、神木村、废弃都市、玩具城，我几乎无处不在！");
    } else if(status == 1) {
        if (sel == 0) {
            cm.warp(680100000 + parseInt(Math.random() * 3));
            cm.getPlayer().saveLocation("EVENT");//harhar
            cm.dispose();
        } else if (selection == 0) {
            cm.sendNext("在枫之谷第七日集市你可以找到其他地方很难找到的稀有商品。#b\r\n#L0#购买特殊物品\r\n#L1#帮助家禽农场主人");
            status -= 2;
        } else if (selection == 1)
            cm.sendSimple("我猜你没什么问题了。请继续关注我们，如果有好奇的地方随时来问。");
        else {
            cm.sendNext("枫之谷第七日集市有很多物品。价格会有波动，所以最好趁便宜的时候买！");
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel2 == undefined)
            sel2 = selection;
        if (sel2 == 0)
            cm.sendNext("除了商人之外，在枫之谷第七日集市你还可以找到家禽农场主人的懒女儿。帮助咪咪孵化她的蛋，直到它长成一只鸡！");
        else
            cm.sendNext("在这里购买的物品可以卖给商人中介阿卜杜拉。他不接受超过一周的物品，所以一定要在周六之前转卖！");
    } else if (status == 3) {
        if (sel2 == 0)
            cm.sendNextPrev("因为她不能随便信任别人来照顾蛋，她会要求押金。付给她押金，好好照顾蛋。");
        else
            cm.sendNextPrev("阿卜杜拉也会调整他的转卖价格，所以在能赚取最大利润时出售是明智的。价格倾向于每小时波动，所以记得经常查看。");
    } else if (status == 4) {
        if (sel2 == 0)
            cm.sendNextPrev("如果你成功将蛋孵化成鸡并带回去给咪咪，咪咪会奖励你。她虽然懒但不是不懂感恩的人。");
        else
            cm.sendNextPrev("在枫之谷第七日集市低价买入商品，等价值上涨时卖给商人中介，来考验你的商业头脑吧！");
    } else if (status == 5) {
        if (sel2 == 0)
            cm.sendNextPrev("你可以点击蛋来查看它的成长情况。你必须勤照顾蛋，因为你获得的经验值和蛋的成长是同步的。");
        else
            cm.sendNextPrev("你可以点击蛋来查看它的成长情况。你必须勤照顾蛋，因为你获得的经验值和蛋的成长是同步的。");
    }
}