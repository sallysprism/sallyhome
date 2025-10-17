import { motion } from "motion/react";
import { Code2, Palette, Rocket, Heart } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast and optimized applications",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Creating delightful user experiences",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ME</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer who loves to create amazing digital experiences
            that combine aesthetics with functionality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
