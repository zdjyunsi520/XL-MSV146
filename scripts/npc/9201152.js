/*
prizes=[0]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("当你有转蛋券时再来吧");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.getPlayer().getPoints() > 100) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainMeso(100);
           (cm.getPlayer().getPoints() - 100);  // if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("当你准备好试试运气时再来吧！");
            cm.dispose();
        }
    }else{
        cm.sendOk("当你准备好试试运气时再来吧！");
        cm.dispose();
    }
}  