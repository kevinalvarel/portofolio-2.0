"use client";
import { motion } from 'motion/react'
import { useState } from "react";
import { FadeIn } from '../ui/motion-primitive';
import { Activity, Code2, LucideWebhook, Smartphone } from 'lucide-react';

interface skillCategoriesProps {
    skill: {
        title: string;
        icon: any;
        description: string;
    }
    isSelected: boolean;
    onClick: () => void;
}

const skillCategories = {
    web: {
        title: "Web Development",
        icon: Code2,
        description: "Building modern, web applications",
        languages: [
            { name: "NextJS", highlight: true },
            { name: "Tanstack Start", highlight: true },
            { name: "React", highlight: true },
            { name: "TypeScript", highlight: true },
            { name: "JavaScript", highlight: true },
            { name: "HTML", highlight: false },
            { name: "CSS", highlight: false },
            { name: "TailwindCSS", highlight: true },
            { name: "Bootstrap", highlight: false },
            { name: "Flask", highlight: false },
            { name: "Django", highlight: false },
            { name: "Firebase", highlight: false },
        ],
        tools: [
            "Vercel",
            "Vite",
            "Figma",
            "Docker",
            "Git",
            "Github",
            "Google Cloud",
            "Postman",
        ],
    },
    api: {
        title: "Backend & API",
        icon: LucideWebhook,
        description: "Creating robust and scalable backend services",
        languages: [
            { name: "NodeJS", highlight: true },
            { name: "ExpressJS", highlight: true },
            { name: "FastAPI", highlight: true },
            { name: "Python", highlight: true },
            { name: "Flask", highlight: false },
            { name: "PostgreSQL", highlight: true },
            { name: "MySQL", highlight: true },
            { name: "MongoDB", highlight: true },
            { name: "Firebase", highlight: false },
        ],
        tools: [
            "Docker",
            "Kubernetes",
            "Postman",
            "Swagger",
            "Git",
            "Github",
            "Google Cloud",
        ],
    },
    ai: {
        title: "AI & Machine Learning",
        icon: Activity,
        description: "Developing intelligent solutions with ML/AI",
        languages: [
            { name: "RAG Pipelines", highlight: true },
            { name: "Gemini API", highlight: true },
            { name: "OpenAI API", highlight: true },
            { name: "LangChain", highlight: true },
            { name: "Python", highlight: true },
            { name: "TensorFlow", highlight: true },
            { name: "PyTorch", highlight: false },
            { name: "Scikit-learn", highlight: false },
            { name: "Pandas", highlight: false },
            { name: "NumPy", highlight: false },
            { name: "Jupyter", highlight: false },
        ],
        tools: [
            "Jupyter Notebook",
            "Google Colab",
            "Google Cloud AI",
            "AWS SageMaker",
            "IBM Watson",
        ],
    },
    mobile: {
        title: "Mobile Development",
        icon: Smartphone,
        description: "Cross-platform mobile app development",
        languages: [
            { name: "React Native", highlight: true },
            { name: "Flutter", highlight: true },
            { name: "JavaScript", highlight: false },
            { name: "TypeScript", highlight: false },
            { name: "Dart", highlight: false },
        ],
        tools: ["Android Studio", "React Native CLI"],
    },
};



function SkillCard({ skill, isSelected, onClick }: skillCategoriesProps) {
    const Icon = skill.icon;

    return (
        <motion.div
            onClick={onClick}
            className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${isSelected
                ? "bg-background border-foreground border-2 shadow-lg"
                : "bg-background border-foreground hover:bg-background/80 hover:border-foreground/30"
                }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            {/* Glow effect - removed for selected state */}
            {!isSelected && (
                <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
            )}

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div
                    className={`p-4 rounded-xl transition-all duration-300 ${isSelected ? "bg-foreground/30" : "bg-foreground/10 group-hover:bg-foreground/20"
                        }`}>
                    <Icon className="w-8 h-8 text-black" />
                </div>
                <div>
                    <h3 className={`font-semibold ${isSelected ? "text-foreground" : "text-foreground/30"} text-lg mb-2`}>
                        {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

interface SkillDetailsProps {
    selectedSkill: {
        title: string;
        icon: any;
        description: string;
        languages: { name: string; highlight: boolean }[];
        tools: string[];
    }
}

function SkillDetails({ selectedSkill }: SkillDetailsProps) {
    if (!selectedSkill) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 space-y-8"
        >
            {/* Languages & Frameworks Section */}
            <motion.div
                className="bg-white/40 border border-foreground rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                    Technology Stack
                </h3>
                <motion.div
                    key={selectedSkill.title}
                    className="flex flex-wrap justify-center gap-3"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
                    initial="hidden"
                    animate="show"
                >
                    {selectedSkill.languages.map((skill) => (
                        <motion.span
                            key={skill.name}
                            variants={tagVariants}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${skill.highlight
                                    ? "bg-background text-foreground shadow-md border-background scale-105 z-10 hover:shadow-lg"
                                    : "bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 text-black hover:bg-white/60"
                                }`}
                        >
                            {skill.highlight && (
                                <span className="text-yellow-400 text-[10px] animate-pulse">✦</span>
                            )}
                            {skill.name}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
                className="bg-white/20 border border-foreground rounded-2xl p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-xl font-medium text-foreground mb-6 text-center uppercase tracking-wider">
                    Infrastructure & Tools
                </h3>
                <motion.div
                    key={selectedSkill.title + "-tools"}
                    className="flex flex-wrap justify-center gap-3"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
                    initial="hidden"
                    animate="show"
                >
                    {selectedSkill.tools.map((tool) => (
                        <motion.span
                            key={tool}
                            variants={tagVariants}
                            className="px-4 py-1.5 bg-background border border-foreground rounded-lg text-foreground text-xs font-medium"
                        >
                            {tool}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillCategories>("web");
    return (
        <div className="relative">
            <div className="mx-auto container px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground to-gray-600 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore my technical skills across different domains. Click on any
                        category to see the specific technologies and tools I work with.
                    </p>
                </motion.div>

                {/* Skill Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {Object.entries(skillCategories).map(([key, skill], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}>
                            <SkillCard
                                skill={skill}
                                isSelected={selectedCategory === key}
                                onClick={() => setSelectedCategory(key as keyof typeof skillCategories)}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Skill Details */}
                <FadeIn >
                    <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
                </FadeIn>
            </div>
        </div>
    );
}