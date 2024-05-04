// Script for Displaying or hiding top nav  

let toggleNavStatus = false
let toggleNavStatusA = false
let toggleNavStatusB = false
let toggleNavStatusC = false
let toggleNavStatusD = false



let toggleNavH = function () {
    
    
    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")

    let getMainHome = document.body.querySelector("#H")
    let getMainHomeDiv = document.body.querySelector("#H #HomeDiv")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")


    
    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");

    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");

    if (toggleNavStatus === false ) {

        
        getMainHead.style.display = "none"
        geti1.style.width = "15px"
        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"

        getMainHome.style.display = "block";
        getMainHome.style.padding = "auto auto auto 10%";
        getMainHomeDiv.style.margin = "0 auto 0 10%";
        getMainHomeDiv.style.padding = "20% auto 0 0";
        getMainHomeDiv.style.width = "auto";
        getMain.style.display = "none";
        getAside.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";

        getSidebarI.style.opacity = "0";
        getSidebarI.style.visibility = "hidden";  


        getSidebar.style.width = "0";
        

        setInterval(() => {
            let w = window.innerWidth;

            if (w > "804") {
                getMainHomeDiv.style.width = "70vw";
                getMainHomeDiv.style.height = "300px";
                getMainHomeDiv.style.padding = "50px auto 20px 50px"
                getMainHomeDiv.style.margin = "0 auto 0 5%";
            }
            if (w < "804") {
                getMainHomeDiv.style.width = "50vw";
                getMainHomeDiv.style.height = "300px";
                getMainHomeDiv.style.margin = "0 auto 0 10%";
            }
        }, 10);
               
        
    }  
  
}


let toggleNavA = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");
    let getaOne = document.body.querySelector("#mainHead ul .aOne")
    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")


    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")

    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")


    let getMainh1 = document.body.querySelector("#A h1")

    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");

    if (toggleNavStatusA === false ) {
        

        togglemenuBar = false;
        getSidebarI.style.opacity = "0";

        getMainHead.style.display = "block"

        getaOne.style.color = "gray"
        getaTwo.style.color = "white"
        getaThree.style.color = "gray"
        getaFour.style.color = "gray"
        getaFive.style.color = "gray"


        geti2.style.width = "15px"

        geti1.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"

        
        getMain.style.display = "block";
      
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";


       if (toggleNavStatus === false && screen.width > "840") {
        getSidebarI.style.opacity = "0";
        getSidebarI.style.visibility = "hidden";  
       }

        setTimeout(() => {
            getMainh1.style.visibility = "visible"
        }, 2000);
                

        getSidebar.style.width = "0";
    }


}

let toggleNavB = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");
    let getaOne = document.body.querySelector("#mainHead ul .aOne")
    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")

    
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")

    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")


    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");

    if (toggleNavStatusB === false ) {

        togglemenuBar = false;
        getSidebarI.style.opacity = "0";

        if (toggleNavStatus === false && screen.width > "840") {
            getSidebarI.style.opacity = "0";
            getSidebarI.style.visibility = "hidden";  
           }

        getMainHead.style.display = "block"

        getaOne.style.color = "gray"
        getaTwo.style.color = "gray"
        getaThree.style.color = "white"
        getaFour.style.color = "gray"
        getaFive.style.color = "gray"

        
        geti3.style.width = "15px"

        geti2.style.width = "0"
        geti1.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"


        getAside.style.display = "block";
        getMainHome.style.display = "none";
        getMain.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";

        
        getSidebar.style.width = "0";
        
    }

}

let toggleNavC = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");
    let getaOne = document.body.querySelector("#mainHead ul .aOne")
    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")



    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")

    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")


    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");

    if (toggleNavStatusC === false ) {

        togglemenuBar = false;
        getSidebarI.style.opacity = "0";

        getMainHead.style.display = "block"

        if (toggleNavStatus === false && screen.width > "840") {
            getSidebarI.style.opacity = "0";
            getSidebarI.style.visibility = "hidden";  
           }
        getaOne.style.color = "gray"
        getaTwo.style.color = "gray"
        getaThree.style.color = "gray"
        getaFour.style.color = "white"
        getaFive.style.color = "gray"


        geti4.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti1.style.width = "0"
        geti5.style.width = "0"


        getSection1.style.display = "block";
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getMain.style.display = "none";
        getSection2.style.display = "none";

        
        getSidebar.style.width = "0";

    }


}

let toggleNavD = function () {

    

    let getMainHead = document.body.querySelector("#mainHead")

    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");
    let getaOne = document.body.querySelector("#mainHead ul .aOne")
    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")


    if (toggleNavStatus === false && screen.width > "840") {
        getSidebarI.style.opacity = "0";
        getSidebarI.style.visibility = "hidden";  
        
       }


    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")

    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection2H1 = document.body.querySelector("#D h1")


    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");

    if (toggleNavStatusD === false ) {

        togglemenuBar = false;
        getSidebarI.style.opacity = "0";

        getMainHead.style.display = "block"

        getaOne.style.color = "gray"
        getaTwo.style.color = "gray"
        getaThree.style.color = "gray"
        getaFour.style.color = "gray"
        getaFive.style.color = "white"


        geti5.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti1.style.width = "0"


        getSection2.style.display = "block";
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getMain.style.display = "none";
        getSection1.style.display = "none";

        
        getSidebar.style.width = "0";

       
    }

}
