const products = document.querySelector(".js-products");
const options = document.querySelector(".js-options");
const language = document.querySelectorAll(".js-language");
const productsScroll = document.querySelector(".js-products-scroll");

/* products events*/
products.addEventListener("mouseenter", () => {
    products.querySelector("p").innerText = "Products ▸";
    productsScroll.style.display = "flex";

});

// products.addEventListener("mouseleave", () => {
//     productsScroll.style.display = "none";
//  });

productsScroll.addEventListener("mouseleave", () =>{
    productsScroll.style.display = "none";
    products.querySelector("p").innerText = "Products ▾";
})

/* options events*/

options.addEventListener("mouseenter", () => {
    options.querySelector("p").innerText = "更多選項 ▸";

});

options.addEventListener("mouseleave", () => {
    options.querySelector("p").innerText = "更多選項 ▾";
});

/* language events*/

language.forEach( e => {
    e.addEventListener("mouseenter", () => {
        e.querySelector("p").innerText = "中文－繁體 ▸";
    
    });
    
    e.addEventListener("mouseleave", () => {
        e.querySelector("p").innerText = "中文－繁體 ▾";
    });
})