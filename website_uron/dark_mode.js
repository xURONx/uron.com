function toggleDisplayMode() {
    var e_page_state = document.getElementById("page-display-mode")
    var page_state = e_page_state.innerHTML;
  
    /* Dark Mode Variables */
    var e_text_dark = document.querySelectorAll(".text-dark");
    var e_text_black = document.querySelectorAll(".text-black");
    var e_bg_dark = document.querySelectorAll(".bg-dark");
    var e_bg_black = document.querySelectorAll(".bg-black");
  
    /* Light Mode Variables */
    var e_text_light = document.querySelectorAll(".text-light");
    var e_text_white = document.querySelectorAll(".text-white");
    var e_bg_light = document.querySelectorAll(".bg-light");
    var e_bg_white = document.querySelectorAll(".bg-white");
  
    /* Other Elements */
    var e_cards = document.querySelectorAll(".card");
  
    // Switch from Light to Dark Mode
    if (page_state == "light") {
      switchClasses(e_text_dark, "text-dark", "text-light");
      switchClasses(e_text_black, "text-black", "text-white");
      switchClasses(e_bg_light, "bg-light", "bg-dark");
      switchClasses(e_bg_white, "bg-white", "bg-black");
      addClass(e_cards, "border-dark");
    }
    // Switch from Dark to Light Mode
    else if (page_state == "dark") {
      switchClasses(e_text_light, "text-light", "text-dark");
      switchClasses(e_text_white, "text-white", "text-black");
      switchClasses(e_bg_dark, "bg-dark", "bg-light");
      switchClasses(e_bg_black, "bg-black", "bg-white");
      removeClass(e_cards, "border-dark");
    }
  
    // Update page state
    e_page_state.innerHTML = switchState(page_state);
  }
  
  function switchClasses(elements, fromClass, toClass) {
    for(let elem of elements) {
      if (elem.classList.contains(fromClass)) {
        elem.classList.remove(fromClass);
        elem.classList.add(toClass);
      }
    }
  
    return true;
  }
  
  function addClass(elements, className) {
    for (let elem of elements) {
      if (!elem.classList.contains(className)) {
        elem.classList.add(className);
      }
    }
  }
  
  function removeClass(elements, className) {
    for (let elem of elements) {
      if (elem.classList.contains(className)) {
        elem.classList.remove(className);
      }
    }
  }
  
  function switchState(state) {
    switch(state) {
      case "light":
        state = "dark"; 
        break;
      case "dark":
        state = "light";
        break;
      default:
        state = "undefined";
    }
  
    return state;
  }
  
  function createPageStateElement() {
    var div = document.createElement("div");
    var id = "page-display-mode";
    var init_mode = document.createTextNode("light");
    div.appendChild(init_mode)
    div.id = id;
    div.classList.add("d-none");
    document.getElementsByTagName("body")[0].appendChild(div);
  }
  
  window.toggleDisplayMode = toggleDisplayMode;
  window.createPageStateElement = createPageStateElement;
  