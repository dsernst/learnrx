// Exercise 31: Completing sequences with takeUntil()

// Have you ever wanted to unsubscribe from one Event when another Event fires? Observable's takeUntil() function is a convenient way of completing a sequence when another Event occurs. Here's how takeUntil() works:

//     var numbersUntilStopButtonPressed =
//       seq(              [ 1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,, ]).
//         takeUntil(seq([  ,,, {eventType: "click"},,, ]) )                    === seq([ 1,,,2 ])

// Earlier we (unknowningly) built a dynamic Microsoft price stock ticker using Observable. The problem with that stock ticker was that it kept going on forever. If left unchecked, all the entries in the log could use up all of the memory on the page. In the exercise below, filter the Observable sequence of NASDAQ prices for MSFT stock prices, use the fromEvent() function to create an Observable .

function exercise(pricesNASDAQ, printRecord, stopButton) {
  var stopButtonClicks = Observable.fromEvent(stopButton, 'click');
  var microsoftPrices =
      pricesNASDAQ.filter(function (priceRecord) {
        return priceRecord.name === "MSFT";
      })
      .takeUntil(stopButtonClicks);

  microsoftPrices.
    forEach(function (priceRecord) {
      printRecord(priceRecord);
    });
}

// We've learned that Observable sequences are much more powerful than raw events, because they can complete. The take() and takeUntil() functions are powerful enough to ensure that we never have to unsubscribe from another event again! This reduces the risk of memory leaks and makes our code more readable.

// Here's what we learned in this section:

// We can traverse Observables using forEach().
// We can use fromEvent() to convert Events into Observables that never complete.
// We can apply take() and takeUntil() to an Observable to create a new sequence which does complete.
// In the next section we'll learn how to combine events to create more complex events. You'll be suprised how easily you can solve complex, asynchronous problems!
