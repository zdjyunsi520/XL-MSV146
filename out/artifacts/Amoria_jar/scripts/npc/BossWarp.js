/*
 * @Author:      Itzik
 * @Purpose:     Boss Warper
 */
var status = -1;
var boss = [
211042300, 
211042301, 
211070000, 
240040700, 
270040000,
271040000,
272020110
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.sendOk("你想去猎杀一些Boss吗？");
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        cm.sendYesNo("你想传送到哪个Boss那里？");
    } else if (status == 1) {
        var text = "你想传送到哪个Boss那里？";
        for (var i = 0; i < boss.length; i++)
            text += "\r\n#L" + i + "##m" + boss[i] + "##l";
        cm.sendSimple(text);
    } else if (status == 2) {
        cm.warp(boss[selection]);
        cm.dispose();
    }
}