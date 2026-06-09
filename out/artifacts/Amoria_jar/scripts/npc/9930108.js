/**
 * @author: Eric
 * @npc: ????
 * @func: The one-and-only Custom Hair Changer
*/
var status;
var hair;
var gender;

function start() {
	status = -1;
	hair = [39500, 39501, 39502, 39503, 39504, 39505, 39506, 39507, 39508, 39509, 39510, 39511, 39512, 39513, 39514, 39515, 39516, 39517, 39518, 39519, 39520, 39521, 39522, 39523];
	gender = cm.getPlayer().getGender();
	if (gender == 1 || gender == 2) {
		cm.sendSimple("抱歉，我只能为#b女性#k更改外貌。");
	} else {
		cm.sendOk("选择一个自定义发型！");
		cm.dispose();
	}
}

function action(mode, type, selection) {
    (mode == 1 ? status++ : cm.dispose());
	if (status == 0) {
		if (selection == 0) {
			cm.sendStyle("选择一个自定义发型！", hair);
		}
	} else if (status == 1) {
		cm.setHair(hair[selection]);
		cm.dispose();
	}
}