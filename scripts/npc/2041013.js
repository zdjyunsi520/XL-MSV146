/* Gina
	Ludibrium Skin Change.
*/
var status = -1;
var skin = Array(0, 1, 2, 3, 4);

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	cm.sendNext("哦，你好！欢迎来到玩具城护肤中心！你想晒黑变得性感吗？或者想要白皙如雪的皮肤？如果你有#b#t5153002##k，让我们来帮你实现，拥有你一直梦想的肤色！");
    } else if (status == 1) {
	cm.askAvatar("通过我们专业的机器，你可以在治疗之前就看到治疗后的样子。你想要什么样的肤色？选择你喜欢的风格吧！", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153002, skin[selection]) == 1) {
	    cm.sendOk("好好享受你的新肤色吧！");
	} else {
	    cm.sendOk("嗯……你没有接受治疗所需的护肤优惠券。抱歉，恐怕我们无法为你服务……");
	}
	cm.safeDispose();
    }
}