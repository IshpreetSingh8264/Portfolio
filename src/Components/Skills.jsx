export default function Skills() {
    const skills = ["HTML", "CSS", "Javascript", "Typescript", "React", "Node JS", "Angular JS", "C#", ".NET", ".NET CORE", "Firebase", "Python","SQL","Laravel","MongoDB","PHP"];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto text-gray-300">
            <h2 className="text-center text-6xl text-emerald-400 font-bold">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-3 justify-center flex-wrap mx-auto max-w-3xl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                            className="cursor-pointer px-12 py-10 
                                        rounded bg-gray-800 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl hover:scale-105 hover:bg-emerald-500 transition">
                            {skill}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
