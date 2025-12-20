#!/usr/bin/env python3
from PIL import Image
import os

# 图片路径
images_dir = '/home/yeti/lab_website/lab-website-template/images'
bunker_path = os.path.join(images_dir, 'bunker_pro_with_ur10.jpg')
franka_path = os.path.join(images_dir, 'franka.jpg')

# 查看原始尺寸
print("原始尺寸:")
bunker = Image.open(bunker_path)
print(f"bunker: {bunker.size[0]}x{bunker.size[1]} (宽x高)")

franka = Image.open(franka_path)
print(f"franka: {franka.size[0]}x{franka.size[1]} (宽x高)")

# 计算 franka 的宽高比
franka_ratio = franka.size[0] / franka.size[1]
print(f"\nfranka 宽高比: {franka_ratio:.3f}")

# 根据 bunker 的宽度，计算应该的高度
target_height = int(bunker.size[0] / franka_ratio)
print(f"\nbunker 应该的高度（保持与 franka 相同比例）: {target_height}")

# 从顶部裁剪
# 保持原始宽度，从底部向上取 target_height 高度
crop_from_top = bunker.size[1] - target_height
print(f"需要从顶部裁剪: {crop_from_top} 像素")

# 裁剪图片 (left, top, right, bottom)
cropped = bunker.crop((0, crop_from_top, bunker.size[0], bunker.size[1]))

# 备份原图
backup_path = os.path.join(images_dir, 'bunker_pro_with_ur10_original.jpg')
if not os.path.exists(backup_path):
    bunker.save(backup_path, quality=95)
    print(f"\n原图已备份到: {backup_path}")

# 保存裁剪后的图片
cropped.save(bunker_path, quality=95)
print(f"\n裁剪完成！新尺寸: {cropped.size[0]}x{cropped.size[1]}")
print(f"新宽高比: {cropped.size[0]/cropped.size[1]:.3f}")
