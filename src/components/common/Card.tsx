import { motion } from "framer-motion";
import testImage from '../../assets/test.webp';

interface CardProps {
    title: string;
    description: string;
    image?: string;
    variant?: 'gradient' | 'elegant' | 'minimal';
}

export const Card = ({ title, description, image = testImage, variant = 'gradient' }: CardProps) => {
    const getCardStyles = () => {
        switch (variant) {
            case 'elegant':
                return "group relative flex flex-col mx-auto items-center bg-white border-2 border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 md:flex-row md:max-w-xl overflow-hidden backdrop-blur-sm";
            case 'minimal':
                return "group relative flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:flex-row md:max-w-xl overflow-hidden";
            default:
                return "group relative flex flex-col mx-auto items-center bg-gradient-to-br from-white via-pink-50 to-purple-50 border border-pink-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:flex-row md:max-w-xl overflow-hidden";
        }
    };

    const cardVariants = {
        initial: { y: 0 },
        hover: {
            y: -15,
            boxShadow: variant === 'elegant' ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
    };

    const ctaVariants = {
        initial: { opacity: 0, x: -10 },
        hover: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className={getCardStyles()}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            <div className="relative overflow-hidden">
                <motion.img
                    className="object-cover w-full rounded-t-xl h-64 md:h-auto md:w-48 md:rounded-none md:rounded-l-xl"
                    src={image}
                    alt={title || "Nail art image"}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="flex flex-col justify-between p-6 leading-normal">
                <motion.h5
                    className={`mb-3 text-2xl font-bold tracking-tight ${variant === 'minimal'
                        ? 'text-gray-900'
                        : variant === 'elegant'
                            ? 'text-gray-800'
                            : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'
                        }`}
                    whileHover={{
                        color: variant === 'minimal' ? '#ec4899' : variant === 'elegant' ? '#7c3aed' : undefined
                    }}
                >
                    {title}
                </motion.h5>
                <p className="mb-3 font-normal text-gray-700 leading-relaxed">
                    {description}
                </p>
                <motion.div
                    className="flex items-center space-x-2"
                    variants={ctaVariants}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-pink-600 font-medium">Scopri di più</span>
                </motion.div>
            </div>
        </motion.div>
    );
}