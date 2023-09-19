function ajax(src, callback) {
  fetch(src)
    .then((res) => res.json())
    .then((res) => JSON.stringify(res, null, 2)) // (x, y, z) z => indentation
    .then((response) => callback(response));
}

/* 用 async/await 再做一次 */

// async function ajax(src, callback) {
//   const fetchData = await fetch(src);
//   const res = await fetchData.json();
//   const response = JSON.stringify(res, null, 2);
//   callback(response);
// }

function render(data) {
  const dataFile = document.createElement("div");
  const body = document.querySelector("body");

  dataFile.innerText = data; // 這邊 data 一定要是 str, json 沒辦法用 Text 方式顯示內容
  body.appendChild(dataFile);
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url, function (response) {
  render(response);
});
