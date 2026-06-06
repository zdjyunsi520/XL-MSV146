/*
	Computer - Premium road : Kerning City Internet Cafe
*/

var maps = Array(103000000, 190000000, 191000000, 192000000, 195000000, 196000000, 197000000, 600010000, 880000000, 881000000, 809020000, 922220000, 924000100, 925010300, 950000100, 970020001, 970020002, 970020003, 970020004, 910300000, 910210000, 910500000, 910500100, 910500200, 922020100);

function start() {
    var selStr = "选择你专属的地图！#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "\r\n#L" + i + "##m" + maps[i] + "# " + (i >= 1 ? (i == (maps.length - 1) ? ("(等级 " + (i*5-4) + "+)") : ("(等级s " + (i*5-4) + " 到 " + (i*5) + ")")) : "") + "#l";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(maps[selection], 0);
    }
    cm.dispose();
}