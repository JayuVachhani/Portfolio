import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const tabs = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

const techOrbit = [
  { name: 'React.js', icon: '⚛️', duration: 14 },
  { name: 'Node.js', icon: '🟢', duration: 18 },
  { name: 'MongoDB', icon: '🍃', duration: 22 },
  { name: 'Redis', icon: '🟥', duration: 26 },
]

const stats = [
  { value: '30%', label: 'Bug Reduction', icon: '🐞' },
  { value: '40%', label: 'Performance Gain', icon: '⚡' },
  { value: '50%', label: 'Faster Delivery', icon: '🚀' },
  { value: '100k+', label: 'Users Served', icon: '👥' },
]

const techGrid = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'NestJS', icon: '🛡️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🟥' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
]

const experienceData = [
  {
    company: 'Agile Infoways',
    role: 'Software Developer • Ahmedabad',
    duration: 'Oct 2022 – Present',
    stack: ['React.js', 'NestJS', 'MongoDB', 'Redis', 'SSE'],
    points: [
      'Built scalable frontend systems for healthcare platforms serving 100k+ users.',
      'Delivered healthcare, real estate, and service-booking applications with configurable white-label architecture.',
      'Improved application performance by 40% and reduced bugs by 30%.',
      'Developed backend systems using NestJS, MongoDB, Redis, Amazon S3, and SSE.',
      'Accelerated delivery speed by 50% using AI-assisted development tooling.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Assistant System Engineer • Bangalore',
    duration: 'Nov 2020 – Oct 2022',
    stack: ['React.js', 'Python', 'REST APIs'],
    points: [
      'Built React-based enterprise workflows and reusable components.',
      'Automated repetitive operational flows using Python scripts.',
      'Supported production deployments and enterprise integrations.',
    ],
  },
]

const projectData = [
  {
    title: 'Dealdesk',
    subtitle: 'Real Estate • Senior Developer',
    stack: ['React.js', 'NestJS', 'Python', 'MongoDB', 'Redis'],
    points: [
      'Developed real-time communication architecture using SSE.',
      'Implemented Redis pub/sub messaging between Python and NestJS services.',
      'Built backend APIs, notifications, and caching layers.',
      'Reduced development and delivery time by 50% using AI-assisted tooling.',
      'Led production support and critical issue resolution.',
    ],
  },
  {
    title: 'PureAI – DrChrono',
    subtitle: 'Healthcare • Senior Developer',
    stack: ['React.js', 'NestJS', 'MongoDB', 'Redis'],
    points: [
      'Designed scalable healthcare backend workflows.',
      'Improved engineering speed using AI-assisted development tooling.',
      'Handled production incidents and rapid bug resolution.',
      'Implemented webhook integrations, cron jobs, queues, and reporting systems.',
    ],
  },
  {
    title: 'Ivira – Care Compass',
    subtitle: 'Healthcare SaaS • Senior Developer',
    stack: ['React.js', 'Redux', 'Python', 'AWS'],
    points: [
      'Architected healthcare SaaS platform serving 100k+ users.',
      'Developed Python automation scripts reducing repetitive tasks.',
      'Optimized frontend performance and application stability.',
      'Led junior developers and production deployment workflows.',
    ],
  },
]

function OrbitNode({ tech, orbitTranslate }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: tech.duration, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: tech.duration, repeat: Infinity, ease: 'linear' }}
        style={{ y: orbitTranslate }}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-24 2xl:h-24 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <span className="text-base sm:text-2xl lg:text-3xl 2xl:text-4xl">{tech.icon}</span>
        <span className="text-[8px] sm:text-[10px] lg:text-xs 2xl:text-sm font-medium leading-tight px-1 mt-0.5">
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function ResumeWebsite() {
  const [activeSection, setActiveSection] = useState('experience')
  const [screenWidth, setScreenWidth] = useState(1440)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => setScreenWidth(window.innerWidth)

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const orbitTranslate = useMemo(() => {
    if (screenWidth < 640) return '-115px'
    if (screenWidth < 1024) return '-150px'
    if (screenWidth < 1280) return '-160px'
    if (screenWidth < 1536) return '-175px'
    return '-195px'
  }, [screenWidth])

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <main className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 2xl:p-10">
        <div className="mb-6 2xl:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 w-full items-stretch">
            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href="mailto:vachhanij153@gmail.com"
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-[#0B1120] via-[#0B1022] to-[#09111D] px-4 sm:px-5 py-4 min-h-[82px]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex items-center gap-4 h-full">
                <div className="w-10 h-10 rounded-xl border border-cyan-400/20 bg-cyan-500/10 flex items-center justify-center text-cyan-300 text-lg shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  ✉
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  <p className="text-[10px] sm:text-xs text-cyan-200/50 uppercase tracking-[0.25em] mb-1.5">
                    Email
                  </p>

                  <p className="text-xs sm:text-sm xl:text-[13px] 2xl:text-base text-white group-hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap">
                    vachhanij153@gmail.com
                  </p>

                  <p className="text-xs text-gray-500 mt-1 group-hover:text-cyan-200/70 transition-colors">
                    Click to open mail
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href="tel:+919904775644"
              className="group relative overflow-hidden rounded-3xl border border-green-400/10 bg-gradient-to-br from-[#0B1120] via-[#0B1022] to-[#09111D] px-4 sm:px-5 py-4 min-h-[82px]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex items-center gap-4 h-full">
                <div className="w-10 h-10 rounded-xl border border-green-400/20 bg-green-500/10 flex items-center justify-center text-green-300 text-lg shadow-[0_0_20px_rgba(74,222,128,0.15)]">
                  ☎
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  <p className="text-[10px] sm:text-xs text-green-200/50 uppercase tracking-[0.25em] mb-1.5">
                    Phone
                  </p>

                  <p className="text-xs sm:text-sm xl:text-[13px] 2xl:text-base text-white group-hover:text-green-300 transition-colors duration-300 whitespace-nowrap">
                    +91 9904775644
                  </p>

                  <p className="text-xs text-gray-500 mt-1 group-hover:text-green-200/70 transition-colors">
                    Tap to call directly
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href="https://www.linkedin.com/in/jay-vachhani-853603184/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-indigo-400/10 bg-gradient-to-br from-[#0B1120] via-[#0B1022] to-[#09111D] px-4 sm:px-5 py-4 min-h-[82px]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex items-center gap-4 h-full">
                <div className="w-10 h-10 rounded-xl border border-indigo-400/20 bg-indigo-500/10 flex items-center justify-center text-indigo-300 text-base font-bold shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  in
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  <p className="text-[10px] sm:text-xs text-indigo-200/50 uppercase tracking-[0.25em] mb-1.5">
                    LinkedIn
                  </p>

                  <p className="text-xs sm:text-sm xl:text-[13px] 2xl:text-base text-white group-hover:text-indigo-300 transition-colors duration-300 whitespace-nowrap">
                    Jay Vachhani
                  </p>

                  <p className="text-xs text-gray-500 mt-1 group-hover:text-indigo-200/70 transition-colors">
                    View professional profile
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="/Jay_Vachhani_MERN_Stack_Resume.pdf"
              download="Jay_Vachhani_MERN_Stack_Resume.pdf"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent min-h-[82px] px-5 py-4 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_70%)] opacity-70" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center text-cyan-300 text-xl mb-2 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  ↓
                </div>

                <span className="text-cyan-300 text-xs sm:text-sm xl:text-[13px] 2xl:text-base font-bold group-hover:text-white transition-colors whitespace-nowrap">
                  Download Resume
                </span>

                <span className="text-xs text-cyan-200/60 mt-1">
                  PDF Version
                </span>
              </div>
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 2xl:gap-8 items-start">
          <motion.section className="w-full xl:w-5/12 flex-shrink-0 rounded-[28px] sm:rounded-[36px] border border-indigo-500/20 bg-[#0b1120] overflow-visible">
            <div className="p-4 sm:p-6 lg:p-10 2xl:p-12">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                  Jay <span className="text-cyan-400">Vachhani</span>
                </h1>
                <p className="text-gray-400 mt-3 text-sm sm:text-base lg:text-lg">MERN Stack Developer</p>
              </div>

              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[560px] 2xl:h-[600px] flex items-center justify-center overflow-visible mb-20 sm:mb-28 lg:mb-0 w-full">
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[460px] rounded-full border border-indigo-400/20" />

                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] 2xl:w-[320px] 2xl:h-[320px] rounded-full border border-cyan-400/20" />

                <motion.div className="relative z-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 rounded-full border border-cyan-400/40 bg-[#0b1020]/90 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    JV
                  </h2>
                  <p className="text-gray-300 mt-1 sm:mt-2 text-center text-xs sm:text-base lg:text-lg 2xl:text-xl px-2 sm:px-6">
                    MERN Stack Developer
                  </p>
                </motion.div>

                {techOrbit.map((tech) => (
                  <OrbitNode key={tech.name} tech={tech} orbitTranslate={orbitTranslate} />
                ))}
              </div>



              <div className="mt-4 sm:mt-6 rounded-3xl border border-white/10 bg-[#0b1020]/70 p-3 sm:p-5 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold break-words">
                    Tech I Work With
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs border border-cyan-400/20 bg-cyan-500/5 text-cyan-300">
                      Frontend
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs border border-purple-400/20 bg-purple-500/5 text-purple-300">
                      Backend
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs border border-green-400/20 bg-green-500/5 text-green-300">
                      Cloud
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-4">
                  {techGrid.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/30 py-5 px-3 sm:py-6 sm:px-4 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] w-full overflow-hidden"
                    >
                      <span className="text-4xl sm:text-5xl lg:text-6xl flex-shrink-0">
                        {item.icon}
                      </span>

                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-300 mt-3 sm:mt-4 text-center leading-tight whitespace-nowrap">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <div className="w-full xl:w-7/12 flex-1 rounded-[36px] border border-white/10 bg-[#111111] overflow-hidden">
            <div className="border-b border-white/10 p-3 sm:p-4 flex flex-wrap gap-2 bg-black/30">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border ${activeSection === tab.id ? 'bg-cyan-500 text-white' : 'bg-white/[0.03] text-gray-400'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6 lg:p-8 2xl:p-12 min-h-[500px] xl:min-h-[600px] 2xl:min-h-[800px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#101827] p-4 sm:p-5 2xl:p-6 flex flex-col items-center text-center justify-center hover:bg-white/[0.02] transition-colors">
                    <div className="text-3xl sm:text-4xl 2xl:text-5xl mb-2">{stat.icon}</div>
                    <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-black">{stat.value}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {activeSection === 'experience' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black">Experience</h2>
                  {experienceData.map((exp) => (
                    <div key={exp.company} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold">{exp.company}</h3>
                          <p className="text-gray-400 mt-1">{exp.role}</p>
                        </div>

                        <div className="px-4 py-2 rounded-full border border-white/10 bg-black/30 text-sm text-gray-300 w-fit h-fit">
                          {exp.duration}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs border border-cyan-400/20 bg-cyan-500/5 text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point) => (
                          <li key={point} className="flex gap-3 text-gray-300 leading-relaxed">
                            <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black">Projects</h2>
                  {projectData.map((project) => (
                    <div key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-400 mt-1 mb-4">{project.subtitle}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs border border-purple-400/20 bg-purple-500/5 text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-3">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3 text-gray-300 leading-relaxed">
                            <span className="mt-2 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'education' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-black">Education & Awards</h2>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                    <p className="text-gray-400 mt-2">Information Technology</p>
                    <p className="text-gray-300 mt-4">Sardar Vallabhbhai Patel Institute of Technology, Gujarat</p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-gray-500">Graduation</p>
                        <p className="text-xl font-bold mt-2">Aug 2020</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-gray-500">CGPA</p>
                        <p className="text-xl font-bold mt-2 text-green-400">8.23</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-yellow-400/20 bg-yellow-500/5 p-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-yellow-300 mb-3">
                        Achievement
                      </p>
                      <h3 className="text-xl font-bold">
                        Winner — Internal Company Hackathon
                      </h3>
                    </div>

                    <div className="rounded-3xl border border-red-400/20 bg-red-500/5 p-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-red-300 mb-3">
                        Recognition
                      </p>
                      <h3 className="text-xl font-bold">Firefighter Award</h3>
                      <p className="text-gray-400 mt-2">
                        Critical Production Incident Resolution
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
