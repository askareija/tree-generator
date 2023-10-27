const fs = require('fs');
const path = require('path');
const mime = require('mime');

function getIcon(file) {
    if (mime.getType(file) === 'application/javascript' || path.extname(file) === '.cjs') {
        return '󰌞 ';
    }
    if (mime.getType(file) === 'application/typescript' || path.extname(file) === '.ts') {
        return '󰛦 ';
    }
    if (path.extname(file) === '.md') {
        return '󰍔 ';
    }
    if (mime.getType(file) === 'application/json') {
        return ' ';
    }
    if (mime.getType(file) === 'image/svg+xml') {
        return ' ';
    }
    if (path.extname(file) === '.vue') {
        return ' ';
    }
    if (mime.getType(file) === 'text/css') {
        return ' ';
    }
    return '📜 '; // Ikon default
}

function displayFolderStructure(folderPath, indent = '') {
    const files = fs.readdirSync(folderPath);

    files.forEach((file, index) => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        const isLast = index === files.length - 1;
        const icon = getIcon(filePath);

        if (stats.isDirectory()) {
            console.log(`${indent}${isLast ? '┗' : '┣'} 📂 ${file}`);
            displayFolderStructure(filePath, `${indent}${isLast ? '  ' : '┃ '}`);
        } else {
            console.log(`${indent}${isLast ? '┗' : '┣'} ${icon}${file}`);
        }
    });
}

// Ambil folderPath dari command line arguments
const args = process.argv.slice(2);
const folderPath = args[0] || './'; // Jika tidak ada input, gunakan direktori saat ini

console.log(`📦${path.basename(folderPath)}`);
displayFolderStructure(folderPath);
