window.addEventListener("load", function () {
    removeClosedNavClass();
    addAccessibleAriaLabels("click");
    langToggle();
});

// remove 'is closed' class on all sidebar nav categories so everything is visible
const removeClosedNavClass = function () {
    let navItems = document.getElementsByClassName("Tree-item");
    Object.keys(navItems).forEach(function (key) {
        navItems[key].classList.remove("is-closed");
    });
};

// add correct aria labels for when subnav categories are expanded/not expanded
const addAccessibleAriaLabels = function (event) {
    let navCategories = document.getElementsByClassName("Tree-collectionLabel");

    Object.keys(navCategories).forEach(function (key) {
        navCategories[key].addEventListener(event, function () {
            let subNav = findElementSubNav(navCategories[key]);
            let navCategoryParent = navCategories[key].parentNode;

            if (navCategoryParent.classList.contains("is-closed")) {
                navCategories[key].setAttribute("aria-expanded", "false");
                subNav[0].setAttribute("aria-expanded", "false");
                subNav[0].setAttribute("aria-hidden", "true");
            } else {
                navCategories[key].setAttribute("aria-expanded", "true");
                subNav[0].setAttribute("aria-expanded", "true");
                subNav[0].setAttribute("aria-hidden", "false");
                subNav[0].firstElementChild.focus();
            }
        });
    });
};

// helper function to find subnavs in single nav list item
const findElementSubNav = function (elem) {
    // Setup siblings array and get the first sibling
    let siblings = [];
    let sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
};

// Language Toggle Starts here
function langToggle() {
    let toggleFr = document.getElementById("fractal-toggle-fr");
    if (toggleFr) {
        toggleFr.href = toggle("fr");
    }

    let toggleEn = document.getElementById("fractal-toggle-en");
    if (toggleEn) {
        toggleEn.href = toggle("en");
    }

    function toggle(lang) {
        var redirectUri;
        var sandboxName = "SANDBOX_NAME";
        var strip = 3;
        if (lang === "en") {
            redirectUri =
                window.location.origin +
                window.location.pathname.replace("/fr/", "/");
        } else if (lang === "fr") {
            var path = window.location.pathname ? window.location.pathname : "";
            if (sandboxName.length) {
                path = path.replace("/" + sandboxName + "/", "");
                redirectUri =
                    window.location.origin + "/" + sandboxName + "/fr/" + path;
            } else {
                redirectUri = window.location.origin + "/fr" + path;
            }
        }
        return redirectUri;
    }
}
