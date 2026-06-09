/* Return to Masteria
    BeastTamer Quest line
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendSelfTalk("好痛！这是什么地方？？？看起来我在魔像神殿附近..让我们去左边那个传送口吧。");
        cm.spawnMonster(9390916,1,679,95);
		cm.dispose();
    }
}