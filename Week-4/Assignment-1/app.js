/* A. Use setTimeout() for time scheduling */

function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2;
  setTimeout(() => {
    callback(result);
  }, delayTime);
}

/* B. To implement delayedResult using Promise */

function delayedResultPromise(n1, n2, delayTime) {
  const res = n1 + n2;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, delayTime);
  });
}

/* C. To implement delayedResult using async/await */

async function main() {
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
}

/* main */

// A.
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

// B.
delayedResultPromise(4, 5, 3000).then(console.log);

// C.
main();
