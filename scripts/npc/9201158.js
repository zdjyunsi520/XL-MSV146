var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("发生未知错误");
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
                                cm.sendOk("所有玩家必须在地图内且等级在70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("你不是队伍的队长，请让你的队长来和我交谈。");
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图内且等级在100级以上。");
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
                                cm.sendOk("所有玩家必须在地图内且等级在70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("所有玩家必须在地图内且等级在120级以上。");
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图内且等级在100级以上。");
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
                                cm.sendOk("所有玩家必须在地图内且等级在70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("所有玩家必须在地图内且等级在160级以上。");
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图内且等级在100级以上。");
                }
                break;
            case 3:
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
                                cm.sendOk("所有玩家必须在地图内且等级在70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("所有玩家必须在地图内且等级在180级以上。");
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图内且等级在100级以上。");
                }
                break;
            case 4:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestCHAOS") != null) {
                        cm.getDisconnected("BossQuestCHAOS").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 180) {
                                next = false;
                                break;
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("BossQuestCHAOS");
                            if (q == null) {
                                cm.sendOk("所有玩家必须在地图内且等级在70级以上。");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("#b当前积分：");
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                    }
                } else {
                    cm.sendOk("所有玩家必须在地图内且等级在100级以上。");
                }
                break;
            //case 3:
            //    cm.sendOk("#b当前积分： " + points);
            //    break;
            //case 99:
            //    cm.warp(100000000);
            //    break;
        }
    }
    cm.dispose();
}