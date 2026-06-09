function start() { 
    cm.sendYesNo("#r欢迎来到地狱！#k                                                                                                                          在你冲进去送死之前，让我告诉你一些关于地狱的事情...                                                                                                                         在地狱中，所有的怪物/首领都被强化了，非常强大，因此它们提供额外的经验值，首领掉落稀有物品的几率也更高。                                                                                                                                                             #r黑魔法师首领BPQ：#k                                                                                                                       其中有比普通首领PQ更强化的首领。经验值、首领积分和NX奖励都比普通模式更高！黑魔法师BPQ可以在与普通BPQ相同的地图中找到。小心，挑战魔鬼时一切都不像表面看起来那样。                                                                                                                       #r武馆：#k                                                                                                                                  首领们格外强大，比普通武馆给予更多NX和积分。                                                                                                                                                 #r 警告：命运之轮在这些频道中被禁用！首领战你只有一次机会！                                                                                                                                          你仍然想进入地狱吗？ #k"); 
}

function action(mode, type, selection) { 
    if(mode > 0) {
        cm.sendOk("给你！");
        cm.warp(910000000);
    } else {
        cm.getPlayer().changeChannel(1);
        cm.warp(910000000);
        cm.sendOk("哈！我就知道你应付不了#r地狱#k");
    }
}

