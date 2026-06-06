/* Dawnveil
    [Ellinel Fairy Academy] Professor Peace
	Cootie
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("干得不错，#h #。你刚才真的像精灵一样思考了。我们回艾丽涅找女校长吧。\r\n#b（如果你接受，将被传送到艾丽涅。）");	
	} else if (status == 1) { 
	    qm.sendNext("太好了。所有的孩子们现在应该都回来了吧？");
	} else if (status == 2) { 
		qm.warp(101072000,0);
		qm.gainExp(10190);
		qm.forceStartQuest();
		qm.dispose();
	}
}