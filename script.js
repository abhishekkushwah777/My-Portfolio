function togglenavmenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("visible");

    if (menu.classList.contains("visible")){
        menu.classList.remove("hidden");
    } else{
        menu.classList.add("hidden");
    }
};