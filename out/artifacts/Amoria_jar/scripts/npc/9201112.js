var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    var em = cm.getEventManager("CWKPQ");
    if (em == null) {
	cm.sendNext("我需要你们的队长来和我说话。");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendNext("啊，你们进来了。让我快速告诉你们：他们已经发现我们了。大师守护者大约一分钟后就会到这里。我们得赶紧了。");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 610030100:
	    if (status == 0) {
		cm.sendNext("通往扭曲大师的传送门坏了。我们得找另一条路，一条要穿过很多死亡陷阱的路。");
	    } else if (status == 1) {
		cm.sendNext("你可以在这一带找到传送门...你最好快点找到它。我会跟上来的。");
	    } else if (status == 2) {
		cm.sendNext("成功了！那么，这条路我认为我们需要每种冒险家职业各一名才能通过。");
		cm.dispose();
		em.setProperty("glpq1", "1");
	    }
	    break;
	case 610030200:
	   if (status == 0) {
		cm.sendNext("他们需要在这些叫做符印的东西上使用各自的技能。五个都完成后，我们就能通过了。");
	   } else if (status == 1) {
		cm.sendNext("现在这里有更多的符印。所有五名冒险家必须爬到最顶端并穿过传送门。");
		cm.dispose();
	   }
	   break;
	case 610030300:
	   if (status == 0) {
		cm.sendNext("小心这些死亡陷阱：巨石。它们的冲击力可不小。");
	   } else if (status == 1) {
		cm.sendNext("现在这里有更多的符印。不过，其中一些是不起作用的。");
		cm.dispose();
	   }
	   break;
	case 610030400:
	   if (status == 0) {
		cm.sendNext("这些蝙蝠怪会挡你的路，但它们只是干扰。试着对每一个符印进行操作直到它们生效。");
	   } else if (status == 1) {
		cm.sendNext("没想到你能走到这一步！你在这里看到的是绯红木要塞的雕像，但没有它的武器。");
		cm.dispose();
	   }
	   break;
	case 610030500:
	   if (status == 0) {
		cm.sendNext("雕像周围有五个房间，每个房间附近有一座雕像标记。");
	   } else if (status == 1) {
		cm.sendNext("我怀疑这些房间里各藏着雕像的五把武器之一。");
	   } else if (status == 2) {
		cm.sendNext("把武器带回来并将它们放回精通遗物上！");
	   } else if (status == 3) {
		cm.sendNext("做得不错！这条路通向扭曲大师的武器库。");
		cm.dispose();
	   }
	   break;
	case 610030700:
	   cm.sendNext("做得不错！这条路通向扭曲大师的武器库。");
	   cm.dispose();
	   break;
    }
}