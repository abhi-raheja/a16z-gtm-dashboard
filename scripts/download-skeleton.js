const https = require('https');
const fs = require('fs');
const path = require('path');

// Using a pre-rigged dancing skeleton model from Sketchfab
const modelUrl = 'https://sketchfab.com/models/d08c11b67c07480c8916320e3a6b6697/download';
const outputPath = path.join(__dirname, '../public/models/dancing-skeleton.glb');

https.get(modelUrl, (response) => {
  if (response.statusCode === 302) {
    // Handle redirect
    https.get(response.headers.location, (redirectResponse) => {
      const fileStream = fs.createWriteStream(outputPath);
      redirectResponse.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Download completed');
      });
    });
  } else {
    const fileStream = fs.createWriteStream(outputPath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Download completed');
    });
  }
}).on('error', (err) => {
  console.error('Error downloading file:', err);
});
