var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendAcceptDecline("这个地方疯了！#b#m600000000##k遭受了疯狂的地震！我说的是楼房倒塌，田地消失在地下，我甚至认不出我建造的城市了！我想雇一个地震学家，但预算全花在扩张上了。你看起来挺懂地震学的。你能帮我吗？");
    } else if (status == 1) {
	qm.sendAcceptDecline("我就想听这个！在#e#b#m600000000##k#n见我。如果你需要搭车，我可以派我的特别隐形市长豪华轿车来接你，免费。怎么样？");
    } else if (status == 2) {
	qm.sendNext("好了！我就知道你喜欢坐豪华车。你不会真的看到轿车的。只要站着别动。");
	qm.forceStartQuest(28745);
	qm.dispose();
    }
}

