/*
 *  Cliff - Happy Ville NPC
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status > 0) {
	    status--;
	} else {
	    cm.dispose();
	    return;
	}
    }
    if (status == 0) {
	cm.sendNext("你看到那边站着的雪人了吗？去和其中一个说话，它会带你去这里著名的超级大圣诞树。这棵树可以用各种装饰品来装扮。你觉得如何？听起来很有趣吧？");
    } else if (status == 1) {
	cm.sendNextPrev("圣诞树所在的地方一次最多只能容纳6人，而且在那里你不能#b交易或开店#k。你丢下的装饰品只有你自己才能捡回来，所以不用担心会丢失。");
    } else if (status == 2) {
	cm.sendNextPrev("当然，在那里丢下的物品永远不会消失。当你通过里面的雪人离开时，你丢在那个地图上的所有物品都会回到你身边，所以你不需要在离开前一一拾取。是不是很贴心？");
    } else if (status == 3) {
	cm.sendPrev("那么，去找#p2002001#吧，在他那里买些圣诞装饰品，然后用那些来装饰圣诞树~对了！最大、最漂亮的装饰品是买不到的。它大概……被怪物拿走了……嘿嘿……");
	cm.dispose();
    }
}