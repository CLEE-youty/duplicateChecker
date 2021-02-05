chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  const getDuplicateValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index && self.lastIndexOf(value) !== index);
  }

  const haveIdElements = document.querySelectorAll('[id]');
  const haveIdElementsLength = haveIdElements.length;
  const PAGE_ID_ARRAY = [];
  for(let i = 0 ; i < haveIdElementsLength; i++) {
    PAGE_ID_ARRAY.push(haveIdElements[i].id);
  }
  
  const duplicatedIdNames = getDuplicateValues(PAGE_ID_ARRAY);
  sendResponse(duplicatedIdNames);

  });
