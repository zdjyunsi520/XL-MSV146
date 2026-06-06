/* 	Xan
	Lian Hua Hua Skin Care
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
	cm.sendNext("通过我们的专业服务，你可以提前看到护理后的样子。你想做哪种皮肤护理呢？选择你喜欢的风格吧...");
    } else if (selection == 1) {
	cm.askAvatar("享受你全新改进的肤色吧！", skin);
    } else if (status == 1){
	if (cm.setRandomAvatar(5153010, skin) == 1) {
	    cm.sendOk("嗯...你没有接受护理所需的护肤券。抱歉，恐怕我们无法为你服务...");
	} else {
	    cm.sendOk("嗯...你没有接受护理所需的护肤券。抱歉，恐怕我们无法为你服务...");
	}
	cm.safeDispose();
    }
}