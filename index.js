const fs = require('fs')
const convertArrayToCSVFile = require('./convertToCsv')
const addPostcode = require('./addPostCode')

let file = fs.readFileSync('rittenstaat.csv','utf8')
file = file.split('\n')
const dataWithPostcode = file.map((line) => {
    let dataArray = line.replace('\r','').split(';')
    let dataFrom = dataArray[4].toLowerCase()
    let dataTo = dataArray[5].toLowerCase()
    addPostcode(dataFrom, dataArray)
    addPostcode(dataTo, dataArray)
    return dataArray
})

convertArrayToCSVFile(dataWithPostcode)




