const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Custom Hojita');
const reportesStore = require('./store');


const createCustomExcel = () => {
    return new Promise((resolve, reject) => {
        reportesStore.userReport()
        .then(userData =>{
            console.log(userData);
            const headingColumnNames = [
                "Id",
                "Nombres",
                "Apellidos",
                "Email",
                "Profile Route"
            ]
    
            //Write Column Title in Excel file
            let headingColumnIndex = 1;
            headingColumnNames.forEach(heading => {
                ws.cell(1, headingColumnIndex++)
                    .string(heading)
            });
            //Write Data in Excel file

            let rowIndex = 2;
            userData.body.forEach((record, i) =>{
                // console.log(record);
                let data = {
                    id : record.id,
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
                    // Object.keys(userData[i]).map(function(k){console.log(record[k])})
                    
                rowIndex++;
            })
            // wb.write('TeacherData.xlsx');
            let date = Date.now();
            wb.write(`./reports/ejemplo-${date}.xlsx`);
            // wb.write()
            resolve({message:'Listo!'})
        })
        .catch(err =>{
            reject(err);
        })
    });

}

module.exports = {
    createCustomExcel
}