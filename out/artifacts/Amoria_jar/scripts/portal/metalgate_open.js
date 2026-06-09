/*
Stage 2: Door guarded by Dark Muscle Golems - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getMap().getReactorByName("metalgate").getState() == 1) {
	pi.warp(990000431, 0);
    }
    else {
	pi.playerMessage("此路前方尚未开启。");
    }
}
