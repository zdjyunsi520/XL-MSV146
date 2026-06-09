function enter(pi) {
    if (pi.getQuestStatus(6110) == 1) {
	 if (pi.getParty() != null) {
	     if (!pi.isLeader()) {
		 pi.playerMessage("由两名战士组成的队伍队长可以决定进入。" );
	     } else {
		 if (pi.getParty().getMembers().size < 2) {
		    pi.playerMessage("你需要两名成员的队伍才能进行任务。请组建两人的队伍。" );
		 } else {
		      if (!pi.isAllPartyMembersAllowedJob(1)) {
			  pi.playerMessage("你无法进入。你的队友职业不是战士，或者你的队伍不是由两人组成。");
		      } else {
			  var em = pi.getEventManager("4jrush");
			  if (em == null) {
			      pi.playerMessage("由于未知原因你无法进入，请重试。" );
			  } else {
			      em.startInstance(pi.getParty(), pi.getMap());
			      return true;
			  }
		      }
		 }
	     }
	 } else {
	     pi.playerMessage(5, "你还没有组队。你可以组队挑战。");
	 }
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}