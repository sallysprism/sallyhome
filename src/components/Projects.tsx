import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      tags: ["React", "Node.js", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
      tags: ["Next.js", "TypeScript", "Chart.js"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tags: ["React", "Firebase", "Tailwind"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Portfolio Generator",
      description: "AI-powered tool to create beautiful portfolio websites in minutes.",
      tags: ["React", "OpenAI", "Framer Motion"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Weather Application",
      description: "Real-time weather forecasts with beautiful animations and detailed information.",
      tags: ["React", "Weather API", "CSS"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Fitness Tracker",
      description: "Track your workouts, nutrition, and progress with detailed analytics.",
      tags: ["React Native", "MongoDB", "Express"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
