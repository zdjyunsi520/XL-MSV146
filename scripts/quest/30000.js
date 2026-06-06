/* Dawnveil
    [Root Abyss] An Urgent Summons
	Neinheart
    Made by Desc
*/
var status = -1;


function start(mode, type, selection) {
    if (mode == -1) 
        qm.dispose();
     else 
        if(mode == 0 && type > 0) {
            qm.dispose();
            return;
        }       
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            qm.sendAcceptDecline("#b#h ##k！你需要在耶雷弗待命，立刻。我们一刻也不能耽误。");
        } else if (status == 1) {	   
        qm.sendNext("我将把你传送过来。");
        } else if (status == 2) {
            qm.warp(913080000,0);
            qm.forceStartQuest();
        }
    }
