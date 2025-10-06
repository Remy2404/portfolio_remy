import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Ensure public directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const optimizeImage = async (inputPath, outputPath, width, quality = 80) => {
  try {
    await sharp(inputPath)
      .resize(width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = await sharp(outputPath).metadata();
    console.log(`✅ Created: ${outputPath} (${(stats.size / 1024).toFixed(2)} KB)`);
    return true;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
};

const optimizeImages = async () => {
  console.log('🚀 Starting image optimization...\n');

  const images = [
    {
      input: join(publicDir, 'profile.png'),
      outputs: [
        { path: join(publicDir, 'profile-small.webp'), width: 150, quality: 85 },
        { path: join(publicDir, 'profile-medium.webp'), width: 300, quality: 85 },
        { path: join(publicDir, 'profile.webp'), width: 500, quality: 85 }
      ]
    },
    {
      input: join(publicDir, 'gojo.png'),
      outputs: [
        { path: join(publicDir, 'gojo-mobile.webp'), width: 768, quality: 75 },
        { path: join(publicDir, 'gojo-tablet.webp'), width: 1024, quality: 75 },
        { path: join(publicDir, 'gojo-desktop.webp'), width: 1920, quality: 75 },
        { path: join(publicDir, 'gojo.webp'), width: 1920, quality: 75 }
      ]
    }
  ];

  let totalSavings = 0;

  for (const image of images) {
    if (!existsSync(image.input)) {
      console.warn(`⚠️  Warning: ${image.input} not found, skipping...`);
      continue;
    }

    const originalStats = await sharp(image.input).metadata();
    const originalSize = originalStats.size / 1024;
    console.log(`\n📸 Processing: ${image.input}`);
    console.log(`   Original size: ${originalSize.toFixed(2)} KB`);
    console.log(`   Original dimensions: ${originalStats.width}x${originalStats.height}`);

    for (const output of image.outputs) {
      const success = await optimizeImage(
        image.input,
        output.path,
        output.width,
        output.quality
      );

      if (success) {
        const newStats = await sharp(output.path).metadata();
        const newSize = newStats.size / 1024;
        const savings = originalSize - newSize;
        totalSavings += savings;
        console.log(`   💾 Saved: ${savings.toFixed(2)} KB`);
      }
    }
  }

  console.log(`\n✨ Optimization complete!`);
  console.log(`💰 Total savings: ${totalSavings.toFixed(2)} KB (${(totalSavings / 1024).toFixed(2)} MB)`);
};

optimizeImages().catch(console.error);
