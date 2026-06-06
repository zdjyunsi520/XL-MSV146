/* RED 1st impact
    Big Headward
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	    cm.sendSimple("你好。我是大头王国的#b#p1012117##k。如果你有#b特殊发型券#k或#b#t05150040##k、#b#t05150087##k，不如让我来为你打理发型？\r\n#b#L1# 改变发型（皇家发型券）#l\r\n#b#L2# 改变发型（全明星发型券）#l\r\n#b#L16# 改变发型（疯狂发型券）#l#k");		
    } else if (status == 1) {
        sel = selection;
	  if (selection == 0) {		
	    cm.sendYesNo("使用皇家发型券，你将获得一个全新的随机发型。你确定要使用 #b#t05150040##k 更改发型吗？");
        cm.dispose();		
     } else if (selection == 1) {
		cm.sendYesNo("使用全明星发型券，你将获得一个全新的随机发型。你确定要使用 #b#t05150061##k 更改发型吗？");
        cm.dispose();	   
     } else if (selection == 2) {
		cm.sendYesNo("使用凌乱发型券，你将获得一个全新的随机发型。你确定要使用 #b#t05150087##k 更改发型吗？");
        cm.dispose();	  
	   }
	    cm.dispose();
    }
}
