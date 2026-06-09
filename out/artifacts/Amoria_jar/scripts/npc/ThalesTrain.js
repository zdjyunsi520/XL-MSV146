/* Grand Athenaeum
    Thales the Librarian
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
	} else {
		status++;
    if (status == 0) {
	    cm.sendSimple("#b请选择你想训练的地图：#k#e\r\n#L0#等级 1 - 50#l\r\n#L1#等级 50 - 100#l\r\n#L2#等级 100 - 150#l\r\n#L3#等级 150 - 200#l\r\n#L4#等级 200 - 230#l\r\n#L5#等级 230 - 250#l");
	} else if (status == 1) {
	if (selection == 0) {		
	    cm.warp(862000000,0);
		cm.dispose();
	} else if (selection == 1) {	
		cm.warp(862000001,0);
		cm.dispose();
	} else if (selection == 2) {	
		cm.warp(862000003,0);
		cm.dispose();
	} else if (selection == 3) {	
		cm.warp(862000004,0);
		cm.dispose();
	} else if (selection == 4) {	
		cm.warp(861000500,0);
		cm.dispose();
	} else if (selection == 5) {	
		cm.warp(860000002,0);
		cm.dispose();
   }
  }
 }
}