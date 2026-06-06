/*
	Eurek the Alchemist - Multiple Place
**/

var status = 0;
var menu = "";
var set;
var makeitem;
var access = true;
var reqitem = new Array();
var cost = 4000;
var makeditem = new Array(4006000,4006001);
var reqset = new Array([[[4000046,20],[4000027,20],[4021001,1]],
    [[4000025,20],[4000049,20],[4021006,1]],
    [[4000129,15],[4000130,15],[4021002,1]],
    [[4000074,15],[4000057,15],[4021005,1]],
    [[4000054,7],[4000053,7],[4021003,1]]],
						
    [[[4000046,20],[4000027,20],[4011001,1]],
    [[4000014,20],[4000049,20],[4011003,1]],
    [[4000132,15],[4000128,15],[4011005,1]],
    [[4000074,15],[4000069,15],[4011002,1]],
    [[4000080,7],[4000079,7],[4011004,1]]]);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && (status ==1 || status == 2)) {
	cm.dispose();
	return;
    }
    if(mode == 0) {
	cm.sendNext("材料不够吗？别担心。等你收集好所需物品后随时来找我。有很多方法可以获得它们，不管是打怪还是从别人那里购买，所以继续努力吧。");
	cm.dispose();
    }
    if(mode == 1) {
	status++;
    }
    if(status == 0) {
	cm.sendNext("好了，把青蛙舌头和松鼠牙齿混合起来……哦对了！忘了加入闪亮的白色粉末！！天哪，差点出大事了……哇！！你站在那里多久了？我可能有点太投入工作了……嘿嘿。");
    } else if(status == 1) {
	cm.sendSimple("如你所见，我只是一个旅行中的炼金术师。虽然还在修行中，但我仍然能制作一些你可能需要的东西。你想看看吗？\r\n\r\n#L0##b制作魔法石#k#l\r\n#L1##b制作召唤石#k#l");
    } else if(status == 2) {
	set = selection;
	makeitem = makeditem[set];
	for(i=0; i < reqset[set].length; i++) {
	    menu += "\r\n#L"+i+"##b使用#t"+reqset[set][i][0][0]+"#和#t"+reqset[set][i][1][0]+"##k#l";
	}
	cm.sendSimple("哈哈……#b#t"+makeitem+"##k是一种只有我才能制作的神秘石头。许多旅行者似乎需要它来施展那些不仅消耗MP和HP的强力技能。制作#t"+makeitem+"#有5种方法。你想用哪种方法来制作？"+menu);
    } else if(status == 3) {
	if (selection < 0 || selection >= reqset.length) {
	    cm.dispose();
	    return;
	}
	set = reqset[set][selection];
	reqitem[0] = new Array(set[0][0],set[0][1]);
	reqitem[1] = new Array(set[1][0],set[1][1]);
	reqitem[2] = new Array(set[2][0],set[2][1]);
	menu = "";
	for(i=0; i < reqitem.length; i++) {
	    menu += "\r\n#v"+reqitem[i][0]+"# #b"+reqitem[i][1]+" #t"+reqitem[i][0]+"#s#k";
	}
	menu += "\r\n#i4031138# #b"+cost+" 金币#k";
	cm.sendYesNo("要制作#b5个#t"+makeitem+"##k，我需要以下物品。大部分可以通过打怪获得，所以对你来说应该不会太难。怎么样？你需要一些吗？\r\n"+menu);
    } else if(status == 4) {
	for(i=0; i < reqitem.length; i++) {
	    if(!cm.haveItem(reqitem[i][0],reqitem[i][1]))
		access = false;
	}
	if(access == false || !cm.canHold(makeitem) || cm.getMeso() < cost) {
	    cm.sendNext("请检查你是否拥有所有需要的物品，或者你的其他背包是否已满。");
	} else {
	    cm.sendOk("给你，这是5块#b#t"+makeitem+"##k。就连我自己都不得不承认，这是杰作。好了，如果你以后还需要我的帮助，尽管回来找我！");
	    cm.gainItem(reqitem[0][0],-reqitem[0][1]);
	    cm.gainItem(reqitem[1][0],-reqitem[1][1]);
	    cm.gainItem(reqitem[2][0],-reqitem[2][1]);
	    cm.gainMeso(-cost);
	    cm.gainItem(makeitem,5);
	}
	cm.dispose();
    }
}
