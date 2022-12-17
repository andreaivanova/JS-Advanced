function generateReport() {
    let boxes = Array.from(document.getElementsByTagName('input')).filter(x => x.checked);




    let obj = {
        employee: 0,
        deparment: 1,
        status: 2,
        dateHired: 3,
        benefits: 4,
        salary: 5,
        rating: 6,

    }

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let arr = [];
    for (let row of tableRows) {
        let output = {};
        for (const el of boxes) {
            let column = obj[el.name];
            output[el.name] = Array.from(row.children)[column].textContent;
            
        }
        arr.push(output)
    }
    
    arr = JSON.stringify(arr);
    document.getElementById('output').value =  arr;
    
    
}



// // 
// //console.log(Array.from(row.children)[column].textContent)
// //console.log(tableElements.children[obj[boxes.parentElement]]);
// // console.log(boxes[0].parentElement);


//         // for (let el of boxes) {
//         //     let column = obj[el.name];
    
//         //     for (let row of tableRows) {
//         //        console.log(row.children[column]); 
//         //     }
//         // }


//         function generateReport() {
//             let inputElements = Array.from(document.getElementsByTagName('input'));
         
//             const resultArr = [];
//             let tableRows = Array.from(document.getElementsByTagName('tr'));
//             const checkedCols = [];
         
//             for (let i = 0; i < tableRows.length; i++) {
//                 const row = tableRows[i];
//                 const obj = {};
//                 for (let y = 0; y < row.children.length; y++) {
//                     const element = row.children[y];
//                     if (i == 0) {
//                         if (element.children[0].checked) {
//                             checkedCols.push(y);
//                         }
//                         continue;
//                     }
//                     if (checkedCols.includes(y)) {
//                         let propertyName = inputElements[y].name;
//                         obj[propertyName] = element.textContent;
//                     }
//                 }
//                 if (i !== 0) {
//                     resultArr.push(obj);
//                 }
//             }
//             document.getElementById('output').value = JSON.stringify(resultArr);
//         }