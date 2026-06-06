/* Konpei
	Showa - Nightmarish Last Days
*/

var flash;

function start() {
    flash = cm.haveItem(4000141);

    if (!flash) {
	cm.sendNext("嘿，嘿！那样拿着手电筒很危险！会引起火灾的！我来帮你保管吧。在这里不能太不小心...");
    } else {
	cm.sendNext("我真的很佩服你的勇气！如果你想返回昭和村的话，告诉我就好～！")
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (!flash) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	} else {
	    cm.warp(801040101, 0);
	    cm.dispose();
	}
    } else {
	cm.sendOk("我真的很佩服你的勇气！如果你想返回昭和村的话，告诉我就好～！");
    }
}