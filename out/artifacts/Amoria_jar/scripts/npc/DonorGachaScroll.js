prizes=[2040807, 2043203, 2043303, 2044203, 2044303, 2044503, 2044703, 2043003, 2043103, 2043703, 2044003, 2044103, 2044403, 2500000, 2501000, 2531000, 2046002, 2046102]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("#k捐赠积分中的200来获得一张超棒卷轴吗？" + cm.getPlayer().getPoints() +"等你至少有200捐赠积分再来吧。");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.getPlayer().getPoints() >= 200) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainItem(prizes[random],1);
            cm.getPlayer().setPoints(cm.getPlayer().getPoints() - 200);  // if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("等你至少有200捐赠积分再来吧。");
            cm.dispose();
        }
    }
}