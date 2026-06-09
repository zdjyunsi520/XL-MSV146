var status;
var text = "#e#k好的，下次再见！";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#e#k 嘿！#r#h#k 我是MapleBlade的全能商店NPC！");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext(" \r\n\r\n#L0##e#r魔法师#l\r\n#L1#飞侠#l\r\n#L2#战士#l\r\n#L3#弓箭手#l\r\n#L4#海盗#l\r\n#L5#通用#l");
    } else if (status == 1) {
        cm.sendSimple("" + text + " \r\n\r\n#L0##e#r帽子#l\r\n#L1#套服#l\r\n#L2#手套#l\r\n#L3#盾牌#l\r\n#L4#鞋子#k#l\r\n#L5##r短杖#l\r\n#L6#长杖#l");
    } else if (status == 2) {
        if (selection == 0) { // Magician Choices
            cm.sendSimple("" + text + " \r\n\r\n#L7##e#b帽子#l\r\n#L8#上衣#l\r\n#L9#下衣#l\r\n#L10#套服#l\r\n#L11#手套#l\r\n#L12#盾牌#l\r\n#L13#鞋子#l\r\n#L14#短剑#l\r\n#L15#拳套#l\r\n#L16#飞镖#l");
        } else if (selection == 1) { // Thief Choices
            cm.sendSimple("" + text + " \r\n\r\n#L17##e#d帽子#l\r\n#L18#战士上衣#l\r\n#L19#下衣#l\r\n#L20#套服#l\r\n#L21#手套#l\r\n#L22#盾牌#l\r\n#L23#鞋子#l\r\n#L24#单手斧#l\r\n#L25#双手斧#l\r\n#L26#单手钝器#l\r\n#L27#双手钝器#l\r\n#L28#单手剑#l\r\n#L29#双手剑#l\r\n#L30#枪#l\r\n#L31#矛#l");
        } else if (selection == 2) { // Warrior Choices
            cm.sendSimple("" + text + " \r\n\r\n#L32##e#g帽子#l\r\n#L33#套服#l\r\n#L34#手套#l\r\n#L35#鞋子#l\r\n#L36#弓#l\r\n#L37#弩#l\r\n#L38#箭矢#l");
        } else if (selection == 3) { // Archer Choices
            cm.sendSimple("" + text + " \r\n\r\n#L39##e#b帽子#l\r\n#L40#套服#l\r\n#L41#手套#l\r\n#L42#鞋子#l\r\n#L43#武器#l\r\n#L44#子弹和胶囊#l");
        } else if (selection == 4) { // Pirate Choices
            cm.sendSimple("" + text + " \r\n\r\n#L53#枫叶武器#l\r\n#L54#0级武器#l");
        } else if (selection == 5) { // Common Choices
            cm.sendSimple("" + text + " \r\n\r\n#L53#枫叶武器#l\r\n#L54#0级武器#l");
        }
    } else if (status == 3) {
        cm.openShop(5000+selection);
        cm.dispose();
    }
}  