import re
import os

portal_dir = "E:/github/MapleStoryV146/Service/SpiritMS/scripts/portal"
output_file = "E:/github/MapleStoryV146/Service/SpiritMS/scripts/portal/tran/extract_en.txt"

all_files = sorted([f for f in os.listdir(portal_dir) if f.endswith('.js')])

start_idx = all_files.index('MCrevive1.js')
end_idx = all_files.index('zeroTemple_0.js')
selected = all_files[start_idx:end_idx+1]

def has_english_letters(s):
    return bool(re.search(r'[a-zA-Z]', s))

def is_filepath(s):
    return bool(re.search(r'[/\\]', s)) and bool(re.search(r'\.[a-z]{2,4}', s))

def is_effect_directive(s):
    return s.strip().startswith('Effect/')

def should_translate(inner):
    if not inner.strip():
        return False
    if is_effect_directive(inner):
        return False
    if is_filepath(inner):
        return False
    if re.match(r'^[0-9]+$', inner.strip()):
        return False
    if not has_english_letters(inner):
        return False

    # Skip strings with garbled non-ASCII characters (encoding errors from latin-1 reading of Korean text)
    non_ascii = sum(1 for c in inner if ord(c) > 127)
    alpha_count = sum(1 for c in inner if c.isalpha() and ord(c) < 128)
    if non_ascii > 3 and alpha_count < non_ascii:
        return False

    # Skip key=value data patterns (e.g., "enter=00000", "enter=")
    if re.match(r'^[a-zA-Z_]+=.*$', inner):
        return False

    # Skip underscore-prefixed identifiers (e.g., "_Exit")
    if re.match(r'^_[A-Za-z_]+$', inner):
        return False

    # Skip strings that look like variable names, property names, identifiers
    if re.match(r'^[a-z_]+$', inner):
        return False
    if re.match(r'^[A-Z_]+$', inner):
        return False
    if len(inner) <= 2:
        return False

    # Check for translatable characteristics
    has_format_codes = bool(re.search(r'#[ebknlrgwycp]', inner))
    has_newline = r'\r' in inner or r'\n' in inner
    has_spaces = ' ' in inner
    word_count = len(re.findall(r'[a-zA-Z]+', inner))

    if has_format_codes or has_newline:
        return True
    if word_count >= 2 and has_spaces:
        return True

    # Single word messages
    common_words = ['error', 'warning', 'success', 'fail', 'cancel', 'welcome',
                    'congratulations', 'sorry', 'please', 'thank', 'ready',
                    'enter', 'exit', 'start', 'close', 'next', 'back']
    inner_lower = inner.lower().strip()
    for w in common_words:
        if w in inner_lower:
            return True

    return False

def is_user_visible_function(line):
    """Check if the line contains a user-visible message function"""
    visible_funcs = [
        'dropMessage', 'playerMessage', 'showInfo', 'showInstruction',
        'showQuestMsg', 'showPrevQuestInfo', 'showQuestInfo',
        '.say(', 'playerMessage', 'showText', 'showWzEffect',
        'showOkPopup', 'message(', 'showMessage', 'showBizPopup',
        'showAvatarOriented', 'askYesNo', 'askAccept', 'askText',
        'askNumber', 'askMenu', 'askAvatar', 'askSpeed',
        'gainItem', 'openNpc', 'warp(', 'alert',
    ]
    for func in visible_funcs:
        if func in line:
            return True
    return False

def is_skip_function(line):
    """Check if the line contains a function that uses non-user-visible strings"""
    skip_funcs = [
        'setProperty', 'updateInfoQuest', 'getInfoQuest', 'forceStartQuest',
        'forceCompleteQuest', 'getQuestRecord', 'getEventManager',
        'startInstance', 'getMapId', 'spawnMonster', 'removePlayer',
        'setVariable', 'getVar', 'setVar', 'getEventInstance',
    ]
    for func in skip_funcs:
        if func in line:
            return True
    return False

def extract_strings(content):
    results = []
    lines = content.split('\n')
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('//') or stripped.startswith('/*') or stripped.startswith('*'):
            continue

        # Determine if this line contains user-visible message functions
        is_visible = is_user_visible_function(line)
        is_skip = is_skip_function(line)

        # If the line is in a skip function, don't extract
        if is_skip and not is_visible:
            continue

        dq_pattern = r'"((?:[^"\\]|\\.)*)"'
        sq_pattern = r"'((?:[^'\\]|\\.)*)'"

        def check_and_add(inner):
            if should_translate(inner):
                results.append(inner)
            elif is_visible and has_english_letters(inner) and len(inner) > 3 and ' ' in inner:
                non_ascii = sum(1 for c in inner if ord(c) > 127)
                if non_ascii <= 3:
                    results.append(inner)

        # First extract double-quoted strings
        for m in re.finditer(dq_pattern, line):
            inner = m.group(1)
            check_and_add(inner)

        # Remove double-quoted strings from the line before extracting single-quoted strings
        # This prevents single quotes inside double-quoted strings (apostrophes) from being matched
        line_no_dq = re.sub(dq_pattern, '""', line)

        for m in re.finditer(sq_pattern, line_no_dq):
            inner = m.group(1)
            check_and_add(inner)

    return results

all_results = []

for filename in selected:
    filepath = os.path.join(portal_dir, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        try:
            with open(filepath, 'r', encoding='latin-1') as f:
                content = f.read()
        except:
            continue

    strings = extract_strings(content)
    for s in strings:
        all_results.append((filename, s))

with open(output_file, 'w', encoding='utf-8') as f:
    for filename, text in all_results:
        f.write(f"{filename}|{text}\n")

print(f"Done. Total entries: {len(all_results)}")
