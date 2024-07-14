export default function Hero() {
    return (
        <section
            id="hero"
            className="px-10 py-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 min-h-[80vh] bg-gray-800 text-gray-300">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                 
                    <h2 className="text-center text-emerald-400 text-5xl font-bold">
Ishpreet Singh                    </h2>
                </div>
                <p className="text-center">
                    A highly motivated and self-directed Computer Science and
                    Engineering student with strong analytical, problem-solving, and
                    technical skills, seeking an opportunity to apply my passion for
                    technology and dedication to contribute to innovative projects while
                    adding new feathers to cap of professional development.
                </p>
            </div>
            <div className="flex-1">
                <img src=
                    "IshpreetSingh.jpg"
                    alt="Ishpreet Singh"
                    className="w-full h-full bg-cover" />
            </div>
        </section>
    );
}
