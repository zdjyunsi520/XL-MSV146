var map = 551030200;
var minLvl = 100;
var maxLvl = 200;
var minAmt = 3;
var maxAmt = 6;

function start() {
    if (cm.getParty() == null) {
        cm.sendOk("如果你想尝试这个任务，请让#b你队伍的队长#k来与我对话。");
        cm.dispose();
    } else if (!cm.isLeader()) {
        cm.sendOk("你的队伍人数不足。你需要一个#b");
        cm.dispose();
    }else{
        var party = cm.getParty().getMembers();
        var inMap = cm.partyMembersInMap();
        var lvlOk = 0;
        for (var i = 0; i < party.size(); i++) {
        if (party.get(i).getLevel() >= minLvl && party.get(i).getLevel() <= maxLvl)
            lvlOk++;
        }
        if (inMap < minAmt || inMap > maxAmt) {
            cm.sendOk("#k人的队伍，且他们必须与你同一地图。目前有#b"+minAmt+"#k - #r"+maxAmt+"#k名成员在此。"+inMap+"你的队伍中有人等级不符合要求。所有人需要达到#b");
            cm.dispose();
        } else if (lvlOk != inMap) {
            cm.sendOk("你的队伍中有人等级不符合要求。所有人需要达到#b"+minLvl+"#k - #r"+maxLvl+"#k.");
            cm.dispose();
        }else{
            cm.warpParty(map);
            cm.dispose();
        }
    }
}  