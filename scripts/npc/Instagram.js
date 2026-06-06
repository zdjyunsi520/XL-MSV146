/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


status = -1;
sel = -1;

function start() {
    cm.sendNext("你想做什么？\r\n\r\n#b#L0#查看我的留言板，如果我有朋友的话。#l\r\n#L1#在我的留言板上发照片，好让别人羡慕我。#l\r\n#L2#偷窥朋友的留言板。#l");
}

function action(mode, type, selection) {
    status++;
    if (mode < 1) {
        cm.dispose();
        return;
    }
    switch (status) {
    case 0x00:
        cm.sendSimple("#h #的留言板！\r\n");
        break;
    case 0x01:
        sel = selection;
        if (sel == 0) {
            var wall = "#b#L0#我想回到主菜单！#l";
            for (var i = 0; i < cm.getPlayer().getInstagram().getMessages().size(); i++) {
                wall += "\r\n----------------------------------------------\r\n";
                wall += "\t\t\t\t\t\t\t\t\t\t\t\t#L-1" + cm.getPlayer().getInstagram().getMessages().get(i).getPostId() + "##i3991023##l\r\n"
                wall += cm.getPlayer().getInstagram().getMessages().get(i).getMessage();
                wall += "\r\n\r\n";
            }
            wall += "\r\n----------------------------------------------\r\n";
            wall += "在这里输入照片网址";
            cm.sendSimple(wall);
        } else if (sel == 1) {
            cm.sendGetText("输入你想偷窥的'朋友'的名字（他不是你朋友，他在说谎）。");
        } else if (sel == 2) {
            cm.sendGetText("去吃培根吧，再见！");
        } else {
            cm.sendNext("照片已成功删除。");
            cm.dispose();
        }
        break;
    case 0x02:
        if (sel == 0) {
            status = -1;
            if (selection == 0) {
                action(1, -1, -1);
                return;
            } else {
                var number = Math.abs(selection) + "";
                var postid = parseInt(number.substring(1));
                var act = parseInt(number.substring(0, 1));
                switch (act) {
                    case 0x01: //Remove
                        cm.removePhoto(postid);
                        cm.sendNext("你的照片已成功上传！");
                        break;
                    default:
                        cm.sendNext("Bacon.");
                        cm.dispose();
                        break;
                }
            }
        } else if (sel == 1) {
            if(cm.isExists(cm.getText())) {
            cm.postPhoto(cm.getText());
            cm.sendNext("未找到该照片...");
            status = -1;
            } else {
                cm.sendNext("未找到该用户名...");
            }
        } else if (sel == 2) {
            if (cm.checkWall(cm.getText())) {
                var wall = "#b#L0#我想回到主菜单！#l";
                for (var i = 0; i < cm.getPlayer().getInstagram().getStalk().getMessages().size(); i++) {
                    wall += "\r\n----------------------------------------------\r\n";
                    wall += cm.getPlayer().getInstagram().getStalk().getMessages().get(i).getMessage();
                    wall += "\r\n\r\n";
                }
                wall += "\r\n----------------------------------------------\r\n";
                wall += "在这里输入照片网址";
                cm.sendSimple(wall);
            } else {
                cm.sendNext("未找到该用户名...");
            }
            status = -1;
        }
        break;
    }
}  