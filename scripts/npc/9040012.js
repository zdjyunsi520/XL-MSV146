/* @Author Lerk
 *
 * Armor Statue - Sharenian: Hall of the Knight (990000400)
 * 
 * Guild Quest Stage 2 Info
 */


function action(mode, type, selection) {
    cm.sendOk("牌匾上写着： \r\n"沙雷尼安的骑士是骄傲的战士。他们的龙枪既是强大的武器，也是城堡防御的关键：将它们从大厅最高处的台座上取下，便能封锁入侵者的入口。"\r\n\r\n旁边似乎用英文刻着一些字，勉强可以辨认： \r\n"邪恶夺走了长枪，锁在了障碍物后面。放回塔顶。大长枪，从更高处取。"\r\n...显然写这些的人已经没有多少时间了。可怜的家伙。");
    cm.safeDispose();
}