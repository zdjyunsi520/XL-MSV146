/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "混沌贝伦已出现！准备战斗！");
    rm.getMap().startMapEffect("你无视我的警告？我不会手下留情！", 5120103);
	var mob0 = rm.getMonster(8930000);
	var map = rm.getMap(105200810);
	var modified = rm.newMonsterStats();
    modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() * 2.0);
	modified.setOExp(mob0.getMobExp() * 1);
	mob0.setOverrideStats(modified);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-179, 443)); 
//  rm.spawnMonster(8930000);
}