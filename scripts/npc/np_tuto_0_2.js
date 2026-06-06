function start() {
    cm.sendNextS("你刚收到那条传输了吗？！那赏金简直荒唐！从这儿到佐格的每个猎人都会追杀我们。一秒都不能浪费。", 9);
	cm.np_tuto_0_2();
}

function action(mode, type, selection) {
    cm.dispose();
    cm.np_tuto_0_2();
}