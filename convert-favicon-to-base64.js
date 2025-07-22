const fs = require('fs');
const path = require('path');

const faviconPath = path.join(__dirname, 'frontend', 'public', 'favicon.ico');

fs.readFile(faviconPath, (err, data) => {
  if (err) {
    console.error('Error reading favicon.ico:', err);
    process.exit(1);
  }
  const base64 = data.toString('base64');
  console.log('data:image/x-icon;base64,' + base64);
});
