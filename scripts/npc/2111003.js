/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Humanoid A
	Map(s): 		Sunset Road: Magatia(2610000000)
	Description: 		Unknown
*/

function start(){
	if (cm.isQuestActive(3335)) {
	    cm.sendNext("任务完成。");
	    cm.forceCompleteQuest(3335);
	} else {
	    cm.sendNext("我想成为一个人，一个拥有温暖心脏的人……这样也许我就能牵起她的手。不幸的是，现在还做不到。");
	}
	cm.dispose();
}