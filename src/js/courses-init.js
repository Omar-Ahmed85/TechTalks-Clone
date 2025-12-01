import courses from './courses.js';
import { createIcons, iconsConfig } from './lucide.js';

// Function to create a course card
function createCourseCard(course) {
	const card = document.createElement('article');
	card.className = 'course-card';
	card.setAttribute('data-difficulty', course.difficulty.toLowerCase());

	// Create star rating display (only if rating > 0)
	const ratingHTML =
		course.rating > 0
			? `<div>
				<i class="size-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
				<span>${course.rating}</span>
			</div>`
			: '';

	// Duration display
	const durationHTML =
		course.duration !== 'Coming Soon'
			? `<div>
				<i class="size-4" data-lucide="clock"></i>
				<span>${course.duration}</span>
			</div>`
			: '';

	// Learners count (only if > 0)
	const learnersHTML =
		course.numberOfLearners !== '0'
			? `<div>
				<i class="size-4" data-lucide="users"></i>
				<span>${course.numberOfLearners} learners</span>
			</div>`
			: '';

	// Button text based on availability
	const buttonText =
		course.duration === 'Coming Soon' ? 'Coming Soon' : 'Enroll Now';
	const buttonDisabled = course.duration === 'Coming Soon' ? 'disabled' : '';

	card.innerHTML = `
		<img src="${course.thumbnail}" alt="${course.title}" loading="lazy" decoding="async" />
		<div>
			<div>
				<span>${course.difficulty}</span>
				${ratingHTML}
			</div>
			<h3>${course.title}</h3>
			<p>${course.description}</p>
			<div>
				<div>
					${durationHTML}
					${learnersHTML}
				</div>
				<button ${buttonDisabled}>${buttonText}</button>
			</div>
		</div>
	`;

	return card;
}

// Function to render all courses
function renderCourses(coursesToRender = courses) {
	const container = document.getElementById('courses-container');
	const countElement = document.getElementById('courses-count');

	if (!container) return;

	// Clear existing courses
	container.innerHTML = '';

	// Update count
	if (countElement) {
		countElement.textContent = coursesToRender.length;
	}

	// Add courses to container
	coursesToRender.forEach((course) => {
		const card = createCourseCard(course);
		container.appendChild(card);
	});

	// Reinitialize Lucide icons for the new elements
	createIcons({
		icons: iconsConfig,
	});
}

// Search functionality
function setupSearch() {
	const searchInput = document.getElementById('course-search');
	if (!searchInput) return;

	searchInput.addEventListener('input', (e) => {
		const searchTerm = e.target.value.toLowerCase();

		const filteredCourses = courses.filter((course) => {
			return (
				course.title.toLowerCase().includes(searchTerm) ||
				course.description.toLowerCase().includes(searchTerm) ||
				course.difficulty.toLowerCase().includes(searchTerm)
			);
		});

		renderCourses(filteredCourses);
	});
}

// Filter functionality
function setupFilters() {
	const filtersToggle = document.getElementById('filters-toggle');
	const filtersPanel = document.getElementById('filters-panel');
	const applyFiltersBtn = document.getElementById('apply-filters');
	const difficultySelect = document.getElementById('difficulty');

	// Toggle filters panel
	if (filtersToggle && filtersPanel) {
		filtersToggle.addEventListener('click', () => {
			filtersPanel.classList.toggle('active');
		});
	}

	// Apply filters
	if (applyFiltersBtn && difficultySelect) {
		applyFiltersBtn.addEventListener('click', () => {
			const selectedDifficulty = difficultySelect.value;

			let filteredCourses = courses;

			if (selectedDifficulty !== 'all') {
				filteredCourses = courses.filter(
					(course) =>
						course.difficulty.toLowerCase() === selectedDifficulty
				);
			}

			renderCourses(filteredCourses);
		});
	}
}

// Initialize courses on page load
function initCourses() {
	renderCourses();
	setupSearch();
	setupFilters();
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initCourses);
} else {
	initCourses();
}

export { renderCourses, initCourses };
