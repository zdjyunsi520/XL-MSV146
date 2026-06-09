var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("发生了未知错误");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestEASY") != null) {
                        cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 70) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestEASY");
                            if (q == null) {
                                cm.sendOk("所有玩家必须在地图上且等级达到70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("你不是队长，请让队长与我对话。");
                        }
                    } else {
                        cm.sendOk("请先组建队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图上且等级达到100级以上。");
                }
                break;
            case 1:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestMed") != null) {
                        cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestMed");
                            if (q == null) {
                                cm.sendOk("所有玩家必须在地图上且等级达到70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("所有玩家必须在地图上且等级达到120级以上。");
                        }
                    } else {
                        cm.sendOk("请先组建队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图上且等级达到100级以上。");
                }
                break;
            case 2:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHARD") != null) {
                        cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 120) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestHARD");
                            if (q == null) {
                                cm.sendOk("所有玩家必须在地图上且等级达到70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("所有玩家必须在地图上且等级达到160级以上。");
                        }
                    } else {
                        cm.sendOk("请先组建队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图上且等级达到100级以上。");
                }
                break;
            case 28:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHELL") != null) {
                        cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestHELL");
                            if (q == null) {
                                cm.sendOk("所有玩家必须在地图上且等级达到70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("#b当前积分：");
                        }
                    } else {
                        cm.sendOk("请先组建队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图上且等级达到100级以上。");
                }
                break;
            case 3:
                cm.sendOk("#b当前积分： " + points);
                break;
            case 99:
                cm.warp(100000000);
                break;
        }
    }
    cm.dispose();
}