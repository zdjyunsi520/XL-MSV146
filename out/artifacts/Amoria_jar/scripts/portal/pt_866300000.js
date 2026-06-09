/* Return to Masteria
    Vicky's Meeting Place
    Made by Daenerys
*/
function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
	    pi.playerMessage(5, "请先消灭维基！");
	    return;
	} else {
    pi.openNpc(9390336, "BeastTamerQuestLine5");
   }  
 }