import os, re

os.chdir(r'E:\github\MapleStoryV146\Service\SpiritMS\scripts\npc')
files = sorted([f for f in os.listdir('.') if re.match(r'^\d+\.js$', f)], key=lambda x: int(x.replace('.js','')))

print('=== 1: action nested in start ===')
for f in files:
    with open(f, encoding='utf-8', errors='ignore') as fh:
        lines = fh.readlines()
    in_start = False
    depth = 0
    for i, line in enumerate(lines):
        if 'function start' in line:
            in_start = True
            depth = 0
        if in_start:
            for c in line:
                if c == '{': depth += 1
                if c == '}': depth -= 1
            if depth <= 0 and in_start and i > 0:
                in_start = False
            if 'function action' in line and in_start:
                print('  %s: action nested (line %d)' % (f, i+1))
                break

print()
print('=== 2: consecutive send calls ===')
for f in files:
    with open(f, encoding='utf-8', errors='ignore') as fh:
        lines = fh.readlines()
    prev_send = -10
    prev_name = ''
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('//') or stripped.startswith('/*') or stripped.startswith('*'):
            continue
        m = re.search(r'cm\.(send\w+)\(', stripped)
        if m:
            cur = i
            if cur - prev_send <= 2 and prev_name:
                print('  %s: line %d %s -> line %d %s' % (f, prev_send+1, prev_name, cur+1, m.group(1)))
            prev_send = cur
            prev_name = m.group(1)

print()
print('=== 3: has send but no dispose ===')
for f in files:
    with open(f, encoding='utf-8', errors='ignore') as fh:
        content = fh.read()
    if re.search(r'cm\.send', content) and not re.search(r'cm\.(dispose|safeDispose)', content):
        print('  ' + f)

print()
print('=== 4: has start but no action ===')
for f in files:
    with open(f, encoding='utf-8', errors='ignore') as fh:
        content = fh.read()
    if 'function start' in content and 'function action' not in content:
        print('  ' + f)
