import readlineSync from 'readline-sync';
import { searchStock, getAllstocks, filterStocksByPrice, OperateOnStock } from '../services/stock.js';

function startSearch(){
    const identifier = readlineSync.question('Please enter a stock name or ID: ');
    console.log(searchStock(identifier))

}

function ShowAllStocks(){
    console.table(getAllstocks())
}


function ShowStocksByPprice(){
    const givenPrice = readlineSync.question('Please enter the amount: ');
    const above = readlineSync.question('To see above the amount enter "true" To see shares below enter "false": ')
    console.table(filterStocksByPrice(givenPrice,above))
}


function BuyOrSell(){
    let operation = readlineSync.question(`
    Please select the type of operation:
        1. Buy
        2. Sell
        `)
    operation = operation === "1" ? "buy": "sell"
    const identifier = readlineSync.question('Enter a stock ID or name: ')
    OperateOnStock(operation, identifier)


}

export function mainMenu() {
    while (true) {
        const select = readlineSync.question(`
Please select an action from the menu:
1. Search for a stock by name or id
2. Show all stocks above or below a given price
3. Buy or sell a stock
4. Exit


Please enter your choice: `);

        switch (select) {
            case "1":
                startSearch()
                break;
            case "2":
                ShowStocksByPprice()
                break;
            case "3":
                BuyOrSell()
                break;
            case "4":
                return;
            case "5":
                ShowAllStocks()
        }

    }
}


