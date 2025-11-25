import { RevealOnScroll } from '../RevealOnScroll'
import spaceBeagleImg from "../../assets/space_beagle.png"
import musicVisImg from "../../assets/music_vis.png"
import snookerImg from "../../assets/snooker.png"
import weatherDataImg from "../../assets/weather_data.png"
import rpgImg from "../../assets/rpg.png"
import koniImg from "../../assets/koni.png"
import colorithmImg from "../../assets/colorithm.png"
import pixelSpinImg from "../../assets/pixelspin.png"
import ffIgm from "../../assets/forest_forager.png"
import echoesImg from "../../assets/echoes.jpg"

import { Github, ExternalLink, Play } from "lucide-react";


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flext items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-900 to-pink-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    {/*  grid of projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/*  space beagle */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={spaceBeagleImg} alt="Space Beagle Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-bold mb-2">Space Beagle</h3>
                                <p className="text-gray-400 mb-4">
                                    2D Unity platformer where you control a beagle in space, exploring procedurally generated levels to collect treasure and avoid enemies. 
                                </p>
                                <div>
                                    {["C#", "Unity", "Shaders"].map((tech, key) => (
                                    <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                <div >
                                <div className="flex justify-center gap-6 mt-4">
                                    <a
                                        href="https://github.com/13nz/space-beagle"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://lenzz.itch.io/space-beagle"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                        aria-label="Live Demo"
                                    >
                                        <Play className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*  pixel spin */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={pixelSpinImg} alt="PixelSpin Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-bold mb-2">PixelSpin</h3>
                                <p className="text-gray-400 mb-4">
                                    A 2-deck DJ application, with persistant music library, sound FX, samples, and crossfader, with a custom pixel art UI. Written in C++ using the JUCE framework.
                                </p>
                                <div>
                                    {["C++", "JUCE"].map((tech, key) => (
                                    <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                <div >
                                <div className="flex justify-center gap-6 mt-4">
                                    <a
                                        href="https://github.com/13nz/PixelSpin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*  colorithm */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={colorithmImg} alt="Colorithm screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-bold mb-2">Colorithm</h3>
                                <p className="text-gray-400 mb-4">
                                    A web application providing various image effects using pixel manipulation and webcam feed. Written in JavaScript using the p5.js library. 
                                </p>
                                <div>
                                    {["JavaScript", "p5.js"].map((tech, key) => (
                                    <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                <div >
                                <div className="flex justify-center gap-6 mt-4">
                                    <a
                                        href="https://github.com/13nz/colorithm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://13nz.github.io/colorithm/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                        aria-label="Live Demo"
                                    >
                                        <Play className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*  music visualizer */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={musicVisImg} alt="Music Visualizer Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">Music Visualizer</h3>
                            <p className="text-gray-400 mb-4">
                                An interactive music visualizer built with JavaScript and the p5.js creative coding framework.
                            </p>
                            <div>
                                {["JavaScript", "p5.js"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://github.com/13nz/music-visualizer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://13nz.github.io/music-visualizer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="Live Demo"
                                >
                                    <Play className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/*  forest forager */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={ffIgm} alt="Forest Forager Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">Forest Forager</h3>
                            <p className="text-gray-400 mb-4">
                                A 2D pixel art item collecting game. Made in 2 weeks for a game jam in Godot, using GDScript.
                            </p>
                            <div>
                                {["Godot", "GDScript"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://lenzz.itch.io/forest-forager"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="Live Demo"
                                >
                                    <Play className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/*  echoes in the hull */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                            <img src={echoesImg} alt="Game Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">Echoes in the Hull</h3>
                            <p className="text-gray-400 mb-4">
                                A horror themed survival/puzzle 2D game completed in 2 weeks for the GameDev.tv game jam. Made in Unity using C#.
                            </p>
                            <div>
                                {["C#", "Unity"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://nullpixelstudios.itch.io/echoes-in-the-hull"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="Live Demo"
                                >
                                    <Play className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/*  weather stats */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <img src={weatherDataImg} alt="Weather data app Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">Weather Data</h3>
                            <p className="text-gray-400 mb-4">
                                A command-line application for visualizing historical weather trends and predicting future temperatures using Unicode candlestick charts and linear regression.
                            </p>
                            <div>
                                {["C++"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://github.com/13nz/weather-stats"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/*  Snooker */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <img src={snookerImg} alt="Snooker Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">Snooker</h3>
                            <p className="text-gray-400 mb-4">
                                An interactive, physics-based snooker game built with p5.js and Matter.js. 
                                Play through three different game modes, experience realistic ball collisions, strategic cue control, and enjoy creative bonus features like time rewind and target zone challenges.
                            </p>
                            <div>
                                {["JavaScript", "p5.js", "matter.js"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://github.com/13nz/snooker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://13nz.github.io/snooker/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="Live Demo"
                                >
                                    <Play className="w-5 h-5" />
                                </a>
                            </div>
                        </div>


                        {/*  Untitled RPG */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <img src={rpgImg} alt="Space Beagle Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">2D RPG</h3>
                            <p className="text-gray-400 mb-4">
                                A 2D pixel art RPG, where you play as a park ranger exploring mysteries across various national parks.
                                Written in C# using the Godot engine (v. 4.4), currently in development.
                            </p>
                            <div>
                                {["C#", "Godot"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <p className="mb-8 text-purple-400">Coming soon!</p>
                            </div>
                        </div>


                        {/*  Bella */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <img src={koniImg} alt="Pixel Art Platformer Screenshot" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">2D Platformer</h3>
                            <p className="text-gray-400 mb-4">
                                A 2D pixel art platformer game featuring my childhood dog. Made in Godot 3.5 using GDScript.
                            </p>
                            <div>
                                {["Godot", "GDScript"].map((tech, key) => (
                                <span key={key} className="bg-purple-800/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <a
                                    href="https://github.com/13nz/KoniIsland"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-500 hover:text-purple-300 transition-transform hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    )
}