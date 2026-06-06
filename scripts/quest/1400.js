/* Dawnveil
	The 5 paths 
	Mai
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
        qm.sendAcceptDecline("嗯，你的等级提升得不错。你决定好要选择哪个职业了吗？你可以成为拥有强大力量和高HP的战士、精通各种咒语的魔法师、远距离射箭的弓箭手、使用快速偷袭攻击的飞侠、或者拥有各种华丽连招技能的海盗...选择真的很多！");
		qm.startQuest(1400);
	} else if (status == 1) {
        qm.sendSimple("如果你去维多利亚岛，你可以去找相应的职业教官进行转职。但在此之前，让我知道你对哪个感兴趣，我会给#b他们#k寄一封推荐信。这样你转职会更容易！那么，你会选择哪个职业呢？\r\n#b#L0#我想成为一名强大的战士！#l\r\n#b#L1#我想成为一名神秘的魔法师！#l\r\n#b#L2#我想成为一名精准的弓箭手！#l\r\n#b#L3#我想成为一名敏捷的飞侠！#l\r\n#b#L4#我想成为一名威风的海盗！#l");
    } else if (status == 2) {
        sel = selection;
	if (selection == 0) {
        qm.sendNext("战士，是吗？天哪，你会变得非常强！他们能承受大量伤害，还能输出很多。好的，我会把推荐信寄给战士职业教官#b与巴尔共舞#k。");
        } else if (selection == 1) {
		qm.sendNext("你想成为魔法师？他们确实很神秘！他们的魔法超级强大，效果各种各样。只是别被打到...魔法师可不以耐久著称！好的，我会把推荐信寄给魔法师职业教官#b古老格伦德尔#k。");
        } else if (selection == 2) {
		qm.sendNext("你想成为弓箭手？希望你瞄准力很好！凭借他们出色的敏捷，他们可以轻松躲避攻击并发射大量自己的箭矢。好的，我会把推荐信寄给弓箭手职业教官#b雅典娜·皮尔斯#k。");
        } else if (selection == 3) {
		qm.sendNext("要成为飞侠，是吗？他们速度极快又神秘，敌人根本看不到他们的身影，等发现时已经太迟了。他们太酷了！好的，我会把推荐信寄给飞侠职业教官#b暗影大君#k。");
        } else if (selection == 4) {
		qm.sendNext("海盗？哟吼！无论是枪战还是近身格斗，海盗都打得很帅！我觉得你能胜任这个挑战。好的，我会把推荐信寄给海盗职业教官#b凯琳#k。");
        }
    } else if (status == 3) {
	    if (sel == 0) {
		qm.sendNextPrev("他会在你达到10级时联系你。成为一名伟大的战士吧！");
		qm.forceStartQuest(1401);
	    qm.forceCompleteQuest(1400);
		qm.dispose();
	    } else if (sel == 1) {
		qm.sendNext("你知道魔法师的转职比其他职业早，对吧？古老格伦德尔会在你达到8级时联系你。成为一名出色的魔法师吧！");
		qm.forceStartQuest(1402);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 2) {
		qm.sendNext("她会在你达到#b10级#k时联系你。希望你能成为一名优秀的弓箭手！");
		qm.forceStartQuest(1403);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 3) {
		qm.sendNext("如果你升到#b10级#k，他会联系你。成为一名伟大的飞侠，明白了吗？");
		qm.forceStartQuest(1404);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 4) {
		qm.sendNext("她会在你达到#b10级#k时联系你。成为一名精通的海盗吧！");
		qm.forceStartQuest(1405);
		qm.forceCompleteQuest(1400);
		qm.dispose();
	   }
	    qm.dispose();
    }
}