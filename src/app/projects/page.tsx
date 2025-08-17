"use client";

import { useState } from "react";
import { 
  Github,
  ExternalLink,
  Award,
  Users,
  Lightbulb,
  Code,
  Smartphone,
  Bot,
  Cloud,
  Shield,
  GitBranch,
  BookOpen,
  Zap,
  Rocket,
  Briefcase,
  Star,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Election Predictor Analytics Platform",
      description: "ML-powered election prediction system using Python, scikit-learn, and spaCy for sentiment analysis, achieving 87% accuracy across battleground states. Developed interactive React dashboard with real-time polling data visualization and state predictions, processing 10,000+ daily social media posts.",
      technologies: ["Python", "scikit-learn", "spaCy", "React", "Machine Learning", "Data Visualization", "NLP"],
      category: ["web-apps", "ai-ml"],
      icon: Bot,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "IntelliMatch Resume Platform",
      description: "Architected serverless resume parsing system using AWS Lambda, S3, OpenAI API, and Python NLP, automatically extracting skills and qualifications from PDF/Word documents. Implemented job matching algorithm using TF-IDF vectorization and cosine similarity.",
      technologies: ["AWS Lambda", "S3", "OpenAI API", "Python", "NLP", "TF-IDF", "Serverless"],
      category: ["web-apps", "devops"],
      icon: Cloud,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const leadershipRoles = [
    {
      id: 1,
      title: "Iowa State University Cloud Club",
      role: "Founder & Treasurer",
      description: "Founded cloud computing club, organizing AWS training sessions for 50+ students. Established foundational cloud computing education and hands-on learning opportunities.",
      technologies: ["AWS", "Cloud Computing", "Leadership", "Education"],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const filters = [
    { id: "all", name: "All", icon: Star },
    { id: "web-apps", name: "Web Apps", icon: Code },
    { id: "ai-ml", name: "AI/ML", icon: Bot },
    { id: "devops", name: "DevOps", icon: Cloud },
    { id: "leadership", name: "Leadership", icon: Award }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const filteredLeadership = activeFilter === "all" || activeFilter === "leadership" 
    ? leadershipRoles 
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Projects & Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects and leadership roles, demonstrating my ability to 
            build innovative solutions and lead teams effectively.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Projects Section */}
        {filteredProjects.length > 0 && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 animate-stagger">
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {project.category.map(cat => 
                          filters.find(f => f.id === cat)?.name
                        ).join(" • ")}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Leadership Section */}
        {filteredLeadership.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Leadership & Community
            </h2>
            <div className="grid md:grid-cols-2 gap-8 animate-stagger">
              {filteredLeadership.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${role.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {role.title}
                            </h3>
                            <p className="text-blue-600 font-medium">
                              {role.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {role.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/experience"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
