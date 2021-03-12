const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Custom Hojita');



const createCustomExcel = (data) => {
    return new Promise((resolve, reject) => {
        console.log(data);
        const userData = [{
            id: data.id,
            nombres: data.nombres,
            apellidos: data.apellidos,
            email: data.email,
            profile_image: data.profile_image
        }]
        console.log(userData)
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
        userData.forEach(record => {
            let columnIndex = 1;
            Object.keys(record).forEach(columnName => {
                ws.cell(rowIndex, columnIndex++)
                    .string(record[columnName])
                    console.log(record[columnName])
            });
            rowIndex++;
        });
        console.log('object')
        wb.write('TeacherData.xlsx');
        resolve({message:'Listo!'})
    });

}

module.exports = {
    createCustomExcel
}