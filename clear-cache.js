// Script to clear development server cache
const fs = require('fs');
const path = require('path');

const clearCache = () => {
  const cacheDir = path.join(__dirname, 'node_modules', '.cache');
  
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('✅ Cache cleared successfully');
  } else {
    console.log('ℹ️ No cache directory found');
  }
};

clearCache();
