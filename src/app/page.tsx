"use client";

import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Bot, 
  Globe, 
  Shield, 
  Zap,
  ArrowRight,
  Download
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash", "C#"],
      icon: Code,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "React", "Node.js", "Next.js", "OpenCV"],
      icon: Globe,
      color: "from-green-500 to-green-600"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "Helm"],
      icon: Cloud,
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      icon: Database,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      category: "Tools",
      skills: ["Pandas", "Tableau", "gRPC", "RabbitMQ", "Git"],
      icon: Zap,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Anirudha Kyathsandra
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate Software Engineer with expertise in full-stack development, 
                machine learning, and cloud infrastructure. I love building innovative solutions 
                that solve real-world problems and create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const skillsSection = document.getElementById('skills');
                    if (skillsSection) {
                      skillsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  View My Skills
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="/Anirudha_Kyathsandra_2025_SWE_Resume (3).pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-600 font-semibold text-lg">Software Engineer</p>
                    <p className="text-blue-500 text-sm">Full-Stack • ML • Cloud</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated software engineer with a strong foundation in computer science and 
                a passion for creating innovative solutions. With experience in both technical development 
                and team leadership, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in software engineering has led me through various domains including web development, 
                machine learning, cloud infrastructure, and mobile applications. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, playing sports, 
                or mentoring other developers. I&apos;m always excited to take on new challenges and learn from every experience.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">2+ years of software development experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Mentored and tutored 20+ students in software engineering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Expertise in Java, JavaScript, and AWS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Passionate about machine learning and AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with daily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skillGroup.color} rounded-xl mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how we can collaborate to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
