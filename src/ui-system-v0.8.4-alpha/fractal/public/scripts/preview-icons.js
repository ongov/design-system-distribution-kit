(function(){
//remove first sample icon

// missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

document.getElementsByTagName("DL")[0].removeChild(document.querySelector('.ontario-icon'));

var namebase = 'fractal-icons-preview-cat';
var layout = document.createElement('div');
layout.className = "ontario-column";
var cats = [];

function createCat(name,node){

    var catNode = document.createElement('dl');
    catNode.className = "ontario-row styleguide "+namebase;
    var catNodeLabel = document.createElement('dt');    
    
    catNodeLabel.className = "fractal-dt ontario-padding-bottom-24-! "+namebase+"label";
    var catName = window.translations.catNames[name][window.lang];

    catNodeLabel.appendChild(document.createTextNode(catName));
    catNode.appendChild(catNodeLabel);

    var catNodeItems = document.createElement('dd');
    catNodeItems.className = namebase+"items";
    var catNameWithoutSpaces = name.replace(/ /g, '_');
    catNodeItems.id = namebase+catNameWithoutSpaces;
    catNode.appendChild(catNodeItems);
    cats.push(name);
    layout.appendChild(catNode);
}

function WrapperNode(){
    var wrapperNode = document.createElement('div');
    wrapperNode.className = namebase+"item ontario-margin-bottom-24-!";
    return wrapperNode;
}

//add lables
document.querySelectorAll('.ontario-icon').forEach(function(node) {

    //grab cat name
    var catName = node.getAttribute("sol:category");

    //check if category exists if not create it and put in dom
    if(cats.indexOf(catName) === -1){
        createCat(catName,node);
    }

    //grab icon id name from svg>use
    var iconId = node.querySelector('use').href.baseVal.substr(1);

    //handle icon names with path
    if(iconId.includes("#")){
        iconId = iconId.split('#')[1];
    }

    //create a label
    var labelNode = document.createElement('div');
    labelNode.className = "fractal-icons-preview-label";
    labelNode.appendChild(document.createTextNode(iconId));

    var wrapperNode = WrapperNode();

    wrapperNode.appendChild(node);
    wrapperNode.appendChild(labelNode);

    var catNameWithoutSpaces = catName.replace(/ /g, '_');

    layout.querySelector("#"+namebase+catNameWithoutSpaces).appendChild(wrapperNode);

});

    //replace body
    document.getElementById("fractal-icons-preview").appendChild(layout);

})();

