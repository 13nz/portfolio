import { RevealOnScroll } from '../RevealOnScroll'
import { Github, Linkedin } from "lucide-react";


export const Home = () => {
    return (    
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    {/* make text bg gradient, clip bg to text, make text transparent --> gradient text */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent leading-right">
                        Hi, I'm Lena
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a software engineer based in the U.S. with experience building backend systems. 
                        I previously worked at Deloitte and enjoy creating practical, reliable software. 
                        I'm currently studying for a BSc in Computer Science. In my free time, I enjoy exploring game development.
                    </p>

                    <div className="flex justify-center gap-6 mb-8">
                        <a
                            href="https://github.com/13nz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-400 transition-transform hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="www.linkedin.com/in/lena-c-273465243/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-400 transition-transform hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>


                    {/*  buttons for other sections */}
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View Projects
                        </a>

                        <a href="#contact" className="border border-purple-500/50 text-purple-600 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-pink-700/10"
                        >
                            Say hi
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    );
}