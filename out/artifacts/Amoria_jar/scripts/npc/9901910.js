var status = -1;


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
	cm.sendNext("我准备好测试幻影侠的视频了。", 1);
    } else if (status == 1) {
	cm.MovieClipIntroUI(true);

	cm.PhantomVideo();
	cm.dispose();
    }
}
