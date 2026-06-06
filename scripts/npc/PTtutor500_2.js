load("感谢各位的到来。");
importPackage(Packages.tools.packet);

var status = 12;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 13) {
        cm.sendNextS("我们是来证明你在撒谎的。", 5, 1402400);
    } else if (status == 14)
        cm.sendNextPrevS("...", 5, 1402100);
    else if (status == 15)
        cm.sendNextPrevS("你们可以这么认为，但我想谈谈耶雷弗人民似乎已经方便地遗忘的一个古老故事。关于黑魔法师统治时期的女皇——艾莉亚的故事……", 5, 1402101);
    else if (status == 16)
        cm.sendNextPrevS("（艾莉亚……）", 5, 1402400);
    else if (status == 17)
        cm.sendNextPrevS("各位想必都知道，黑魔法师崛起后没有留下任何历史记录，但一直流传着艾莉亚紧握一颗宝石的故事。那件宝物叫做斯卡亚。", 17);
    else if (status == 18)
        cm.sendNextPrevS("斯卡亚，艾莉亚失落的宝物。据说它代代相传于女皇之间以保护她们！它拥有许多神奇的力量！", 5, 1402400);
    else if (status == 19)
        cm.sendNextPrevS("关于艾莉亚拥有斯卡亚的故事毋庸置疑，但没有任何记录说明这颗宝石究竟拥有什么力量。", 5, 1402400);
    else if (status == 20)
        cm.sendNextPrevS("我带着证明我血统的证据站在你们面前，你却在这里咬文嚼字？宝石在我手中，而不是西格纳斯！", 5, 1402104);
    else if (status == 21)
        cm.sendNextPrevS("当黑魔法师的军队摧毁耶雷弗时，斯卡亚被认为已经遗失了。我相信这就是你们都听过的老故事。但你们真的认为如此重要的宝物会被当作损失一笔勾销吗？你们认为我们的先辈会任由它在某个坟墓中沉睡？", 5, 1402400);
    else if (status == 22)
        cm.sendNextPrevS("那是疯话！斯卡亚被保护起来免受黑魔法师的侵害，悄悄传承了数百年，直到我能够揭示我的与生俱来的权利！", 5, 1402400);
    else if (status == 23)
        cm.sendNextPrevS("这就是你的论点？", 5, 1402400);
    else if (status == 24)
        cm.sendNextPrevS("这就是事实。", 5, 1402105);
    else if (status == 25)
        cm.sendNextPrevS("你怎么证明你手中的斯卡亚是真的？它可能是伪造的。", 5, 1402400);
    else if (status == 26)
        cm.sendNextPrevS("这是个好问题，但终究是愚蠢的。斯卡亚这个名字虽然众所周知，但很少有人真正见过它。事实上，枫之谷世界中见过它图片的人今天都在这里。也就是说你们所有人就是我手中斯卡亚为真的证明！", 5, 1402103);
    else if (status == 27)
        cm.sendNextPrevS("你们不认得我手中的斯卡亚吗？这不就是你们都曾见过的宝石吗？", 5, 1402400);
    else if (status == 28)
        cm.sendNextPrevS("听听你在说什么！宝石可以被锻造和复制。我们无法确定你手中的那颗是真的。", 5, 1402400);
    else if (status == 29)
        cm.sendNextPrevS("抱歉，鹰眼先生，你在数百年前就活着吗？不。你对这颗宝石有效性的看法毫无意义。", 5, 1402106);
    else if (status == 30)
        cm.sendNextPrevS("况且，我们还没有说到真正的论点。我问各位，为什么西格纳斯女士如此虚弱？如果她确实是真正的继承人，她就不会被神兽的力量压倒。西格纳斯女士，你自己也一定知道你并不适合驾驭你所窃取的力量。", 5, 1402400);
    else if (status == 31)
        cm.sendNextPrevS("如此无礼！", 5, 1402400);
    else if (status == 32)
        cm.sendNextPrevS("哦……我无礼了吗？难道说真话现在就是背叛的标志？", 5, 1402102);
    else if (status == 33)
        cm.sendNextPrevS("好好想想我的话，自己做决定！这不就是你的职责吗，西格纳斯？为人民的利益而行事？", 5, 1402400);
    else if (status == 34)
        cm.sendNextPrevS("她说得对，我并不是什么特别的人，我也无法完全吸收神兽的力量。我不知道为什么，但我天生如此。", 5, 1402400);
    else if (status == 35)
        cm.sendNextPrevS("如果这个女人质疑我作为你们女皇的合法性，我们至少应该让她说明，否则我们和黑魔法师没什么两样……", 5, 1402100);
    else if (status == 36)
        cm.sendNextPrevS("西格纳斯大人！", 5, 1402100);
    else if (status == 37)
        cm.sendNextPrevS("我必须做正确的事！我一直在请求世界为我而战，而我自己却坐在这里，在更多我请求为我而战的人的保护之下。如果我这样做却没有任何真正的权威或资格……", 5, 1402101);
    else if (status == 38)
        cm.sendNextPrevS("那我就是一个暴君。", 5, 1402100);
    else if (status == 39)
        cm.sendNextPrevS("（她的声音抖得像风中的落叶，但她的目光很坚定。她确实是艾莉亚的侄女……而且她似乎很受人爱戴。）", 5, 1402100);
    else if (status == 40)
        cm.sendNextPrevS("我想我们已经拖延得够久了！让我们看看谁真正继承了女皇的血统。据说斯卡亚会在女皇手中发光。小西格纳斯，你敢试试吗？", 17);
    else if (status == 41)
        cm.sendNextPrevS("它在我手中发光。你的会吗？", 5, 1402400);
    else if (status == 42)
        cm.sendNextPrevS("它在我手中发光。你的会吗？", 5, 1402400);
    else if (status == 43) {
        cm.dispose();
        cm.showSkaia();
    }
}