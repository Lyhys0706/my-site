document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    animateProgressBars();
    handleCourseEnrollment();
    handleNavigation();
    addHoverEffects();
    handleMobileMenu();
});

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function animateProgressBars() {
    const progressCards = document.querySelectorAll('.progress-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const targetWidth = progressFill.style.width;
                progressFill.style.width = '0%';
                setTimeout(() => {
                    progressFill.style.width = targetWidth;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressCards.forEach(card => observer.observe(card));
}

function handleCourseEnrollment() {
    const enrollButtons = document.querySelectorAll('.btn-enroll');
    
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const courseCard = this.closest('.course-card');
            const courseTitle = courseCard.querySelector('h3').textContent;
            const coursePrice = courseCard.querySelector('.price').textContent;
            
            showNotification(`已选择课程: ${courseTitle}`, 'success');
            
            setTimeout(() => {
                const confirmed = confirm(`确认报名 ${courseTitle} 课程吗？\n价格: ${coursePrice}`);
                if (confirmed) {
                    showNotification('报名成功！即将开始学习之旅', 'success');
                    this.textContent = '已报名';
                    this.disabled = true;
                    this.style.background = '#10b981';
                }
            }, 500);
        });
    });
}

function handleNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function addHoverEffects() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
}

function handleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-dark);
    `;
    
    navContainer.insertBefore(menuToggle, navMenu);
    
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        navMenu.style.display = 'none';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
            navMenu.style.position = 'static';
            navMenu.style.flexDirection = 'row';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
        } else {
            menuToggle.style.display = 'block';
            navMenu.style.display = 'none';
            navMenu.style.position = 'absolute';
            navMenu.style.flexDirection = 'column';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const styles = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideIn 0.3s ease-out',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px'
    };
    
    if (type === 'success') {
        styles.background = '#10b981';
    } else if (type === 'error') {
        styles.background = '#ef4444';
    } else {
        styles.background = '#4f46e5';
    }
    
    Object.assign(notification.style, styles);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-menu a.active {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    .nav-menu a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s;
    }
    
    .nav-menu a:hover::after,
    .nav-menu a.active::after {
        width: 100%;
    }
    
    .nav-menu a {
        position: relative;
    }
`;
document.head.appendChild(style);