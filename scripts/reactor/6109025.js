function act() {
	rm.mapMessage(6, "左下方的开关已被切换。");
	var flames = Array("g1", "g2", "h1", "h2", "i1", "i2");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}