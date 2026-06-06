var status = -1;
function action(mode, type, selection) {
    status++;
    if (status == 0) {
    	cm.sendNext("我的心在狂跳，但这也很刺激。不过如果我们被抓到就惨了。");
    } else if (status == 1) {
    	cm.dispose();
    }
}