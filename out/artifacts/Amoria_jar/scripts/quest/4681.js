/*
	NPC Name: 		Asia
	Description: 		Quest - The door to the future
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
	return;
    } else if (mode == 0) {
	if (status == 40) {
	    qm.sendOk("我理解你对帮助像桃花仙境这样的陌生城镇感到犹豫。我是唯一不受#b金合欢之咒#k影响的人，这意味着我必须冒着生命危险从毁灭中拯救这个城镇。");
	    qm.dispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    switch (status) {
	case 0:
	    if (qm.getQuestCustomData() != null) { // if (qm.getQuestCustomData().equals("readHistory")) {
		qm.sendSimple("很高兴你回来了，冒险家。你对那只鬼的结果如何？#b \n\r #L0#我打败了忍者城堡的怪物！#l \n\r #L1#不，我没打败。#l");
		status = 99;
	    } else {
		qm.sendNext("我的名字是#p9120025#，我是桃花仙境在\n#m802000101#的守护者。");
	    }
	    break;
	case 1:
	    qm.sendNextPrev("（#p9120025#露出了一丝微笑。）");
	    break;
	case 2:
	    qm.sendNextPrev("哦……看来你一直在稳步前进。\n\n<格里特……你说得对……>");
	    break;
	case 3:
	    qm.sendNextPrev("我还记得你第一次踏上枫之岛的时候，说实话当时看起来完全是个新手……而现在你站在我面前，看起来完全像一个真正的冒险家。作为一直关注你成长道路的人，看到你如此成长……我感到一阵满足。\n\n（#p9120025#开始眼眶湿润）");
	    break;
	case 4:
	    qm.sendNextPrev("……请原谅我以这种方式说话，让你觉得我比你想象的更了解你。对不起。");
	    break;
	case 5:
	    qm.sendNextPrev("我的任务是判断谁真正拥有力量，谁需要力量。");
	    break;
	case 6:
	    qm.sendNextPrev("而最终，我的最终目标是找到一个能够从毁灭中拯救桃花仙境的人。");
	    break;
	case 7:
	    qm.sendNextPrev("这片土地是你在#m802000101#能找到的最低、最遥远的土地。");
	    break;
	case 8:
	    qm.sendNextPrev("现在我要告诉你关于桃花仙境的真相。");
	    break;
	case 9:
	    qm.sendNextPrev("Zipangu...");
	    break;
	case 10:
	    qm.sendNextPrev("桃花仙境……将在100年后被毁灭。");
	    break;
	case 11:
	    qm.sendNextPrev("……是的，桃花仙境总有一天会从这个世界上彻底消失，不留痕迹。我亲眼看到了那个#b扭曲#k球体从天而降，将整个桃花仙境完全吞噬。");
	    break;
	case 12:
	    qm.sendNextPrev("古代的桃花仙境是黑魔法的温床，我是在桃花仙境学习黑魔法的复杂奥秘中成长起来的魔法师。");
	    break;
	case 13:
	    qm.sendNextPrev("当时，桃花仙境与玛加提亚关系密切，彼此分享宝贵的信息。你可能生活在一个科学主宰世界的时代，但在过去，玛加提亚是各种黑魔法研究的中心。");
	    break;
	case 14:
	    qm.sendNextPrev("玛加提亚，魔法力量的前沿。\n在那里我遇到了一位巫师，他教会了我一切……最终……我获得了一种特殊的力量，让我实现了#b不朽#k。");
	    break;
	case 15:
	    qm.sendNextPrev("这是当时没有人能够实现的魔法。我为了桃花仙境明智地使用它。\n然而随着时间的推移，新一代来了又去，不朽成为了一种被禁止的修行。突然之间，我成了一个弃儿，无人接纳。我失去了一切；名声、财富、国家，你能想到的，我都失去了。最后，我隐居在桃花仙境的深山中，渴望用我不朽的力量去观看世界末日的景象。");
	    break;
	case 16:
	    qm.sendNextPrev("但世界末日……来得比我预想的要快得多。");
	    break;
	case 17:
	    qm.sendNextPrev("当桃花仙境被一个巨大的\n#b扭曲#k吞噬并消失的那一刻，我使用了时空扭曲魔法进入了消失后的世界。在那里我发现了真相。");
	    break;
	case 18:
	    qm.sendNextPrev("在那里我发现了桃花仙境的真相。");
	    break;
	case 19:
	    qm.sendNextPrev("原来桃花仙境的历史被记录在一本书中。");
	    break;
	case 20:
	    qm.sendNextPrev("桃花仙境的历史不过是书中内容的重演。");
	    break;
	case 21:
	    qm.sendNextPrev("一本记录桃花仙境每个居民一举一动的超自然书籍存在的事实……那本书叫做#b金合欢编年史#k……");
	    break;
	case 22:
	    qm.sendNextPrev("我不知道你怎么想，但我愤怒了。一想到我的人生被这本微不足道的书预先决定了……");
	    break;
	case 23:
	    qm.sendNextPrev("在那个扭曲的世界里，我弄到了\n#b金合欢编年史#k，开始阅读它。");
	    break;
	case 24:
	    qm.sendNextPrev("然后我发现了……");
	    break;
	case 25:
	    qm.sendNextPrev("我发现#b金合欢编年史#k中并没有关于我的信息。");
	    break;
	case 26:
	    qm.sendNextPrev("按照书中的说法，我是一个不存在的人。");
	    break;
	case 27:
	    qm.sendNextPrev("也许我之所以能从#b金合欢编年史的诅咒#k中解脱，是因为我能够与桃花仙境之外的人建立亲密的联系，最终让我获得了#b不朽#k。");
	    break;
	case 28:
	    qm.sendNextPrev("此外，#b金合欢编年史#k的内容是否会在修订版中发生变化，还有待观察。");
	    break;
	case 29:
	    qm.sendNextPrev("所以我的计划是回到过去，亲自改变历史，这样书中#b扭曲#k出现的部分会在最后一刻被销毁，从而防止桃花仙境遭受必然的毁灭。");
	    break;
	case 30:
	    qm.sendNextPrev("但最终我意识到，篡改过去——即使是拯救桃花仙境——也是一种愚蠢的行为。\n通过书改变过去几乎肯定会抹去所有未来将会出生的人的存在。");
	    break;
	case 31:
	    qm.sendNextPrev("最终，我得出结论：最好的行动方案是在毁灭之前的那一刻改变桃花仙境的历史。");
	    break;
	case 32:
	    qm.sendNextPrev("问题在于改变历史不是一次性的事情。历史有自我修正的能力，所以即使我改变了其中一部分，历史也会试图恢复到改变前的状态。");
	    break;
	case 33:
	    qm.sendNextPrev("如今，我每天都在观察即将毁灭的桃花仙境，起点就在#m802000101#。");
	    break;
	case 34:
	    qm.sendNextPrev("还有……还有一件事……");
	    break;
	case 35:
	    qm.sendNextPrev("我看到一股巨大的历史修正浪潮即将来临，即使是我也无能为力。");
	    break;
	case 36:
	    qm.sendNextPrev("我很清楚既然这是关于桃花仙境的事，理应由桃花仙境的居民来内部解决。");
	    break;
	case 37:
	    qm.sendNextPrev("不幸的是，#b金合欢之咒#k阻止了桃花仙境的人直接改变自己的历史。");
	    break;
	case 38:
	    qm.sendNextPrev("为了桃花仙境的未来……");
	    break;
	case 39:
	    qm.sendNextPrev("（#p9120025#突然跪了下来）");
	    break;
	case 40:
	    qm.sendYesNo("我希望你能帮助我们拯救桃花仙境，你是唯一不受#b金合欢之咒#k影响的人。你愿意吗？");
	    break;
	case 41:
	    //	    qm.forceStartQuest();
	    qm.setQuestCustomData("readHistory");
	    qm.sendNextPrev("谢谢你，冒险家……谢谢……（#p9120025#如释重负地叹了口气）");
	    break;
	case 42:
	    qm.sendNextPrev("以你拥有的力量，我毫不怀疑你能够对抗来自那个时代的强大敌人。");
	    break;
	case 43:
	    qm.sendNextPrev("话虽如此……我想亲眼看看你的实力。");
	    break;
	case 44:
	    qm.sendNextPrev("在过去的几千年里，我一直在寻找一个拥有巨大天赋和力量的人。\n桃花仙境即将毁灭的时代是一个科技高度发达的时代，你将面对的怪物超乎你的想象。");
	    break;
	case 45:
	    qm.sendNextPrev("为了找到能够与那些怪物战斗的人，我设计了一个测试来淘汰不合格的候选人。");
	    break;
	case 46:
	    qm.sendNextPrev("桃花仙境曾经被多个势力分割，每个势力都希望征服并统一这片土地。");
	    break;
	case 47:
	    qm.sendNextPrev("其中最突出的势力是以忍者城为基地的那一支。\n有被称为忍者的杰出武士守卫着城堡，可以说忍者城统治下的桃花仙境至少是和平的。");
	    break;
	case 48:
	    qm.sendNextPrev("这本应是一个和平与安宁统治这片土地的时代的开始，但事实并非如此。一只注意到了忍者巨大力量的鬼怪决定进入城主的身体，最终夺取了忍者城的控制权。");
	    break;
	case 49:
	    qm.sendNextPrev("在接下来的10年里，被鬼怪控制的城主让这里的生活苦不堪言，但有一天，一位勇敢的武士出现在桃花仙境，击败了鬼怪，为这个地方重新带来了和平。");
	    break;
	case 50:
	    qm.sendNextPrev("在桃花仙境的历史中，拥有忍者特殊力量的怪物和鬼怪以其巨大的力量而臭名昭著。");
	    break;
	case 51:
	    qm.sendNextPrev("我相信忍者城里的鬼怪是一个很好的标尺，可以衡量未来将与未来怪物战斗的候选人的实力。");
	    break;
	case 52:
	    qm.sendNextPrev("我还意识到，那只统治了10年的鬼怪，如果被一个不受\n#b金合欢之咒#k影响的人击败，并不会影响桃花仙境未来的进程。");
	    break;
	case 53:
	    qm.sendNextPrev("我在蘑菇神社准备了虫洞，可以让人穿越到过去，并把冒险岛世界的居民带到忍者城来测试他们的实力，看看他们是否足够强大来对抗未来的怪物。");
	    break;
	case 54:
	    qm.sendNextPrev("如果你无法击败城堡中的鬼怪，那么你甚至无法与那些来自未来的怪物竞争。");
	    break;
	case 55:
	    qm.sendNextPrev("我相信你已经足够强大了，但我需要确凿的证据证明你能做到。");
	    break;
	case 56:
	    qm.sendNext("请击败忍者城的忍者鬼怪，并带回以下物品作为证明：#b300个#t04000340#，1个#t04000342#，和1个#t04000343#。");
	    qm.dispose();
	    break;
	case 100:
	    if (selection == 0) {
		if (qm.haveItem(4000343, 1) && qm.haveItem(4000340, 300) && qm.haveItem(4000342, 1)) {
		    status = 119;
		    qm.sendNextPrev("Brilliant.");
		} else {
		    qm.sendNext("这还不足以让我评估你的实力。我希望你击败城堡里更多的怪物，带回足够的证据，好吗？#b300个#t04000340#，1个#t04000342#，和1个#t04000343#。");
		    qm.dispose();
		}
	    } else {
		if (qm.haveItem(5252002, 1)) {
		    status = 129;
		    qm.sendNextPrev("Brilliant.");
		} else {
		    status = 109;
		    qm.sendNext("如果你没有击败城堡鬼怪的证据，那我就不能把你送到未来。未来充满了远超鬼怪的怪物。");
		}
	    }
	    break;
	case 110:
	    qm.sendNextPrev("请击败忍者城的鬼怪并给我带回证据。");
	    break;
	case 111:
	    qm.sendPrev("我听说你可以在一个叫做商城的地方买到证据……但如果你擅长战斗的话，你真的不需要在那上面花钱。我已经感受到了修复浪潮正在冲击这里。现在一切就交给你了。");
	    qm.dispose();
	    break;
	case 120:
	    qm.sendNextPrev("现在我可以确定你完全有能力对抗桃花仙境未来的怪物。");
	    break;
	case 121:
	    qm.sendNextPrev("现在我要给你一张#b1级通行证#k。这是你来自#m802000101#的证据，这张通行证是进入桃花仙境未来所必需的。请不要丢失这张通行证。");
	    break;
	case 122:
	    qm.sendNextPrev("这将使你能够打开通往桃花仙境未来的大门，并参与改变这个伟大城镇的历史。");
	    break;
	case 123:
	    qm.sendNextPrev("我现在有一个任务需要你立即接受。你准备好了吗？");
	    break;
	case 124:
	    qm.gainItem(4000343, -1);
	    qm.gainItem(4000340, -300);
	    qm.gainItem(4000342, -1);
	    qm.forceStartQuest();
	    qm.dispose();
	    break;
	case 130:
	    qm.sendNextPrev("现在我可以确定你完全有能力对抗桃花仙境未来的怪物。");
	    break;
	case 131:
	    qm.sendNextPrev("现在我要给你一张#b1级通行证#k。这是你来自#m802000101#的证据，这张通行证是进入桃花仙境未来所必需的。请不要丢失这张通行证。");
	    break;
	case 132:
	    qm.sendNextPrev("这将使你能够打开通往桃花仙境未来的大门，并参与改变这个伟大城镇的历史。");
	    break;
	case 133:
	    qm.sendNextPrev("我现在有一个任务需要你立即接受。你准备好了吗？");
	    break;
	case 134:
	    qm.gainItem(5252002, -1);
	    qm.forceStartQuest();
	    qm.dispose();
	    break;
	default:
	    qm.dispose();
	    break;
    }
}

function end(mode, type, selection) {
}