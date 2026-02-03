# PWA 图标配置说明

## 需要的图标文件

为了完整的PWA体验，请在 `public/` 目录添加以下图标文件：

### 必需图标

1. **icon-192x192.png** (192x192像素)
   - 用途: Android主屏幕图标
   - 建议: 简洁的Logo，无边框

2. **icon-512x512.png** (512x512像素)
   - 用途: Android主屏幕图标（高分辨率）
   - 建议: 简洁的Logo，无边框

### 可选图标

3. **apple-touch-icon.png** (180x180像素)
   - 用途: iOS设备主屏幕图标
   - 建议: 圆角设计

4. **favicon.svg** (可缩放矢量图)
   - 用途: 网站favicon
   - 建议: 简洁的Logo

5. **favicon.ico** (32x32像素)
   - 用途: 传统浏览器标签图标
   - 建议: 简洁的Logo

## 图标设计建议

### 品牌色
- **主色:** #0066FF (电光蓝)
- **背景色:** #000000 (黑色)

### 设计元素
- 使用 "A" 或 "AE" 字母组合
- 可添加赛博朋克/科技感元素（六边形、电路板纹理等）
- 保持简洁，在小尺寸下依然清晰

### 创建工具

1. **在线工具**
   - [Figma](https://www.figma.com/) - 专业设计工具
   - [Canva](https://www.canva.com/) - 快速设计
   - [Photopea](https://www.photopea.com/) - 在线PS替代品

2. **图标生成器**
   - [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
   - [RealFaviconGenerator](https://realfavicongenerator.net/)

## 快速开始

1. 在 `public/` 目录创建图标文件
2. 重新构建项目: `npm run build`
3. 测试PWA功能

## 测试PWA

1. 启动开发服务器: `npm run preview`
2. 在Chrome DevTools中:
   - 打开 Application 标签
   - 检查 Manifest
   - 检查 Service Worker
   - 检查 "Add to Home Screen" 功能

## 自动生成图标（推荐）

使用以下命令自动生成所有尺寸的图标：

```bash
# 需要先安装 sharp
npm install -D sharp

# 然后运行脚本
node scripts/generate-icons.js
```

参见 `scripts/generate-icons.js` 文件。
