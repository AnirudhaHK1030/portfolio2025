import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building, 
  Users, 
  Code, 
  Database, 
  Cloud,
  Smartphone,
  Bot,
  Globe,
  Shield
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Co-op",
      company: "General Dynamics Mission Systems",
      location: "McLeansville, NC",
      period: "June 2025 - Present",
      description: "Building scalable microservices and leading UI software testing automation for mission-critical defense systems.",
      technologies: ["Java Spring Boot", "Docker", "Kubernetes", "RabbitMQ", "gRPC", "Bash", "Eggplant", "JUnit", "Google Test"],
      achievements: [
        "Built scalable alert management microservice reducing system response time by 30%",
        "Led UI software testing automation reducing test execution time by 35%",
        "Developed comprehensive software test plans achieving 95%+ code coverage"
      ],
      icon: Shield
    },
    {
      id: 2,
      title: "Teaching Assistant/Mentor",
      company: "University of Illinois Urbana Champaign (UIUC)",
      location: "Champaign, IL",
      period: "Aug 2024 - May 2025",
      description: "Mentoring student teams through software development projects and progress tracking.",
      technologies: ["Software Design", "Project Management", "Team Leadership", "Mentoring"],
      achievements: [
        "Mentored 4 student teams through software development projects",
        "Achieved 100% project delivery rate",
        "Provided guidance on software design principles and best practices"
      ],
      icon: Users
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "General Mills",
      location: "Minneapolis, MN",
      period: "Jul 2023 - Aug 2024",
      description: "Engineered critical applications and data pipelines for food manufacturing operations.",
      technologies: ["Next.js", "React", "TypeScript", "RESTful APIs", "GCP", "VB.NET", "C#", "MySQL", "Hasura", "Jenkins", "Docker"],
      achievements: [
        "Engineered Shelf Life Application saving $2.5MM with $20MM+ cost avoidance across 50+ plants",
        "Developed dynamic food box labelling system reducing compliance errors by 30%",
        "Architected ETL data pipeline improving sync efficiency by 60% and eliminating 8 hours of manual work weekly"
      ],
      icon: Code
    },
    {
      id: 4,
      title: "Software Engineering Intern",
      company: "John Deere",
      location: "Des Moines, IA",
      period: "July 2022 - Dec 2022",
      description: "Developed automated image detection and injection systems for agricultural applications.",
      technologies: ["C++", "OpenCV", "CUDA", "Linux", "Real-time Systems"],
      achievements: [
        "Developed automated image detection system achieving 90%+ accuracy for weed detection",
        "Built image injection system accelerating development by 40%",
        "Eliminated field testing costs through automated testing solutions"
      ],
      icon: Bot
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "John Deere",
      location: "Des Moines, IA",
      period: "May 2022 - Jul 2022",
      description: "Built automated testing pipelines to improve engineering productivity.",
      technologies: ["Python", "Jenkins", "Git", "Linux"],
      achievements: [
        "Built automated testing pipeline reducing field testing requirements",
        "Gave engineers back 30% of their work time",
        "Implemented continuous integration practices"
      ],
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software engineering, from internships to co-op positions, 
            showcasing growth in technical skills and leadership capabilities.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative animate-stagger">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 md:left-1/2 md:transform md:-translate-x-px"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg md:left-1/2 md:transform md:-translate-x-2"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <experience.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Career Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A summary of my professional growth and key accomplishments across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Leadership</h3>
              <p className="text-gray-600">Mentored student teams and led testing automation initiatives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Growth</h3>
              <p className="text-gray-600">Progressed from intern to software engineer across multiple industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Tech</h3>
              <p className="text-gray-600">Worked with cutting-edge technologies in defense, agriculture, and manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
