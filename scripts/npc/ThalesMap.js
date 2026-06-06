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
	    cm.sendSimple("#b你想去哪里？#k#e\r\n#L0#安赫斯特#l\r\n#L1#安摩利亚#l\r\n#L2#阿博伦#l\r\n#L3#阿尔戴米尔#l\r\n#L4#阿里安特#l\r\n#L5#水族馆#l\r\n#L6#阿兹万#l\r\n#L7#驳船码头镇#l\r\n#L8#科梅齐共和国#l\r\n#L9#深红之heart城堡#l\r\n#L10#深红木堡垒#l\r\n#L11#克里塞#l\r\n#L12#埃德尔斯坦#l\r\n#L13#艾利涅妖精学院#l\r\n#L14#艾利涅森林#l\r\n#L15#魔法森林#l\r\n#L16#冰封雪域#l\r\n#L17#埃鲁尔#l\r\n#L18#耶雷弗#l\r\n#L19#幻想主题世界#l\r\n#L20#弗洛丽娜海滩#l\r\n#L21#自由市场#l\r\n#L22#黄金海岸#l\r\n#L23#黄金寺#l\r\n#L24#大雅典娜#l\r\n#L25#鬼屋#l\r\n#L26#药草村#l\r\n#L27#射手村#l\r\n#L28#射手村废墟#l\r\n#L29#废弃都市#l\r\n#L30#废弃都市广场#l\r\n#L31#东方神州#l\r\n#L32#神木村#l\r\n#L33#狮子王之城#l\r\n#L34#里恩港#l\r\n#L35#玩具城#l\r\n#L36#鲁米埃尔#l\r\n#L37#玛加提亚#l\r\n#L38#枫树丘#l\r\n#L39#蘑菇城#l\r\n#L40#武陵#l\r\n#L41#诺特勒斯#l\r\n#L42#新纪元之城#l\r\n#L43#新叶城#l\r\n#L44#奥米加区域#l\r\n#L45#天空之城#l\r\n#L46#万神殿#l\r\n#L47#勇士部落#l\r\n#L48#瑞恩#l\r\n#L49#瑞恩海峡#l\r\n#L50#魔法密林#l\r\n#L51#南港#l\r\n#L52#时间神殿#l\r\n#L53#泰尼鲁姆#l\r\n#L54#黄昏勇士部落#l\r\n#L55#扭曲水族馆#l\r\n#L56#日本#l");
	} else if (status == 1) {
	if (selection == 0) {		
	    cm.warp(1000000,0);
		cm.dispose();
	} else if (selection == 1) {	
		cm.warp(680000000,0);
		cm.dispose();
	} else if (selection == 2) {	
		cm.warp(866000220,0);
		cm.dispose();
	} else if (selection == 3) {	
		cm.warp(910001000,0);
		cm.dispose();
	} else if (selection == 4) {	
		cm.warp(260000000,0);
		cm.dispose();
	} else if (selection == 5) {	
		cm.warp(230000000,0);
		cm.dispose();
	} else if (selection == 6) {	
		cm.warp(262000000,0);
		cm.dispose();
	} else if (selection == 7) {	
		cm.warp(541000000,0);
		cm.dispose();
	} else if (selection == 8) {	
		cm.warp(865000000,0);
		cm.dispose();
	} else if (selection == 9) {	
		cm.warp(301060000,0);
		cm.dispose();
	} else if (selection == 10) {	
		cm.warp(610020006,0);
		cm.dispose();
	} else if (selection == 11) {	
		cm.warp(200100000,0);
		cm.dispose();
	} else if (selection == 12) {	
		cm.warp(310000000,0);
		cm.dispose();
	} else if (selection == 13) {	
		cm.warp(101071300,0);
		cm.dispose();
	} else if (selection == 14) {	
		cm.warp(300000000,0);
		cm.dispose();
	} else if (selection == 15) {	
		cm.warp(101000000,0);
		cm.dispose();
	} else if (selection == 16) {	
		cm.warp(211000000,0);
		cm.dispose();
	} else if (selection == 17) {	
		cm.warp(101050000,0);
		cm.dispose();
	} else if (selection == 18) {	
		cm.warp(130000000,0);
		cm.dispose();
	} else if (selection == 19) {	
		cm.warp(223000000,0);
		cm.dispose();
	} else if (selection == 20) {	
		cm.warp(120030000,0);
		cm.dispose();
	} else if (selection == 21) {	
		cm.warp(910000000,0);
		cm.dispose();
	} else if (selection == 22) {	
		cm.warp(120040000,0);
		cm.dispose();
	} else if (selection == 23) {	
		cm.warp(809060000,0);
		cm.dispose();
	} else if (selection == 24) {	
		cm.warp(302000000,0);
		cm.dispose();
	} else if (selection == 25) {	
		cm.warp(682000000,0);
		cm.dispose();
	} else if (selection == 26) {	
		cm.warp(251000000,0);
		cm.dispose();
	} else if (selection == 27) {	
		cm.warp(100000000,0);
		cm.dispose();
	} else if (selection == 28) {	
		cm.warp(271010000,0);
		cm.dispose();
	} else if (selection == 29) {	
		cm.warp(103000000,0);
		cm.dispose();
	} else if (selection == 30) {	
		cm.warp(103040000,0);
		cm.dispose();
	} else if (selection == 31) {	
		cm.warp(222000000,0);
		cm.dispose();
	} else if (selection == 32) {	
		cm.warp(240000000,0);
		cm.dispose();
	} else if (selection == 33) {	
		cm.warp(211060010,0);
		cm.dispose();
	} else if (selection == 34) {	
		cm.warp(104000000,0);
		cm.dispose();
	} else if (selection == 35) {	
		cm.warp(220000000,0);
		cm.dispose();
	} else if (selection == 36) {	
		cm.warp(150000000,0);
		cm.dispose();
	} else if (selection == 37) {	
		cm.warp(261000000,0);
		cm.dispose();
	} else if (selection == 38) {	
		cm.warp(10000,0);
		cm.dispose();
	} else if (selection == 39) {	
		cm.warp(106020000,0);
		cm.dispose();
	} else if (selection == 40) {	
		cm.warp(250000000,0);
		cm.dispose();
	} else if (selection == 41) {	
		cm.warp(120000000,0);
		cm.dispose();
	} else if (selection == 42) {	
		cm.warp(240070000,0);
		cm.dispose();
	} else if (selection == 43) {	
		cm.warp(600000000,0);
		cm.dispose();
	} else if (selection == 44) {	
		cm.warp(221000000,0);
		cm.dispose();
	} else if (selection == 45) {	
		cm.warp(200000000,0);
		cm.dispose();
	} else if (selection == 46) {	
		cm.warp(400000000,0);
		cm.dispose();
	} else if (selection == 47) {	
		cm.warp(102000000,0);
		cm.dispose();
    } else if (selection == 48) {	
		cm.warp(140000000,0);
		cm.dispose();
	} else if (selection == 49) {	
		cm.warp(141010000,0);
		cm.dispose();
	} else if (selection == 50) {	
		cm.warp(105000000,0);
		cm.dispose();
	} else if (selection == 51) {	
		cm.warp(60000,0);
		cm.dispose();
	} else if (selection == 52) {	
		cm.warp(270000100,0);
		cm.dispose();
	} else if (selection == 53) {	
		cm.warp(863000017,0);
		cm.dispose();
	} else if (selection == 54) {	
		cm.warp(273000000,0);
		cm.dispose();
	} else if (selection == 55) {	
		cm.warp(860000000,0);
		cm.dispose();
	} else if (selection == 56) {	
		cm.warp(800000000,0);
		cm.dispose();
   }
  }
 }
}