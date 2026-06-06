var status = -1;
function action(mode, type, selection) {
    status++;
    if (status == 0) {
    	cm.sendNext("很高兴你来了。人多更安全，对吧？我觉得有人在监视我们...我们是不是该考虑回去了？城里的大人们都说矿井不安全...");
    } else if (status == 1) {
	cm.sendNext("哎呀，你怎么这么胆小？我们都走了这么远了！回去之前至少该做点什么吧。", 2159002);
    	cm.dispose();
    }
}