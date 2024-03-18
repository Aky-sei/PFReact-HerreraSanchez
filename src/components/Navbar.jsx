import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-purple-900 px-4 m-3 h-20 rounded-lg flex justify-between">
            <section className="flex">
                <Link className="mx-2 h-10 w-8 self-center" to={'/'}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/imagen_2024-03-17_202918804.png?alt=media&token=41c90596-1e5c-4991-8fb5-9d688da90c1e" alt="" />
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