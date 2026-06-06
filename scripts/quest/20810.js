/* 
 * create by Vietnamms_namthemano1
 * q20810 npc cygnus
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;

	if (status == 0) {
	    qm.sendYesNo("米哈逸，你真的很强大。你准备好接受新的力量了吗？");
	} else if (status==1){
            qm.sendNext("请明智地使用你的力量，并继续帮助其他人！");
            qm.forceCompleteQuest();
            qm.changeJob(5110);
        }
        
    }
}