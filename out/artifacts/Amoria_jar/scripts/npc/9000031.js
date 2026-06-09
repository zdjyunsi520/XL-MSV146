var yellowBelt = 1132211;
var yellowShoulder = 1152120;

var greenBelt = 1132212;
var greenShoulder = 1152121;

var blueBelt = 1132213;
var blueShoulder = 1152122;

var redBelt = 1132214;
var redShoulder = 1152123;

var blackBelt = 1132215;
var blackShoulder = 1152124;

var chest = 4033667;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection)
{

    if (mode == 1) {
        status++;
    } else {
	cm.dispose();
	return;
    }

    if(status == 0){
        cm.sendSimple("你好，我是工匠转移NPC，你想做什么？\r\n#b#L0#交易我的工匠之箱。");
    }
    else if(status == 1){
        cm.sendYesNo("你确定要用工匠之箱交换工匠装备吗？")
    }
    else if(status == 2){
        if(cm.getQuantityOfItem(chest) < 1){
            cm.sendOk("你没有任何工匠之箱。");
            return cm.dispose();
        }
        var randomTinker = [ // wheel of fortune solution cause i'm lazy :P
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowBelt,
        yellowShoulder,
        yellowShoulder,
        yellowShoulder,
        yellowShoulder,
        yellowShoulder,
        yellowShoulder,
        yellowShoulder,
        greenBelt,
        greenBelt,
        greenBelt,
        greenShoulder,
        greenShoulder,
        greenShoulder, // green tinkerer 6/20
        redBelt,
        redBelt,
        redShoulder,
        redShoulder,
        blackShoulder,
        blackBelt,
        ];

        var randomItem = randomTinker[Math.floor(Math.random() * randomTinker.length)];
        cm.gainItem(chest, -1);
        cm.gainItem(randomItem, 1)
        cm.sendOk("恭喜你获得了 " + "#i" + randomItem + "#.")
        return cm.dispose();
    }
}