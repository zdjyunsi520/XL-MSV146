/* Dawnveil
    Evolving Tutorial 1
	Orchid + Gelimer
    Made by Daenerys
*/
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
	    cm.sendNextS("兰、兰花大人。您来……早了……",1);
	else if (chat == 1)
	    cm.sendNextPrevS("闭嘴，你这个油腔滑调的老书呆子！没有得到我的命令，你不能动我哥哥！我的小莲花需要待在我身边，不然他会害怕的！", 1,0,9075004);
	else if (chat == 2)
	    cm.sendNextPrevS("请小声点，亲爱的。出了一些新的状况……",1);
	else if (chat == 3)
	    cm.sendNextPrevS("我正想放火烧了你的胡子呢，杰利麦。你觉得你还能拖延这些实验多久？莲花几个月前就该醒了。你知道如果你不成功我会怎么对你吧？", 1,0,9075004);
	else if (chat == 4)
	    cm.sendNextPrevS("莲花很快就会醒来的，我保证。他很快就会醒来的，非常快……",1);
	else if (chat == 5)
	    cm.sendNextPrevS("你想要更多时间？那就去买块新表！我现在就要我哥哥醒过来！", 1,0,9075004);
	else if (chat == 6)
	    cm.sendNextPrevS("也许他只需要听到你的声音……来，看看吧。",1);
	else if (chat == 7) {
	     cm.sendNextPrevS("也许他只需要听到你的声音……来，看看吧。", 1,0,9075004);
   } else if (chat == 8) {
	    cm.warp(957020002);
        cm.dispose();
    }
 }