import { CartWidget } from "./CartWidget"

export const Navbar = () => {
    return (
        <nav className="bg-purple-900 px-4 m-3 h-20 rounded-lg flex justify-between">
            <section className="flex">
                <img className="mx-2 h-10 w-8 self-center" src="https://aky-sei.github.io/PF-Herrera-Sanchez/img/logo-principal.png" alt="" />
                <button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Unetenos</button>
                <button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Conocenos</button>
                <button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Productos</button>
                <button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Contactanos</button>
            </section>
            <CartWidget className="justify-self-end"></CartWidget>
        </nav>
    )
}