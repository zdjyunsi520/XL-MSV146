/* Return to Masteria
    BeastTamer Quest line
    Made by Daenerys
*/
function enter(pi) {
    if (pi.getQuestStatus(59052)==1){
        pi.warp(866033000,0);
        return;
   } else {
	    pi.topMsg("通往狗头人之王房间的路被堵住了。而且...这里真的超级臭。再去和伍德罗克谈谈。");
		pi.forceCompleteQuest(59049);
		pi.warp(866000000,0);
   }
}