function act() {
	rm.mapMessage(6, "右上方的开关已被切换。");
	var flames = Array("a6", "a7", "b6", "b7", "c6", "c7");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}