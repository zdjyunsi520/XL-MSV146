/*
 *	NPC Name: Bo
 *	Description: Socket Master
 */
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			cm.sendSimple("用我改装的这件疯狂的外星设备，任何物品都可以安装插槽！它基本上就是一个小凹槽，你可以把叫做"星云石"的特殊外星石头插进去。外星人把它们当作能量来源，但你可以用它们来给装备增加特殊属性！它们放在口袋里没有任何效果，但插入装备插槽后，你就能 harness 太空的力量了！");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendNext("星云石是外星人入侵枫之谷世界时掉落的微小石头。他们似乎把星云石当作某种能量来源。各地的怪物不知为何也在携带它们。我想它们喜欢闪亮的东西吧！\r\n\r\n#b#m600000000##k附近有我发现的最好的星云石矿。我觉得那里的#b#p9201050##k有一些极品货，但他不是那种白送的人。");
			} else {
				cm.sendNext("不幸的是，我们的普通装备不太适合利用外星能量。这就是我的外星插槽扳手派上用场的地方！我安装一个插槽，你就能获得那种美妙的星际力量。目前我只研究出如何在一件装备上安装一个插槽，但我正在努力在不弄坏扳手的情况下安装第二个。研究快完成了，我保证！");
				cm.dispose();
			}			
		} else if (status == 2) {
			cm.sendNextPrev("不幸的是，我们的普通装备不太适合利用外星能量。这就是我的外星插槽扳手派上用场的地方！我安装一个插槽，你就能获得那种美妙的星际力量。目前我只研究出如何在一件装备上安装一个插槽，但我正在努力在不弄坏扳手的情况下安装第二个。研究快完成了，我保证！");
		} else if (status == 3) {
			cm.dispose();
		}
	}
}