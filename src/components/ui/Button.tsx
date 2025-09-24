import {motion} from "framer-motion";

interface ButtonProps {
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    children: React.ReactNode;
}

export const Button = ({
    href,
    target,
    rel,
    className,
    children
} : ButtonProps) => {
    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            className={`px-2 py-1 text-white rounded-lg ${className}`}
            initial={{ 
                backgroundColor: "#ec4899" // pink-500
            }}
            animate={{ 
                backgroundColor: "#f97316" // orange-500
            }}
            whileHover={{ 
                backgroundColor: "#8b5cf6", // violet-500
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ 
                backgroundColor: "#06b6d4", // cyan-500
                scale: 0.95 
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                backgroundColor: { duration: 0.5 }
            }}
        >
            {children}
        </motion.a>
    );
}
