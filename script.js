document.getElementById("projects-header").addEventListener("mouseover", function(){
    let open = document.getElementsByClassName("projects-nav-hidden")[0];
    console.log("open: " + open);
    open.classList.remove("projects-nav-hidden");
    open.classList.add("projects-nav");
});
document.getElementById("projects-header").addEventListener("mouseout", function(){
    let close = document.getElementsByClassName("projects-nav")[0];
    console.log("close: " + close);
    close.classList.remove("projects-nav");
    close.classList.add("projects-nav-hidden");
});