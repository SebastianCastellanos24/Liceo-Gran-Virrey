const fs = require('fs');
const path = require('path');

// Ruta al directorio de imágenes
const directoryPath = path.join(__dirname, 'public/assets/Galeria');

// Lee el contenido del directorio y agrupa por carpetas
function getFilesByFolder(dir) {
  const folders = fs.readdirSync(dir).filter(subdir => fs.statSync(path.join(dir, subdir)).isDirectory());
  const folderImages = folders.map(folder => {
    const files = fs.readdirSync(path.join(dir, folder)).filter(file => /\.(png|jpg|jpeg|gif|webp|JPG)$/.test(file));
    return {
      folderName: folder,
      images: files.map(file => `/assets/Galeria/${folder}/${file}`) // Incluye todas las imágenes de la carpeta
    };
  });

  return folderImages;
}

// Genera la lista de carpetas con todas las imágenes
const imageFolders = getFilesByFolder(directoryPath);

// Guarda la lista en un archivo JSON
fs.writeFileSync(path.join(__dirname, 'src/imageGaleryPaths.json'), JSON.stringify(imageFolders, null, 2));