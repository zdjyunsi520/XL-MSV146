load("让我给你一个测试：#b\r\n");
importPackage(Packages.tools);
var status = 0;
var selStr;
var sel;
var selitem;
var a=Math.floor(Math.random()*10+5);
var b=Math.floor(Math.random()*20+10);
var c=Math.floor(Math.random()*20+5);
var d=Math.floor(Math.random()*10+3);
var ass=d+b*c+a;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	var haogan=cm.getChar().getMapId()-744000003;
	if(cm.getChar().getMapId()==744000001){
		haogan=20;
	}
	if(cm.getbosslog("haogan"+cm.getChar().getMapId())>0){
		haogan=0;
	}
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if(cm.getbosslog("haogandt")==0){
			selStr = "好的。请提升他/她的好感度！\r\n#e#k(可用好感点数 #r";
			selStr+=d+" + "+b+" x "+c+" + "+a+" = ?";
			cm.sendGetNumber(selStr,1,1,9999);
		}else{
			selStr = "#k )请选择：#n#b\r\n"+haogan+"#L0##e乔(敏捷)#n (已获得 #r";
			selStr+="#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(0)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L2##e小龙(力量)#n (已获得 #r"+cm.getChar().getgetschool(1)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L3##e伊卡(运气)#n (已获得 #r"+cm.getChar().getgetschool(2)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="不错。我觉得你的智商不低..哈哈！"+cm.getChar().getgetschool(3)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
			cm.sendSimple(selStr);
		}
    } else if (status == 1) {
		if(cm.getbosslog("haogandt")==0){
			if(selection==ass){
				status=-1;
				cm.setbosslog("haogandt");
				cm.getPlayer().getMap().startSimpleMapEffect("正确！你获得1分，通过了测试！", 5120067);
				cm.sendNext("哦。答案不对！");
			}else{
				cm.sendOk("好感点数已分配！请前往下一张地图！");
				cm.dispose();
			}
		}else{
			if(cm.getbosslog("haogan"+cm.getChar().getMapId())==0){
				cm.setbosslog("haogan"+cm.getChar().getMapId());
				cm.getChar().setgetschool(selection,haogan+cm.getChar().getgetschool(selection));
				cm.sendOk("好感点数已分配！请前往下一张地图！");
			}else{
				if(cm.getChar().getMapId()==744000001){
					cm.warp(744000000,0);
				}else{
					cm.sendOk("好感点数已分配！请前往下一张地图！");
				}
			}
			cm.dispose();
		}
	}
}