var names = Array("废弃都市广场大厅", "1F/2F：泡泡茶店", "3F/4F：玩偶店", "5F/6F：服装香水店", "7F/8F：音乐商店和VIP专区", "离开废弃都市广场");
var mid = Array("103040000", "103040100", "103040200", "103040300", "103040400", "103020020");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {                
            text = "你可以乘坐电梯快速移动。请选择目的地。\r\n"; 
            for (var i = 0; i < names.length; text += "#L"+i+"##b"+names[i]+"#k\r\n#l", i++); 
            cm.sendSimple(text);
        } else if (status == 1) {
            cm.sendNext("正在前往 "+names[selection]+"。按Esc键取消。");
            map = mid[selection];
        } else if (status == 2) {
            cm.warp(map, "enter00");
            cm.dispose();
        }
    }
}  