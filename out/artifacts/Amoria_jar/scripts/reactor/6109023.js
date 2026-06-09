function act() {
	rm.mapMessage(6, "中间左侧的开关已被切换。");
	var flames = Array("d1", "d2", "e1", "e2", "f1", "f2");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}