export default function Projects() {
    const projects = [
        {
            name: "Hulu Clone",
            description: "A landing page clone of Hulu.com.",
            link: "https://ishpreetsingh8264.github.io/HuluClone/",
            imageSrc: "assets/Projects/hulu.png"
        },
        {
            name: "FreeKaaMaal Landing page",
            description: "A landing page clone of freekaamaal.",
            link: "https://ishpreetsingh8264.github.io/Project1/",
            imageSrc: "assets/Projects/freekaamaal.png"
        },
      
        {
            name: "Funcorp",
            description: "A landing page clone of funcorp.in",
            link: "https://ishpreetsingh8264.github.io/First-react/",
            imageSrc: "assets/Projects/funcorp.png"
        },
        {
            name: "eTreeks React Design",
            description: "A React design of the etreeks langing page.",
            link: "https://ishpreetsingh8264.github.io/demo5/",
            imageSrc: "assets/Projects/etreeks.png"
        },
        {
            name: "Responsive React Layout",
            description: "A React design of a responsive layout.",
            link: "https://ishpreetsingh8264.github.io/design1/",
            imageSrc: "assets/Projects/design1.png"
        },
        {
            name: "Movie Listing",
            description: "A web application for listing movies.",
            link: "https://ishpreetsingh8264.github.io/MovieListing",
            imageSrc: "assets/Projects/Movie Listing.png"
        },
        {
            name: "Sticky Notes",
            description: "An application for creating and managing sticky notes.",
            link: "https://ishpreetsingh8264.github.io/StickyNotes",
            imageSrc: "assets/Projects/Sticky notes.png"
        },
        {
            name: "Calculator",
            description: "A simple calculator web application.",
            link: "https://ishpreetsingh8264.github.io/Calculator",
            imageSrc: "assets/Projects/Calculator.png"
        },
        {
            name: "Password Generator",
            description: "Generate strong passwords with various options.",
            link: "https://ishpreetsingh8264.github.io/PasswordGenerator/",
            imageSrc: "assets/Projects/password generator.png"
        },
        {
            name: "Crack the Code",
            description: "A game where you crack the secret code.",
            link: "https://ishpreetsingh8264.github.io/Crackthecode/",
            imageSrc: "assets/Projects/Crack The code.png"
        },
        {
            name: "QR Code Generator",
            description: "Generate QR codes for URLs, text, and more.",
            link: "https://ishpreetsingh8264.github.io/QRCodeGenerator/",
            imageSrc: "assets/Projects/Qr.png"
        },
        {
            name: "Drawing Application",
            description: "Create digital drawings and sketches.",
            link: "https://ishpreetsingh8264.github.io/DrawingApplication/",
            imageSrc: "assets/Projects/Drawing.png"
        },
        {
            name: "Button Ripple Effect",
            description: "Add interactive ripple effects to buttons.",
            link: "https://ishpreetsingh8264.github.io/ButtonRippleEffect/",
            imageSrc: "assets/Projects/RippleEffect.png"
        },
        {
            name: "Breathing Exercise",
            description: "Guide for breathing exercises to relax and destress.",
            link: "https://ishpreetsingh8264.github.io/BreathingExercise/",
            imageSrc: "assets/Projects/breathing.png"
        },
        {
            name: "Hangman",
            description: "Classic word guessing game with hangman theme.",
            link: "https://ishpreetsingh8264.github.io/Hangman/",
            imageSrc: "assets/Projects/hangman.png"
        }
    ];

    return (
        <section id="projects" className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto text-gray-300">
            <h2 className="text-5xl text-emerald-400 font-bold text-center">
                My Projects
            </h2>
            {projects.map((project, index) => (
                <div key={index} className="p-10 bg-gray-800 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href={project.link} className="w-full h-full">
                            <img src={project.imageSrc} alt={project.name} className="w-full h-full bg-cover rounded" />
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center lg:text-left text-gray-300 mb-2">
                            <a className="hover:underline hover:text-emerald-400" href={project.link}>
                                {project.name}
                            </a>
                        </h2>
                        <p className="text-center lg:text-left">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
