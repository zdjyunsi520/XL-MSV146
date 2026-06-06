/* 
 * @Author Lerk
 * 
 * Bulletin Board, Victoria Road: Excavation Site<Camp> (101030104) AND Sharenian: Excavation Site (990000000)
 * 
 * Start of Guild Quest
 */


function action(mode, type, selection) {
    cm.sendOk("<公告> \r\n 你的公会是否拥有充足的勇气和信任？那就来挑战公会任务吧！\r\n\r\n#b参与条件：#k\r\n1. 公会必须至少有6名成员！\r\n2. 公会任务的领导者必须是公会会长或副会长！\r\n3. 如果参与成员少于6人，或领导者决定提前结束，公会任务将提前结束！");
    cm.safeDispose();
}