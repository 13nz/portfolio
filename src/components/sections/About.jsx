import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
    const languages = ["C#", "Python", "SQL", "JavaScript", "C++", "TypeScript"]
    const frameworks = [".NET", "React", "Unity", "Flutter", "Godot", "Azure"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-700 to-orange-300 bg-clip-text text-transparent text-center">
                        About me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I've worked professionally on backend systems, but outside of work and school, 
                            I like to tinker with code, build small games, and explore new tools. 
                            I'm drawn to hands-on, experimental projects—anything that teaches me something new.
                        </p>

                        {/*  grid for skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* languages */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Languages
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((lang, key) => (
                                        <span key={key} className="bg-orange-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-orange-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* frameworks & technologies */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frameworks & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span key={key} className="bg-pink-800/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-pink-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>BSc in Computer Science</strong> - University of London (2024 - 2027)
                                </li>
                                <p>
                                    Relevant Coursework: Data Structures & Algorithms, Web Development, Object Oriented Programming, Computer Security
                                </p>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Software Engineer / Consultant @ <b>Deloitte</b> (2022 - 2024)
                                    </h4>
                                    <p> 
                                        Built ERP modules in C# and TypeScript, optimized SQL databases and CI/CD pipelines, 
                                        and contributed across the full SDLC from design to deployment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    )
}