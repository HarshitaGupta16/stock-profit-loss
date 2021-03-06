import "./styles.css";

const initialStockPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentStockPrice = document.querySelector("#current-price");
const btnRef = document.querySelector("#submit-btn");
const outputResult = document.querySelector("#output-result");
// console.log(initialPrice);

if (initialStockPrice === 0) {
  btnRef.disabled = true;
}
btnRef.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let iniPrice = initialStockPrice.value;
  let qty = stocksQuantity.value;
  let currPrice = currentStockPrice.value;
  // console.log(initialPrice)
  calculateProitAndLoss(Number(iniPrice), Number(qty), Number(currPrice));
}

function calculateProitAndLoss(initialPrice, quantity, currentPrice) {
  if (initialPrice > 0 && quantity > 0 && currentPrice > 0) {
    if (initialPrice > currentPrice) {
      // Loss
      let loss = initialPrice - currentPrice;
      let lossOnTotalQuantity = loss * quantity;
      let lossPercent = ((loss / initialPrice) * 100).toFixed(2);
      outputMessageDisplay(
        `The loss is ${lossOnTotalQuantity} and loss percentage is ${lossPercent}%`
      );
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "#DC2626";
    } else if (initialPrice < currentPrice) {
      // Profit
      let profit = currentPrice - initialPrice;
      let profitOnTotalQuantity = profit * quantity;
      let profitPercent = ((profit / initialPrice) * 100).toFixed(2);
      outputMessageDisplay(`The profit is ${profitOnTotalQuantity} and the profit 
    percentage is ${profitPercent}%`);
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "#65A30D";
    } else {
      // no profit no loss

      outputMessageDisplay("No profit no loss!!");
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "gray";
    }
  } else {
    outputMessageDisplay("Please enter value greater than 0");
    outputResult.style.display = "block";
  }
}

function outputMessageDisplay(msg) {
  outputResult.innerHTML = msg;
}
