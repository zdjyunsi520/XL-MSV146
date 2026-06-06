#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Complete translation script for extract_en_2.txt -> extract_cn_2.txt"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

src = r'extract_en_2.txt'
dst = r'extract_cn_2.txt'

with open(src, 'r', encoding='utf-8') as f:
    lines = [l.rstrip() for l in f.readlines()]

# Complete translation dictionary - maps English text -> Chinese text
T = {}

# Helper to add translations in bulk
def A(eng, cn):
    T[eng] = cn

# ==============================
# 2090004.js - Scroll donation NPC
# ==============================
A("Scroll for One-Handed BW for ATT", "单手钝器攻击卷轴")
A("Scroll for Dagger for ATT", "短剑攻击卷轴")
A("Scroll for Wand for Magic Att.", "短杖魔法攻击卷轴")
A("Scroll for Staff for Magic Att.", "长杖魔法攻击卷轴")
A("Scroll for Two-handed Sword for ATT.", "双手剑攻击卷轴")
A("Scroll for Two-handed Axe for ATT", "双手斧攻击卷轴")
A("Scroll for Two-handed BW for ATT", "双手钝器攻击卷轴")
A("Scroll for Spear for ATT", "枪攻击卷轴")
A("Scroll for Pole Arm for ATT", "矛攻击卷轴")
A("Scroll for Bow for ATT", "弓攻击卷轴")
A("Scroll for Crossbow for ATT ", "弩攻击卷轴 ")
A("Scroll for Claw for ATT", "拳套攻击卷轴")
A("Knuckle Attack Power Scroll", "指虎攻击力卷轴")
A("Gun Attack Power Scroll#k", "枪手攻击力卷轴#k")
A("So you wish to donate some medicine ingredients? This is great news! Donations will be accepted in the unit of #b100#k. The donator will receive a marble that enables one to make a scroll. Which of these would you like to donate? #b", "你想捐赠一些药材吗？这真是太好了！捐赠以#b100#k为单位接受。捐赠者将获得一颗可以制作卷轴的珠子。你想捐赠哪一种？#b")
A("Needle Pouch", "针袋")
A("Necki Flower", "猫妖花")
A("Necki Swimming Cap", "猫妖泳帽")
A("Broken Piece of Pot", "陶器碎片")
A("Ginseng-Boiled Water", "人参水")
A("Straw Doll", "稻草人偶")
A("Wooden Doll", "木头人偶")
A("Bellflower Root", "桔梗根")
A("100-Year-Old Bellflower", "百年桔梗")
A("Old Paper", "旧纸张")
A("Yellow Belt", "黄腰带")
A("Broken Deer Horn", "鹿角碎片")
A("Red Belt", "红腰带")
A("Peach Seed", "桃核")
A("Mr. Alli's Leather", "鳄鱼先生的皮革")
A("Cat Doll", "猫人偶")
A("Mark of the Pirate", "海盗的证明")
A("Captain Hat#k", "船长帽#k")
A("You want to make #t", "你想要制作#t")
A("#? In order to make #t", "#吗？为了制作#t")
A("#,You'll need #b100 Dr. Do's Marbles#k and #b10 Steel Ores.#k", "#，你需要#b100个杜博士的珠子#k和#b10个钢铁矿石#k。")
A("#What do you think? Would you like to make on right now?", "#你觉得怎么样？现在就制作一个吗？")
A("Are you sure you want to donate #b100 #t ", "你确定要捐赠#b100个#t ")
A("Please make sure you are neither lacking ingredients or lacking space in your use inventory.", "请确保你既不缺少材料，也不缺少消耗品背包空间。")

print(f"Phase 1 done, T has {len(T)} entries")
# We'll continue adding translations in subsequent sections

# ==============================
# 2090005.js - Crane flight NPC
# ==============================
A("Mu Lung", "武陵")
A("Herb Town", "百草堂")
A("OK. If you ever change your mind, please let me know.", "好的。如果你改变主意了，请告诉我。")
A(" mesos)#k", " 金币)#k")
A("#bOrbis#k to #bMu Lung#k", "#b天空之城#k到#b武陵#k")
A("#bMu Lung#k to #bOrbis#k", "#b武陵#k到#b天空之城#k")
A("Someone else is on the way to Mu Lung right now. Talk to me a little bit more.", "现在正有人在前往武陵的路上。请稍后再来找我。")
A("Hello there? I'm the crane that flies from ", "你好？我是从")
A(" and back. I fly around all the time, so I figured, why not make some money by taking travelers like you along for a small fee? It's good business for me. Anyway, what do you think? Do you want to fly to #b", " 来回飞的鹤。我整天飞来飞去，所以想为什么不载着像你这样的旅行者赚点小钱呢？这对我来说是笔好生意。不管怎样，你觉得怎么样？你现在想飞到#b")
A("#k right now? I only charge #b", "#k吗？我只收#b")
A(" mesos#k.", " 金币#k。")
A(" and back. I fly around all the time, so I figured, why not make some money by taking travelers like you along for a small fee? It's good business for me. Anyway, what do you think?\r\n", " 来回飞的鹤。我整天飞来飞去，所以想为什么不载着像你这样的旅行者赚点小钱呢？这对我来说是笔好生意。不管怎样，你觉得怎么样？\r\n")
A("Will you move to #b", "你现在要前往#b")
A("#k now? If you have #b", "#k吗？如果你有#b")
A(" mesos#k, I'll take you there right now.", " 金币#k，我现在就带你过去。")
A("Are you sure you have enough mesos?", "你确定你有足够的金币吗？")
A("Someone else is on the way to Orbis right now. Talk to me a little bit more.", "现在正有人在前往天空之城的路上。请稍后再来找我。")

print(f"Phase 2 done, T has {len(T)} entries")

# ==============================
# 2090100-2090104.js - Mu Lung beauty shops
# ==============================
A("Welcome to the Mu Lung hair shop. If you have a #b#t5150025##k, or a #b#t5151020##k, allow me to take care of your hairdo. Please choose the one you want.\r\n#L0#Haircut: #i5150025##t5150025##l\r\n#L1#Dye your hair: #i5151020##t5151020##l", "欢迎来到武陵美发店。如果你有#b#t5150025##k或#b#t5151020##k，让我来为你打理发型。请选择你想要的服务。\r\n#L0#剪发：#i5150025##t5150025##l\r\n#L1#染发：#i5151020##t5151020##l")
A("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? With #b#t5150025##k, I'll take care of the rest for you. Choose the style of your liking!", "我可以完全改变你的发型，让它看起来非常棒。你不想换个新造型吗？只要有#b#t5150025##k，剩下的交给我吧。选择你喜欢的发型！")
A("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151020##k, I'll take care of the rest. Choose the color of your liking!", "我可以完全改变你的发色，让它看起来非常棒。你不想换个新颜色吗？只要有#b#t5151020##k，剩下的交给我。选择你喜欢的颜色！")
A("Enjoy your new and improved hairstyle!", "享受你全新改良的发型吧！")
A("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...", "嗯...看起来你没有我们指定的优惠券...没有它恐怕我无法为你剪发。抱歉...")
A("Enjoy your new and improved hair colour!", "享受你全新改良的发色吧！")
A("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dyle your hair without it. I'm sorry...", "嗯...看起来你没有我们指定的优惠券...没有它恐怕我无法为你染发。抱歉...")
A("I'm a hair assistant in this shop. If you have #b#t5150024##k or #b#t5151019##k by any chance, then how about letting me change your hairdo? \r\n#L0#Haircut: #i5150024##t5150024##l\r\n#L1#Dye your hair: #i5151019##t5151019##l", "我是这家店的发型助理。如果你手上有#b#t5150024##k或#b#t5151019##k，要不要让我来改变你的发型？\r\n#L0#剪发：#i5150024##t5150024##l\r\n#L1#染发：#i5151019##t5151019##l")
A("If you use the EXP coupon your hair will change RANDOMLY with a chance to obtain a new experimental style that I came up with. Are you going to use #b#t5150024##k and really change your hairstyle?", "如果你使用EXP优惠券，你的发型将随机改变，还有机会获得我研发的新实验发型。你确定要使用#b#t5150024##k来改变发型吗？")
A("If you use a regular coupon your hair will change RANDOMLY. Do you still want to use #b#t5151019##k and change it up?", "如果你使用普通优惠券，你的发型将随机改变。你还要使用#b#t5151019##k来换发型吗？")
A("Well, hello! Welcome to the Mu Lung Skin-Care! Would you like to have a firm, tight, healthy looking skin like mine?  With #b#t5153006##k, you can let us take care of the rest and have the kind of skin you've always wanted~!", "你好！欢迎来到武陵护肤中心！你想要拥有像我这样紧致、健康有光泽的皮肤吗？只要有#b#t5153006##k，你就可以让我们来帮你打理，拥有你一直想要的皮肤~！")
A("With our specialized machine, you can see the way you'll look after the treatment PRIOR to the procedure. What kind of a look are you looking for? Go ahead and choose the style of your liking~!", "通过我们的专业设备，你可以在护理之前就看到护理后的效果。你想要什么样的外观？来选择你喜欢的风格吧~！")
A("Enjoy your new and improved skin!", "享受你全新改良的皮肤吧！")
A("Um...you don't have the skin-care coupon you need to receive the treatment. Sorry, but I am afraid we can't do it for you...", "嗯...你没有接受护理所需的护肤优惠券。抱歉，恐怕我们无法为你服务...")
A("Hey, I'm Pata, and I am a cosmetic lens expert here in Mu Lung. I believe your eyes are the most important feature in your body, and with #b#t5152042##k or #b#t5152041##k, I can prescribe the right kind of cosmetic lenses for you. Now, what would you like to use? \r\n#L0#Cosmetic Lenses: #i5152042##t5152042##l\r\n#L1#Cosmetic Lenses: #i5152041##t5152041##l", "嘿，我是帕塔，武陵的美瞳专家。我认为眼睛是你身体最重要的特征，有了#b#t5152042##k或#b#t5152041##k，我可以为你配一副合适的美瞳。你想使用哪种？\r\n#L0#美瞳：#i5152042##t5152042##l\r\n#L1#美瞳：#i5152041##t5152041##l")
A("If you use the regular coupon, you'll be awarded a random pair of cosmetic lenses. Are you going to use a #b#t5152042##k and really make the change to your eyes?", "如果你使用普通优惠券，你将获得一副随机美瞳。你要使用#b#t5152042##k来改变你的眼睛吗？")
A("With our new computer program, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", "通过我们新的电脑程序，你可以提前看到护理后的效果。你想戴什么样的美瞳？请选择你喜欢的风格。")
A("Enjoy your new and improved face!", "享受你全新改良的面容吧！")
A("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...", "嗯...看起来你没有这个地点专用的优惠券。很抱歉，没有优惠券的话无法进行整形...")
A("Hey, I'm Noma, and I am assiting Pata in changing faces into beautiful things here in Mu Lung. With #b#t5152027##k or #b#t5152028##k, I can change the way you look. Now, what would you like to use? \r\n#L0#Plastic Surgery: #i5152027##t5152027##l\r\n#L1#Plastic Surgery: #i5152028##t5152028##l", "嘿，我是诺玛，在武陵协助帕塔把脸变得漂亮。有了#b#t5152027##k或#b#t5152028##k，我可以改变你的容貌。你想使用哪种？\r\n#L0#整形：#i5152027##t5152027##l\r\n#L1#整形：#i5152028##t5152028##l")
A("If you use the regular coupon, your face may transform into a random new look...do you still want to do it using #b#t5152027##k?", "如果你使用普通优惠券，你的脸可能会变成随机的新面貌...你还要使用#b#t5152027##k来做吗？")
A("I can totally transform your face into something new... how about giving us a try? For #b#t5152028##k, you can get the face of your liking...take your time in choosing the face of your preference.", "我可以完全把你的脸变成全新的样子...要不要试试？用#b#t5152028##k，你可以得到你喜欢的脸型...慢慢选择你偏好的脸型吧。")

print(f"Phase 3 done, T has {len(T)} entries")

# Now apply translations
output = []
matched = 0
for line in lines:
    if '|' not in line:
        output.append(line)
        continue
    idx = line.index('|')
    fname = line[:idx]
    text = line[idx+1:]
    if text in T:
        output.append(f"{fname}|{T[text]}")
        matched += 1
    else:
        output.append(f"{fname}|{text}")

# Write output
with open(dst, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output) + '\n')

# Verify
with open(dst, 'r', encoding='utf-8') as f:
    out_lines = f.readlines()
print(f"Output: {len(out_lines)} lines, {matched}/{len(lines)} translated")
