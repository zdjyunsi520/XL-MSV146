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
/* Icebyrd Slimm
	Masteria: New Leaf City (600000000)
	Handles the quiz quest. (4900)
 */

var minlevel = 10;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0 && mode == 1) {
            if (!cm.isQuestStarted(4900)){
                var selStr = "这是什么地方？"
                var info = new Array("福克斯维特教授是谁？","什么是福克斯维特之门？","金币齿轮在哪里？","什么是克拉基亚丛林？","什么是齿轮传送门？","这些路标是什么意思？","杰克·马斯克是怎么回事？","莉塔·劳利斯看起来很厉害，她的故事是什么？","城市里什么时候会开放新的区域？","我想参加问答！","做得好！你已经回答了我所有关于新叶城的问题。祝你旅途愉快！");
                for (var i = 0; i < info.length; i++)
                    selStr += "\r\n#L" + i + "# " + info[i] + "#l";
                cm.sendSimple(selStr);
            }
            else if (!cm.getQuestStarted(4911)){
                cm.sendNext("嘿，注意听，我正在考你另一道题呢！");
                cm.dispose();
                return;
            }
            else {
                cm.sendNext("我一直梦想着建造一座城市。不是普通的城市，而是一座欢迎所有人的城市。我以前住在废弃都市，所以我决定看看自己能否创造一座城市。在寻找建造方法的过程中，我遇到了很多人，其中一些我已经视为朋友。比如福克斯维特教授——他是我们这里的天才；我从一群食人植物手中救了他。杰克·马斯克是来自阿莫利亚的老猎友——说话圆滑得过头了。莉塔和我是废弃都市的老朋友——她用那把武器救过我几次；所以我觉得她是镇长的完美人选。经过一番劝说，她相信自己的命运就在这里。关于我们的探险家巴里凯德，他是来寻找某些东西的；他同意把发现的东西送到博物馆。我还在废弃都市时就听说过他和他兄弟的故事。至于埃尔帕姆...嗯，就说他和这里不是一路人吧。我们聊过，他看起来是好意，所以我允许他留下。我才发现自己说了太多了！你还想知道什么？");
                cm.dispose();
                return;
            }
        } else if(status == 1 && !cm.isQuestStarted(4900)) {
            switch (selection) {
                case 0:
                    cm.sendNext("对于一个97岁的人来说真是够精神了。他是个时间旅行者，有一天我在城外遇到了他。老人家被一些丛林生物缠上了——就像它们想吃了他的样子。作为我救他的回报，他同意建造一座时间博物馆。我总觉得他来这里还有别的目的，他不只一次提到新叶城在未来有着有趣的地位。也许你能发现更多...");
                    status -= 2;
                    break;
                case 1:
                    cm.sendNext("嘿，我看到教授建造它们时也问了同样的问题。它们是传送点。按上键就能传送到另一个位置。我建议你熟悉它们，那是我们的交通系统。");
                    status -= 2;
                    break;
                case 2:
                    cm.sendNext("金币齿轮在大本钟的下方。它是巴里凯德发现的怪物密集区域。它似乎位于塔的一个独立区域——如果你问我的话，这相当奇怪。我听说他需要一些探索方面的帮助，你应该去找他。不过要小心，里面的狼蛛可不是闹着玩的。");
                    status -= 2;
                    break;
                case 3:
                    cm.sendNext("啊...好吧。克拉基亚丛林位于新叶城的郊外。许多强大而新奇生物在那些区域游荡，所以如果你去那里，最好做好战斗准备。就在城镇的最右端。有传言说丛林通向一座失落的城市，但我们还没有发现任何东西。");
                    status -= 2;
                    break;
                case 4:
                    cm.sendNext("嗯，当约翰在大本钟的金币齿轮区域时，他站在一个上面然后去了另一个位置。但是，他只能来回移动——它们不像福克斯维特之门那样循环传送。这就是古代技术。");
                    status -= 2;
                    break;
                case 5:
                    cm.sendNext("嗯，你几乎到处都能看到它们。它们是正在施工的区域。红灯表示还没完成，绿灯表示已经开放。经常回来看看，我们一直在建设！");
                    status -= 2;
                    break;
                case 6:
                    cm.sendNext("啊，杰克。你知道那种酷到没边的人吗？那种似乎总能逍遥法外？而且还能追到女孩？嗯，杰克就是那样，只是没追到女孩。他觉得自己错过了机会，开始戴上面具来隐藏真实身份。关于他是谁我会保密，但他来自阿莫利亚。如果你问他，他可能会告诉你更多。");
                    status -= 2;
                    break;
                case 7:
                    cm.sendNext("我认识莉塔有一段时间了，不过我们最近才重新恢复友谊。我有段时间没见到她，但我理解为什么。她作为飞侠训练了非常非常长的时间。事实上，我们就是这样认识的！我被一群蘑菇围攻，她跳出来帮忙。到了选警长的时候，毫不犹豫就选她了。她承诺帮助他人修炼并保护这座城市，所以如果你对一些公益事务感兴趣，去找她聊聊吧。");
                    status -= 2;
                    break;
                case 8:
                    cm.sendNext("很快了，朋友。虽然你看不到，但城市开发者们正在努力工作。等他们准备好了，我们就会开放。我知道你很期待，我也是！");
                    status -= 2;
                    break;
                case 9:
                    cm.sendNext("没问题。如果你回答正确，我会给你一些好东西！");
                    status -= 2;
                    break;
                case 10:
                    if (cm.getLevel() >= minlevel) {
                        cm.sendNext("急什么呀？你再多探索一下再来参加问答怎么样？");
                        cm.startQuest(4900);
                    }
                    else
                        cm.sendNext("急什么呀？你再多探索一下再来参加问答怎么样？");
                    cm.dispose();
                    break;
            }
        }
    }
}