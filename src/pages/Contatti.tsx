import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export default function Homepage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contatti
                </motion.h1>
                <motion.p

                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Per qualsiasi informazione o prenotazione, non esitare a contattarci tramite i seguenti canali:
                </motion.p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-6 md:space-y-0 items-center md:items-start">
                <motion.div
                    className="w-1/2 bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-pink-600">Indirizzo</h2>
                    <div className="flex items-center mb-2">

                        <p className="text-gray-700">📍 Via Roma 123, 00100 Roma, Italia</p>
                        <Button
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Via Roma 123, 00100 Roma, Italia")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2"
                        >
                            Indicazioni
                        </Button>
                    </div>
                    <div className="h-64 md:h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890!2d12.4963655!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjAiTiAxMsKwMjknNDcuMyJF!5e0!3m2!1sit!2sit!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
                <div className="flex flex-col space-y-6 w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">

                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Contatti</h2>
                        <p className="text-gray-700">Telefono: <a href="tel:+390612345678" className="text-pink-600 hover:underline">+39 06 12345678</a></p>
                        <p className="text-gray-700 mt-2">Email: <a href="mailto:info@nails.com" className="text-pink-600 hover:underline">info@nails.com</a></p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Orari</h2>
                        <p className="text-gray-700 mt-2">Orari di apertura: Lun-Ven 9:00 - 19:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
