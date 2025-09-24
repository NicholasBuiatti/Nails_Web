import Test from "../assets/test.png"

export default function Homepage() {
    return (
        <div className="flex flex-col items-center max-w-6xl mx-auto pt-4 border-b">
            <div className="col-12">
                <Jumbotron />
            </div>
            <div className="col-12">
                <Img />
            </div>
        </div>
    );
}

const Jumbotron = () => {
    return (
        <div className="relative flex flex-col h-96 w-full mx-auto rounded-3xl shadow-md">
            <img src="/src/assets/test-removebg-preview.webp" alt="Nail Art" className="absolute inset-0 w-full h-full object-contain" />
            <div className="relative z-10 p-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 drop-shadow-lg">Benvenuta nel tuo Nail Studio</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-900 font-medium">Cura, stile e creatività per le tue unghie. Scopri la nostra galleria e prenota il tuo appuntamento!</p>
                {/* <button className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-all duration-200">Prenota ora</button> */}
                <a
                    href="tel:+390612345678"
                    className="flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                    📞 Chiama
                </a>
                <a
                    href="https://wa.me/390612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                    💬 WhatsApp
                </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
            </div>
        </div>
    )
}

const Img = () => {
    return (
        <div>
            <img src={Test} alt="Test" />
        </div>
    )
}