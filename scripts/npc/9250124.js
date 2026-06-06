function start() { 
	cm.sendOk("带1000枚银币来，我才会认为你有资格..."); 
} 

function action(mode, type, selection) {
	if (cm.haveItem(4031697, 1000)) { //check to see if the user has 1000 silver coins
		cm.gainItem(4031697, -1000); //take 1000 silver coins
		cm.gainItem(4031473, 1);  //give a key for quest
		cm.dispose();
	}
	else{ //if they dont have 1000 silver coins then...
		cm.sendOk("带1000枚银币来，我才会认为你有资格...");
		cm.dispose();
	}
}