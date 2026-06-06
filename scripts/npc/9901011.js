//script by Alcandon

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk ("新手指南 ~~~ \r\n@blade 查看全能NPC\r\n别忘了职业系统，@occupation\r\n经验倍率 500x/250x/4x\r\n@commands / @help / @commands 查看所有指令\r\n交易按钮传送到自由市场\r\n投票获取点数！！\r\n\r\n嘿嘿嘿祝你们玩得开心，菜鸟们 <3\r\n药水商人，@shop");
cm.dispose();
			}
			}
			}
			