const sizeChart = document.querySelector('#char-list')
const icon = document.querySelector('.fa-chevron-down')


sizeChart.addEventListener('click', () => {
    sizeChart.classList.toggle('chart-open')
    icon.remove();
})