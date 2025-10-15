$(document).ready(function() {
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.navbar .items').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.mobile-menu-toggle').removeClass('active');
            $('.navbar .items').removeClass('active');
        }
    });

    // Close mobile menu when clicking on menu items
    $('.navbar .items__item_link').click(function() {
        $('.mobile-menu-toggle').removeClass('active');
        $('.navbar .items').removeClass('active');
    });

    // Prevent menu from closing when clicking inside the menu
    $('.navbar .items').click(function(e) {
        e.stopPropagation();
    });

    // Testimonial Avatar Switching
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            name: "Sarah Johnson",
            title: "CEO of TechCorp"
        },
        {
            text: "Exceptional service and outstanding results! The team delivered beyond our expectations and helped us achieve our digital transformation goals. Their attention to detail and professional approach made all the difference.",
            name: "Michael Chen",
            title: "CTO of InnovateLab"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            name: "Ricky Aprilia",
            title: "Founder of Varibo"
        },
        {
            text: "Working with this team has been a game-changer for our business. Their innovative solutions and creative approach helped us stand out in a competitive market. Highly recommended!",
            name: "Emma Rodriguez",
            title: "Marketing Director at GrowthCo"
        },
        {
            text: "Professional, reliable, and incredibly talented. They transformed our vision into reality with precision and creativity. The results speak for themselves - our engagement has increased significantly.",
            name: "David Thompson",
            title: "Founder of StartupX"
        }
    ];

    let currentTestimonial = 2; // Default to Ricky Aprilia

    $('.testimonial-avatar').click(function() {
        const testimonialIndex = parseInt($(this).data('testimonial'));
        
        if (testimonialIndex !== currentTestimonial) {
            // Remove active class from all avatars
            $('.testimonial-avatar').removeClass('active');
            
            // Add active class to clicked avatar
            $(this).addClass('active');
            
            // Update testimonial content with fade effect
            $('.testimonial p').fadeOut(300, function() {
                $(this).text(testimonials[testimonialIndex].text).fadeIn(300);
            });
            
            // Update current testimonial info
            $('.current_testimonier h2').fadeOut(300, function() {
                $(this).text(testimonials[testimonialIndex].name).fadeIn(300);
            });
            
            $('.current_testimonier h4').fadeOut(300, function() {
                $(this).text(testimonials[testimonialIndex].title).fadeIn(300);
            });
            
            currentTestimonial = testimonialIndex;
        }
    });

    // Initialize first testimonial as active
    $('.testimonial-avatar[data-testimonial="2"]').addClass('active');

    // Smooth scrolling for navigation links
    $('.navbar .items__item_link').click(function(e) {
        e.preventDefault();
        
        const targetText = $(this).text().toLowerCase().trim();
        let targetSection;
        
        switch(targetText) {
            case 'home':
                targetSection = $('.hero_wraper');
                break;
            case 'about us':
                targetSection = $('.realisations_wraper');
                break;
            case 'services':
                targetSection = $('.newsletter_wraper');
                break;
            case 'prodcts':
                targetSection = $('.testimonials_wraper');
                break;
            default:
                return;
        }
        
        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top - 80
            }, 800);
        }
    });

    // Newsletter form submission
    $('.newsletter_wraper button[type="submit"]').click(function(e) {
        e.preventDefault();
        
        const email = $('.newsletter_wraper input[type="email"]').val();
        
        if (email && isValidEmail(email)) {
            // Simulate form submission
            $(this).text('Subscribed!').css('background', '#28a745');
            $('.newsletter_wraper input[type="email"]').val('').attr('placeholder', 'Thank you for subscribing!');
            
            // Reset after 3 seconds
            setTimeout(() => {
                $(this).text('Subscribe').css('background', '#706FE5');
                $('.newsletter_wraper input[type="email"]').attr('placeholder', 'Enter your email address');
            }, 3000);
        } else {
            // Show error
            $('.newsletter_wraper input[type="email"]').css('border', '2px solid #dc3545').attr('placeholder', 'Please enter a valid email');
            
            setTimeout(() => {
                $('.newsletter_wraper input[type="email"]').css('border', '').attr('placeholder', 'Enter your email address');
            }, 3000);
        }
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add hover effects to cards
    $('.card').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );

    // Add smooth transitions to all interactive elements
    $('.btn, .card, .testimonial-avatar').css('transition', 'all 0.3s ease');

    // Handle window resize
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.mobile-menu-toggle').removeClass('active');
            $('.navbar .items').removeClass('active');
        }
    });
});