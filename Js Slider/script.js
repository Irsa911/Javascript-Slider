document.addEventListener("DOMContentLoaded", function() {
    let img1 = document.querySelector(".img1 img");
    let img2 = document.querySelector(".img2 img");
    let img3 = document.querySelector(".img3 img");

    img1.addEventListener("click", function() {
        let backgroundImageDiv = document.querySelector(".background-image");
        backgroundImageDiv.style.backgroundImage = `url('https://img.freepik.com/premium-photo/beautiful-woman-with-long-hair-red-dress-front-roses_893012-60842.jpg?w=360')`;
    });

    img2.addEventListener("click", function() {
        let backgroundImageDiv = document.querySelector(".background-image");
        backgroundImageDiv.style.backgroundImage = `url('images/image3.png')`;
    });

    img3.addEventListener("click", function() {
        let backgroundImageDiv = document.querySelector(".background-image");
        backgroundImageDiv.style.backgroundImage = `url('images/image4.png')`;
    });
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            let imageUrl = this.getAttribute('data-img');
            changeBackgroundImage(imageUrl);
        });
    });

    function changeBackgroundImage(imageUrl) {
        let backgroundImageDiv = document.querySelector(".background-image");
        backgroundImageDiv.style.backgroundImage = `url('${imageUrl}')`;
    }
});
