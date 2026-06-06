/* RED Zero
    Kiru
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("不感兴趣？那就算了……");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("这艘船将驶向#b#m130000000##k，那是一个有着绯红落叶沐浴阳光、清风掠过溪流的岛屿，也是枫之谷的女皇西格诺斯所在之处。如果你有兴趣加入西格诺斯骑士团，那一定要去看看。你想去#m130000000#吗？\r\n\r\n旅途将花费你#b1000#k金币。");
	} else if (status == 1) {	
        cm.warp(130000210,0);	
	    cm.dispose(); 
    }
}