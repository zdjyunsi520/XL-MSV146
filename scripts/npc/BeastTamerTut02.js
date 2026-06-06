/* Return to Masteria
    BeastTamer Tutorial
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
         cm.sendZeroTalk("哦不，这是什么？我闻到了...英雄的气息！");
     } else if (status == 1) {
	    cm.warp(866101000,0);
            cm.dispose();
    }
}