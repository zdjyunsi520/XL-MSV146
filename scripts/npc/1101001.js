 /* 
	NPC Name: 		Divine Bird
	Map(s): 		Erev
	Description: 		Buff
*/

function start() {
    cm.useItem(2022458);
    cm.sendOk("不要停止训练。保护枫之谷的世界需要你每一分力量……");
}

function action(mode, type, selection) {
    cm.dispose();
}