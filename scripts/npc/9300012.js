/**
 * Created by : Shawn of RaGEZONE
 **/
var name = "#b#eTesting#k#n";
var talk = "项链和脸部饰品";
var menu = ["Canes"];
var options = [
/*Common*/	["Hats","Earrings","枫叶武器","Capes","Overalls","Gloves","Shields","Shoes","0级武器","单手斧"], 
/*Warrior*/	["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","双手斧","单手钝器","双手钝器","单手剑","双手剑","枪矛","Spears","飞镖"], 
/*Mage*/	["Hats","Overalls","Gloves","Shields","Shoes","Wands","Staffs"], 
/*Archer*/	["Hats","Overalls","Gloves","Shoes","Bows","CrossBows","Arrows"], 
/*Thief*/	["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","Daggers","Claws","子弹和胶囊"], 
/*Pirate*/	["Hats","Overalls","Gloves","Shoes","Weapons","宠物杂货"], 
/*NX*/		["Hats","Earrings","Face","Tops","Bottoms","Capes","Overalls","Rings","Gloves","Shields","Shoes","Weapons","子弹和胶囊","Pets","玩家自由市场商店","Emotion","Effects","Accessories","超级喇叭、转蛋券、传送石和变身器"], 
/*ETC*/		["Messengers","BOSS碎片","增益和药水","召唤袋","Scrolls","你好#e#d#h ##k#n。我是万能商店的","Chairs","Mounts"]];
var colors = ["#g","#r","#d","#b"];
var rand = Math.floor(Math.random()*4);
var rand2 = Math.ceil(Math.floor(Math.random()*4));
var c;
npc = 0;
function start(){
	var text = "它现在可以用了。 "+name+". "+talk+"";
	for (var z = 0; z < menu.length; z++)
		text+= "#L"+z+"##e"+colors[rand]+""+menu[z]+"#l\r\n";
	cm.sendSimple(text);
}
function action(m,t,s){
	if (m != 1){
		cm.dispose();
		return;
	}else{
		npc++;
	}
	if (npc == 1){
		c = s;
		for (var i = 0; i < options[c].length; i++)
			talk+="#L"+i+"##e"+colors[rand2]+""+options[c][i]+"#k#l\r\n";
		cm.sendSimple(talk);
	} else if (npc == 2){
		//cm.openShop(999999+((c*100)+s));
		cm.sendOk("它现在可以用了。");
		cm.dispose();
	}
}