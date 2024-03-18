import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="bg-purple-900 w-1/4 mx-auto my-48 rounded-3xl">
            <h1 className="text-center text-purple-300 py-5">MHH, parece que esa pagina no existe :c</h1>
            <img className="mx-auto w-48 pb-5" src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/NotFound.png?alt=media&token=6cfb3fe7-3288-4575-bd79-5eeec4b5ebf7" alt="Imagen del servidor muerto :deadge:" />
        </div>
    )
}