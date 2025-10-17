import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-500" },
        { name: "Next.js", level: 88, color: "from-gray-700 to-gray-900" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-600 to-green-700" },
        { name: "Express", level: 82, color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", level: 78, color: "from-blue-500 to-indigo-600" },
      ],
    },
    {
      category: "Design & Tools",
      skills: [
        { name: "Figma", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "Git", level: 88, color: "from-orange-500 to-red-600" },
        { name: "AWS", level: 75, color: "from-yellow-500 to-orange-500" },
        { name: "Docker", level: 72, color: "from-blue-400 to-blue-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Floating Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["JavaScript", "CSS3", "HTML5", "REST API", "GraphQL", "Redux", "Webpack", "Jest"].map(
            (tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3 },
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg cursor-pointer"
              >
                {tech}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
