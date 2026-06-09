/* * * * * * * * * * * * * * * \
*         Inventory Spy        *
*  By Hugo of MadStory/VoidMS  *
*      gugubro1@gmail.com      *
*         madstory.org         *
*          voidms.com          *
\ * * * * * * * * * * * * * * */

var name;
var status = 0;
var thing = 0;
var slot;
var p = null;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 2 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getPlayer().getGMLevel() > 2) {
                cm.sendGetText("#e嘿 #h #！我可以帮你查看玩家的物品栏。 \r\n\r\n#r请输入玩家的名字");
            } else {
                cm.sendOk("#e非管理员请离开");
                cm.dispose();
            }
        } else if (status == 1) {
            name = cm.getText(); 
            p = cm.getCharByName(name);
            if (p != null) {
                cm.sendSimple("#e选择一个物品栏#b\r\n#L0#装备#l\r\n#L1#消耗#l\r\n#L2#设置#l\r\n#L3#其他#l\r\n#L4#现金#l");
            } else {
                cm.sendOk("#e#r你选择的玩家可能已离线或不在你的频道。");
            }
        } else if (status == 2) {
            string = "#e点击物品以删除#r所有#k该物品。\r\n#n";
            thing = selection;
            if (selection == 0) {                
                cm.sendSimple(string+cm.EquipList(p.getClient()));
            } else if (selection == 1) {
                cm.sendSimple(string+cm.UseList(p.getClient()));
            } else if (selection == 2) {
                cm.sendSimple(string+cm.SetupList(p.getClient()));
            } else if (selection == 3) {
                cm.sendSimple(string+cm.ETCList(p.getClient()));
            } else if (selection == 4) {
                cm.sendSimple(string+cm.CashList(p.getClient()));
            }
        } else if (status == 3) {
            slot = selection;
            send = "#e该用户拥有#r ";
            send2 = "#k 个物品 #i";
            if (thing == 0) {
                send += p.getItemQuantity(p.getEquipId(selection), true);
                send2 += p.getEquipId(selection);
            } else if (thing  == 1) {
                send += p.getItemQuantity(p.getUseId(selection), true);
                send2 += p.getUseId(selection);
            } else if (thing == 2) {
                send += p.getItemQuantity(p.getSetupId(selection), true);
                send2 += p.getSetupId(selection);
            } else if (thing == 3) {
                send += p.getItemQuantity(p.getETCId(selection), true);
                send2 += p.getETCId(selection);
            } else if (thing == 4) {
                send += p.getItemQuantity(p.getCashId(selection), true);
                send2 += p.getCashId(selection);
            }
            var send3 = send + send2 + "# 你确定要删除#r所有#k该物品吗？";
            cm.sendYesNo(send3);
        } else if (status == 4) {
            if (thing == 0) { 
                p.deleteAll(p.getEquipId(slot));
            } else if (thing == 1) {
                p.deleteAll(p.getUseId(slot));
            } else if (thing == 2) {
                p.deleteAll(p.getSetupId(slot));
            } else if (thing == 3) {
                p.deleteAll(p.getETCId(slot));
            } else if (thing == 4) {
                p.deleteAll(p.getCashId(slot));
            }
            cm.sendOk("#e成功删除了 " +  name + "的物品");
            cm.dispose();
        }
    }
}  

























