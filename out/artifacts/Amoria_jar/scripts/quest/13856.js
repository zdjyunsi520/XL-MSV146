/* RED 1st impact
	New Mastery Book Sale
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		qm.sendNext("啧，我不认识你。为什么我不认识你呢？我的名字是#p2080008#，我专门经营#e#b技能手册#n#k。为什么我专门经营技能手册呢？为了你，我的朋友，为了你。但我觉得你还不够感激。");
	} else if (status == 1) {
        qm.sendNextPrev("我的技能手册很特别。它们可以用在任何技能上，你明白吗？");
    } else if (status == 2) {	  	 
        qm.sendNextPrev("为了得到这些书，我不得不卖掉自己的腿。但我是为你做的。准备好买书的时候就来找我吧。我也送了一些到#m100000000#和#m240000000#的杂货店。");    
    } else if (status == 3) {	
	    qm.sendNextPrev("我想你现在应该已经猜到这些书不便宜，但我相信你一定能想办法弄到金币的。我就是这样过来的！");
    } else if (status == 4) {	
		qm.forceStartQuest();
		qm.dispose();
	}
}