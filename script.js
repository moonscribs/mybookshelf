document.addEventListener('DOMContentLoaded', function() {
    const sparkContainer = document.createElement('div');
    sparkContainer.style.position = 'fixed';
    sparkContainer.style.top = '0';
    sparkContainer.style.left = '0';
    sparkContainer.style.width = '100%';
    sparkContainer.style.height = '100%';
    sparkContainer.style.pointerEvents = 'none';
    sparkContainer.style.zIndex = '9999';
    document.body.appendChild(sparkContainer);
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const width = img.clientWidth;
        const height = img.clientHeight;
        const moveX = (x - width / 2) / 10;
        const moveY = (y - height / 2) / 10;
        
        img.style.transform = `perspective(500px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
    });
});

const sections = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

    function createSpark(x, y) {
        const spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.width = '6px';
        spark.style.height = '6px';
        spark.style.backgroundColor = 'rgba(255, 182, 193, 0.8)'; 
        spark.style.borderRadius = '50%';
        spark.style.boxShadow = '0 0 8px 2px rgba(255, 182, 193, 0.8)';
        spark.style.transform = 'translate(-50%, -50%)';
        spark.style.transition = 'all 0.5s ease-out';
        
        sparkContainer.appendChild(spark);
        setTimeout(() => {
            spark.style.opacity = '0';
            spark.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }, 10);
        setTimeout(() => {
            spark.remove();
        }, 500);
    }
    document.addEventListener('mousemove', function(e) {
        for (let i = 0; i < 3; i++) {
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            createSpark(e.clientX + offsetX, e.clientY + offsetY);
        }
    });
    document.addEventListener('click', function(e) {
        for (let i = 0; i < 5; i++) {
            const offsetX = (Math.random() - 0.5) * 30;
            const offsetY = (Math.random() - 0.5) * 30;
            createSpark(e.clientX + offsetX, e.clientY + offsetY);
        }
    });
});
