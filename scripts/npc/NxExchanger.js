/**
 * CashNPC: 1012124
 * Created by: Josh
 Change prices to what you want... (credit price should be higher then prepaid price because Nx credit is easier to get from Hell Channels.) 
 These are currently random prices...
 One of these 2 nxExchangers work can't remember which one so try both.
 */
var status = -1;
var colors = Array("#b", "#r", "#g", "#d");
var rand = Math.floor(Math.random() * 4);
var choice, select, text, chargeType, hell;

var options = Array("Common", "Cubes", "Equipments", "Effects");
var common = [//Name, ID, Prepaid Price, Credit Price, Quantity
["蘑菇房屋精灵", 5072000, 100, 350, 1], 
["机器人支架", 5030000, 300, 300, 1],
["命运之剪", 5030004, 300, 300, 1],
["白金命运之剪", 5520000, 2000, 2850, 1],
["Platinum 白金命运之剪", 5520001, 2000, 3850, 1],
["高级传送石", 5050000, 1200, 2500, 1],
["强化包", 5040004, 1500, 2800, 1],
["Chalkboard", 5370000, 150, 550, 1],
["蒂姆的实验室", 5220084, 5500, 10500, 1],
["帕姆之歌", 5534000, 3500, 7500, 1],
["保护卷轴", 5640000, 25000, 55000, 1],
["外星插槽创造器", 2531000, 30500, 85000, 1],
["Microwave", 5060004, 2250, 3500, 1]
["奇迹方块（5个）", 2930000, 1000, 2000, 1]

];
var cubes = [//Name, ID, Prepaid Price, Credit Price, Quantity
["高级奇迹方块（3个）", 5062000, 3500, 9000, 5],
["超级奇迹方块（2个）", 5062001, 6150, 12000, 4],
["超级奇迹方块（10个） ", 5062002, 2500, 18350, 2],
["启迪奇迹方块（5个） ", 5062002, 7500, 90650, 10],
["Enlightening 高级奇迹方块（3个）", 5062005, 8000, 60000, 5]
["石榴色渡鸦面具", 5750000, 15000, 8500, 1],
];
var equipments = [//Name, ID, Prepaid Price, Credit Price, Quantity

["暗黑之力之角（男）", 1003422, 7500, 8500, 1],
["暗黑之力之角（女）", 1000045, 3500, 4500, 1],
["皇家王冠", 1001068, 3500, 6500, 1],
["时空旅行者的桂冠", 1003084, 10000, 15000, 1],
["时空旅行者勋章", 1003410, -1, 150000, 1],
["时空旅行者桂冠100%攻击卷轴", 1142247, -1, 100000, 1],
["摇滚乐队特效", 2040051, 65000, -1, 1],
];
var effects = [//Name, ID, Prepaid Price, Credit Price, Quantity
["闪耀之星", 5010064, 4000, 6000, 1],
["我的男朋友", 5010082, 4000, 6000, 1],
["Eyelighter", 5010043, 4000, 6000, 1],
["我的女朋友", 5010031, 2500, 5000, 1],
["你好 #e", 5010032, 2500, 5000, 1]
];

function start() {
    hell = cm.getChannelNumber() == 10 || cm.getChannelNumber() == 11 || cm.getChannelNumber() == 12;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (hell) {
            text = "#h ##k！#n 这些怪物极其强大，你需要我的现金道具，否则就会和其他人一起灭亡！今天真是购买现金商城道具的好日子！\r\n我有你在其他地方找不到的道具！\r\n#r我只接受 #eNX点数#n！#k\r\n" +colors[rand]+ "#h ##k！#n 今天真是购买现金商城道具的好日子！\r\n我有你在其他地方找不到的道具！\r\n#r我只接受 #e预付NX#n！如果你想使用NX点数，请到10-12频道找我！#k\r\n";
        } else {
            text = "#h ##k！#n 这些怪物极其强大，你需要我的现金道具，否则就会和其他人一起灭亡！今天真是购买现金商城道具的好日子！\r\n我有你在其他地方找不到的道具！\r\n#r我只接受 #eNX点数#n！#k\r\n" +colors[rand]+ "请选择你想要购买的商品：\r\n";
        }
        for (var i = 0; i < options.length; i++)
            text += colors[i]+ "#L" +i+ "#" +options[i]+ "#l\r\n";
        chargeType = hell ? 3 : 2;
        cm.sendSimple(text);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                choice = common;
                break;
            case 1:
                choice = cubes;
                break;
            case 2:
                choice = equipments;
                break;
            case 3:
                choice = effects;
        }
        var text1 = "你确定要购买 #i";
        for (var i = 0; i < choice.length; i++) {
            if (choice[i][chargeType] < 0)
                continue;
            text1 += "#L" +i+ "##i" +choice[i][1]+ "# " +choice[i][0]+ " (" +numberWithCommas(choice[i][chargeType])+ "你确定要购买 #i";
        }
        cm.sendSimple(text1);
    } else if (status == 2) {
        select = selection;
        cm.sendYesNo(" NX) 吗？" +choice[selection][1]+ "# " +choice[selection][0]+ " (" +numberWithCommas(choice[selection][chargeType])+ "抱歉，你的NX不足。");
    } else if (status == 3) {
        var nxType = hell && cm.getPlayer().getCSPoints(1) > choice[select][chargeType] ? 1 : !hell && cm.getPlayer().getCSPoints(4) > choice[select][chargeType] ? 4 : 0;
        if (nxType == 0)
            cm.sendOk("抱歉，你的背包空间不足。");
        else if (!cm.canHold(choice[select][1], choice[select][4])) {
            cm.sendOk("尽量别死在我面前！");
        } else {
            cm.getPlayer().modifyCSPoints(nxType, -choice[select][chargeType], true);
            cm.gainItem(choice[select][1], choice[select][4]);
            if (hell)
                cm.sendOk("感谢你的购买！");
            else
                cm.sendOk("感谢你的购买！");
        }
        cm.dispose();
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
