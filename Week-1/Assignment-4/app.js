const products = document.querySelector(".js-products");
const options = document.querySelector(".js-options");
const language = document.querySelectorAll(".js-language");
const productsScroll = document.querySelector(".js-products-scroll");
const ad = document.querySelectorAll(".js-ad");
const adPlay = document.querySelector(".js-adPlay");
const adSwitch1 = document.querySelector(".adSwitch1");
const adSwitch2 = document.querySelector(".adSwitch2");
const adSwitch3 = document.querySelector(".adSwitch3");
const adSwitch4 = document.querySelector(".adSwitch4");

window.onload = function () { // f5 自動 onload
    startADs(); 
};

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


/* 利用 setInterval 來實現 定時更換 ads */

    let count = 0;
    let play = true;
    let controlerID;

    function changeAds(count){
        ad.forEach((content, i) => { // i = [0,4) 左閉右開
            if(i === count){
                content.style.display = "flex";

            }
            else{
                content.style.display = "none";
            }
        })
    }
    
    function changeCount(){
        count = (count+1) % ad.length;
        changeAds(count);
    }
    
    function startADs(){
        controlerID = setInterval(changeCount, 1000); // returns 一個獨特的 "setInterval ID" 讓你後續可以操作它
    }
    function stopADs(){
        clearInterval(controlerID);
    }
    function togglePlay(){
        play = !play;
        
        if(play){
            startADs();
            adPlay.style.width = "8px";
            adPlay.style.height = "10px";
            adPlay.style.borderTop = "none";
            adPlay.style.borderLeft = "3px solid rgba(128, 128, 128, 0.6)";
            adPlay.style.borderBottom = "none";
            adPlay.style.borderRight = "3px solid rgba(128, 128, 128, 0.6)";
            adPlay.style.backgroundColor = "white";
            adPlay.style.marginTop = "15px";
            adPlay.style.cursor = "pointer";
        }
        else{
            stopADs();
            adPlay.style.width = "0";
            adPlay.style.height = "0";
            adPlay.style.borderTop = "4.5px solid transparent";
            adPlay.style.borderLeft = "8px solid rgba(128, 128, 128, 0.6)";
            adPlay.style.borderBottom = "4.5px solid transparent";
            adPlay.style.borderRight = "none";
            adPlay.style.backgroundColor = "transparent";
            adPlay.style.marginTop = "15.5px";
            adPlay.style.marginLeft = "0px";
            adPlay.style.cursor = "pointer";
        }
    }

    adPlay.addEventListener("click", togglePlay);
   
    adSwitch1.addEventListener("click", ()=>{
        count = 0;
        changeAds(count);
    });

    adSwitch2.addEventListener("click", ()=>{
        count = 1;
        changeAds(count);
    });

    adSwitch3.addEventListener("click", ()=>{
        count = 2;
        changeAds(count);
    });

    adSwitch4.addEventListener("click", ()=>{
        count = 3;
        changeAds(count);
    });