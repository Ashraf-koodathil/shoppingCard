const image = document.getElementById("main-img")

image.addEventListener('mouseover', () => {
    image.setAttribute('src','images/67017140_43_B.avif');
})

image.addEventListener('mouseout', () => {
    image.setAttribute('src','images/67017140_43-99999999_01.avif');
})




