# 网站部署指南

本文档说明如何将 HKU CPS Lab 网站的更新推送到 GitHub Pages 并发布到 https://hkucps.github.io

## 📋 前提条件

1. 已配置好本地开发环境
2. 有 GitHub 仓库的推送权限
3. 已配置好两个远程仓库：
   - `origin`: https://github.com/HKUCPS/lab-website-template
   - `github-pages`: https://github.com/HKUCPS/hkucps.github.io

## 🚀 推送步骤

### 1. 确认本地修改

```bash
cd /home/yeti/lab_website/lab-website-template
git status
```

查看哪些文件被修改了。

### 2. 排除本地测试文件

**重要**: 本地测试时修改的以下文件**不要**提交：
- `Gemfile` (如果注释了 html-proofer)
- `_plugins/misc.rb` (如果注释了 html-proofer)
- `Gemfile.lock` (已在 .gitignore 中)

如果这些文件被修改了，使用以下命令恢复：

```bash
git restore Gemfile _plugins/misc.rb
```

### 3. 添加要提交的文件

```bash
# 查看修改的文件
git status

# 添加所有内容文件（网页、图片、配置等）
git add .

# 或者单独添加特定文件
git add index.md images/ contact/ robots/ research/ projects/ team/
```

### 4. 提交更改

```bash
git commit -m "描述你的更改内容"
```

提交信息示例：
- `"Update homepage content and lab photos"`
- `"Add new robot images to robots page"`
- `"Update contact information"`

### 5. 推送到两个仓库

#### 推送到源代码仓库（可选）

```bash
git push origin Jing_rush
```

这会将代码推送到 `lab-website-template` 仓库备份。

#### 推送到 GitHub Pages 仓库（发布网站）

```bash
git push github-pages Jing_rush:main --force
```

**说明**:
- `Jing_rush`: 本地分支名
- `main`: 远程分支名
- `--force`: 强制推送（覆盖远程冲突）

### 6. 等待构建完成

1. 访问 https://github.com/HKUCPS/hkucps.github.io/actions
2. 查看最新的 workflow 运行状态
3. 等待构建完成（通常需要 1-2 分钟）
4. 看到绿色 ✓ 表示成功

### 7. 验证网站更新

1. 访问 https://hkucps.github.io
2. 使用 **无痕模式** 或 **清除浏览器缓存**
3. 强制刷新：`Ctrl + F5` 或 `Ctrl + Shift + R`

如果看不到更新，等待 5-10 分钟让 CDN 缓存刷新。

## 🔍 常见问题

### 问题 1: 推送被拒绝（rejected）

**错误信息**:
```
! [rejected]        Jing_rush -> main (fetch first)
error: failed to push some refs
```

**解决方案**:
使用 `--force` 强制推送：
```bash
git push github-pages Jing_rush:main --force
```

### 问题 2: GitHub Actions 构建失败

**可能原因**:
1. html-proofer 依赖问题
2. Jekyll 语法错误
3. 图片路径错误

**解决方案**:
1. 查看 Actions 页面的详细日志
2. 检查错误信息
3. 修复问题后重新推送

### 问题 3: 网站显示旧内容

**可能原因**:
1. 浏览器缓存
2. CDN 缓存未更新
3. 构建失败但没注意到

**解决方案**:
1. 用无痕模式打开网站
2. 清除浏览器缓存（`Ctrl + Shift + Delete`）
3. 强制刷新（`Ctrl + F5`）
4. 确认 GitHub Actions 构建成功
5. 等待 5-10 分钟

### 问题 4: 本地测试文件被意外提交

**解决方案**:
提交前恢复这些文件：
```bash
git restore Gemfile _plugins/misc.rb
```

或者提交后撤销：
```bash
git reset HEAD~1  # 撤销最后一次提交
git restore Gemfile _plugins/misc.rb
git add .
git commit -m "正确的提交信息"
```

## 📝 完整工作流示例

```bash
# 1. 进入项目目录
cd /home/yeti/lab_website/lab-website-template

# 2. 检查当前状态
git status

# 3. 恢复本地测试文件（如果有的话）
git restore Gemfile _plugins/misc.rb

# 4. 添加所有内容修改
git add .

# 5. 提交修改
git commit -m "Update website content: add new robot images"

# 6. 推送到 GitHub Pages（发布网站）
git push github-pages Jing_rush:main --force

# 7. （可选）推送到源代码仓库备份
git push origin Jing_rush

# 8. 验证
# 访问 https://github.com/HKUCPS/hkucps.github.io/actions 查看构建
# 构建成功后访问 https://hkucps.github.io 查看网站
```

## 🛠️ 本地测试

在推送前，建议先本地测试：

```bash
# 启动本地服务器
bash -c "cd /home/yeti/lab_website/lab-website-template && /home/yeti/.local/share/gem/ruby/3.0.0/bin/bundle exec jekyll serve --livereload --port 4001"

# 访问 http://127.0.0.1:4001 查看效果
```

## 📌 重要提醒

1. ✅ **每次推送前确认排除本地测试文件**
2. ✅ **推送后检查 GitHub Actions 构建状态**
3. ✅ **用无痕模式验证网站更新**
4. ✅ **重要更新前先备份到 origin 仓库**
5. ❌ **不要提交 Gemfile.lock（已在 .gitignore 中）**
6. ❌ **不要提交本地依赖目录 .bundle/ 和 vendor/**

## 🔗 相关链接

- 网站地址: https://hkucps.github.io
- Actions 页面: https://github.com/HKUCPS/hkucps.github.io/actions
- 源代码仓库: https://github.com/HKUCPS/lab-website-template
- 部署仓库: https://github.com/HKUCPS/hkucps.github.io

## 📞 联系方式

如有问题，请联系: hkucpslab@gmail.com
