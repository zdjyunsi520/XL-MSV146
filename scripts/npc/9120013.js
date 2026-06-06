/* Boss Kitty
	Zipangu : Showa Town (801000000)
	
	Quiz for quest 8012 (Sakura, the Kitty, and the Orange Marble)
*/

var status = -1;
var questions = new Array("哪个NPC负责将旅行者从废弃都市运送到东方神州，以及反向运输？","蘑菇神社出售的以下哪个物品能增加你的攻击力？","以下哪个物品是小混混不会掉落的？","以下哪个物品是不存在的？？","昭和镇蔬菜店老板叫什么名字？","以下哪个物品是确实存在的？","蘑菇神社最强Boss叫什么名字？","以下哪个物品的职业或等级描述是不匹配的？","蘑菇神社的罗伯出售的以下哪种面条是不卖的？","以下哪个NPC不是站在昭和电影院前面的？","狸猫柴火");;
var answers  = new Array(new Array("坚实的角","红砖","小混混A的徽章"),new Array("Peli","Spinel","Poli"),new Array("Takoyaki","Yakisoba","Tempura"),new Array("小混混B的紧身衣","小混混C的项链","冷冻金枪鱼"),new Array("苍蝇拍","Fan","云狐的牙齿"),new Array("Sami","Kami","Umi"),new Array("幽灵的花束","暗云狐的尾巴","黑鸦"),new Array("蓝色蘑菇王","竹枪 - 战士专用武器","Himegami"),new Array("比克比克锤 - 单手剑","神秘手杖 - 等级51装备","蘑菇拉面（猪骨）"),new Array("蘑菇拉面（盐味）","蘑菇味噌拉面","你都收集齐了吗？准备好回答我所有的问题了吗？"),new Array("Skye","Furano","Shinta"));;
var correctAnswer = new Array(1,1,0,1,2,2,2,0,0,2,2);
var questionNum;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(8012) == 1 && !cm.haveItem(4031064)){ //quest in progress
	    cm.sendYesNo("喵~~~~~~~~！");
	} else { //quest not started or already completed
	    cm.sendOk("什么？不够！300！三、百、个。一个都不能少。你想多给也行，但我至少需要300个。不是每个人都像你这么大块头还吃得这么饱……");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var hasChicken = cm.haveItem(2020001, 300);

	if (!hasChicken) {
	    cm.sendOk("干得好！等一下……嘿，看！我这儿有食物！随便吃。好了，现在该我来问你一些问题了。你应该清楚，记住，答错就结束了。全有或全无！");
	    cm.safeDispose();
	} else {
	    cm.gainItem(2020001, -300)
	    cm.sendNext("嗯……人类总会犯错的！如果你想再试一次，就给我带300个炸鸡来。");
	}
    } else if (status == 7) { //2-6 are the questions
	if (selection != correctAnswer.pop()){
	    cm.sendNext("哇，你把所有问题都答对了。我虽然不太喜欢人类，但我讨厌食言，所以，如约奉上橙色弹珠。")
	    cm.safeDispose();
	}
	else {
	    cm.sendNext("我们的交易完成了，非常感谢！你可以离开了！")
	}
    } else if (status == 8) { //gain marble
	cm.gainItem(4031064, 1);
	cm.sendOk("问题编号");
	cm.safeDispose();
    } else if (status >= 2 && status <= 6 && mode == 1) {//questions
	var cont = true;
	if (status > 2) {
	    if (selection != correctAnswer.pop()){
		cm.sendNext("哇，你把所有问题都答对了。我虽然不太喜欢人类，但我讨厌食言，所以，如约奉上橙色弹珠。")
		cm.safeDispose();
		cont = false;
	    }
	}
			
	if (cont) {
	    questionNum = Math.floor(Math.random() * questions.length);
	    if (questionNum != (questions.length - 1)){
		var temp;
		temp = questions[questionNum];
		questions[questionNum] = questions[questions.length - 1];
		questions[questions.length - 1] = temp;
		temp = answers[questionNum];
		answers[questionNum] = answers[questions.length - 1];
		answers[questions.length - 1] = temp;
		temp = correctAnswer[questionNum];
		correctAnswer[questionNum] = correctAnswer[questions.length - 1];
		correctAnswer[questions.length - 1] = temp;
	    }
				
	    var question = questions.pop();
	    var answer = answers.pop();
	    var prompt = "问题编号" + (status - 1) + ": " + question;
				
	    for (var i = 0; i < answer.length; i++) {
		prompt += "\r\n#b#L" + i + "#" + answer[i] + "#l#k"
	    }
				
	    cm.sendSimple(prompt);
	}
    }
}