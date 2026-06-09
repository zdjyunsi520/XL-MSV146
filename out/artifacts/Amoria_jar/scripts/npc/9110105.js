/* 
 *  NPC     Naosuke
 *  Maps ;  Ninja Castle Hallway
 *
 */
var status = -1

function start() {
    cm.sendNext("……看到了吗？前方的道路充满了危险，这条路以吞噬所有胆敢前往之人的生命而闻名。如果我是你，我会立刻转身离开，保住这条小命。");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++
    } else {
	if (status == 0) {
	    cm.sendOk("什么？你想从这继续前进？你是说你知道外面有什么吗？");
	}
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("……好吧。既然你知道外面真正的危险还坚持要去，那我就不拦你了。我真的希望你安全到达天守阁……然后打败那些家伙！");
    } else if (status == 1) {
	cm.sendNext("……好吧。既然你知道外面真正的危险还坚持要去，那我就不拦你了。我真的希望你安全到达天守阁……然后打败那些家伙！")
    } else if (status == 2) {
	cm.warp(800040300, 0);
	cm.dispose();
    }
}