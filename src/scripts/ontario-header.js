// Utils
function getClosest(element, selector) {
    while (element) {
        if (element.matches(selector)) break;
        element = element.parentElement;
    }
    return element;
}

// run asynchronously
function deferInFn(fn) {
    if (typeof fn === "function") setTimeout(fn, 0);
}

/*
  Header
*/
(function () {

    "use strict";

    // review browser support
    if (!("addEventListener" in window) || !document.documentElement.classList) return;


    var navPanelSelector = "ontario-header-navigation",
        isReadyClass = "ontario-header-navigation--is-ready",
        isActiveClass = "ontario-header-navigation--open";

    var header = document.getElementById("ontario-header"),
        nav = document.getElementById(navPanelSelector),
        openBttnToggler = document.getElementById("ontario-header-menu-toggler"),
        closeBttnToggler = document.getElementById("ontario-header-navigation-close-toggler");

    var currentTogger = null,
        currentDomEl = null;

    function showNavPanel(navpanel) {
        header.parentNode.classList.add(isActiveClass);
        navpanel.scrollTop = 0;
        addA11yVisiblity(navpanel)
        focusUser({element: navpanel, callbackOnEscape: hideNavPanel})
        deferInFn(unbindOpenBttnToggler);

        // bind clickables: document, closebttn - asynchronously
        deferInFn(bindDocumentKeydown);
        deferInFn(bindDocumentClick);
        deferInFn(bindCloseBttnToggler);
    }

    function hideNavPanel(navpanel, returnToToggler) {
        var navpanelDomEl = navpanel ? navpanel : currentDomEl
        var returnFocusToToggler = returnToToggler !== undefined;

        header.parentNode.classList.remove(isActiveClass);
        removeA11yVisiblity(navpanelDomEl)

        // unbind clickables: document, closebttn
        unbindCloseBttnToggler();
        unbindDocumentClick();
        unbindDocumentKeydown();

        bindOpenBttnToggler();

        // return focus to toggler
        if (returnFocusToToggler) {
            currentTogger.focus();
            currentTogger = null;
        }
    }

    function openMenu(e) {
        var navpanelId = e.currentTarget.getAttribute("aria-controls");
        var navpanel = document.getElementById(navpanelId);
        if (currentDomEl) {
            hideNavPanel(currentDomEl, false);
        }
        currentTogger = e.currentTarget;
        currentDomEl = navpanel;
        showNavPanel(navpanel);
    }

    function closeMenu() {
        hideNavPanel(currentDomEl);
    }

    function onClickHandler(e) {
        var isNavPanel = e.target === currentDomEl;
        var isNavPanelChild = getClosest(e.target, navPanelSelector);
        if (!isNavPanel && !isNavPanelChild) hideNavPanel();
    }

    function onKeyboradHandler(e) {
        if (e.key === "Escape" || e.keyCode === KEYCODE.ESCAPE) hideNavPanel();
    }

    //  bind-unbind events
    function bindOpenBttnToggler() {
        openBttnToggler.addEventListener("click", openMenu);
    }

    function unbindOpenBttnToggler() {
        openBttnToggler.removeEventListener("click", openMenu);
    }

    function bindCloseBttnToggler() {
        closeBttnToggler.addEventListener("click", closeMenu);
    }

    function unbindCloseBttnToggler() {
        closeBttnToggler.removeEventListener("click", closeMenu);
    }

    function bindDocumentClick() {
        document.addEventListener("click", onClickHandler);
    }

    function unbindDocumentClick() {
        document.removeEventListener("click", onClickHandler);
    }

    function bindDocumentKeydown() {
        document.addEventListener("keydown", onKeyboradHandler);
    }

    function unbindDocumentKeydown() {
        document.removeEventListener("keydown", onKeyboradHandler);
    }

    function init() {
        if (!nav) return;
        addA11y(nav);
        bindOpenBttnToggler(nav);
        nav.classList.add(isReadyClass);
    }

    init();

})();


/*
    Search
*/
(function () {

    "use strict";

    // review browser support
    if (!("addEventListener" in window) || !document.documentElement.classList) return;

    var header = document.getElementById("ontario-header"),
        searchFormContainer = document.getElementById("ontario-search-form-container"),
        searchInputField = document.getElementById("ontario-search-input-field"),
        clearInputField = document.getElementById("ontario-search-clear-input-field"),
        searchToggler = document.getElementById("ontario-header-search-toggler"),
        searchClose = document.getElementById("ontario-header-search-close"),
        searchSubmit = document.getElementById("ontario-search-submit"),
        clearInputClass = "ontario-header__search-clear-input--hide",
        searchOpenClass = "ontario-header--search-open";

    // Clear input field mechanisms
    function toggleClearInputField(newState) {
        if (newState === "hide") {
            searchInputField.value = "";
            searchInputField.focus();
            addA11y(clearInputField)
        } else {
            removeA11y(clearInputField)
        }
        clearInputField.classList.toggle(clearInputClass);
    }

    searchInputField.addEventListener("keyup", function (e) {
        if (e.key === "Enter" || e.keyCode === KEYCODE.ENTER) {
            searchSubmit.click()
        }
        if (e.target.value && clearInputField.classList.contains(clearInputClass)) {
            toggleClearInputField();
        } else if (!e.target.value && !clearInputField.classList.contains(clearInputClass)) {
            toggleClearInputField("hide");
        }
    });

    clearInputField.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.value === undefined) {
            toggleClearInputField("hide");
        }
    });

    clearInputField.addEventListener("keyup", function (e) {
        if (e.key === "Enter" || e.keyCode === KEYCODE.ENTER) {
            toggleClearInputField("hide");
        }
    });

    // Mobile handling
    function toggleSearchForm(newState) {
        header.classList.toggle(searchOpenClass);
        if (newState === "expand") {
            removeA11y(searchFormContainer)
            searchInputField.focus()
        } else {
            addA11y(searchFormContainer)
            searchToggler.focus();
        }
    }

    searchToggler.addEventListener("click", function (e) {
        toggleSearchForm("expand");
    });
    searchClose.addEventListener("click", function (e) {
        toggleSearchForm("collapse");
    });
    searchClose.addEventListener("keyup", function (e) {
        if (e.key === "Enter" || e.keyCode === KEYCODE.ENTER) {
            toggleSearchForm("collapse");
        }
    });

    function init() {
        if (!searchFormContainer) return;
        addA11y(clearInputField);
    }

    init();

})();
