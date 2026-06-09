/*
DB Skills NPC by Wes
*/

var status;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
    }
}

if (mode == 1) 
   status++;

else 
   status--;
    if (status == 0) { 
		cm.sendYesNo("如果你是刀锋大师，我可以教你幻影打击和终结切割，如果你还没有的话。\r\n\r\n你想学习这些技能吗？");
		
	}
}