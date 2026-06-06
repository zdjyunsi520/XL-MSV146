/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    status = -1;
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
	cm.sendNext("你好！欢迎来到射手村护肤中心！你想要拥有像我一样紧致、光滑、健康的皮肤吗？只要有一张#b#t5153000##k，你就可以让我们为你打理，拥有你一直想要的肌肤～！");
    } else if (status == 1) {
	cm.sendStyle("通过我们专用的仪器，你可以提前看到护理后的效果。你想做哪种皮肤护理呢？选择你喜欢的类型吧。", skin);
    } else if (status == 2){
	if (cm.setAvatar(5153000, skin[selection]) == 1) {
	    cm.sendOk("享受你全新改良的肌肤吧！");
	} else {
	    cm.sendOk("嗯……你没有接受护理所需的护肤券。抱歉，恐怕我们无法为你服务……");
	}
	cm.dispose();
    }
}
