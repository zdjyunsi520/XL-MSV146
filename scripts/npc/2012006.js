var mapid = new Array(200000111,200000121,200000131,200000141,200000151,200000161,200000170);
var platform = new Array("Ellinia","Ludibrium","Leafre","武陵","Ariant","Ereb","Edelstein");
var flight = new Array("ship","ship","ship","Hak","Geenie","ship","ship");
var menu;
var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if(mode == 0) {
	cm.sendOk("请确认你要去的地方，然后通过我前往月台。航班按时刻表运行，别错过了！");
	cm.dispose();
	return;
    }
    if(mode == 1)
	status++;
    else
	status--;
    if(status == 0) {
	menu = "天空之城车站有很多个月台可以选择。你需要选择能带你到目的地的那个月台。你要走哪个月台？";
	for(var i=0; i < platform.length; i++) {
	    menu += "\r\n#L"+i+"##b前往 "+platform[i]+"#k#l";
	}
	cm.sendSimple(menu);
    } else if(status == 1) {
	select = selection;
	cm.sendYesNo("即使你走错了通道，也可以通过传送门回到这里，不用担心。你要前往前往#b "+flight[select]+" 的月台吗？目的地是 "+platform[select]+"#k?");
    } else if(status == 2) {
	cm.warp(mapid[select], 0);
	cm.dispose();
    }
}