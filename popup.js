

let changeColor = document.getElementById("changeColor");
let checkPrice = document.getElementById("checkPrice")
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});



// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    alert(" You've clicked me")
  }

checkPrice.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: displayPrice,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function displayPrice() {

    

      
    console.log("Displaying price")

    let title = document.getElementById("productTitle");
    
//    let rakuten_website= document.open("https://search.rakuten.co.jp/search/mall/" +title.innerHTML.slice(0,30),'','noopener=false');
    window.open("https://search.rakuten.co.jp/search/mall/" +title.innerHTML.slice(0,30),"popup.html",)
    

    // var xhr = new XMLHttpRequest();  
    // xhr.open('GET', rakuten_website, true);
    // xhr.responseType = "document"
    // xhr.send('');

    console.log(rakuten_website)

}



  