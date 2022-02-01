/**
 * Path
 * <https://nodejs.org/dist/latest-v16.x/docs/api/path.html>
 */

console.log("Abs path dir:", __dirname);
console.log("Abs path file:", __filename);

const path = require('path');

const file_wo_path = path.basename(__filename); // "03-path.js"
console.log("Filename without path:", file_wo_path);

const file_ext = path.extname(__filename); // ".js"
console.log("My extension is:", file_ext);

const parts = path.parse(__filename); // { path, name, ext }
console.log("All my 🔩:", parts);
