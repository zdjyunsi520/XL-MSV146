## [ERR-20260531-001] apply_patch_unavailable

**Logged**: 2026-05-31T00:00:00+08:00
**Priority**: low
**Status**: pending
**Area**: config

### Summary
The current shell does not provide `apply_patch`.

### Error
```text
/usr/bin/bash: line 38: apply_patch: command not found
```

### Context
- Command attempted: `apply_patch` to update `src/main/java/server/Start.java`
- Environment: Windows bash session in `E:/github/MapleStoryV146/Service/SpiritMS`

### Suggested Fix
Use the built-in Edit/Write tools for file modifications in this workspace.

### Metadata
- Reproducible: yes
- Related Files: src/main/java/server/Start.java

---

## [ERR-20260531-002] ant_unavailable

**Logged**: 2026-05-31T00:00:00+08:00
**Priority**: medium
**Status**: pending
**Area**: config

### Summary
The current shell does not provide Apache Ant, so NetBeans `build.xml` targets cannot be run directly.

### Error
```text
/usr/bin/bash: line 1: ant: command not found
```

### Context
- Command attempted: `ant -version`
- Environment: Windows bash session in `E:/github/MapleStoryV146/Service/SpiritMS`

### Suggested Fix
Use direct `javac` checks when possible, or install/configure Ant before running NetBeans build targets.

### Metadata
- Reproducible: yes
- Related Files: build.xml, nbproject/build-impl.xml

---
