import { Card } from "../components/common/Card"

export default function Servizi() {

    const Listino = [
        {
            nome: "Refill gel e acrygel",
            descrizione: "Ricarica in gel e acrygel per unghie perfette."
        },
        {
            nome: "Semipermanente rinforzato",
            descrizione: "Ricarica in gel e acrygel per unghie perfette."
        },
        {
            nome: "Ricostruzione / Allungamento",
            descrizione: "Ricarica in gel e acrygel per unghie perfette."
        },
        {
            nome: "Semipermanente piedi",
            descrizione: "Ricarica in gel e acrygel per unghie perfette."
        },
    ]


    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="flex flex-wrap">
                {Listino.map((el, index) => (
                    <Card key={index} title={el.nome} description={el.descrizione} />
                ))}
            </div>
        </div>
    );
}
