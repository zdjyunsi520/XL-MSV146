/* Dawnveil
	[Tynerum] A Brush with Hilla
	Hilla
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("你来了。");
	} else if (status == 1) {
      qm.sendNextPrevS("...希拉？",16);
    } else if (status == 2) {	 
	  qm.sendNextPrev("我叫你走，你不听。");
    } else if (status == 3) {		
	  qm.sendNextPrevS("你就是这一切胡作非为的幕后黑手！",16);
	} else if (status == 4) {	
	  qm.sendNextPrev("那又怎样？");
	} else if (status == 5) {	
	  qm.sendNextPrevS("你在策划什么？！",16);
	} else if (status == 6) {	
	  qm.sendNextPrev("策划？我没有在策划什么。我在争取我想要的东西。");
	} else if (status == 7) {
	  qm.sendNextPrevS("我会阻止你正在进行的任何可怕仪式！",16);
	} else if (status == 8) {
	  qm.sendYesNo("你真的不必求我毁灭你。我会很乐意奉陪。");
	} else if (status == 9) {
	  qm.sendNext("你准备好加入我的亡灵大军了吗？只需要一分钟。");
	} else if (status == 10) {
	  qm.warp(863100105);
      qm.forceStartQuest();
      qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}