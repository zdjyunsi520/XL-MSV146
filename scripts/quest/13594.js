/* RED Zero
    [New Years] Glowing Ghost&apos;s Gift
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendOk("#b#e享受你的#e#t1012367##n吧。我不是有史以来最慷慨的人吗？哈！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1012367# #t1012367# x1（10天）");
		qm.gainItem(1012367,1);
    } else if (status == 1) {	   
	    qm.sendPrev("如果你明天带着发光的鼻子回来，我会帮你#e#b升级它#k#n。所以明天要来找我哦！");
		qm.forceStartQuest();
		qm.dispose();
	}
}