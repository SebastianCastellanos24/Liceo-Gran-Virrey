const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/assets/Swiper');
const files = fs.readdirSync(directoryPath);

const imageFiles = files.filter(file => /\.(png|jpg|jpeg|gif|webp|JPG)$/.test(file))
    .map(file => `/assets/Swiper/${file}`);

fs.writeFileSync(path.join(__dirname, 'src/imagePaths.json'), JSON.stringify(imageFiles, null, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const directoryPath2 = path.join(__dirname, 'public/assets/PlantaFisica');

// Lee el contenido del directorio y agrupa por carpetas
function getFilesByFolder2(dir) {
    const folders = fs.readdirSync(dir).filter(subdir => fs.statSync(path.join(dir, subdir)).isDirectory());
    const folderImages = folders.map(folder => {
        const files = fs.readdirSync(path.join(dir, folder)).filter(file => /\.(png|jpg|jpeg|gif|webp|JPG)$/.test(file));
        return {
            folderName: folder,
            images: files.map(file => `/assets/PlantaFisica/${folder}/${file}`) // Incluye todas las imágenes de la carpeta
        };
    });

    return folderImages;
}

// Genera la lista de carpetas con todas las imágenes
const imageFolders = getFilesByFolder2(directoryPath2);

// Guarda la lista en un archivo JSON
fs.writeFileSync(path.join(__dirname, 'src/imagePlantaFisica.json'), JSON.stringify(imageFolders, null, 2));