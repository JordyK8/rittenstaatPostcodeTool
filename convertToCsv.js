const { convertArrayToCSV } = require('convert-array-to-csv');
const fs = require('fs')

async function convertArrayToCSVFile(array){
    try{
    const result = await convertArrayToCSV(array);
    fs.writeFileSync('newFile.csv', result)
    console.log('Success, find your file in root folder and smile:), Insert the file into excel and be happy.');
    } catch(e){
        console.log(e);
    }
}
module.exports = convertArrayToCSVFile