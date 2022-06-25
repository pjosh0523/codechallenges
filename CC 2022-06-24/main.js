/*Clients place orders to a stockbroker as strings. The order can be simple or multiple or empty.

Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

Example:
"GOOG 300 542.0 B"

A multiple order is the concatenation of simple orders with a comma between each.

Example:
"ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

or

"ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

To ease the stockbroker your task is to produce a string of type

"Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

Example:
"Buy: 294990 Sell: 0"

Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

"Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

Examples:
"Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

"Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

Notes:
If the order is empty, Buy is 0 and Sell is 0 hence the return is: "Buy: 0 Sell: 0".
Due to Codewars whitespace differences will not always show up in test results.
With Golang (and maybe others) you can use a format with "%.0f" for "Buy" and "Sell".*/

function balanceStatements(list){
    // ...
    function balanceStatements(list){
        if (!list.length) return "Buy: 0 Sell: 0";
        let quote = "\\S+";
        let quantity = "\\d+";
        let price = "\\d*\\.\\d*";
        let status = "B|S";
        let orderRE = new RegExp(`(${quote})\\s+(${quantity})\\s+(${price})\\s+(${status})`);
        let orders = list.split(/\s*,\s*/);
        let map = orders.map(order => {
          let match = order.match(orderRE);
          if (match === null) return order;
          let [$order, quote, quantity, price, status] = match;
          return (status == 'B' ? 1 : -1) * Number(quantity) * Number(price);
        });
        let result = map.reduce((result, x) => {
          if (typeof x == 'string') result.mistakes.push(x);
          else if (x > 0) result.buy += x; 
          else result.sell -= x;
          return result;
        }, { buy: 0, sell: 0, mistakes: [] });
        let buysell = `Buy: ${Math.round(result.buy)} Sell: ${Math.round(result.sell)}`;
        let mistakes = `Badly formed ${result.mistakes.length}: ` + result.mistakes.map(x => x + ' ;').join('');
        return result.mistakes.length ? `${buysell}; ${mistakes}` : buysell;
      }
  }