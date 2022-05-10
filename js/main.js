const drillLogNumbers = (groundElevation, drillDepthinFeet, extraDrillDepthInInches, stickUpLength, drivingDepth) => {
    let totalDepth = (drillDepthinFeet + (extraDrillDepthInInches / 12) - stickUpLength).toFixed(1);

    let bottomElevation = (groundElevation - totalDepth).toFixed(1);

    let casingBottomElevation = (groundElevation - drivingDepth).toFixed(1);

    let rockSocketLength = (casingBottomElevation - bottomElevation).toFixed(1);

    console.log(`Your total depth is ${totalDepth}. The casing bottom elevation is ${casingBottomElevation}. The bottom elevation is ${bottomElevation}. Finally, your rock socket length is ${rockSocketLength}. Hope this helps.`);
}


// //first attempt
// let emptyStr = '';
// let returnEveryThirdLetter = (str) => {
//     for (let i = 0; i < str.length; i++){
//         if (i % 3 === 0){
//             emptyStr += str[i - 1];
//         }
//     }
// }
// let slicedEmptyStr = emptyStr.slice(9);
// returnEveryThirdLetter('iamyourlyftdriver');
// console.log(slicedEmptyStr);

// //second attempt
// let newArr = '';
// let returnTheThirdLetter = (str) => {
//     str.split('').forEach( (element, index) => {
//         if (index % 3 === 0){
//             newArr.push(str[index - 1])
//         }
//     })
//     newArr.join('');
// }
// newString = returnTheThirdLetter('iamyourlyftdriver');

// //before making it into the final function
// let str = 'iamyourlyftdriver';
// let thirdLettersOnly = str.split('').filter( (element, index) => ((index + 1) % 3 === 0)).join('');

// final 

let findTheThirdLetter = (str) => str.split('').filter( (element, index) => ((index + 1) % 3 === 0)).join('');



