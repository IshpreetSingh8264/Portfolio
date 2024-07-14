export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-gray-800 text-gray-300 max-w-5xl mx-auto">
            <div className="flex-1">
                <img
                    src="/WorkingTogether.png"
                    alt="About"
                    className="w-full h-full bg-cover"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-400 text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    Hi there! I'm Ishpreet Singh, a passionate JavaScript & React JS developer with a knack for building engaging web applications.
                </p>
                <p>
                    I started my journey in Computer Science with a diploma from Guru Nanak Dev Polytechnic, Ludhiana. Along the way, I've honed my skills in HTML, CSS, JavaScript, and React JS, gaining proficiency in Bootstrap for front-end development.
                </p>
                <p>
                    With over 4 years of hands-on experience, I've tackled diverse projects, including creating an Algo Trading Software for forex markets and crafting dynamic React JS applications like a toy shop landing page converted into components and props.
                </p>
                <p>
                    Beyond technical skills, I bring leadership, effective communication, and problem-solving abilities to every project. I'm driven by a quest for continuous learning, evidenced by certifications in AI, Python programming, and Ethical Hacking.
                </p>
                <p>
                    Outside of coding, I've excelled in various academic and extracurricular activities, securing positions in quizzes and competitions, and contributing to innovative projects like "Waste to Electricity."
                </p>
                <p>
                    Let's connect and explore how we can create meaningful digital experiences together!
                </p>
            </div>
        </section>
    );
}
