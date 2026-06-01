# GM 命令与功能说明

本文档根据当前源码 `src/main/java/server/commands` 生成，整理玩家命令、GM 命令、管理员命令的权限等级和功能用途。

## 命令系统概览

命令入口主要在：

- `handling/channel/handler/ChatHandler.java`
- `server/commands/CommandProcessor.java`
- `server/commands/PlayerCommand.java`
- `server/commands/InternCommand.java`
- `server/commands/GMCommand.java`
- `server/commands/SuperGMCommand.java`
- `server/commands/AdminCommand.java`

命令类通过内部类自动注册。内部类名会转成小写作为命令名，例如：

```text
PlayerCommand.Help  -> @help
GMCommand.Warp      -> !warp
```

部分命令通过继承已有内部类形成别名，例如：

```text
ID extends Find      -> !id
Search extends Find  -> !search
Y extends Yellow     -> !y
```

## 权限等级

权限等级来自 `constants/ServerConstants.java`。

| 等级 | 类型 | 前缀 | 说明 |
|---:|---|---|---|
| 0 | NORMAL | `@` | 普通玩家命令 |
| 1 | INTERN | `!` | 实习 GM 命令 |
| 2 | GM | `!` | GM 命令 |
| 3 | SUPERGM | `!` | 高级 GM 命令 |
| 4 | ADMIN | `!` | 管理员命令 |

> 注意：当前 `CommandProcessor` 对 `INTERN`、`SUPERGM`、`ADMIN` 命令存在额外注册逻辑，会把部分 `!命令` 也注册到 GM level 2。也就是说，源码声明为 3/4 级的部分命令，实际执行权限可能被降到 2 级。这个属于安全风险，后续如果要做权限收紧，需要单独修复注册逻辑。

## 普通玩家命令 `@`

来源：`PlayerCommand.java`  
权限：`NORMAL`，等级 0。

| 命令 | 功能 |
|---|---|
| `@maxskills` | 学满当前职业可用技能 |
| `@dispose` | 清理 NPC/脚本点击状态并恢复操作 |
| `@pinkzak` | 打开 Pink Zakum 入口 NPC，受事件配置影响 |
| `@expfix` | 修正当前经验到当前等级合法范围 |
| `@resetexp` | 当前经验清零 |
| `@str` | 消耗 AP 增加 STR |
| `@dex` | 消耗 AP 增加 DEX |
| `@int` | 消耗 AP 增加 INT |
| `@luk` | 消耗 AP 增加 LUK |
| `@hp` | 消耗 AP 增加 HP |
| `@mp` | 消耗 AP 增加 MP |
| `@hair` | 消耗 AP 增加第二发型相关属性 |
| `@mob` | 查看附近怪物信息 |
| `@save` | 修正经验并保存角色 |
| `@event` | 打开活动 NPC `9000000` |
| `@checkdrop` | 打开 hidden-street 掉落查询网页面板 |
| `@ranking` | 打开配置的排名网页 |
| `@modes` | Beast Tamer 模式/技能补全 |
| `@fm` | 传送自由市场，受地图/事件/背包限制 |
| `@check` | 显示 Cash/Event/Donation/Vote/BPQ 点数、倍率、经验等 |
| `@help` | 输出玩家命令帮助 |
| `@job` | 打开转职 NPC `9900002` |
| `@skiptutorial` | 初心者低等级跳过教程并传送到 Henesys |
| `@traderoom` | 15 级以上传送到 Maya's House 交易房 |
| `@eunice` | 打开万能 NPC `9270035` |
| `@joinevent` | 传送到频道活动地图 |
| `@spawnbomb` | Bomberman 活动地图刷炸弹怪 |
| `@cashdrop` | 打开 CashDrop NPC 脚本 |
| `@callgm` | 向所有 GM 广播求助消息 |
| `@taxi` | 打开 Taxi NPC `1012000` |
| `@portal` | 打开 Portal NPC `9010022` |
| `@givepoints` | 设置把 BOSS Room NX 百分比分给目标玩家 |
| `@pointssettings` | 查看当前 points 分配设置 |
| `@clearpoints` | 清除 points 分配设置 |

## Intern 命令 `!`

来源：`InternCommand.java`  
源码声明权限：`INTERN`，等级 1。  
当前注册逻辑下，实际可能按 GM level 2 执行。

| 命令 | 功能 |
|---|---|
| `!hide` | 切换隐藏 buff |
| `!heal` | 自身回血、回蓝并清除异常状态 |
| `!healmap` | 当前地图所有人回血、回蓝并清除异常状态 |
| `!whereami` | 显示当前地图 ID |
| `!online` | 显示各频道在线玩家 |
| `!seal` | 发送 sealed box/debug packet |
| `!charinfo` | 查看目标角色 HP/MP/属性/点数/队伍/交易等信息 |
| `!cheaters` | 列出作弊记录 |
| `!goto` | 按内置地点名传送，支持 locations 列表 |
| `!clock` | 当前地图广播倒计时 |
| `!map` | 传送到地图 ID，或跨频道追踪玩家 |
| `!say` | 全服公告式发言 |
| `!find` | 搜索 NPC/MOB/ITEM/MAP/SKILL/QUEST/HEADER |
| `!id` | `!find` 别名 |
| `!lookup` | `!find` 别名 |
| `!search` | `!find` 别名 |
| `!tag` | 将范围内玩家 HP 置 0 |
| `!whosfirst` | 当前地图按进入时间列出玩家 |
| `!whoslast` | 查看 MapleSquad queuedPlayers |
| `!whosnext` | 查看 MapleSquad queue |
| `!itemvac` | 拾取视野范围内掉落和金币 |
| `!cancelbuffs` | 取消自身所有 buff |
| `!cc` | 切换频道 |
| `!fakerelog` | 执行 fake relog |
| `!fly` | 给自身飞行相关 buff |
| `!opennpc` | 打开指定 NPC 脚本 |
| `!openshop` | 打开指定商店 |
| `!shop` | 打开指定商店 |
| `!activebomberman` | 开启 Bomberman 活动并封印玩家 |
| `!song` | 当前地图切换音乐 |
| `!deactivebomberman` | 关闭 Bomberman 并广播赢家 |
| `!clearinv` | 清理指定背包分类或全部背包 |
| `!bob` | 刷 10 只怪物 `9400551` |
| `!startautoevent` | 调度 AutomatedEvent |
| `!cloneme` | 克隆自身外观 |
| `!disposeclones` | 清除克隆 |
| `!chattype` | 切换文字颜色 |
| `!getmap` | 显示当前地图 ID |

## GM 命令 `!`

来源：`GMCommand.java`  
权限：`GM`，等级 2。

| 命令 | 功能 |
|---|---|
| `!reports` | 查看玩家举报 |
| `!clearreport` | 清除玩家举报 |
| `!cleardrops` | 清除当前地图掉落 |
| `!job` | 修改自身职业 |
| `!killnear` | 杀死附近玩家 |
| `!maxskills` | 学满当前职业技能 |
| `!manualevent` | 切换手动活动报名/开始并广播 |
| `!warpmap` | 当前地图所有人传送到目标地图 |
| `!killall` | 杀死全图怪物 |
| `!killalldrops` | 杀死全图怪物并掉落 |
| `!warphere` | 拉目标玩家到自己位置，支持跨频道 |
| `!position` | 显示自身坐标 |
| `!warp` | 传送自己到玩家/地图，或传送目标到地图 |
| `!tempban` | 临时封禁玩家 |
| `!tempbanip` | 临时封禁玩家并封 IP |
| `!ban` | 永久封禁玩家，支持离线封禁 |
| `!banip` | 永久封禁并封 IP |
| `!dc` | 断开目标连接 |
| `!kill` | 杀死指定玩家列表 |
| `!fly` | 给自身飞行 buff |
| `!flyperson` | 给目标玩家飞行 buff |
| `!flymap` | 给频道/地图玩家飞行 buff |
| `!givepet` | 给目标玩家宠物 |
| `!opennpc` | 打开指定 NPC 脚本 |
| `!openshop` | 打开指定商店 |
| `!shop` | 打开指定商店 |
| `!getskill` | 给自身技能等级 |
| `!fame` | 修改目标人气 |
| `!sp` | 修改 SP |
| `!sp2` | 修改第二类 SP |
| `!killmap` | 杀死当前地图非 intern 玩家 |
| `!jobperson` | 修改目标玩家职业 |
| `!levelup` | 自身升级 |
| `!leveluptill` | 自身升到指定等级 |
| `!leveluppersontill` | 目标玩家升到指定等级 |
| `!item` | 生成物品到背包 |
| `!level` | 设置自身等级 |
| `!levelperson` | 设置目标玩家等级 |
| `!startautoevent` | 启动自动活动 |
| `!setevent` | 设置活动 |
| `!autoevent` | 自动活动相关操作 |
| `!startevent` | 开始活动 |
| `!event` | 活动相关操作 |
| `!removeitem` | 移除目标物品 |
| `!lockitem` | 锁定目标物品 |
| `!smega` | 广播超级喇叭样式消息 |
| `!speakmega` | 模拟超级喇叭发言 |
| `!speakall` | 模拟全体发言 |
| `!speak` | 模拟指定玩家发言 |
| `!gmtext` | 设置 GM 文字颜色 |
| `!diseasemap` | 给当前地图玩家施加异常状态 |
| `!disease` | 给目标玩家施加异常状态 |
| `!setinstanceproperty` | 设置 EventInstance 属性 |
| `!listinstanceproperty` | 列出 EventInstance 属性 |
| `!leaveinstance` | 离开 EventInstance |
| `!startinstance` | 启动 EventInstance |
| `!whosthere` | 当前地图玩家列表 |
| `!resetmobs` | 重置当前地图怪物 |
| `!killmonsterbyoid` | 按 OID 杀怪 |
| `!removenpcs` | 重置 NPC |
| `!gmchatnotice` | GM 聊天公告 |
| `!notice` | 普通公告 |
| `!yellow` | 黄色公告 |
| `!y` | `!yellow` 别名 |
| `!whatsmyip` | 显示自身 IP |
| `!tdrops` | 切换地图掉落 |
| `!jail` | 关押目标到 jail |
| `!looknpc` | 查看地图 NPC 信息 |
| `!lookreactor` | 查看地图 reactor 信息 |
| `!lookportals` | 查看地图传送点信息 |
| `!mynpcpos` | 显示自身 NPC 坐标辅助信息 |
| `!letter` | 用字母道具掉落拼字 |
| `!spawn` | 按 ID/名称刷怪，支持数量和属性覆盖 |
| `!spawnmob` | `!spawn` 类刷怪命令 |
| `!mute` | 禁言目标玩家 |
| `!unmute` | 解除目标玩家禁言 |
| `!mutemap` | 禁言当前地图 |
| `!unmutemap` | 解除当前地图禁言 |

## SuperGM 命令 `!`

来源：`SuperGMCommand.java`  
源码声明权限：`SUPERGM`，等级 3。  
当前注册逻辑下，实际可能按 GM level 2 执行。

| 命令 | 功能 |
|---|---|
| `!itemsearch` | NPC 面板搜索物品 |
| `!servernotice` | 频道公告 |
| `!specialmessage` | 特殊消息公告 |
| `!hidespecialmessage` | 隐藏特殊消息 |
| `!popup` | 弹窗公告 |
| `!mapchangetimer` | 指定地图倒计时后传送 |
| `!setname` | 修改玩家名并断线 |
| `!saveall` | 保存当前频道角色 |
| `!saveandroids` | 保存安卓数据 |
| `!hellb` | 封禁相关别名 |
| `!hellban` | 封禁相关别名 |
| `!unhellb` | 解封相关别名 |
| `!unhellban` | 解封相关别名 |
| `!unb` | 解封相关别名 |
| `!unban` | 解封玩家 |
| `!unbanip` | 解除 IP/MAC 封禁 |
| `!giveskill` | 给目标玩家技能 |
| `!unlockinv` | 解除物品 lock/untradable flag |
| `!drop` | 按 ID/名称在地图掉落物品 |
| `!dropitem` | `!drop` 别名 |
| `!marry` | 创建效果戒指婚姻 |
| `!giveep` | 给目标事件点 |
| `!givevp` | 给目标投票点 |
| `!givecash` | 给目标 NX/Cash |
| `!speakmap` | 模拟地图玩家发言 |
| `!speakchn` | 模拟频道玩家发言 |
| `!speakworld` | 模拟世界玩家发言 |
| `!monitor` | 切换目标 client 监控 |
| `!resetother` | 重置目标玩家任务 |
| `!fstartother` | 强制开始目标玩家任务 |
| `!fcompleteother` | 强制完成目标玩家任务 |
| `!threads` | 查看线程信息 |
| `!showtrace` | 查看堆栈信息 |
| `!toggleoffense` | 开关作弊检测 offense |
| `!tmegaphone` | 切换 megaphone mute |
| `!sreactor` | 当前点刷 reactor |
| `!clearsquads` | 清理频道 squad |
| `!hitmonsterbyoid` | 按 OID 对怪物造成伤害 |
| `!hitall` | 对全图怪物造成伤害 |
| `!hitmonster` | 对指定怪物造成伤害 |
| `!killmonster` | 杀死指定怪物 |
| `!killalldrops` | 杀全图怪并掉落 |
| `!killallexp` | 杀全图怪并给经验 |
| `!npc` | 临时刷 NPC |
| `!pnpc` | 永久刷 NPC |
| `!pmob` | 永久刷怪 |
| `!playernpc` | 创建玩家 NPC |
| `!destroyplayernpc` | 删除玩家 NPC |
| `!servermessage` | 设置所有频道顶部 server message |
| `!ps` | Packet 发送/调试别名 |
| `!aps` | Packet 发送/调试别名 |
| `!cps` | Packet 发送/调试别名 |
| `!p` | Packet 发送/调试别名 |
| `!packet` | Packet 发送/调试命令 |
| `!pts` | Packet 模拟接收/调试命令 |
| `!reloadmap` | 重载当前地图 |
| `!respawn` | 刷新当前地图 |
| `!testeventtimer` | EventTimer 调试 |
| `!testclonetimer` | CloneTimer 调试 |
| `!testetctimer` | EtcTimer 调试 |
| `!testmaptimer` | MapTimer 调试 |
| `!testworldtimer` | WorldTimer 调试 |
| `!testbufftimer` | BuffTimer 调试 |
| `!crash` | 向目标发送异常 buff packet |
| `!rev` | 显示源码版本 |
| `!reloadipmonitor` | 重载 IP monitor |
| `!addipmonitor` | 添加 IP monitor |
| `!fillbook` | 填充怪物图鉴 |
| `!listbook` | 列出怪物图鉴 |
| `!subcategory` | 设置 subcategory |
| `!maxmesos` | 设置最大金币 |
| `!mesos` | 修改自身金币 |
| `!mesoperson` | 修改目标金币 |
| `!giftnx` | 赠送 NX |
| `!gainmp` | 增加 Maple Points |
| `!gainp` | 增加 Event Points |
| `!gainvp` | 增加 Vote Points |
| `!maxstats` | 最大化属性 |
| `!eyesperson` | 修改目标脸型 |
| `!hairperson` | 修改目标发型 |
| `!setsendop` | 修改发送 opcode 值 |
| `!setrecvop` | 修改接收 opcode 值 |
| `!reloaddrops` | 重载掉落缓存 |
| `!reloadportal` | 重载传送点 |
| `!reloadshops` | 重载商店 |
| `!reloadevents` | 重载事件 |
| `!resetmap` | 当前地图完全重置 |
| `!resetquest` | 重置自身任务 |
| `!startquest` | 开始自身任务 |
| `!completequest` | 完成自身任务 |
| `!fstartquest` | 强制开始自身任务 |
| `!fcompletequest` | 强制完成自身任务 |
| `!hreactor` | 操作 reactor |
| `!fhreactor` | 强制操作 reactor |
| `!dreactor` | 删除 reactor |
| `!setreactor` | 设置 reactor |
| `!resetreactor` | 重置 reactor |
| `!sendnote` | 发送便签 |
| `!sendallnote` | 群发便签 |
| `!buffskill` | 给自身技能 buff |
| `!buffitem` | 给自身物品 buff |
| `!buffitemex` | 给自身扩展物品 buff |
| `!cancelskill` | 取消技能 buff |
| `!mapbuffskill` | 给地图全员技能 buff |
| `!mapbuffitem` | 给地图全员物品 buff |
| `!mapbuffitemex` | 给地图全员扩展物品 buff |
| `!mapitemsize` | 显示物品表大小 |
| `!openuioption` | 打开客户端 UI option |
| `!openuiwindow` | 打开客户端 UI window |

## Admin 命令 `!`

来源：`AdminCommand.java`  
源码声明权限：`ADMIN`，等级 4。  
当前注册逻辑下，实际可能按 GM level 2 执行。

| 命令 | 功能 |
|---|---|
| `!updatepet` | 广播宠物颜色 packet |
| `!damagebuff` | 给自身 `9101003` buff |
| `!magicwheel` | 发送 Magic Wheel 奖励 UI 并设置结果物品 |
| `!unsealitem` | USE 栏 sealed box 解封流程 |
| `!cutscene` | 发送跳过 cutscene packet |
| `!demonjob` | 打开 Demon selection UI |
| `!cpacket` | 发送 `LoadPacket.getPacket()` |
| `!nearestportal` | 显示最近 portal 名称/id/script |
| `!uptime` | 显示服务运行时间 |
| `!reward` | 给目标添加 reward 并刷新 |
| `!gmperson` | 设置目标 GM 等级 |
| `!setgmlevel` | `!gmperson` 类 GM 等级设置命令 |
| `!togglemultilevel` | 切换 `ServerConstants.MultiLevel` |
| `!doubletime` | 切换活动开关并广播 |
| `!doublemiracletime` | 切换 Double Miracle Time |
| `!warpcashshop` | 强制目标进入 CashShopServer |
| `!testdirection` | 发送 direction info UI packet |
| `!toggleautoregister` | 切换自动注册 |
| `!packet` | 发送十六进制 packet |
| `!stripeveryone` | 卸下频道玩家装备 |
| `!strip` | 卸下目标玩家装备 |
| `!mesoeveryone` | 给所有在线玩家金币 |
| `!proitem` | 创建指定属性/潜能装备 |
| `!schedulehottime` | 给所有在线玩家 hot time 物品并弹 NPC 文本 |
| `!warpallhere` | 拉当前频道所有人到自己地图 |
| `!dcall` | 按地图/频道/世界断开玩家 |
| `!shutdown` | 立即停服 |
| `!shutdowntime` | 定时停服 |
| `!sql` | 执行原始 SQL update |
| `!getjob` | 显示自身 job id |
| `!getnx` | 给自身 Maple Points |

## 高风险命令提示

以下命令会直接影响数据库、玩家账号、全服状态或服务运行，建议只给可信管理员使用：

| 类型 | 命令 |
|---|---|
| 封禁/解封 | `!ban`, `!banip`, `!tempban`, `!tempbanip`, `!unban`, `!unbanip`, `!hellban` |
| 数据库 | `!sql`, `!setgmlevel`, `!gmperson`, `!setname` |
| 停服/断线 | `!shutdown`, `!shutdowntime`, `!dcall`, `!dc` |
| 全服经济 | `!mesoeveryone`, `!givecash`, `!giftnx`, `!gainmp`, `!gainp`, `!gainvp` |
| Packet 调试 | `!packet`, `!ps`, `!pts`, `!cpacket`, `!setsendop`, `!setrecvop` |
| 地图/刷怪持久化 | `!pnpc`, `!pmob`, `!playernpc`, `!destroyplayernpc` |
| 权限风险 | `SuperGMCommand` 和 `AdminCommand` 可能被注册成 GM level 2 可用 |

## 已注释或未启用命令

源码中还有一些命令出现在注释块或未启用代码里，不会被当前命令系统注册，例如：

- `AntiKS`
- `ResetStats`
- `SellItems`
- 旧版交易 offer 命令
- `Home`
- `EA`
- `TSmega`
- 旧版 `Ranking`
- `ClearSlot`

这些不应视为当前可用命令。

## 建议

1. 如果要精确限制权限，优先修复 `CommandProcessor` 对 `INTERN/SUPERGM/ADMIN` 的额外 GM level 2 注册逻辑。
2. 高风险命令建议只保留给 GM level 4。
3. `!sql`、packet 类命令、停服类命令建议在正式服禁用或加二次确认。
4. 当前文档基于源码静态扫描，实际可用性还会受 `enabled` 字段、命令覆盖、角色 GM level 和运行时状态影响。
