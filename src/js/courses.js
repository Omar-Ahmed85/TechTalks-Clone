import tailwindThumbnail from '../assets/images/thumbnail-tailwind.webp';
import nextjsThumbnail from '../assets/images/thumbnail-nextjs.webp';

const courses = [
    {
        id: 1,
        difficulty: 'Intermediate',
        thumbnail: tailwindThumbnail,
        title: 'Master Tailwind CSS',
        description: 'Master responsive design, utility-first workflows, and custom components with the latest version of Tailwind CSS.',
        duration: '1h',
        numberOfLearners: '40+',
        rating: 4.9
    },
    {
        id: 2,
        difficulty: 'Beginner',
        thumbnail: nextjsThumbnail,
        title: 'Master Next.js 16',
        description: 'Build powerful, modern web applications with Next.js. Learn server-side rendering, API routes, and deployment strategies.',
        duration: 'Coming Soon',
        numberOfLearners: '0',
        rating: 0
    }
];

export default courses;