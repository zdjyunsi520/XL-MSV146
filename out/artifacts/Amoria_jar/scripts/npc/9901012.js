//script by Alcandon

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple ("嘿 #r#h ##k 我是Maple Blade的自定义地图传送员！#b[更新]#k#rBoss将每5分钟在Boss地图刷新(与斯皮内尔对话)#k \r\n#L2#骷髅龙地图1号\r\n#L3#骷髅龙地图2号\r\n#L15#骷髅龙地图3号\r\n#L16#骷髅龙地图4号\r\n#L17#骷髅龙地图5号\r\n#L21##b[新]#k骷髅暴龙地图1号\r\n#L22##b[新]#k骷髅暴龙地图2号\r\n#L23##b[新]#k骷髅暴龙地图3号\r\n#L24##b[新]#k骷髅暴龙地图4号\r\n#L25##b[新]#k骷髅暴龙地图5号\r\n#L26##b[新]#k骷髅暴龙地图6号\r\n#L4#60 ~ 80级怪物混合地图1号\r\n#L5#60 ~ 80级怪物混合地图2号\r\n#L6#混合石头人地图1号\r\n#L7#混合石头人地图2号\r\n#L8#新迪利亚石头人\r\n#L9#维京寻宝(组队训练场1)\r\n#L18##b#k肯塔罗斯大战(组队训练场2)\r\n#L13#骑士队长营房\r\n#L14#蠢企鹅的崛起(30级以上)\r\n#L19##r[牧师推荐]#k佛陀的复仇\r\n#L20##r[牧师推荐]#k佛陀的复仇2");
				} else if (selection == 1) {
				  cm.warp(970010000);
				  cm.dispose();
				} else if (selection == 2) {
				  cm.warp(925100200);
				  cm.dispose();
				} else if (selection == 3) {
				  cm.warp(925100300);
				  cm.dispose();
				} else if (selection == 4) {
				  cm.warp(610030011);
				  cm.dispose();
				} else if (selection == 5) {
				  cm.warp(610030014);
				  cm.dispose();
				} else if (selection == 6) {
				  cm.warp(610030012);
				  cm.dispose();
				} else if (selection == 7) {
				  cm.warp(610030015);
				  cm.dispose();
				} else if (selection == 8) {
				  cm.warp(610030013);
				  cm.dispose();
				} else if (selection == 9) {
				  cm.warp(683000000);
				  cm.dispose();
				} else if (selection == 10) {
				  cm.warp(200080200);
				  cm.dispose();
				} else if (selection == 11) {
				  cm.warp(200080300);
				  cm.dispose();
				} else if (selection == 12) {
				  cm.warp(200080400);
				  cm.dispose();
				} else if (selection == 13) {
				  cm.warp(200080500);
				  cm.dispose();
				} else if (selection == 14) {
				  cm.warp(200080600);
				  cm.dispose();
				} else if (selection == 15) {
				  cm.warp(230040400);
				  cm.dispose();
				} else if (selection == 16) {
				  cm.warp(230040000);
				  cm.dispose();
				} else if (selection == 17) {
				  cm.warp(230040100);
				  cm.dispose();
				} else if (selection == 18) {
				  cm.warp(110020001);
				  cm.dispose();
				} else if (selection == 19) {
				  cm.warp(682000601);
				  cm.dispose();
				} else if (selection == 20) {
				  cm.warp(682000602);
				  cm.dispose();
				} else if (selection == 21) {
				  cm.warp(106020700);
				  cm.dispose();
				} else if (selection == 22) {
				  cm.warp(106020800);
				  cm.dispose();
				} else if (selection == 23) {
				  cm.warp(106021000);
				  cm.dispose();
				} else if (selection == 24) {
				  cm.warp(106021100);
				  cm.dispose();
				} else if (selection == 25) {
				  cm.warp(106021200);
				  cm.dispose();
				} else if (selection == 26) {
				  cm.warp(106021300);
				  cm.dispose();
			    }
}
}