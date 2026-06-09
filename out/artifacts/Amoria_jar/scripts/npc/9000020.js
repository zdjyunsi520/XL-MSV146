/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/

var status = -1;
var cost, sel;
var togo1, togo2, togo3;
var map;
var back = true;

function start() {
    switch (cm.getMapId()) {
	case 800000000:
	case 500000000:
	case 701000000:
	case 740000000:
	    map = cm.getSavedLocation("WORLDTOUR");
	    cm.sendSimple("旅行怎么样？玩得开心吗？\n\r #b#L0# 我可以去别的地方吗？#l\n\r #L1# 我旅行够了。我想回到#m"+map+"#?#l");
	    break;
	case 950000100:
	    map = 193000000;
	    cm.sendSimple("旅行怎么样？玩得开心吗？\n\r #b#L1# 我旅行够了。我想回到#m"+map+"#?#l");
	    break;
	default:
	    back = false;
	    if (cm.getJob() == 0) {
		cm.sendNext("如果你厌倦了单调的日常生活，不如出去走走怎么样？感受一下新的文化，每分钟都学到新东西！是时候出门旅行了。我们推荐\r\n#b环球旅行#k！你担心旅行费用？不用担心！#b枫之谷旅行社#k以#b300枫币#k的低廉价格提供头等旅行服务。");
		cost = 300;
	    } else {
		cm.sendNext("如果你厌倦了单调的日常生活，不如出去走走怎么样？感受一下新的文化，每分钟都学到新东西！是时候出门旅行了。我们枫之谷旅行社推荐你来一场#b环球旅行#k！你担心旅行费用？不用担心！我们#b枫之谷旅行社#k精心策划了一个方案，让你只需#b3,000枫币#k就能旅行！");
		cost = 3000;
	    }
	    break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
	cm.dispose();
    } else {
	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
	    cm.dispose();
	    return;
	}
	if (mode == 1)
	    status++;
	else
	    status--;

	if (!back) {
	    if (status == 0) {
		cm.sendSimple("我们目前提供这个旅行目的地：\r\n#b日本蘑菇神社#k。我将在那里担任你的导游。请放心，目的地的数量会随时间增加。那么，你想前往蘑菇神社吗？\r\n#L0##b 是的，带我去蘑菇神社（日本）#k#l");
	    } else if (status == 1) {
		cm.sendYesNo("你想前往#b日本蘑菇神社#k吗？如果你想感受日本的精髓，没有比参拜神社更好的了，这里是日本文化的大熔炉。蘑菇神社是一个神话般的地方，自古以来供奉着无与伦比的蘑菇之神。");
	    } else if (status == 2) {
		cm.sendNext("去看看侍奉蘑菇之神的女巫吧，我还强烈推荐你品尝日本街头出售的章鱼烧、炒面和其他美食。那么，让我们出发前往#b蘑菇神社#k吧，一个如神话般的地方。");
	    } else if (status == 3) {
		if (cm.getMeso() < cost) {
		    cm.sendPrev("请确认你有足够的枫币前往。");
		} else {
		    cm.gainMeso(-cost);
		    cm.saveLocation("WORLDTOUR");
		    cm.warp(800000000, 0);
		    cm.dispose();
		}
	    }
	} else {	    
	    if (status == 0) {
		if (selection == 0) {
		    switch (cm.getMapId()) {
			case 740000000:
			    togo1 = 800000000;
			    togo2 = 701000000;
			    togo3 = 500000000;
			case 500000000:
			    togo1 = 800000000;
			    togo2 = 701000000;
			    togo3 = 740000000;
			    break;
			case 800000000:
			    togo1 = 701000000;
			    togo2 = 500000000;
			    togo3 = 740000000;
			    break;
			case 701000000:
			    togo1 = 500000000;
			    togo2 = 800000000;
			    togo3 = 740000000;
			    break;
			default:
			    cm.dispose();
			    return;
		    }
		    cm.sendSimple("你想去哪里旅行？\n\r #b#L0##m"+togo1+"# （3,000枫币）#l\n\r #L1##m"+togo2+"# （3,000枫币）#l\n\r #L2##m"+togo3+"# （3,000枫币）#l");

		} else if (selection == 1) {
		    cm.warp(map == -1 ? 100000000 : map);
		    cm.clearSavedLocation("WORLDTOUR");
		    cm.dispose();
		}
	    } else if (status == 1) {
		sel = selection;
		if (sel == 0) {
		    cm.sendNext("你想前往#b#m"+togo1+"##k吗？前往那里只需要#b3,000枫币#k。你现在想去吗？");
		} else if (sel == 1) {
		    cm.sendNext("你想前往#b#m"+togo2+"##k吗？前往那里只需要#b3,000枫币#k。你现在想去吗？");
		} else if (sel == 2) {
		    cm.sendNext("你想前往#b#m"+togo3+"##k吗？前往那里只需要#b3,000枫币#k。你现在想去吗？");
		}
	    } else if (status == 2) {
		if (sel == 0) {
		    cm.warp(togo1);
		} else if (sel == 1) {
		    cm.warp(togo2);
		} else if (sel == 2) {
		    cm.warp(togo3);
		}
		cm.dispose();
	    }
	}
    }
}