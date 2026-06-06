/* Return to Masteria
    [Collection] Enabling Cassandra
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("你为什么从来都不想帮我呢？");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("你来得正是时候，#b#h0##k。我刚开始接触这个新的预言APP，需要有人来试一下！你得让我在你身上测试，好吗？拜拜拜托了？");
	} else if (status == 1) {
	    qm.sendNextS("我需要大量的鹅卵石来完成这个项目。我已经把附近好的都用完了。所以我想让你去把怪物们偷走的鹅卵石拿回来！30个就很好了。你能搞定的，对吧？",1);
	} else if (status == 2) {
	   	qm.sendNextPrevS("你是不是该去打怪物什么的了？我需要#r30#k个#r#i3994718##t3994718##k。但是不要去打那些#b比你低11级以上或比你高21级以上的怪物#k。我要去看枫之谷网剧等你回来！",1);
	} else if (status == 3) {
        qm.forceStartQuest();
		qm.forceCompleteQuest();
        qm.dispose();
    }
}