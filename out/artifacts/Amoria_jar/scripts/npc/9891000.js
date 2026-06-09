var status = 0;
var mapid = 90000001; // map id to warp to

function start() {
 status = -1;
 action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1)
	 status++;
	  else 
	 status--;
	   if (status == 0) {
	     cm.sendNext("我是把你召唤到这里的人，我们的未来一片黯淡。\r\n#d黑魔法师#k统治着多个宇宙，只有一个宇宙在黑暗的冲击中幸存下来，那就是#r枫之谷世界#k。我选择了你，因为你已经消灭了#d黑魔法师#k，拯救了你的世界免于暴政。而且由于你不是这个世界的人，时间的流逝将会发生扭曲。");
	   } else if (status == 1) {
	     cm.sendNext("等等，你没有打败#d黑魔法师#k？嗯，我一定是选错了时间...不过现在也不重要了，你会有很多时间变得更强，时机成熟时我会联系你。但在此之前，让我引导你，展示#e#b巫师世界#k#n的奇妙之处。");
	   } else if (status == 2) {
	     cm.sendOk("等等，你没有打败#d黑魔法师#k？嗯，我一定是选错了时间...不过现在也不重要了，你会有很多时间变得更强，时机成熟时我会联系你。但在此之前，让我引导你，展示#e#b巫师世界#k#n的奇妙之处。");		 
	   } else if (status == 3) {
	     cm.warp(mapid, 0);
		 cm.dispose();
	   }
}