/* Return to Masteria
    Mesoranger! Rules and Regulations
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendSimple("外星机器人正在入侵！保护世界！点击每#r20分钟#k一次的邀请函参加超级连者活动，活动时间从早上6点到午夜。#l\r\n#b#L0#[超级连者] 游戏信息#l\r\n#L1#查看每日限制");		
    } else if (status == 1) {
        sel = selection;
	  if (selection == 0) {		
	    qm.sendSimple("#r[超级连者！]#k是一款节奏游戏，你需要跟着节拍与盟友一起击败外星机器人。想了解更多细节吗？\r\n#b#L0#选择难度\r\n#b#L1#普通攻击\r\n#b#L2#[特殊攻击1] 最终光束\r\n#b#L3#[特殊攻击2] 特殊导弹\r\n#b#L4#计分");	
		qm.dispose();
     } else if (selection == 1) {
		qm.sendOk("你今天还可以再参加#b5#k次。");
		}
	    qm.dispose();
    }
}