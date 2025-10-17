import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import skylifeImg from "../assets/images/project/skylife.png";
import kolonmallImg from "../assets/images/project/kolonmall.png";
import milktImg from "../assets/images/project/milkt.png";
import niceImg from "../assets/images/project/nice.png";
import hunetImg from "../assets/images/project/hunet.png";

export function Projects() {
  const projects = [
    {
      title: "Skylife renewal",
      description:
        "스카이라이프 고도화 브랜드 샵 통합 개발",
      tags: ["React", "Node.js", "Tailwindcss", "Next.js", "Figma"],
      gradient: "from-purple-500 to-pink-500",
      liveLink: "https://www.skylife.co.kr/Main",
      image: skylifeImg,
    },
    {
      title: "E-commerce shopingmall renewal",
      description:
        "이커머스 쇼핑몰 코오롱몰 리뉴얼",
      tags: [
        "React (Ui Library)",
        "Panda CSS (CSS framework)",
        "Next.js",
        "typescript",
        "Figma",
      ],
      gradient: "from-blue-500 to-cyan-500",
      liveLink: "https://www.kolonmall.com/",
      image: kolonmallImg,
    },
    {
      title: "Milk T web & app SM(유지보수)",
      description:
        "- 밀크T유아, 밀크T초등, 밀크T중학, 밀크T고등\n" +
        "- pc, mobile, tablet 유지보수 및 관리",
      tags: ["html", "css", "javascript", "jquery", "Photoshop", "Figma"],
      gradient: "from-orange-500 to-red-500",
      liveLink: "https://www.milkt.co.kr/Main/Main_new",
      image: milktImg,
    },
    {
      title: "Nicebizline SI(신규프로젝트)",
      description:
        "나이스평가정보의 KISLINE(온라인 종합기업정보 서비스) 리뉴얼 프로젝트",
      tags: ["Java", "SpringBoot", "Vue", "HTML", "CSS"],
      gradient: "from-green-500 to-emerald-500",
      liveLink: "https://www.nicebizline.com/",
      image: niceImg,
    },
    {
      title: "In-house program development",
      description: "내부 교육사이트 web , mobile web 유지 및 보수",
      tags: ["Javascript", "J-Query", "Kendo Ui"],
      gradient: "from-indigo-500 to-purple-500",
      liveLink: "https://www.hunet.co.kr/",
      image: hunetImg,
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
              {/* Project Image - 16:9 비율 */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* 호버 시 오버레이 */}
                <div className="absolute top-0 left-0 w-full h-full bg-purple-600/0 group-hover:bg-purple-600/30 transition-all duration-300"></div>
                
                {/* 버튼 컨테이너 - 중앙에 고정 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white rounded-full text-purple-600 shadow-xl hover:shadow-2xl transition-all"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{project.description}</p>
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
