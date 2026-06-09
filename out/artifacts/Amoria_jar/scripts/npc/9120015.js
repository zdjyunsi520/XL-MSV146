/*
	Konpei - Showa Town(801000000)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendSimple ("我可以带你去据点，但那个地方到处都是找麻烦的暴徒。你需要非常强大和勇敢才能进入那里。在据点里，你会找到控制这附近所有老大的Boss老大。到据点很容易，但那个地方顶楼的房间每天只能进入一次。Boss的房间可不是闹着玩的。我建议你不要在里面待太久；一旦进去就要迅速解决。Boss本身就是一个难缠的对手，而且在去见Boss的路上你还会遇到非常强大的敌人！这可不容易。");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("哦，勇敢的人啊。我一直在等你。如果这些\r\n暴徒继续为非作歹，谁知道这个街区\r\n会发生什么。在那之前，我希望\r\n你能解决他们所有人，打败住在\r\n5楼的老大。你必须时刻保持警惕，因为\r\n即使是智者也无法应对这个\r\n老大。不过，从你的眼中，我看到了\r\n虎一般的锐气，那种告诉我你能做到\r\n的眼神。走吧！");
	    } if (selection == 1) {
		cm.sendNext("我很忙的！如果就这点事，别来打扰我！");
	    } if (selection == 2) {
		cm.sendOk("我很忙的！如果就这点事，别来打扰我！");
	    } if(selection != 1) {
		cm.dispose();
	    }
	} else if (status == 2) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	}
    }
}