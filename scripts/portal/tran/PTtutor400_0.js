importPackage(Packages.tools.packet);

function enter(pi) {
    pi.getClient().getSession().write(CPacket.NPCPacket.getNPCTalk(1402001, 0, "迟到了，迟到了！我不能迟到！", "00 00", 17, 1402001));
    return true;
}