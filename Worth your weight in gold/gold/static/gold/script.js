var goldPrice;
var goldPriceFormatted;
var thedata;
let goldPriceHolder = document.createElement('p');
fetch('https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD?api_key=ZZ2rk1uxDYz1FgHsyCh2')
.then(response => response.json())
.then(data => {
    thedata = data;
    goldPrice = data.dataset.data[0][1];
    goldPriceFormatted = goldPrice.toFixed(2);
    document.getElementById('gph').textContent = "The current price of Gold per Troy Ounce is: $" + goldPriceFormatted;
});

// let num1 = parseFloat(document.getElementById('input1').value);
// let conversions = document.getElementById('conversions').value;
let btn = document.getElementById('calculate-btn')

btn.addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let conversions = document.getElementById('conversions').value;
    fetch(`http://localhost:8000/unitconv/convert?from=${conversions}&to=t_oz&value=${num1}`)
    .then(response => response.json())
    .then(data => {
        finalAmount = data.value * goldPrice;
        finalAmountFormatted = finalAmount.toFixed(2);
        let answers = document.createElement('div');
        answers.setAttribute('class', 'green stuff-box')
        let answer = document.createElement('p');
        answers.onclick = function() {
            this.remove();
        
            }
        const time = new Date().toLocaleTimeString();
        answer.textContent = "Time: " + time + " The value of your " + num1 + " " + conversions + " of gold is $" + finalAmountFormatted;
        answers.appendChild(answer);

        document.getElementById('attacher').insertBefore(answers, document.getElementById('attacher').firstChild);
    
    })
    })
    



// function calculate() {
//     let num1 = parseFloat(document.getElementById('input1').value);
//     let conversions = document.getElementById('conversions').value;
//     let results = document.getElementById('results')
//     let div = document.createElement('div');
//     let answer = document.createElement('p');

//     var result;
//     switch(conversions) {
//         case "Pounds":
//             result = (num1 * 14.5833 * goldPrice).toFixed(2);
//             break;
//         case "Dry Ounces":
//             result = (num1 * 0.911458 * goldPrice).toFixed(2);
//             break;
//         case "Troy Ounces":
//             result = (num1 * goldPrice).toFixed(2);
//             break;
//         case "Kilograms":
//             result = (num1 * 32.1507 * goldPrice).toFixed(2);
//             break;
//         case "Grams":
//             result = (num1 * 0.0321507 * goldPrice).toFixed(2);
//             break;
//         case "Tons":
//             result = (num1 * 32,150.7466 * goldPrice).toFixed(2);
//             break;
//         default:
//             alert("Invalid conversion type");
//             return;
//     }
//     answer.textContent = "The value of your " + num1 + " " + conversions + " of gold is $" + result;
//     div.appendChild(answer);
//     results.appendChild(div);



// }




