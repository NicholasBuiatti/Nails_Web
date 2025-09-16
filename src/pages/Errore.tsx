import { Ghost } from "lucide-react";

const Error = () => {
    return (
        <div className="text-red-700 p-4 mb-4 min">
            <div className="flex flex-col items-center gap-2 mx-auto">
                <Ghost size={64} />
                <h1 className='text-5xl text-center'>404 page not found</h1>
            </div>
        </div>
    )
}

export default Error