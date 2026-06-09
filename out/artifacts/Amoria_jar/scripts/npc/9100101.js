/*
@	Name: GMS-like Gachapon
	Ellinia
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.haveItem(5220000)) {
	    cm.sendYesNo("你身上一张票都没有。请先到百货商店购买票券后再来找我。谢谢。");
	} else {
	    cm.sendOk("你获得了#b#t");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 300) == 0) {
	    var rareList = new Array(1382047, 1372037, 1382045, 1372035, 1382048);

	    item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
	    var itemList = new Array(2000005, 2022113, 2002018, 1382001, 1050008, 1442017, 1002084, 1050003, 1002064, 1061006, 1051027, 1442009, 1050056, 1051047, 1050049, 1040080, 1051055, 1372010, 1422005, 1002143, 1302027, 1061087, 1372003, 1302019, 1051023, 1050054, 1061083, 1051017, 1002028, 1322010, 1332013, 1050055, 1002245);
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}
	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("请检查你的物品栏，看看是否有票券，或者物品栏是否已满。" + item + "##k.");
	} else {
	    cm.sendOk("请检查你的物品栏，看看是否有票券，或者物品栏是否已满。");
	}
	cm.safeDispose();
    }
}