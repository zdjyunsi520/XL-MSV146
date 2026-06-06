function act() {
	rm.mapMessage(6, "右下方的开关已被切换。");
	var flames = Array("g6", "g7", "h6", "h7", "i6", "i7");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}