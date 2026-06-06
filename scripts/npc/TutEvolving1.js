/* Dawnveil
    Evolving Tutorial 1
	Orchid + Gelimer
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("兰-兰花夫人。你……来早了……",1);
	} else if (status == 1) {
	    cm.sendNextPrevS("闭上你的嘴，你这个油腻的老书呆子！没有我的允许，你不能动我弟弟！我的小洛特斯需要待在我身边，不然他会害怕的！", 1,0,9075004);
	} else if (status == 2) {
	    cm.sendNextPrevS("请小声点，亲爱的。有一些新的进展……",1);
	} else if (status == 3) {
	    cm.sendNextPrevS("我正在发展一种想烧掉你胡须的冲动，格里梅尔。你觉得你还能拖延这些实验多久？洛特斯几个月前就该醒了。你知道如果你不成功我会怎么对你吧？", 1,0,9075004);
	} else if (status == 4) {
	    cm.sendNextPrevS("洛特斯很快就会苏醒，我向你保证。他会醒来的，很快……",1);
	} else if (status == 5) {
	    cm.sendNextPrevS("你想要更多时间？那就去买块新表！我现在就要我弟弟醒来！", 1,0,9075004);
	} else if (status == 6) {
	    cm.sendNextPrevS("也许他只需要听到你的声音……来，看看吧。",1);
	} else if (status == 7) {
	     cm.sendNextPrevS("也许他只需要听到你的声音……来，看看吧。", 1,0,9075004);
   } else if (status == 8) {
	    cm.warp(957020002);
        cm.dispose();
    }
  } 
