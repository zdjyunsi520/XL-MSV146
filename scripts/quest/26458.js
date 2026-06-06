/* RED 1st impact
    Everybody in event
	Matilda
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
        qm.sendSimple("嘿，你！感谢你登录游戏！\r\n\r\n这里有一些#e#b你可能喜欢的东西#k#n！\r\n#b\r\n#L0# 福利1. 全民活动专属武器#l\r\n#L1# 福利2. 全民活动专属骑宠#l\r\n#L2# 福利3. 原地复活/全民活动太空岩石#l\r\n#L3# 跳过说明。#l");
    } else if (status == 1) {
        sel = selection;
	if (selection == 0) {		
	    qm.sendNext("#e登录时间到了！#n\r\n\r\n在全民活动期间登录游戏，你可以获得一个#b#e#t2430288##k#n和一把临时全民活动武器。\r\n#i2430288:# #t2430288:#\r\n\r\n#r双击#k盒子来获得适合你当前职业和等级的武器。你同一时间只能拥有1把全民活动武器。它会在你#r登出时消失#k。\r\n\r\n如果你丢失了#t2430288#，你可以从任何城镇的#b#e#p9000018##n#k那里获得替换品。");
        } else if (selection == 1) {
		qm.sendNext("#e试试在全民活动期间登录！#n\r\n\r\n如果你在全民活动期间登录，你可以免费获得#b#e#t2430079##n#k。\r\n#i2430079:# #t2430079#\r\n\r\n#r双击#k #t2430079#来学习#b漂浮气球骑宠#k技能。优惠券会在你#r登出时自动删除#k。\r\n\r\n如果你丢失了#t2430079#或者在骑宠技能到期后消失，你可以从各城镇的#b#eNPC#p9000018##n#k那里再次获得。");
        } else if (selection == 2) {
		qm.sendNext("#e试试在全民活动期间登录！#n\r\n\r\n如果你在全民活动期间玩冒险岛时死亡，你不需要从最近的城镇一路跑回来。你可以直接#e#b原地复活#n#k继续享受游戏！\r\n\r\n#r双击#k全民活动免费赠送的#b#e#t2430267##k#n即可传送到想要的城镇，不限大陆。#t2430267#可以#r每30分钟使用一次#k。\r\n#i2430267# #t2430267#\r\n\r\n即使使用后太空岩石也不会消失，所以你可以反复使用。它会在你#r登出时自动删除#k。如果你丢失了#t2430267#，你可以从各城镇的#b#e NPC #p9000018##n#k那里再次获得。");
        } else if (selection == 3) {
		qm.sendOk("享受精彩的全民活动福利！希望你玩得开心！");
		qm.dispose();
	   }
	    qm.dispose();
    }
}