/* Author: aaroncsn(MapleSea Like)(Need to add creation of minigame)
	NPC Name: 		Wisp
	Map(s): 		Ludibrium: Eos Tower Entrance(220000400)
	Description: 		Pet Master
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
			if(status == 0){
				cm.sendSimple("你好，我是维多利亚岛#b妖精玛尔#k的大弟子。妖精玛尔把我召唤到这里来照看宠物在玩具城是否受到妥善照料。有什么可以帮你的？\r\n#L0##b我的宠物变回了玩偶\r\n请帮我让它重新动起来！#k#l \r\n#L1##b告诉我更多关于宠物的信息。#k#l \r\n#L2##b如何饲养宠物？#k#l \r\n#L3##b宠物也会死吗？#k#l \r\n#L4##b棕色小猫和黑色小猫的指令是什么？#k#l \r\n#L5##b棕色小狗的指令是什么？#k#l \r\n#L6##b粉色和白色兔子的指令是什么？#k#l \r\n#L7##b迷你货物的指令是什么？#k#l \r\n#L8##b哈士奇的指令是什么？#k#l \r\n#L9##b黑猪的指令是什么？#k#l \r\n#L10##b黑猪的指令是什么？#k#l \r\n#L11##b熊猫的指令是什么？#k#l \r\n#L12##b恐龙男孩和恐龙女孩的指令是什么？#k#l \r\n#L13##b鲁道夫的指令是什么？#k#l \r\n#L14##b猴子的指令是什么？#k#l \r\n#L15##b机器人的指令是什么？#k#l \r\n#L16##b大象的指令是什么？#k#l \r\n#L17##b金猪的指令是什么？#k#l \r\n#L18##b企鹅的指令是什么？#k#l \r\n#L19##b迷你雪人的指令是什么？#k#l \r\n#L20##b小巴洛古的指令是什么？ \r\n#L21##b幼龙的指令是什么？#k#l \r\nL#22##b绿龙/红龙/蓝龙的指令是什么#k#l \r\n#L23##b黑龙的指令是什么？#k#l \r\n#L24##b雪人的指令是什么？#k#l \r\n#L25##b孙悟空的指令是什么？#k#l \r\n#L26##b小死神的指令是什么？#k#l \r\n#L27##b水晶鲁道夫的指令是什么？#k#l \r\n#L28##b基诺的指令是什么？#k#l \r\n#L29##b白色鸭子的指令是什么？#k#l \r\n#L30##b粉红宾的指令是什么？#k#l \r\n#L31##b豪猪的指令是什么？#k#l");
				}
			else if(status == 1){
				if(selection == 0){
					cm.sendNext("我是威斯普，正在继续完成我的师父妖精玛尔交给我的学习任务。即使在玩具城这里似乎也有很多宠物。我需要回去学习了，失陪了……");
					cm.dispose();
				} else if(selection == 1){
					cm.sendNext("嗯……你一定对宠物有很多疑问。很久以前，一个名叫#b克洛伊#k的人在玩偶上喷洒了生命之水，并对其施了咒语，创造出了有魔力的动物。我知道这听起来难以置信，但它是一个玩偶变成了真正的活物。它们非常通人性，能很好地跟随主人。");
				} else if(selection == 2){
					cm.sendNext("根据你给出的指令，宠物可能会喜欢、讨厌，或者做出其他各种反应。如果你给宠物一个指令并且它很好地服从了，你们的亲密度就会上升。双击宠物可以查看亲密度、等级、饱食度等信息……");
				} else if(selection == 3){
					cm.sendNext("死亡……嗯，严格来说它们并不算"活着"，所以我不知道用"死亡"来形容是否合适。它们是玩偶，通过我的魔力和生命之水的力量变成了活的物体。当然，在它活着的时候，它就像一只真正的动物……");
				} else if(selection == 4){
					cm.sendNext("以下是#r棕色小猫和黑色小猫#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bstupid, ihateyou, dummy#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1~30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 10 ~ 30）\r\n#bcutie#k（等级 10 ~ 30）\r\n#bup, stand, rise#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 5){
					cm.sendNext("以下是#r棕色小狗#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bstupid, ihateyou, baddog, dummy#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1~30）\r\n#bpee#k（等级 10 ~ 30）\r\n#btalk, say, chat, bark#k（等级 10 ~ 30）\r\n#bdown#k（等级 10 ~ 30）\r\n#bup, stand, rise#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 6){
					cm.sendNext("以下是#r粉色兔子和白色兔子#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bup, stand#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1~30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 10 ~ 30）\r\n#bhug#k（等级 10 ~ 30）\r\n#bsleep, sleepy, gotobed#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 7){
					cm.sendNext("以下是#r迷你货物#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bup, stand#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1~30）\r\n#bpee#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 10 ~ 30）\r\n#bthelook, charisma#k（等级 10 ~ 30）\r\n#bgoodboy, good#k（等级 20 ~ 30）");
					cm.dispose();				
				} else if(selection == 8){
					cm.sendNext("以下是#r哈士奇#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bstupid, ihateyou, baddog, dummy#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1 ~ 30）\r\n#bpee#k（等级 1 ~ 30）\r\n#btalk, say, chat, bark#k（等级 10 ~ 30）\r\n#bdown#k（等级 10 ~ 30）\r\n#bup, stand, rise#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 9){
					cm.sendNext("以下是#r黑猪#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1~30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bhand, up, stand#k（等级 1 ~ 30）\r\n#btalk, say, chat, hug#k（等级 10 ~ 30）\r\n#bsmile#k（等级 10 ~ 30）\r\n#blaugh, smile#k（等级 10 ~ 30）\r\n#bcharisma, sleep, sleepy, gotobed#k（等级 20~30）");
					cm.dispose();
				} else if(selection == 10){
					cm.sendNext("以下是#r熊猫#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1 ~ 30）\r\n#bpee#k（等级 1 ~ 30）\r\n#bup, stand, hug#k（等级 1 ~ 30）\r\n#btalk, chat#k（等级 10 ~ 30）\r\n#bplay#k（等级 20 ~ 30）\r\n#bmeh, bleh#k（等级 10 ~ 30）\r\n#bsleep, sleepy, gotobed#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 11){
					cm.sendNext("以下是#r恐龙男孩和恐龙女孩#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, , stupid, ihateyou, badboy, badgirl#k（等级 1 ~ 30）\r\n#biloveyou, dummy#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#btalk, chat（等级 10 ~ 30）\r\n#bsmile, laugh#k（等级 1 ~ 30）\r\n#bcutie#k（等级 10 ~ 30）\r\n#bsleep, nap, sleepy#k（等级 20 ~ 30）");
					cm.dispose();
				} else if(selection == 12){
					cm.sendNext("以下是#r鲁道夫#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~30）\r\n#bbad, no, badgirl, badboy#k（等级 1~30）\r\n#bup, stand#k（等级 1 ~ 30）\r\n#bstupid, ihateyou, dummy#k（等级 1 ~ 30）\r\n#bmerryxmas, merrychristmas#k（等级 11 ~ 30）\r\n#biloveyou#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 11 ~ 30）\r\n#blonely, alone, down, rednose#k（等级 11~30），\r\n#bcutie#k（等级 11 ~ 30）\r\n#bmush, go#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 13) {
					cm.sendNext("以下是#r猴子#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit, rest#k（等级 1 ~ 30）\r\n#bbad, no, badboy, badgirl#k（等级 1 ~ 30）\r\n#bup, stand#k（等级 1 ~ 30）\r\n#biloveyou, pee#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 11 ~ 30）\r\n#bplay, melong#k（等级 11 ~ 30）\r\n#bsleep, sleepy, gotobed#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 14) {
					cm.sendNext("以下是#r机器人#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit, stand, rise#k（等级 1 ~ 30）\r\n#battack, bad, no, badboy#k（等级 1 ~ 30）\r\n#bstupid, ihateyou, dummy#k（等级 1 ~ 30）\r\n#biloveyou, good#k（等级 1 ~ 30）\r\n#bspeak, disguise#k（等级 11 ~ 30）");
					cm.dispose();
				} else if (selection == 15) {
					cm.sendNext("以下是#r大象#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit, rest#k（等级 1 ~ 30）\r\n#bbad, no, badboy, badgirl#k（等级 1 ~ 30）\r\n#bup, stand, rise#k（等级 1 ~ 30）\r\n#biloveyou, pee#k（等级 1 ~ 30）\r\n#btalk, say, chat, play#k（等级 11 ~ 30）\r\n#bsleep, sleepy, gotobed#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 16) {
					cm.sendNext("以下是#r金猪#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badboy, badgirl#k（等级 1 ~ 30）\r\n#bpoop, iloveyou#k（等级 1 ~ 30）\r\n#btalk, say, chat#k（等级 11 ~ 30）\r\n#bloveme, hugme#k（等级 11 ~ 30）\r\n#bsleep, sleepy, gotobed#k（等级 21 ~ 30）\r\n#bimpressed, outofhere#k（等级 21 ~ 30）\r\n#broll, showmethemoney#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 17) {
					cm.sendNext("以下是#r企鹅#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badboy, badgirl#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bup, stand, rise#k（等级 1 ~ 30）\r\n#biloveyou#k（等级 1 ~ 30）\r\n#btalk, chat, say#k（等级 10 ~ 30）\r\n#bhug, hugme#k（等级 10 ~ 30）\r\n#bwing, hand#k（等级 10 ~ 30）\r\n#bsleep#k（等级 20 ~ 30）\r\n#bkiss, smooch, muah#k（等级 20 ~ 30）\r\n#bfly#k（等级 20 ~ 30）\r\n#bcute, adorable#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 18) {
					cm.sendNext("以下是#r迷你雪人#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad, no, badboy, badgirl#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bdance, boogie, shakeit#k（等级 1 ~ 30）\r\n#bcute, cutie, pretty, adorable#k（等级 1 ~ 30）\r\n#biloveyou, likeyou, mylove#k（等级 1 ~ 30）\r\n#btalk, chat, say#k（等级 10 ~ 30）\r\n#bsleep, nap#k（等级 10 ~ 30）");
					cm.dispose();
				} else if (selection == 19) {
					cm.sendNext("以下是#r小巴洛古#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bliedown#k（等级 1 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 1 ~ 30）\r\n#biloveyou|mylove|likeyou#k（等级 1 ~ 30）\r\n#bcute|cutie|pretty|adorable#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bsmirk|crooked|laugh#k（等级 1 ~ 30）\r\n#bmelong#k（等级 11 ~ 30）\r\n#bgood|thelook|charisma#k（等级 11 ~ 30）\r\n#bspeak|talk|chat|say#k（等级 11 ~ 30）\r\n#bsleep|nap|sleepy#k（等级 11 ~ 30）\r\n#bgas#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 20) {
					cm.sendNext("以下是#r幼龙#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 1 ~ 30）\r\n#biloveyou|loveyou#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bstupid|ihateyou|dummy#k（等级 1 ~ 30）\r\n#bcutie#k（等级 11 ~ 30）\r\n#btalk|chat|say#k（等级 11 ~ 30）\r\n#bsleep|sleepy|gotobed#k（等级 11 ~ 30）");
					cm.dispose();
				} else if (selection == 21) {
					cm.sendNext("以下是#r绿龙/红龙/蓝龙#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 15 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 15 ~ 30）\r\n#biloveyou|loveyou#k（等级 15 ~ 30）\r\n#bpoop#k（等级 15 ~ 30）\r\n#bstupid|ihateyou|dummy#k（等级 15 ~ 30）\r\n#btalk|chat|say#k（等级 15 ~ 30）\r\n#bsleep|sleepy|gotobed#k（等级 15 ~ 30）\r\n#bchange#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 22) {
					cm.sendNext("以下是#r黑龙#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 15 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 15 ~ 30）\r\n#biloveyou|loveyou#k（等级 15 ~ 30）\r\n#bpoop#k（等级 15 ~ 30）\r\n#bstupid|ihateyou|dummy#k（等级 15 ~ 30）\r\n#btalk|chat|say#k（等级 15 ~ 30）\r\n#bsleep|sleepy|gotobed#k（等级 15 ~ 30）\r\n#bcutie, change#k（等级 21 ~ 30）");
					cm.dispose();
				} else if (selection == 23) {
					cm.sendNext("以下是#r雪人#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bstupid, ihateyou, dummy#k（等级 1 ~ 30）\r\n#bloveyou, mylove, ilikeyou#k（等级 1 ~ 30）\r\n#bmerrychristmas#k（等级 1 ~ 30）\r\n#bcutie, adorable, cute, pretty#k（等级 1 ~ 30）\r\n#bbad, no, badgirl, badboy#k（等级 1 ~ 30）\r\n#btalk, chat, say/sleep, sleepy, gotobed#k（等级 10 ~ 30）\r\n#bchang#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 24) {
					cm.sendNext("以下是#r孙悟空#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bno, bad, badgirl, badboy#k（等级 1 ~ 30）\r\n#bpoope#k（等级 1 ~ 30）\r\n#bcutie, adorable, cute, pretty#k（等级 1 ~ 30）\r\n#biloveyou, loveyou, luvyou, ilikeyou, mylove#k（等级 1 ~ 30）\r\n#btalk, chat, say/sleep, sleepy, gotobed#k（等级 10 ~ 30）\r\n#btransform#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 25) {
					cm.sendNext("以下是#r小死神#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 1 ~ 30）\r\n#bplaydead, poop#k（等级 1 ~ 30）\r\n#btalk|chat|say#k（等级 1 ~ 30）\r\n#biloveyou, hug#k（等级 1 ~ 30）\r\n#bsmellmyfeet, rockout, boo#k（等级 1 ~ 30）\r\n#btrickortreat#k（等级 1 ~ 30）\r\n#bmonstermash#k（等级 1 ~ 30）");
					cm.dispose();
				} else if (selection == 26) {
					cm.sendNext("以下是#r水晶鲁道夫#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bno|badgirl|badboy#k（等级 1 ~ 30）\r\n#bbleh|joke#k（等级 1~30）\r\n#bdisguise|transform#k（等级 1 ~ 30）\r\n#bawesome|feelgood|lalala#k（等级 1 ~ 30）\r\n#bloveyou|heybabe#k（等级 1 ~ 30）\r\n#btalk|say|chat#k（等级 10 ~ 30）\r\n#bsleep|sleepy|nap|gotobed#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 27) {
					cm.sendNext("以下是#r基诺#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad|no|badgirl|badboy#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#bsleep|nap|sleepy|gotobed#k（等级 1 ~ 30）\r\n#btalk|say|chat#k（等级 10 ~ 30）\r\n#biloveyou|mylove|likeyou#k（等级 10 ~ 30）\r\n#bmeh|bleh#k（等级 10 ~ 30）\r\n#bdisguise|change|transform#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 28) {
					cm.sendNext("以下是#r白色鸭子#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad|no|badgirl|badboy#k（等级 1 ~ 30）\r\n#bup|stand#k（等级 1 ~ 30）\r\n#bpoop#k（等级 1 ~ 30）\r\n#btalk|chat|say#k（等级 1 ~ 30）\r\n#bhug#k（等级 1 ~ 30）\r\n#bloveyou#k（等级 1 ~ 30）\r\n#bcutie#k（等级 1 ~ 30）\r\n#bsleep#k（等级 1 ~ 30）\r\n#bsmarty（等级 10 ~ 30）\r\n#bdance#k（等级 20 ~ 30）\r\n#bswan#k（等级 20 ~ 30）");
					cm.dispose();
				} else if (selection == 29){
					cm.sendNext("以下是#r粉红宾#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bbad|no|badgirl|badboy|poop#k（等级 1 ~ 30）\r\n#blazy|dummy|ihateyoutalk|chat|say|mumbleiloveyou|hugme|loveyou|#k（等级 1 ~ 30）\r\n#bshake|music|charmbleh|joke|boo#k（等级 20 ~ 30）\r\n#bgotobed|sleep|sleepypoke|stinky|dummy|ihateyou#k（等级 20 ~ 30）\r\n#bkongkong#k（等级 30）");
					cm.dispose();
				} else if (selection == 30){
					cm.sendNext("以下是#r豪猪#k的指令。指令旁边标注的等级表示宠物响应所需的等级。\r\n#bsit#k（等级 1 ~ 30）\r\n#bno|bad|badgirl|badboy#k（等级 1 ~ 30）\r\n#bhugcushion|sleep|knit|poop#k（等级 1 ~ 30）\r\n#bcomb|beach#k（等级 10 ~ 30）\r\n#btreeninja|dart#k（等级 20 ~ 30）");
					cm.dispose();
				}
			} else if(status == 2){
				cm.sendNextPrev("但是生命之水只有在世界树的最底部才会少量产出，所以这些小家伙们不可能永远活着……我知道这很不幸……但即使它变回了玩偶，也可以再次被复活，所以在和它在一起的时候好好待它吧。");
			} else if(status == 3){
				cm.sendNextPrev("对了，它们会对特殊指令做出反应。你可以训斥它们，也可以宠爱它们……这完全取决于你怎么照顾它们。它们害怕离开主人，所以对它们好一点，多给它们一些爱。它们很容易感到悲伤和孤独……");
				cm.dispose();
			} else if(status == 4){
				cm.sendNextPrev("多和宠物说话，多关注它，亲密度就会上升，最终它的整体等级也会提升。随着亲密度的提高，宠物的整体等级很快就会跟上。当整体等级提高后，有一天宠物甚至可能像人一样说话，所以努力饲养它吧。当然这并不容易……");
			} else if(status == 5){
				cm.sendNextPrev("虽然它是活着的玩偶，但它们也有生命，所以也会感到饥饿。#b饱食度#k表示宠物的饥饿程度。100是最高值，数值越低，说明宠物越饿。过一段时间后，它甚至不会听从你的指令，还会变得暴躁，所以要注意。");
			} else if(status == 6){
				cm.sendNextPrev("没错！宠物不能吃人类的食物。玩具城有一只名叫#b帕特丽夏#k的泰迪熊出售#b宠物食品#k，如果你需要宠物食物，去找#b帕特丽夏#k吧。建议提前买好食物，在宠物非常饿之前就喂它。");
			} else if(status == 7){
				cm.sendNextPrev("哦，还有，如果你长时间不喂宠物，它会自己回家。你可以把它从家里拿出来再喂它，但这样对宠物的健康不太好，所以尽量定期喂它，不要让它饿到那种程度，好吗？我想说的就是这些了。");
				cm.dispose();
			} else if(status == 8){
				cm.sendNextPrev("一段时间后……没错，它们会停止活动。当魔法的效力消退、生命之水干涸后，它们就会变回玩偶。但这并不意味着永远停止，因为只要再倒上生命之水，它就会重新活过来。");
			} else if(status == 9){
				cm.sendNextPrev("即使有一天它又能动了，看到它们完全停下来还是很令人伤心的。请在它们活着、能动的时候好好对待它们。也要好好喂它们。知道有一个只跟随你、只听你话的小生命在你身边，不是一件很美好的事吗？");
				cm.dispose();
			}
	}
}
				