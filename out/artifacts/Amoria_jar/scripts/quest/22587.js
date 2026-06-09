var status = -1;
//this quest is SECRET ORGANIZATION SUSPICION
function start(mode, type, selection) {
	qm.sendNext("请再次和我对话。我想让你消灭100个#o9001030#和#o9001029#，但只限于特定的那些。请再和我对话前往特定地点。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}