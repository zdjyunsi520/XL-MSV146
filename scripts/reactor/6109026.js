function act() {
	rm.mapMessage(6, "下方中间的开关已被切换。");
	var flames = Array("g3", "g4", "g5", "h3", "h4", "h5", "i3", "i4", "i5");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}