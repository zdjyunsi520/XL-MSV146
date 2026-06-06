/* 
	NPC Name: 		Lady syl
	Map(s): 		103050101
	Description: 		Quest - Becoming a Blade Specialist 2
*/
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
       if (qm.getQuestStatus(2642)==1 && qm.getQuestStatus(2642)!=2){
           qm.forceStartQuest();
           qm.dispose();
           status=-2;
           mode=-2;
          return;
        }
       if (status == 0) {
           qm.sendNext("你看起来脸色不太好。你生病了吗？你中毒了？莱登告诉你的？那药水只是苹果汁。你尝不出来吗？不管怎样，莱登只是想说明一点……");
       }else if (status == 1){
           qm.sendNextPrev("想都别想背叛我们。双刀不会原谅他们的敌人……");
       }else if (status == 2){
           qm.sendYesNo("你眼中的神采，你肩膀的姿态。你看起来准备好了。你想进阶为盗贼吗？一旦进阶，你就可以开始你真正的任务了。");
           qm.forceCompleteQuest();
           qm.changeJob(400);
           qm.getItem(1332063);
           qm.dispose();
       } 
        
    }
}