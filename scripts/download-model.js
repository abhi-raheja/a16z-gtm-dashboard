const https = require('https');
const fs = require('fs');
const path = require('path');

const modelUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AnimatedMorphCube/glTF/AnimatedMorphCube.gltf';
const outputPath = path.join(__dirname, '../public/models/goat.glb');

https.get(modelUrl, (response) => {
  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Download completed');
  });
}).on('error', (err) => {
  console.error('Error downloading file:', err);
});
