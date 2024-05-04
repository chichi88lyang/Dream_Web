// Script for Side Bar in Other Pages apart from Home page

let togglemenuBar = false;


setInterval(() => {
    
    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");
    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");
    let w = window.innerWidth;

 
 
 
     if (togglemenuBar === false && w <= 860) {
        getMenuBar.style.visibility = "visible";
        getSidebar.style.visibility = "visible";
        
    }
    else if (togglemenuBar === true && w <= 860) {
        getMenuBar.style.visibility = "hidden";
        getSidebar.style.visibility = "visible";

    }
    else if (w <= 860 ) {
        getMenuBar.style.visibility = "visible";
        getSidebar.style.visibility = "visible"; 
     
    }
    if (w > 860) {

        getMenuBar.style.visibility = "visible";
        getMenuBar.style.opacity = "0";
        getSidebar.style.width = "0";
        getSidebarI.style.opacity = "0";
        togglemenuBar = false;
    }    


   
}, 100);

    


let toggleMenuBar = function () {

    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    let getMenuBarClose = document.body.querySelector("#mainHead .nav-main #menuBarClose");
    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");
    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");

    
    if (togglemenuBar === false) {

            getMenuBarClose.style.opacity = "0";
            getSidebar.style.visibility = "visible";
            getSidebarI.style.visibility = "visible";
            getSidebarI.style.opacity = "1";
            getMenuBar.style.opacity = "0";
            getSidebar.style.width = "40vw";

                   
        
        togglemenuBar = true;
        
    }
    else if (togglemenuBar === true){

            getMenuBar.style.opacity = "1";
            getMenuBarClose.style.opacity = "0";

            getSidebar.style.visibility = "hidden";
            getSidebar.style.width = "0";
            getSidebarI.style.opacity = "0";
            getSidebarI.style.visibility = "hidden";    
            
            togglemenuBar = false;
         
            
    }
  
};






setInterval(() => {
    
    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    let w = window.innerWidth;

    if (togglemenuBar === false && w <= 600 )  {

        getMenuBar.style.opacity = "1";
    }

    else if (togglemenuBar === true && w <= 600 )  {

        getMenuBar.style.opacity = "0";
    }
    
    if ( togglemenuBar === false && w <= 860) {
        
        getMenuBar.style.opacity = "1";
    }
    else if ( togglemenuBar === true && w <= 860) {
        
        getMenuBar.style.opacity = "0";
    }
    else if (w > 900) {

    getMenuBar.style.opacity = "0";
    }
    
}, 100);
