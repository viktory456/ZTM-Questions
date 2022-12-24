//Question1

let firstArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; 
let secondArray = [1, "2", "3", 2, '2', 1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, '3', '591', '1'] 

function answer (someArray) { 
    someArray.sort((a, b) => a - b)
    let result = [];
    let count = 0;

    for(let i = 0; i < someArray.length; i++){
        if(someArray[i] == someArray[i+1]){
            count++;
        }else {
            if(count === 0){
                result.push(someArray[i])
            } else{
                count++;
                result.push(new Array(count).fill(someArray[i]))
                count = 0;             
            }         
        }     
    }     return result; 
} 
// console.log(answer(firstArray));

function answerBonus (someIncomingArray) {
    let arrayStrings = [];
    let arrayNumbers = [];
    for (let i = 0; i < someIncomingArray.length; i++){
        if(typeof someIncomingArray[i] == 'string'){
            arrayStrings.push(someIncomingArray[i])
        } else if (typeof someIncomingArray[i] == 'number'){
            arrayNumbers.push(someIncomingArray[i]);         
        }     
    }     
    arrayStrings.sort((a, b) => a - b)
    arrayNumbers.sort((a, b) => a - b)
    let result = [];
    let resultStrings = [];
    let resultNumbers = [];
    let count = 0;
    for(let i = 0; i < arrayStrings.length; i++) {
        if(arrayStrings[i] == arrayStrings[i+1]){
            count++;
        } else {
            if(count === 0){
                resultStrings.push(arrayStrings[i])
            } else {       
                count++; 
                resultStrings.push(new Array(count).fill(arrayStrings[i]));
                count = 0;
            }
        }     
    }       result.push(resultStrings);

    for(let i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] == arrayNumbers[i+1]){
        count++;
    } else {
        if(count === 0){
            resultNumbers.push(arrayNumbers[i])
        } else {       
            count++; 
            resultNumbers.push(new Array(count).fill(arrayNumbers[i]));
            count = 0;
        }
    }     
    }       result.push(resultNumbers);
    return result;
}
// console.log(answerBonus(secondArray));

/*Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3] */

function answer2(array, number){
    for(let i=0; i<array.length; i++){
        for(let k=0; k<array[i]; k++){
            if(array[i] + array[k] === number){
                return [array[i], array[k]]
            } 
        }
    }
    return 'no matches'
}
// console.log(answer2(firstArray, 21));

/*Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.*/

//#fcba03 - HEX
//252, 186, 3 - RGB

function answer3(input){
    let copyOfInput = input;
    let hexToRGB = '';
    let rgbToHEX = '';
    let output = '';
    let firstValue = copyOfInput.split('').splice(0,1);
    if(firstValue[0] === '#'){
        hexToRGB = copyOfInput.split('').splice(1,6).join('');
        let rValue = hexToRGB.split('').splice(0,2).join('');
        let gValue = hexToRGB.split('').splice(2,2).join('');
        let bValue = hexToRGB.split('').splice(4,2).join('');
        var redConverted = convertedToRGB(rValue);
        var greenConverted = convertedToRGB(gValue);
        var blueConverted = convertedToRGB(bValue);
        function convertedToRGB(hex){
            let splittedHex = hex.split('');
            if(splittedHex[0] === '0'){
                splittedHex = splittedHex[1];
                if(Number.isInteger(Number(splittedHex)) == true){
                    splittedHex = Number(splittedHex);
                } else{
                    splittedHex = switchSplittedHEX(splittedHex);
                }
            } else {
                if(Number.isInteger(Number(splittedHex[0])) == true && Number.isInteger(Number(splittedHex[1])) == true){
                    splittedHex = Number(splittedHex[0])*16 + Number(splittedHex[1])
                } else if(Number.isInteger(Number(splittedHex[0])) == false && Number.isInteger(Number(splittedHex[1])) == true){
                    splittedHex = switchSplittedHEX(splittedHex[0])*16 + Number(splittedHex[1])
                } else if(Number.isInteger(Number(splittedHex[0])) == true && Number.isInteger(Number(splittedHex[1])) == false){
                    splittedHex = Number(splittedHex[0])*16 + switchSplittedHEX(splittedHex[1])
                } else {
                    splittedHex = switchSplittedHEX(splittedHex[0])*16 + switchSplittedHEX(splittedHex[1])
                }
            }
            function switchSplittedHEX(splittedHex){
                switch(splittedHex.toLowerCase()){
                    case 'a':
                        splittedHex = 10;
                        break;
                    case 'b':
                        splittedHex = 11;
                        break;
                    case 'c':
                        splittedHex = 12;
                        break;
                    case 'd':
                        splittedHex = 13;
                        break;
                    case 'e':
                        splittedHex = 14;
                        break;
                    case 'f':
                        splittedHex = 15;
                        break;          
                }
                return splittedHex;
            }
            return splittedHex;
        }
        output = `(${redConverted}, ${greenConverted}, ${blueConverted})`;
    } else {
        rgbToHEX = input.split(',');
        let arrayOfValues = rgbToHEX.map(elem => elem.trim())
        let rValue = arrayOfValues[0];
        let gValue = arrayOfValues[1];
        let bValue = arrayOfValues[2];
        let finalHEX = '';
        var redRGBConverted = convertedToHEX(rValue);
        var greenRGBConverted = convertedToHEX(gValue);
        var blueRGBConverted = convertedToHEX(bValue);
        function convertedToHEX(rgb){
            let convertedToNumber = Number(rgb);
            if(convertedToNumber >= 0 && convertedToNumber <= 9){
                finalHEX = String(0)+String(convertedToNumber);
            } else if(convertedToNumber >= 10 && convertedToNumber <= 15){
                finalHEX = switchSplittedRGB10to15(convertedToNumber);
            } else {
                let firstDigit = Math.floor(convertedToNumber / 16);
                if(firstDigit>9){
                    firstDigit = switchSplittedRGB(firstDigit);
                }
                let secondDigit = convertedToNumber % 16;
                if(secondDigit>9){
                    secondDigit = switchSplittedRGB(secondDigit);
                }
                finalHEX = String(firstDigit)+String(secondDigit);
            }
            return finalHEX;
        }
        function switchSplittedRGB10to15(splittedRGB){
            switch(splittedRGB){
                case 10:
                    splittedRGB = '0a';
                    break;
                case 11:
                    splittedRGB = '0b';
                    break;
                case 12:
                    splittedRGB = '0c';
                    break;
                case 13:
                    splittedRGB = '0d';
                    break;
                case 14:
                    splittedRGB = '0e';
                    break;
                case 15:
                    splittedRGB = '0f';
                    break;          
            }
         return splittedRGB;
        }
        function switchSplittedRGB(splittedRGB){
            switch(splittedRGB){
                case 10:
                    splittedRGB = 'a';
                    break;
                case 11:
                    splittedRGB = 'b';
                    break;
                case 12:
                    splittedRGB = 'c';
                    break;
                case 13:
                    splittedRGB = 'd';
                    break;
                case 14:
                    splittedRGB = 'e';
                    break;
                case 15:
                    splittedRGB = 'f';
                    break;          
            }
         return splittedRGB;
        }
        output = `#${redRGBConverted}${greenRGBConverted}${blueRGBConverted}`;
    }
    return output;
}

console.log(answer3('49, 229, 93'));



