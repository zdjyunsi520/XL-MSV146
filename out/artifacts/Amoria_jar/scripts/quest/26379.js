/* RED 1st impact
    [Gingerbread] Save Me, Talking Cookie!
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 4) {
		    qm.sendOk("好的，当然。准备好了就用那个角色来认真烘焙吧！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNext("你好，我是姜饼人！但是等等，别吃我！我不是来让你吃的。我是来请人帮忙的。");
	} else if (status == 1) {
	    qm.sendNextPrev("我有很多朋友还没有被烤到完美。我想帮它们脱离面团阶段，但如果我靠近另一个烤箱我可能会被烤焦。你能每天#b帮我一次#k，烤一些我的姜饼朋友吗？");
	} else if (status == 2) {
	    qm.sendNextPrev("我当然会给你奖励。你仍然吃不到我，但根据你帮忙的程度，我会给你一些不错的东西。");
	} else if (status == 3) {
	    qm.sendNextPrev("#i03800483#");
	} else if (status == 4) {
	    qm.sendAcceptDecline("那么，你想用这个角色来#b制作姜饼人吗？#k好好想清楚，因为#r每个Nexon账号只有一个角色可以完成姜饼人活动。）#k");
	} else if (status == 5) {
	   qm.sendNext("让我给你讲讲姜饼人烘焙！这不难。只需把#i3994801##b#t3994801##k拿在身上保持#r30分钟#k！就这样！简单吧？");
	} else if (status == 6) {
	    qm.sendNextPrev("30分钟后，面团状态的#i3994801##b#t3994801##k会变成#i3994802##b#t3994802##k。只要把#b#t3994802##k带给我任务就完成了！");
	} else if (status == 7) {
	   qm.sendNextPrev("每次参与我都会准备好一份礼物，所以确保每天都来烘焙。记住这只能由每个Nexon账号上的#r一个角色完成#k。这是一个稀有活动，所以记住如果你最终删除了这个角色，你将无法再参与#b姜饼人#k活动。很可怕吧？");
	} else if (status == 8) {
	    qm.sendPrev("我和我的面团朋友们都会等待你的帮助。\r\n不要不帮我们就走！我会等着你的！");	
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}