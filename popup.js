document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("ChromePlugin-getDup").addEventListener("click", () => {

      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {}, msg => {
          const resultUl = document.getElementById("ChromePlugin-result-disp");
          for(let i = 0 ; i < msg.length; i++) {
            const putIdLi = document.createElement('li');
            const putId = document.createTextNode(msg[i]);
            putIdLi.appendChild(putId);
            resultUl.appendChild(putIdLi);
          }
        });
      });

    });
  });

  // `Duplicate ID: ${msg.join('\n')}`
