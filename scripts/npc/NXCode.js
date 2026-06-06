var status = 0;
var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomizer = [Math.floor(Math.random() * random.length), Math.floor(Math.random() * random.length), Math.floor(Math.random() * random.length), Math.floor(Math.random() * random.length), Math.floor(Math.random() * random.length), Math.floor(Math.random() * random.length)];

function start() {
    status = -1;
    action(1, 0, 0);
} 

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == -1)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendOk("你的NX兑换码是：\r\n" + random[randomizer[0]] + random[randomizer[1]] + random[randomizer[2]] + random[randomizer[3]] + random[randomizer[4]] + random[randomizer[5]] + "");
        cm.getPlayer().addNXCode(random[randomizer[0]] + random[randomizer[1]] + random[randomizer[2]] + random[randomizer[3]] + random[randomizer[4]] + random[randomizer[5]], null, 1, 5000);
        cm.getPlayer().sendNote(cm.getPlayer().getName(), "MapleGM", "\r\n要激活此兑换码，请前往点券商城并按下兑换按钮，然后输入你的兑换码。" + random[randomizer[0]] + random[randomizer[1]] + random[randomizer[2]] + random[randomizer[3]] + random[randomizer[4]] + random[randomizer[5]] + "\r\n要激活此兑换码，请前往点券商城并按下兑换按钮，然后输入你的兑换码。");
        cm.dispose();
    }
}