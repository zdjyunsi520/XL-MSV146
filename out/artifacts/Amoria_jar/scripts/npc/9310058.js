/**
Author: SilentThief
Function: Beginner Quest NPC
Server: LogicMS
**/

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action (mode, type, selection) {

	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		}
	}

	if (mode == 1)
		status++;

	else
		status--;
	if (status == 0) {
		cm.sendNext("#e服务器基础信息：#n \r\n- 8x/10x/2x \r\n- GML货币 \r\n- @npc \r\n- @help \r\n- @gm <原因> \r\n#e你准备好做一个简短的测验来开始你的旅程了吗？#n");
	}else if (status == 1) {
		cm.sendYesNo("#e经验倍率是多少：#n \r\n#L0# - 8x \r\n#L1# - 12x");
	}else if (status == 2) {
		cm.sendSimple("#eViciousMS使用什么货币？#n \r\n#L2# - GML \r\n#L3# - 代币");
	}
	else if (selection == 0) {
			cm.sendNext("抱歉，回答错误，请重新完成整个测验！");
		}
		else if (selection == 1) {
			cm.sendOk("#e呼叫GM的命令是什么：#n \r\n#L4# - @gm <原因>\r\n#L5# - @gmhelp <原因>");
			cm.dispose();
		}
		else if (selection == 2) {
			cm.sendNext("#e显示服务器所有信息的命令是什么：#n \r\n#L6# - @help \r\n#L7# - @helpme");
		}
		else if (selection == 3) {
			cm.sendOk("#e呼叫GM的命令是什么：#n \r\n#L4# - @gm <原因>\r\n#L5# - @gmhelp <原因>");
			cm.dispose();
		}
		else if (selection == 4) {
			cm.sendNext("#e显示万能NPC的命令是什么：#n \r\n#L7# - @fmnpc \r\n#L8# - @npc");
		}
		else if (selection == 5) {
			cm.sendOk("#e呼叫GM的命令是什么：#n \r\n#L4# - @gm <原因>\r\n#L5# - @gmhelp <原因>");
			cm.dispose();
		}
		else if (selection == 6) {
			cm.sendNext("恭喜你完成了我们的小测验！\r\n#e你确定要继续吗？#n \r\n #L10#是的，我想继续！ \r\n#L9#不，我不想！");
		}
		else if (selection == 7) {
			cm.sendOk("#e呼叫GM的命令是什么：#n \r\n#L4# - @gm <原因>\r\n#L5# - @gmhelp <原因>");
			cm.dispose();
		}
		else if (selection == 8) {
			cm.sendNext("好的，准备好离开时来找我！");
		}
		else if (selection == 9) {
			cm.sendOk("大家请注意，欢迎");
			cm.dispose();
		}
		else if (selection == 10) {
cm.msiMessage("，ViciousMS的最新玩家。输入@help查看我们的命令。 "+cm.getPlayer().getName()+"，ViciousMS的最新玩家。输入@help查看我们的命令。");
cm.gainMeso(1000000);
cm.gainExp(1000);
cm.warp(100000000, 1);
cm.dispose();
		}

	}