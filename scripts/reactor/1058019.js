/* 
 Berserk 4th job quest rock - Warp you away
*/

function act() {
    rm.playerMessage(6, "混沌绯红女王已出现！准备战斗！");
	    rm.getMap().startMapEffect("让我为你的即将到来的死亡哀悼吧！！", 5120099);
    rm.spawnMonster(8920000);
}