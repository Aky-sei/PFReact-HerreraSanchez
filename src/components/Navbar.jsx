import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-purple-900 px-4 m-3 h-20 rounded-lg flex justify-between">
            <section className="flex">
                <Link className="mx-2 h-10 w-8 self-center" to={'/'}>
                    <img src="https://aky-sei.github.io/PF-Herrera-Sanchez/img/logo-principal.png" alt="" />
                </Link>
                <Link to={'/category/aventuras'}><button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Aventuras</button></Link>
                <Link to={'/category/supervivencia'}><button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Supervivencia</button></Link>
                <Link to={'/category/infantil'}><button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Infantil</button></Link>
                <Link to={'/category/acción'}><button className="bg-purple-300 h-10 w-32 my-5 mx-2 rounded-lg">Acción</button></Link>
            </section>
            <CartWidget className="justify-self-end"></CartWidget>
        </nav>
    )
}