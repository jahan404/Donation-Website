window.addEventListener("scroll", function() {
    var header = document.getElementById("nav");
    header.classList.toggle("sticky", window.scrollY > 0);

    if(window.scrollY>0){
        header.classList.add('bg-black')
    }
    });
    console.log(window.scrollY)