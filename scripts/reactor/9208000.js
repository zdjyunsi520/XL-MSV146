/* @Author Lerk
 * 
 * 9208000.js: Guild Quest - Gatekeeper Puzzle Reactor
 * 
*/

function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
	var status = eim.getProperty("stage1status");
	if (status != null && !status.equals("waiting")) {
	    var stage = parseInt(eim.getProperty("stage1phase"));
	    //rm.mapMessage(6,"阶段 " + stage);
	    if (status.equals("display")) {
		var prevCombo = eim.getProperty("stage1combo");
		prevCombo += rm.getReactor().getObjectId();
		//rm.mapMessage(6,"当前组合： " + prevCombo);
		eim.setProperty("stage1combo",prevCombo);
		if (prevCombo.length == (6 * (stage + 3))) { //end of displaying
		    eim.setProperty("stage1status","active");
		    rm.mapMessage("组合已显示；请谨慎操作。");
		    eim.setProperty("stage1guess","");
		}
	    } else { //active
		var prevGuess = eim.getProperty("stage1guess");
		if (prevGuess.length != (6 * (stage + 3))) {
		    prevGuess += rm.getReactor().getObjectId();
		    eim.setProperty("stage1guess",prevGuess);
		}
	    //rm.mapMessage(6,"当前猜测： " + prevGuess);
	    }
	}
    }
//rm.mapMessage(6,""+rm.getReactor().getObjectId());
}