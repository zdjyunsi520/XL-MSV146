/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */

function start() {
    cm.askAcceptDecline("只要我拥有善良之镜，就能重新召唤黑魔法师！\r\n等等！有什么不对！为什么黑魔法师没有被召唤出来？等等，这是什么力量？我感觉到了……一股完全不同于黑魔法师的力量啊啊啊！！！！！\r\n\r\n #b（将手放在克里斯顿的肩膀上。）");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(270050100, 2141000);
	cm.forceStartReactor(270050100, 2709000);
    }
    cm.dispose();

// If accepted, = summon PB + Kriston Disappear + 1 hour timer
// If deny = NoTHING HAPPEN
}