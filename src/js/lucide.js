import {
	createIcons,
	TrendingUp,
	Zap,
	Sparkles,
	Box,
	Gift,
	Home,
	BookOpen,
	Users,
	Trophy,
	Target,
	Code,
	Play,
	Linkedin,
	SlidersHorizontal,
	Instagram,
	Mail,
	Award,
	GraduationCap,
	Search,
	Menu,
	ChevronRight,
	Star,
	Clock,
} from 'lucide';

// Icons configuration object
const iconsConfig = {
	TrendingUp,
	Zap,
	Sparkles,
	Box,
	Gift,
	Home,
	BookOpen,
	Users,
	Trophy,
	Target,
	Code,
	Play,
	Linkedin,
	SlidersHorizontal,
	Instagram,
	Mail,
	Award,
	GraduationCap,
	Search,
	Menu,
	ChevronRight,
	Star,
	Clock,
};

// Initialize icons on page load
createIcons({
	icons: iconsConfig,
});

// Export for use in other modules
export { createIcons, iconsConfig };
