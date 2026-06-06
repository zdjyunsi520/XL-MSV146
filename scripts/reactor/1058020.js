/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "贝伦已出现！准备战斗！");
	rm.getMap().startMapEffect("你无视我的警告？我不会手下留情！", 5120103);
	
    rm.spawnMonster(8930100);
}