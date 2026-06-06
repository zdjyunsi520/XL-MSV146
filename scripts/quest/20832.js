/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("你的普通攻击不再让我想哭了。是时候教你一些更高级的东西了！");
	} else if (status == 1) {
      qm.sendNextPrevS("嘿，大家好。你训练得开心吗，#h #？\r\n基穆，基赞，我能跟你们说一会儿话吗？", 1,0,1102100);
	} else if (status == 2) {
      qm.sendNextPrev("#h #！休息一下！这是命令！");	
	} else if (status == 3) {
	  qm.sendNextPrevS("（奇库对其他人耳语。）", 1,0,1102000);
	} else if (status == 4) {
      qm.sendNextPrev("!!!");	
    } else if (status == 5) {
	  qm.sendNextPrevS("...", 1,0,1102004);
	} else if (status == 6) {
      qm.sendNextPrev("#h #！不要离开那个位置！我很快就回来。");
	} else if (status == 7)  {
	  qm.spawnNpcForPlayer(1102113, -824, -88);
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}