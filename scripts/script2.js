// Script for Home page nav

let toggleMenuStatus = false;

let toggleMenu = function () {

    let getMainHome = document.body.querySelector("#H")    
    let getHomeDiv = document.body.querySelector("#H #HomeDiv"); 
    let getNav = document.body.querySelector("#H #nav"); 
    let getNav1 = document.body.querySelector("#H #nav1"); 
    let getMenuBar = document.body.querySelector("#H #menu");
    let getCloseMenu = document.body.querySelector("#H #menuClose");
    let getHidden = document.body.querySelector("#H h1");
    let getHidden2 = document.body.querySelector("#H h3");
    let getHidden3 = document.body.querySelector("#H #icons");

    if (toggleMenuStatus === false ) {
        
        getNav.style.display = "block";
        getNav.style.opacity = "1";
       
        getHomeDiv.style.height = "300px"
        getHomeDiv.style.background = "none"
        getHomeDiv.style.margin = "0 0 0 0"
        getHomeDiv.style.padding = "50px 0 70px 50px"
     
        getNav1.style.opacity = "0";
        getMenuBar.style.opacity = "0";
        getCloseMenu.style.display = "block";
        getCloseMenu.style.opacity = "1";
        getHidden.style.visibility = "hidden";
        getHidden2.style.visibility = "hidden";
        getHidden3.style.visibility = "hidden";
        
        setInterval(() => {
            let w = window.innerWidth;

            if (toggleMenuStatus === false && w > "804") {
                getHomeDiv.style.width = "70vw";
                getHomeDiv.style.padding = "50px auto 20px 50px"
                getHomeDiv.style.margin = "0 auto 0 5%";
                getNav.style.top = "10%";
                
                
            }
            if (toggleMenuStatus === false && w < "804") {

                getHomeDiv.style.width = "50vw";
                getHomeDiv.style.height = "300px";
                getHomeDiv.style.margin = "0 auto 0 10%";
                getHomeDiv.style.padding = "50px"
                
               
            }
      
        }, 10);
               
        

        toggleMenuStatus = true
    }
    else if (toggleMenuStatus === true) {
        
        getHomeDiv.style.background = "rgba(81, 81, 74, 0.9)"
        getNav.style.display = "none";
        getNav1.style.opacity = "1";
        getMenuBar.style.opacity = "1";
        getCloseMenu.style.opacity = "0";
        getHidden.style.visibility = "visible";
        getHidden2.style.visibility = "visible";
        getHidden3.style.visibility = "visible";
        getHomeDiv.style.visibility = "visible"

        getMainHome.style.display = "block";
        // getHomeDiv.style.height = "300px";
        
       

        setInterval(() => {
            let w = window.innerWidth;

            if (toggleMenuStatus === true && w > "804") {
                getHomeDiv.style.width = "70vw";
                getHomeDiv.style.margin = "0 auto 0 5%";
            }
            if (toggleMenuStatus === true && w < "804") {
                getHomeDiv.style.width = "50vw";
                getHomeDiv.style.height = "300px";
                getHomeDiv.style.margin = "0 auto 0 10%";
                getHomeDiv.style.padding = "50px"
                
            }
         
        }, 10);
                

    

        toggleMenuStatus = false
    }


}