/* 	Sixx
	Singa REG/VIP Eye Color Changer
*/
var status = -1;
var beauty = 0;
var colors = Array();

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendSimple("如果使用普通券，你将获得一副随机的隐形眼镜。你要使用#b#t5152039##k来改变你的眼睛吗？");
    } else if (selection == 1) {
	beauty = 1;
	if (cm.getPlayerStat("GENDER") == 0) {
	    var current = cm.getPlayerStat("FACE") % 100 + 20000;
	} else {
	    var current = cm.getPlayerStat("FACE") % 100 + 21000;
	}
	colors = Array();
	colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
	cm.sendYesNo("通过我们的专业机器，你可以提前看到护理后的样子。你想戴什么样的隐形眼镜？选择你喜欢的风格吧。");
    } else if (selection == 2) {
	beauty = 2;
	if (cm.getPlayerStat("GENDER") == 0) {
	    var current = cm.getPlayerStat("FACE") % 100 + 20000;
	} else {
	    var current = cm.getPlayerStat("FACE") % 100 + 21000;
	}
	colors = Array();
	colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
	cm.sendStyle("享受你全新改进的隐形眼镜吧！", colors);
    }
    else if (status == 2){
	cm.dispose();
	if (beauty == 1){
	    if (cm.setAvatar(5152039, colors[Math.floor(Math.random() * colors.length)]) == 1){
		cm.sendOk("抱歉，我想你现在身上没有我们的隐形眼镜券。没有券的话，恐怕我帮不了你..");
	    } else {
		cm.sendOk("抱歉，我想你现在身上没有我们的隐形眼镜券。没有券的话，恐怕我帮不了你..");
	    }
	}
	if (beauty == 2){
	    if (cm.setAvatar(5152040, colors[selection]) == 1){
		cm.sendOk("抱歉，我想你现在身上没有我们的隐形眼镜券。没有券的话，恐怕我帮不了你..");
	    } else {
		cm.sendOk("抱歉，我想你现在身上没有我们的隐形眼镜券。没有券的话，恐怕我帮不了你..");
	    }
	}
    }
}