// القائمة المنسدلة
document.addEventListener('DOMContentLoaded', function() {
  // القائمة المنسدلة للخدمات
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function() {
      dropdownMenu.classList.remove('show');
    });

    dropdownMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // قائمة الموبايل
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // نموذج التواصل - إرسال عبر واتساب
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      const whatsappMessage = `مرحباً، أنا ${name}%0A%0Aرقم الجوال: ${phone}%0Aالبريد الإلكتروني: ${email}%0A%0Aالرسالة:%0A${message}`;
      const whatsappUrl = `https://wa.me/96774786786?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // تأثير التمرير السلس
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // إضافة تأثير الظهور عند التمرير
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .hero-text, .hero-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
