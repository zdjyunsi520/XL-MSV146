var name = "你想浏览什么？\r\n\r\n"; 
var talk = "双刀"; 
var menu = ["Warrior","Magician","Archer","Thief","Pirate","Phantom","Cannoneer","Mercedes","单手斧"]; 
var options = [ 
/*Warrior*/   ["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","双手斧","单手钝器","双手钝器","单手剑","双手剑","枪矛","Spears","飞镖"],  
/*Mage*/      ["Hats","Overalls","Gloves","Shields","Shoes","Wands","Staffs"],  
/*Archer*/    ["Hats","Overalls","Gloves","Shoes","Bows","CrossBows","Arrows"],  
/*Thief*/     ["Hats","Tops","Bottoms","Overalls","Gloves","Shields","Shoes","Daggers","Claws","子弹和胶囊"],  
/*Pirate*/    ["Hats","Overalls","Gloves","Shoes","Weapons","双弩枪"],
/*Phantom*/   ["Canes","Cards"],
/*Cannoneer*/ ["Cannons"],
/*Mercedes*/  ["魔法箭矢","你好#e#d#h ##k#n。我是万能商店的卖家"],
/*db*/        ["Kataras"]];
var colors = ["#g","#r","#d","#b"]; 
var rand = Math.floor(Math.random()*4); 
var rand2 = Math.ceil(Math.floor(Math.random()*4)); 
var c; 
npc = 0; 
function start() { 
    var text = "你好#e#d#h ##k#n。我是万能商店的卖家 "+name+". "+talk+""; 
    for (var z = 0; z < menu.length; z++) 
        text+= "#L"+z+"##e"+colors[rand]+""+menu[z]+"#l\r\n"; 
    cm.sendSimple(text); 
} 
function action(m,t,s) { 
    if (m != 1) { 
        cm.dispose(); 
        return; 
    }else{ 
        npc++; 
    } 
    if (npc == 1) { 
        c = s; 
        for (var i = 0; i < options[c].length; i++) 
            talk+="#L"+i+"##e"+colors[rand2]+""+options[c][i]+"#k#l\r\n"; 
        cm.sendSimple(talk); 
    } else if (npc == 2) { 
        cm.openShop(6100+((c*100)+s)); 
        cm.dispose(); 
    } 
}  