prizes=[3010052, 3010066]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("你想使用你的100捐赠积分吗？");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.getItem (5680021)) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainMeso(100);
            cm.gainItem(5680021, -1);  // if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("等你有扭蛋券了再来吧。");
            cm.dispose();
        }
    }else{
        cm.sendOk("等你准备好试试运气了再来吧！");
        cm.dispose();
    }
}  