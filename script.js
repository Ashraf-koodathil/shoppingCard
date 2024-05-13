const image = document.getElementById("main-img")

try{
    image.addEventListener('mouseover', () => {
        image.setAttribute('src','images/67017140_43_B.avif');
    })
    
    image.addEventListener('mouseout', () => {
        image.setAttribute('src','images/67017140_43-99999999_01.avif');
    })
    
}catch(err){
    console.log(err)
}
    


const sizeChart = document.querySelector('#char-list')
const icon = document.querySelector('.fa-chevron-down')
const sizeAssign = document.querySelector('#char-list')
const openChart = document.querySelector('#openChart')
let swapVar;


sizeChart.addEventListener('click',openBox)
openChart.addEventListener('click',openBox)

function openBox(event) {

    sizeChart.classList.toggle('chart-open')
    icon.style.transform = "rotate(180deg)"
    if(event.target.matches('h6')){
        
        swapVar = sizeAssign.firstElementChild.innerHTML

        sizeAssign.firstElementChild.innerHTML = event.target.innerText

        event.target.innerText = swapVar

        setTimeout(() => {
            icon.style.transform = "none"
        },1000)
        
    }
   
}



