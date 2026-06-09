load("连一丝光都没有。");
importPackage(Packages.tools.packet);

var status = 42;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 43) {
        cm.sendNextS("Ah...", 5, 1402100);
    } else if (status == 44)
        cm.sendNextPrevS("现在下结论还为时过早。", 5, 1402400);
    else if (status == 45)
        cm.sendNextPrevS("...", 5, 1402100);
    else if (status == 46)
        cm.sendNextPrevS("没错。我们甚至还不确定那块石头是不是真的。", 5, 1402102);
    else if (status == 47)
        cm.sendNextPrevS("对-对啊！就算是我也能用魔法发光呢！", 5, 1402106);
    else if (status == 48)
        cm.sendNextPrevS("等神兽回来，她会做出判断的。", 5, 1402103);
    else if (status == 49)
        cm.sendNextPrevS("如果你动摇了，西格纳斯骑士团也会跟着动摇。坚强起来。", 5, 1402104);
    else if (status == 50)
        cm.sendNextPrevS("你的联盟是枫之谷新时代的基础。这一切可能只是一个阴谋，目的是动摇你的地位。在她拿出确凿的证据之前，我们不能听信她。", 5, 1402105);
    else if (status == 51)
        cm.sendNextPrevS("你的走狗们正在拼命地无视真相。", 5, 1402101);
    else if (status == 52)
        cm.sendNextPrevS("Everyone...", 5, 1402100);
    else if (status == 53)
        cm.sendNextPrevS("我不会否定你的努力，西格纳斯。作为一个年轻女孩，你表现出了惊人的智慧，但我恳请你做出正确的决定！", 5, 1402400);
    else if (status == 54)
        cm.sendNextPrevS("承认我是真正的女皇，在这场闹剧变得无法挽回之前退出来。", 5, 1402400);
    else if (status == 55)
        cm.sendNextPrevS("告诉联盟，从现在起他们将追随我。", 5, 1402400);
    else if (status == 56)
        cm.sendNextPrevS("当然，我对你的处境并非没有同情。我会给你一些时间来接受这一切。做任何你需要做的事来让自己面对真相。", 5, 1402400);
    else if (status == 57)
        cm.sendNextPrevS("当你准备好了，你会发现枫之谷世界真正的女皇不是西格纳斯，而是希拉。", 5, 1402400);
    else if (status == 58)
        cm.sendNextPrevS("（加斯东现在应该准备好了。是时候放手一搏了！）", 5, 1402400);
    else if (status == 59)
        cm.sendNextPrevS("（加斯东现在应该准备好了。是时候放手一搏了！）", 17);
    else if (status == 60) {
        cm.dispose();
        cm.showPhantomWait();
    }
}