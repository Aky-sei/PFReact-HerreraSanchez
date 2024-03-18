import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "coderhouse-reactjs-94976.firebaseapp.com",
  projectId: "coderhouse-reactjs-94976",
  storageBucket: "coderhouse-reactjs-94976.appspot.com",
  messagingSenderId: "175779372730",
  appId: "1:175779372730:web:514df2aa7340069a7cac83"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

const prod = [
    {
        "id": 1,
        "name": "Factorio",
        "description": "Factorio es un juego en el cual construyes y mantienes fábricas. Tendrás que extraer recursos, investigar tecnologías, construir infraestructuras, automatizar la producción y luchar contra enemigos.",
        "tags": ["supervivencia","infantil"],
        "price": 2000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/1.jpg?alt=media&token=8d2084d2-0868-4faa-95d7-7d16ac33b5da"
    },
    {
        "id": 2,
        "name": "Diablo IV",
        "description": "Diablo 4 es un juego clásico en sus planteamiento, pero mucho más ágil, directo y fluido en el combate. Blizzard ha creado nuevos diseños de escenarios, mecánicas y enemigos, que en conjunción, consiguen presentar unos combates más espectaculares y divertidos de jugar.",
        "tags": ["acción","aventuras"],
        "price": 1500,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/2.jpg?alt=media&token=6b57f9f6-3201-4bc1-a28c-5e93f47814b2"
    },
    {
        "id": 3,
        "name": "WoW",
        "description": "World of Warcraft es un juego online en el que los jugadores crean un personaje y exploran un mundo virtual lleno de misiones, aventuras y desafíos. Los jugadores pueden formar grupos para completar misiones juntos y enfrentarse a jefes poderosos.",
        "tags": ["acción","aventuras"],
        "price": 1000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/3.jpg?alt=media&token=d1976ccf-4b34-45ce-843f-8cb98b2f9e10"
    },
    {
        "id": 4,
        "name": "Palworld",
        "description": "Este es un juego multijugador de supervivencia en mundo abierto inmenso y original, en el que tendrás que hacerte con unas misteriosas criaturas llamadas Pals, capaces de combatir, construir, cultivar y trabajar en fábricas.",
        "tags": ["infantil","supervivencia"],
        "price": 2000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/4.jpg?alt=media&token=518eb364-2fa3-4203-8181-67bf864f26ae"
    },
    {
        "id": 5,
        "name": "Elden Ring",
        "description": "Es un RPG de fantasía, acción y aventura ambientado en un mundo creado por Hidetaka Miyazaki y George R. R. Martin. El peligro y el descubrimiento están en cada giro del juego más grande de FromSoftware hasta la fecha.",
        "tags": ["supervivencia","aventuras"],
        "price": 2000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/5.jpg?alt=media&token=c9d302d4-3466-4d52-a702-6530ba84eb98"
    },
    {
        "id": 6,
        "name": "TEKKEN 8",
        "description": "En este último capítulo, Jin Kazama intentará desafiar a su destino enfrentándose a su padre Kazuya Mishima, causante de la guerra y la destrucción en todo el mundo.",
        "tags": ["acción"],
        "price": 1000,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/6.jpg?alt=media&token=b7942be3-b33c-437f-8a04-dc9f5b497016"
    },
    {
        "id": 7,
        "name": "Ultrakill",
        "description": "Un FPS retro ultraviolento y frenético que combina el estilo de puntuación basado en habilidades de los juegos de acción con personajes con una carnicería sin adulterar inspirada en los mejores juegos de disparos de los 90.",
        "tags": ["acción"],
        "price": 1500,
        "stock": 0,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/7.jpg?alt=media&token=f7887ac9-bff5-4e73-9603-715203a71bc8"
    },
    {
        "id": 8,
        "name": "Bloons TD 6",
        "description": "Crea la defensa perfecta con una combinación de torres moneriles poderosas y héroes increíbles para reventar a todos los bloons invasores.",
        "tags": ["infantil","supervivencia"],
        "price": 1000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/8.jpg?alt=media&token=883aa875-2d64-404c-8a5b-53c60e6f7046"
    },
    {
        "id": 9,
        "name": "Baldur's Gate 3",
        "description": "Baldur's Gate 3 es un videojuego de rol que incorpora elementos de juego en solitario y multijugador cooperativo, donde los jugadores pueden crear uno o más personajes y formar un grupo con otros personajes generados por el sistema para avanzar en la trama.",
        "tags": ["aventuras"],
        "price": 2000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/9.jpg?alt=media&token=bc747c79-0f82-416f-876a-43e2059d612f"
    },
    {
        "id": 10,
        "name": "Dota 2",
        "description": "Un videojuego perteneciente al género de Arena de batalla en línea ARTS («estrategia de acción en tiempo real»), también conocido en inglés como MOBA",
        "tags": ["acción"],
        "price": 1000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/10.jpg?alt=media&token=90f9b5ba-8acb-4c9e-b593-6c68e1c4964d"
    },
    {
        "id": 11,
        "name": "Bioshock",
        "description": "BioShock es el primer juego de acción en primera persona donde todo es un arma. Ambientado en una utopía subacuática, BioShock otorga total libertad para convertir el entorno, los enemigos e, incluso, el agua y el fuego, en poderosos instrumentos contra tus enemigos.",
        "tags": ["aventuras"],
        "price": 1500,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/11.jpg?alt=media&token=ba9ac77e-5019-496a-8e71-acd4f0b95406"
    },
    {
        "id": 12,
        "name": "Stray",
        "description": "tray es un juego de aventura felino en tercera persona ambientado en medio de detallados callejones con luces de neón de una ciberciudad decadente y los turbios alrededores de sus sórdidos bajos fondos.",
        "tags": ["aventuras","infantil"],
        "price": 1500,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/12.jpg?alt=media&token=94c8edc5-c437-41f5-9f58-e3c7be493b49"
    }
]

export const createproducts = async () => {
    prod.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            name: prod.name,
            description: prod.description,
            tags: prod.tags,
            price: prod.price,
            stock: prod.stock,
            img: prod.img
        })
    })
}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
} 

export const getProduct = async (id) => {
    const productos = await getDoc(doc(bdd, "productos", id))
    const item = {...productos.data(), id: productos.id}
    return item
} 

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}