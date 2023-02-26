//when user click the submit,if required filled have values prevent default acttion(the submot)and show massege using alrt.
let submit = document.getElementById("su");
console.log(submit);

let theName = document.getElementById("re");
console.log(theName);
let theEmail = document.getElementById("req");


submit.addEventListener("click", _doStuff);

function _doStuff (e) {
    e.preventDefault();
    let b = theName.value;
    let d = theEmail.value;

    if (b == ""){
        alert ("You havn't filled Requierd fields!");
    }else if (d == ""){
        alert ("You havn't filled Requierd fields!");

    }else{
        alert("YOU HAVE SUBSCRIBEED US. THANK YOU!");
    }
}





//when user click on hamburger menu can show and hide the nav


//Show hamburger menu on Mobile version under 650 width and hide it in more than 769 width


//Show sliver nav menu on Mobile version under 650 width and hide it in more than 650 width
     let nav1 = document.getElementById("hide");
     let ooo = document.getElementById("hidee");
     console.log(nav1);

     window.addEventListener("resize", _Width);
function _Width() {
     
         if(window.innerWidth <= 651) {
             nav1.style.display = "block";
         }else{
             nav1.style.display ="none";
         }
     }
console.log(ooo)
//Show shipping nav menu on Mobile version under 650 width and hide it in more than 650 width
     window.addEventListener("resize", _Widthc);
     function _Widthc() {
          
              if(window.innerWidth <= 651) {
                  ooo.style.display = "block";
              }else{
                  ooo.style.display ="none";
              }
          }

          const toggle = document.querySelector(".toggle");
          const menu = document.querySelector(".menu");
           
          /* Toggle mobile menu */
          function toggleMenu() {
              if (menu.classList.contains("active")) {
                  menu.classList.remove("active");
                   
                  // adds the menu (hamburger) icon
                  toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
              } else {
                  menu.classList.add("active");
                   
                  // adds the close (x) icon
                  toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
              }
          }
           
          /* Event Listener */
          toggle.addEventListener("click", toggleMenu, false);

          const items = document.querySelectorAll(".item");
 
          /* Activate Submenu */
          function toggleItem() {
            if (this.classList.contains("submenu-active")) {
              this.classList.remove("submenu-active");
            } else if (menu.querySelector(".submenu-active")) {
              menu.querySelector(".submenu-active").classList.remove("submenu-active");
              this.classList.add("submenu-active");
            } else {
              this.classList.add("submenu-active");
            }
          }
           
          /* Event Listeners */
          for (let item of items) {
              if (item.querySelector(".submenu")) {
                item.addEventListener("click", toggleItem, false);
                item.addEventListener("keypress", toggleItem, false);
              }   
          }
          
          /* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);