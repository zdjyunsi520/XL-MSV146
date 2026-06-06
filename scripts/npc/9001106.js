// This is a multi-dimensional array, seperate as: ItemID, Name, Cost, Amount.
rewards = [[1902201, "天照（大神）坐骑", 2000, 1], [1022199, "蓝色霓虹墨镜", 500, 1], [1004001, "虚白面具", 1000, 1], [1082500, "怪物能量手套", 200, 1], [1022196, "红色霓虹墨镜", 500, 1], [1442299, "太阳镰刀", 1000, 1], [1382199, "太阳法杖", 1000, 1], [1302999, "天锁斩月", 1500, 1], [1442202, "雷刃", 1500, 1], [1102299, "水之披风", 500, 1]];

function start() { 
    text = "哦你好！我负责管理 #eWizStory#n 的 #r捐赠商店#k！\r\n你拥有 #r" + cm.getPlayer().getPoints() + "#k 捐赠积分。\r\n你想买什么？\r\n#b"; 
    for (var i = 0; i < rewards.length; text += "\r\n#L" + i + "# " + rewards[i][1] + " (" + rewards[i][2] + " 捐赠积分）#l", i++); 
    cm.sendSimple(text); 
} 

function action(m,t,s) { 
    if (m > 0) { 
		if (cm.getPlayer().getPoints() >= rewards[s][2]) { 
            if (cm.canHold(rewards[s][0])) { 
                cm.getPlayer().setPoints2(-rewards[s][2]); 
			 if (s == 0) {
                cm.gainItem(1902201, 1); //okami mount
				cm.gainItem(1912200, 1);  // okami saddle
		        cm.sendOk("这是你的 #b天照（大神）坐骑#k. Enjoy~");
			} else {
				cm.gainItem(rewards[s][0], rewards[s][3]); 
		        cm.sendOk("这是你的 #b" + rewards[s][1] + "#k.");
			}
            } else 
                cm.sendOk("看来你的#e背包#n已经#r满了#k。请腾出空间。"); 
        } else 
            cm.sendOk("哎呀！你至少需要有 #b" + rewards[s][2] + " 捐赠积分#k 才能购买此物品！"); 
    } 
    cm.dispose(); 
}  