/*
	NPC Name: 		Parwen
	Description: 		Quest - Verifying the password
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    qm.sendNext("快点，别磨蹭了。如果你脑子不好使就把纸笔拿出来！");
	    qm.dispose();
	    return;
	}

	if (status == 0) {
	    qm.sendNext("哦！你终于来了！很高兴你及时赶到。我拿到了秘密通道的主钥匙！哈哈哈！是不是很厉害？说它厉害！");
	} else if (status == 1) {
	    qm.askAcceptDecline("好了，现在，这把钥匙非常长而且复杂。我需要你好好记住它。我不会再说第二遍，所以你最好把它写下来。准备好了吗？");
	} else if (status == 2) {
	    var pass = generateString();
	    qm.sendOk("密码是#b"+pass+"#k。记住了吗？把钥匙插进秘密通道的门里，你就可以自由进出了。");
	    qm.forceStartQuest(pass);
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.dispose();
	}
    }
}

function generateString() {
    var thestring = "";
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rnum;
    for (var i = 0; i < 10; i++) {
	rnum = Math.floor(Math.random() * chars.length);
	thestring += chars.substring(rnum, rnum+1);
    }
    return thestring;
}