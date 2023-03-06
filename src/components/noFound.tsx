import Image from "next/image";

export const NoFound = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image
                src="/nothing-here.png"
                alt="Não encontramos nada"
                height={500}
                width={500}
                priority
            />
            <span>
                Não encontramos nada...
            </span>
        </div>
    )
}
