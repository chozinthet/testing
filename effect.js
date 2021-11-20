let menubtn = document.querySelector(".hamburger-menu");
let dropdownList = document.querySelector(".dropdownList");
let category = document.getElementById("categories")
let menuOpen = false;
menubtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menubtn.classList.add("open-burger");
        menuOpen = true;
    }else{
        menubtn.classList.remove("open-burger");
        menuOpen = false;
    }
})