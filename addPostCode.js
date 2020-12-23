function addPostcode(array, dataArray){
    switch (array) {
        case 'thuis':
            dataArray.push('3315 MT')
            break;
        case 'avans den bosch kunst':
            dataArray.push('5223 AL')
            break;
        case 'avans owb':
            dataArray.push('5223 DJ')
            break;
        case 'avans trz':
            dataArray.push('5232 JE')
            break;
        case 'avans trz hervenplein':
            dataArray.push('5232 JE')
            break;
        case 'goodzo':
            dataArray.push('2715 CA')
            break;
        case 'goodzo hq':
            dataArray.push('2715 CA')
            break;
        case 'gemeente den haag zilverstraat':
            dataArray.push('2544 EJ')
            break;
        case 'scol leiden':
            dataArray.push('2334 CZ')
            break;
        case 'avans eindhoven bic':
            dataArray.push('5657 BX')
            break;
            
        default:
            dataArray.push('-')
            break;
                
    }
}
module.exports = addPostcode