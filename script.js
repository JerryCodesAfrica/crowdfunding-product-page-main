let closeBtn = document.querySelector(".closeme");
let modulePage = document.querySelector(".modular-section");
let backgroundO = document.querySelector(".backdrop");
let openthePage = document.querySelector(".first-button");

let openPage = ()=>{
    let thislist = modulePage.classList;
    thislist.replace("modular-section","activate");
    //
    let thatlist = backgroundO.classList;
    thatlist.replace("backdrop","frontdrop");
}

openthePage.addEventListener('click',openPage);

let closePage =()=>{
    let thislist = modulePage.classList;
    thislist.replace("activate","modular-section");
    //
    let thatlist = backgroundO.classList;
    thatlist.replace("frontdrop","backdrop");
}

closeBtn.addEventListener('click', closePage)


// Add an event listener to detect when the radio button is clicked
let radiobuttons = document.getElementsByName("contribute");

   for (let i = 2; i < radiobuttons.length-1; i++) {
    if (radiobuttons[i].checked) {
        // Replace the class "active" with "inactive"
       let select =  document.querySelector('.pledge');
        select.classList.replace("pledge","unpledge")
    
      }else{
        let select =  document.querySelector('.pledge');
        select.classList.replace("unpledge","pledge")
      }
    
   };
