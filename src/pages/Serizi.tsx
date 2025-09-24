import { motion } from "framer-motion"
import { Card } from "../components/common/Card"
import testImage from "../assets/test.webp"
import testImageNoBg from "../assets/test-removebg-preview.webp"
import testLogo from "../assets/testLogo.webp"
import testLogoNoBg from "../assets/testLogo-nobg.webp"

export default function Servizi() {

    const Listino = [
        {
            nome: "Refill gel e acrygel",
            descrizione: "Ricarica in gel e acrygel per unghie perfette e durature nel tempo.",
            variant: "gradient" as const,
            image: testImage
        },
        {
            nome: "Semipermanente rinforzato",
            descrizione: "Semipermanente con base rinforzante per unghie fragili e delicate.",
            variant: "elegant" as const,
            image: testImageNoBg
        },
        {
            nome: "Ricostruzione / Allungamento",
            descrizione: "Servizio completo di ricostruzione e allungamento con tecniche moderne.",
            variant: "elegant" as const,
            image: testLogo
        },
        {
            nome: "Semipermanente piedi",
            descrizione: "Trattamento semipermanente dedicato alle unghie dei piedi.",
            variant: "gradient" as const,
            image: testLogoNoBg
        },
    ]


    return (
        <div className="container mx-auto py-8 px-4">
            <div className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    I Nostri Servizi
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Scopri la nostra gamma completa di trattamenti per unghie, realizzati con prodotti di alta qualità e tecniche innovative.
                </motion.p>
            </div>
            <div className="flex flex-wrap">
                {Listino.map((el, idx) => (
                    <motion.div
                        className="w-full md:w-1/2 px-2 my-4"
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card key={idx} title={el.nome} description={el.descrizione} variant={el.variant} image={el.image} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
