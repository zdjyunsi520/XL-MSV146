var Message = new Array(
    "你可以通过击杀怪物、完成成就和参加武陵道场来获得现金。",
    "使用 @help 命令查看你可以使用的玩家命令列表。",
    "枫叶可用于制作枫叶装备（35、43、64、77级），或在自由市场的科迪NPC处兑换经验。",
    "请不要使用脏话、骚扰或诈骗其他玩家。我们希望保持这个社区的清洁和友好。",
    "所有Boss包括Boss副本都有专属返回传送系统！",
    "10亿金币可以在 @npc 处兑换金叶子。",
    "在我们的网站投票并累积积分以获得特殊物品！",
    "召集你的朋友，享受我们的组队任务乐趣！",
    "请在论坛报告任何错误/漏洞。",
    "如果你无法与NPC对话，请使用 @ea。",
    "前往万能商店购买召唤石/魔法石/全治愈药水和灵药、放大镜。",
    "与朋友组队征服武陵道场！击败Boss获得积分兑换腰带。",
    "使用 @check 查看积分、现金和投票点数！",
    "查看 @npc 前往众多城镇/怪物地图！",
    "我们的现金商店完全正常运作！购买现金道具打造你独特的角色外观！",
    "点击我们的玩家NPC查看你在Boss战中的速通记录！",
    "参加我们的活动时可获得花生机！",
    "GM将举办Olaola/枫叶健身/雪球/椰子收获等活动。",
    "在自由市场的稀有物品商人处用稀有物品兑换现金。",
    "某些Boss有频道限制。你只能在指定频道挑战这些Boss。",
    "现在，击杀怪物时有机会随机获得现金！",
    "友情戒指/友情衬衫/情侣戒指/情侣衬衫功能正常！",
    "召集你的公会成员，尝试公会任务！",
    "在艾琳森林寻找仙女玛尔来进化或复活你的宠物。",
    "你可以通过 @npc 访问怪物骑手商店购买相应的坐骑。",
    "请立即在论坛报告你遇到的任何错误！",
    "15%和65%卷轴可以通过墨水瓶NPC制作。");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 900000);
}

function cancelSchedule() {
	setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[" + em.getChannelServer().getServerName() + "Tip] " + Message[Math.floor(Math.random() * Message.length)]);
}