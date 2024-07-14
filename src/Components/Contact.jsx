export default function Contact() {
    return (
        <section id="contact" className="my-20 max-w-5xl mx-auto p-6 bg-gray-800 text-gray-300 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-emerald-400 text-center mb-8">
                Contact Me
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
               
                <div className="bg-gray-900 rounded-lg p-4 max-w-md w-full">
                    <p className="text-xl font-semibold text-emerald-400 mb-2">
                        Email:
                    </p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="text-lg hover:underline hover:text-emerald-400"
                        href="mailto:ishpreetsingh8264@gmail.com"
                    >
                        ishpreetsingh8264@gmail.com
                    </a>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 max-w-md w-full">
                    <p className="text-xl font-semibold text-emerald-400 mb-2">
                        Secondary Email:
                    </p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="text-lg hover:underline hover:text-emerald-400"
                        href="mailto:borndeveloper@outlook.com"
                    >
                        borndeveloper@outlook.com
                    </a>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 max-w-md w-full">
                    <p className="text-xl font-semibold text-emerald-400 mb-2">
                        Phone Number:
                    </p>
                    <p className="text-lg">+91 9855801283</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 max-w-md w-full">
                    <p className="text-xl font-semibold text-emerald-400 mb-2">
                        Skype:
                    </p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="text-lg hover:underline hover:text-emerald-400"
                        href="skype:live:.cid.e96aec6ed23affd"
                    >
                        live:.cid.e96aec6ed23affd
                    </a>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 max-w-md w-full">
                    <p className="text-xl font-semibold text-emerald-400 mb-2">
                        Discord:
                    </p>
                    <p className="text-lg">ishpreetsingh</p>
                </div>
            </div>
        </section>
    );
}
