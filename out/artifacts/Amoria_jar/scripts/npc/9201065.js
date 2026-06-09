/* Miranda
	NLC Skin Change.
*/
var status = -1;
var skin = [0, 1, 2, 3, 4];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("通过我们的专用设备，你可以在进行程序之前就看到治疗后的效果。你想要什么样的效果呢？选择你喜欢的风格吧～！");
    } else if (status == 1) {
	cm.askAvatar("享受你的全新肌肤吧！", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153009, skin[selection]) == 1) {
	    cm.sendOk("嗯...你没有接受治疗所需的护肤优惠券。抱歉，恐怕我们无法为你服务...");
	} else {
	    cm.sendOk("嗯...你没有接受治疗所需的护肤优惠券。抱歉，恐怕我们无法为你服务...");
	}

	cm.dispose();
    }
}