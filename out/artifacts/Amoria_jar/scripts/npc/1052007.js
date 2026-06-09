var itemid = new Array(4031036,4031037,4031038,4031711);
var mapid = new Array(910360000,910360100,910360200,600010004);
var menu;
var status;
var sw;

function start() {
    status = 0;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status ==1) {
	cm.dispose();
    } else {
	if (mode == 0) {
	    cm.sendNext("你到这里来一定有事要办吧？");
	    cm.dispose();
	    return;
	}
	if (mode == 1)
	    status++;
	if (status == 1) {
	    menu = "这里是检票口。你会被立刻送进去。你想使用哪种票？\r\n";
	    for (i=0; i < itemid.length; i++) {
		if(cm.haveItem(itemid[i])) {
		    menu += "#L"+i+"##b#m"+mapid[i]+"##k#l\r\n";
		}
	    }
		menu += "#L" + (itemid.length) + "##b地铁1号线#k#l\r\n#L" + (itemid.length + 1) + "##b废弃都市广场#k#l\r\n";
	    cm.sendSimple(menu);
	} if (status == 2) {
	    section = selection;
	    if(section < (itemid.length - 1)) {
		cm.gainItem(itemid[selection],-1);
		cm.warp(mapid[selection]);
		cm.dispose();
	    }
	    else if (section == (itemid.length - 1)){
		if(sw == null) {
		    cm.sendNext("列车目前停运中。");
		    cm.dispose();
		} else if(sw.getProperty("entry").equals("true")) {
		    cm.sendYesNo("看起来这趟车还有不少空位。请准备好你的车票，我就可以让你进去了。旅程会比较长，但你会顺利到达目的地的。怎么样？要上车吗？");
		} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
		    cm.sendNext("地铁即将发车。很抱歉，你需要等下一班了。发车时间表可以在售票处的乘务员那里查看。");
		    cm.dispose();
		} else {
		    cm.sendNext("我们将在发车前1分钟开始检票。请耐心等待几分钟。请注意地铁会准时发车，我们会在发车前1分钟停止检票，所以请务必准时到达。");
		    cm.dispose();
		}
	    } else {
		if (section == itemid.length) { //subway line 1
			cm.warp(103020100, 0);
		} else if (section == (itemid.length + 1)) { //kerning square
			cm.warp(103040000, 0);
		}
		cm.dispose();
	}
	} if (status == 3) {
	    cm.gainItem(itemid[section],-1);
	    cm.warp(mapid[section]);
	    cm.dispose();
	}
    }
}