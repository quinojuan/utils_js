const fs = require("fs");
const path = require("path");

function copyDirectory(source, destination) {
  // Crea el directorio de destino si no existe
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  // Lee los archivos en el directorio fuente
  const files = fs.readdirSync(source);

  // Itera sobre los archivos y directorios
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const destinationPath = path.join(destination, file);

    // Verifica si es un directorio
    if (fs.statSync(sourcePath).isDirectory()) {
      // Si es un directorio, llama recursivamente a la función para copiar el contenido
      copyDirectory(sourcePath, destinationPath);
    } else {
      // Si es un archivo, cópialo al directorio de destino
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

// Rutas de origen y destino
const sourcePath = "../../Familia Quino/Desktop/folderOne";
const destinationPath = "../../Familia Quino/Desktop/folderTwo";

// Llamada a la función para copiar el directorio
copyDirectory(sourcePath, destinationPath);

console.log("Directory successfully copied!");
