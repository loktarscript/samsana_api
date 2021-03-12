const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Custom Hojita');
const reportesStore = require('./store');


const createCustomExcel = () => {
    return new Promise((resolve, reject) => {
        reportesStore.userReport()
            .then(userData => {
                //Creamos la cabecera del archivo Excel
                const headingColumnNames = [
                    "Id",
                    "Nombres",
                    "Apellidos",
                    "Email",
                    "Profile Route"
                ]
                //Escribir la cabecera del archivo Excel
                let headingColumnIndex = 1;
                headingColumnNames.forEach(heading => {
                    ws.cell(1, headingColumnIndex++)
                        .string(heading)
                });
                //Escribir la data en el archivo Excel
                let rowIndex = 2;
                //Creamos un objeto local para escribir la información sin problemas de parseo.
                //Escribimos en las celdas según su posición determinada por las coordenadas.
                userData.body.forEach((record, i) => {
                    let data = {
                        id: record.id,
                        nombres: record.nombres,
                        apellidos: record.apellidos,
                        email: record.email,
                        profile_image: record.profile_image
                    }
                    let columnIndex = 1;
                    ws.cell(rowIndex, columnIndex++).string(data.id)
                    ws.cell(rowIndex, columnIndex++).string(data.nombres)
                    ws.cell(rowIndex, columnIndex++).string(data.apellidos)
                    ws.cell(rowIndex, columnIndex++).string(data.email)
                    ws.cell(rowIndex, columnIndex++).string(data.profile_image)
                    rowIndex++;
                })
                //Escribimos y validamos que los cambios en el workBook se hayan grabado sin problemas
                let date = Date.now();
                wb.write(`./reports/ejemplo-${date}.xlsx`, (err, stats) => {
                    if (err) {
                        // console.error(err);
                        reject({ error: err })
                    } else {
                        // console.log(stats);
                        resolve({ message: 'Reporte generado!' }) // Prints out an instance of a node.js fs.Stats object
                    }
                });
            })
            .catch(err => {
                reject(err);
            })
    });
}

module.exports = {
    createCustomExcel
}