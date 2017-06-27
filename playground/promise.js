var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

// // not good, if rejected on first call, 2nd call still runs!
// asyncAdd(5, '7').then((result) => {
//   console.log('Result: ', result);
//   return asyncAdd(result, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((result) => {
//   console.log('This should be 45: ', result);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

//then catch promise, fixes this!
asyncAdd(5, '7').then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('This should be 45: ', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('It worked!');
//     reject('Unable to fullfill promise!');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message)
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
