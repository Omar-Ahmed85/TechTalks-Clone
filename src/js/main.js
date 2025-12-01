import './lucide.js';
import './splide-init.js';
import './courses-init.js';

// ===== Mobile Menu Toggle =====
const initMobileMenu = () => {
	const menuButton = document.getElementById('menu-button');
	const mobileMenu = document.getElementById('mobile-menu');

	if (!menuButton || !mobileMenu) {
		console.warn('Mobile menu elements not found');
		return;
	}

	// Toggle menu visibility when button is clicked
	menuButton.addEventListener('click', () => {
		const isHidden = mobileMenu.classList.contains('hidden');

		if (isHidden) {
			mobileMenu.classList.remove('hidden');
		} else {
			mobileMenu.classList.add('hidden');
		}
	});

	// Close menu when clicking on navigation links
	const mobileMenuLinks = mobileMenu.querySelectorAll('a');
	mobileMenuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			mobileMenu.classList.add('hidden');
		});
	});
};

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
	initMobileMenu();
}

// ===== Scroll Animations =====
// Initialize Intersection Observer for scroll animations
const initScrollAnimations = () => {
	// Select all sections to animate
	const sections = document.querySelectorAll(
		'main > section, main > article'
	);

	// Translation directions for variety
	const translations = ['from-bottom', 'from-left', 'from-right'];

	// Observer options
	const observerOptions = {
		root: null, // Use viewport as root
		threshold: 0.1, // Trigger when 10% of element is visible
		rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
	};

	// Callback function for intersection
	const observerCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Add animation class when element enters viewport
				entry.target.classList.add('animate-in');

				// Add staggered animation to child elements if they exist
				const children = entry.target.querySelectorAll(':scope > *');
				children.forEach((child, index) => {
					// Add stagger delay as CSS variable
					child.style.setProperty(
						'--stagger-delay',
						`${index * 0.1}s`
					);
					child.classList.add('stagger-item');
				});

				// Optionally unobserve after animation (remove next line to re-animate on scroll up)
				// observer.unobserve(entry.target);
			} else {
				// Remove animation class when element leaves viewport (for re-animation)
				entry.target.classList.remove('animate-in');

				// Remove stagger classes from children
				const children = entry.target.querySelectorAll('.stagger-item');
				children.forEach((child) => {
					child.classList.remove('stagger-item');
					child.style.removeProperty('--stagger-delay');
				});
			}
		});
	};

	// Create observer
	const observer = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	// Observe each section with alternating translation directions
	sections.forEach((section, index) => {
		// Add initial state class
		section.classList.add('animate-on-scroll');

		// Check if section has centered content (avoid horizontal translations for these)
		const isCentered =
			section.classList.contains('items-center') ||
			section.classList.contains('courses-section') ||
			section.querySelector('.text-center') !== null;

		// Add varied translation direction
		// Use only bottom translation for centered sections to avoid awkward shifts
		let translationClass;
		if (isCentered) {
			translationClass = 'from-bottom';
		} else {
			// Cycle through all translations for non-centered sections
			translationClass = translations[index % translations.length];
		}
		section.classList.add(translationClass);

		// Start observing
		observer.observe(section);
	});
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
	initScrollAnimations();
}
