var tabs = document.getElementsByClassName("Browser-tab");
var browserPanels = document.getElementsByClassName("Browser-panel");

var addActiveClass = (elem, text) => {
  elem.childNodes[1].onclick = function() {
    Array.prototype.forEach.call(tabs, el => {
      el.classList.remove("is-active");
    });
    elem.classList.add("is-active");
    Array.prototype.forEach.call(browserPanels, panel => {
      console.log("panel",panel.classList,text);
      if (
        Array.prototype.find.call(panel.classList, p => {
          return p === `Browser-${text}`;
        })
      ) {
        console.log('add')
        panel.classList.add("is-active");
      } else {
        panel.classList.remove("is-active");
      }
    });
  };
};

var translations = window.translations;

window.translateTabs = function(){
  Array.prototype.forEach.call(tabs, el => {
    var { text } = el.childNodes[1];
    var currentTranslation = translations[text.toLowerCase()];
    el.childNodes[1].innerHTML = 
    currentTranslation
      ? translations[text.toLowerCase()].fr
      : text;
  });
}

translateTabs();