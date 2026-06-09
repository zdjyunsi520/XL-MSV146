function act(){
try {
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(9420513, -146, 225);
    rm.mapMessage(5, "如你所愿，拉塔尼卡船长来了。");
} catch(e) {
    rm.mapMessage(5, "错误： " + e);
}
}