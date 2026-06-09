/* Romi
	Orbis Skin Change.
*/
var status = -1;
var skin = [0, 1, 2, 3, 4];

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("嗯，你好！欢迎来到天空之城护肤中心~！想拥有像我一样紧致、健康有光泽的皮肤吗？有了#b#t5153001##k，让我们来为你服务，帮你拥有你梦寐以求的肌肤~！");
    } else if (status == 1) {
	cm.askAvatar("通过我们的专业设备，你可以在护理前就看到护理后的效果。你想要什么样的肤色？选择你喜欢的风格吧~！", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153001, skin[selection]) == 1) {
	    cm.sendOk("享受你焕然一新的肤色吧！");
	} else {
	    cm.sendOk("嗯……你没有接受护理所需的护肤优惠券。抱歉，恐怕我们无法为你服务……");
	}
	cm.safeDispose();
    }
}