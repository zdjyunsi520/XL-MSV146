var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNextS("你终于来了，#h0#!你迟到了。快过来。", 8);
    } else if (status == 1) {
	cm.sendNextPrevS("怎么耽搁了？你害怕了吗？", 4, 2159002);
    } else if (status == 2) {
	cm.sendNextPrevS("别闹了。", 2);
    } else if (status == 3) {
	cm.sendNextPrevS("你一-一点都不害怕吗？我有一-一点点...大人们警告过我们绝对不要进入#b维伦矿井#k...而且周围还有那么多#r黑色之翼#k在监视我们，我就是知道。", 4, 2159000);
    } else if (status == 4) {
	cm.sendNextPrevS("我们是偷偷溜出来的，琼。没有人看到我们。没有人在监视我们，好吗？拜托，我们什么时候还有机会离开#b埃德尔斯坦#k？别当胆小鬼。", 4, 2159002);
    } else if (status == 5) {
	cm.sendNextPrevS("但如果我们惹上麻烦怎么办？", 4, 2159000);
    } else if (status == 6) {
	cm.sendNextPrevS("琼，我们已经到这里了。如果要惹麻烦，至少先玩个痛快吧。我们来玩捉迷藏！", 8);
    } else if (status == 7) {
	cm.sendNextPrevS("捉迷藏？", 2);
    } else if (status == 8) {
	cm.sendNextPrevS("呃，好无聊。", 4, 2159002);
    } else if (status == 9) {
	cm.sendNextPrevS("别耍小性子，冯。怎么？你不敢一个人藏在这些又大又恐怖的洞穴里吗？*偷笑*\r\n#h0#，既然你迟到了，你来当找人的。数到10然后来找我们。不许偷看。", 8);
    } else if (status == 10) {
	cm.warp(931000001, 1);
    	cm.dispose();
    }
}