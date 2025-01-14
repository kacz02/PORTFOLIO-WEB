
const services = document.querySelectorAll('.service');


services.forEach(service => {
    
    service.addEventListener('mouseenter', () => {
        service.style.transform = 'scale(1.1)'; 
        service.style.boxShadow = '0px 0px 25px rgba(0, 0, 0, 0.8)'; 
        service.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; 
    });

    
    service.addEventListener('mouseleave', () => {
        service.style.transform = 'scale(1)'; 
        service.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 1)'; 
    });
});

const buttons = document.querySelectorAll('.btn-1');


buttons.forEach(button => {
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)'; 
        button.style.transition = 'transform 0.3s ease'; 
    });

 
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

