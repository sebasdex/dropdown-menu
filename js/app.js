document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuResponsive = document.getElementById('menu-responsive');
    const closeIcon = document.getElementById('close-icon');
    const features = document.getElementById('features');
    const company = document.getElementById('company');
    const featuresList = document.getElementById('f-list');
    const companyList = document.getElementById('c-list');

    menuIcon.addEventListener('click', () => {
        menuResponsive.classList.toggle('hidden');
        menuResponsive.classList.add('flex');
    });

    closeIcon.addEventListener('click', () => {
        menuResponsive.classList.toggle('hidden');
    });

    features.addEventListener('click', (e) =>{
        arrows(e);
        if(e.target.firstElementChild.classList.contains('bg-up')){
            featuresList.classList.toggle('hidden');
            featuresList.classList.add('flex');
        }else{
            featuresList.classList.toggle('hidden');
        }
    });
    company.addEventListener('click', (e) => {
        arrows(e);
        if(e.target.firstElementChild.classList.contains('bg-up')){
            companyList.classList.toggle('hidden');
            companyList.classList.add('flex');
        }else{
            companyList.classList.toggle('hidden');
        }
    });

    function arrows(e){
        if (e.target.firstElementChild.classList.contains('bg-down')) {
            e.target.firstElementChild.classList.remove('bg-down');
            e.target.firstElementChild.classList.add('bg-up');
        }else{
            e.target.firstElementChild.classList.remove('bg-up');
            e.target.firstElementChild.classList.add('bg-down');
        }
    }
});