/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/

function start() {
    if (cm.haveItem(4031061)) {
	cm.sendNext( "干得好，通过了第1阶段！好的……我会把你送到#b#p2030008##k那里。在此之前！！请注意，你在这里获得的各种特殊物品不会被带出去。我会从你的物品栏中收回这些物品，请记住这一点。再见！" );
    } else {
	cm.sendNext("一定是中途退出了吧。好的，我现在就把你送出去。在此之前！！请注意，你在这里获得的各种特殊物品不会被带出去。我会从你的物品栏中收回这些物品，请记住这一点。再见！");
    }
}

function action(mode, type, selection){
    if (mode == 1) {
	cm.removeAll(4001015);
	cm.removeAll(4001016);
	cm.removeAll(4001018);
	cm.warp(211042300, 0);
    }
    cm.dispose();
}