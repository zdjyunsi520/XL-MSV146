/**
	Trash Can - Aboard the Nautilus
**/

var status = -1;

function action(mode, type, selection) {
    if (status == -1) {
	status = 0;
	cm.sendNext("一封写了一半的信……也许很重要！要不要看看？");
    } else if (status == 0) {
	if (cm.haveItem(4031839)) {
	    cm.sendOk("我已经捡起一封了。我觉得不需要再捡另一封了。");
	    cm.safeDispose();
	} else {
	    cm.gainItem(4031839,1);
	    cm.sendOk("我勉强能辨认出来……上面写的是凯琳。");
	    cm.safeDispose();
	}
    }
}