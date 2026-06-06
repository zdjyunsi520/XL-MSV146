var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
}  


function action(mode, type, selection) { 
    if (mode == 1) {
        status++; 
    }else if (mode == -1) {
        status--; 
    }else { 
        cm.dispose(); 
        return; 
    } 
    if (status == 0) { 
        if (cm.getPlayer().getLevel() >= 180) {
            cm.sendYesNo("你好！你听说过超级技能吗？\r\n\r\n它们非常有用，如果你想要的话，我可以帮你把它们全部点满。"); 
        } else { 
            cm.sendOk("你好。看来你还没到180级。我正在研究超级技能。等你达到180级这样的高等级后再来找我吧，我们可以聊聊。"); 
            cm.dispose(); 
        } 
    } else if (status == 1) { 
        cm.sendOk("好的，给你！");
	cm.dispose()
	}
}