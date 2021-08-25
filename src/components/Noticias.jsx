import axios from 'axios';
import { useEffect, useState } from 'react';
import Noticia from './Noticia';

export default function Noticias(props) {
    //hay que guardar el dato del select en un ESTADO
    //HAY QUE CREAR UN ESTADO (USETATE)
    //useState es una funcion que nos devuelve un estado(state), y una funcion para actualizar ese estado.
    //POR QUE QUEREMOS GUARDARLO EN UN ESTADO?, por que en react, la unica forma de guardar un dato y que se conserve, es utilizando estados. ej algun dato que sacamos del usuario lo podemos conservar.
       //1ro HOOCKS
    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('us');
    const [noticias, setNoticias] = useState([]);
    //El array vacio se va a  cargar cuando recibamos info de la api

       //2do useEFFECT APIS
    //Controlar efectos secundarios, por ejemplos los cambios de estados. Entonces con el useeffect podemos controlar cuando se debe ejecutar.
    //El primer parametro es una funcion (CALLBACK ) y el segundo parametro un array vacio.(si se llama una vez), si quiero llamar mas veces como en nuestro caso , es un ARRAY, QUE Se llama ARRAY DE DEPENDENCIAS. ( DONDE ESTA EL ESTADO QUE QUIERO QUE DEPENDA MI FUNCION)
    useEffect(() => {
        //aqui va a ocurrir una funcion asicronica, por que debemos traer informacion de un lugar externo ( puede demorar mas). Entonces nosotros tenemos que acomodar js, para que sea una pagina sincronica. " no se ejecuta hasta que se cumpla tal cosa, osea puede ejecutarse sin detenerse el proceso que ya se esta ejecutando."
   const request =  async () => {
       //ahora llamamos una api. mediante un url ''.
       const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=3d14a9a2701b47d6bcad5c070e9ce228&category=${categoria}`);
       const news = response.data.articles;
       console.log("🚀 ~ file: Noticias.jsx ~ line 36 ~ request ~ news", news)
       setNoticias(news);
   }
   request();
//    console.log('despues de funcion asincronica');
}, [categoria, pais] );


        //3ro ESTADOS
    const guardarCategoria = (event) => {
        setCategoria(event.target.value);
    }
    const guardarPais= (event) => {
        setPais(event.target.value);
    }
    // categoria = event.target.value
    //No hay que sobre escribir el estado. la linea de arriba esta mal
        //ahora cambiamos props. por noticias.
        const mapNoticias = noticias.map((noti) => (
            <Noticia key={noti.id} noticia={noti} />
        ));
    
    return (
        <div>
            <h2>Noticias</h2>
            <form>
                <label htmlFor="category">Categoría</label>
                <select name="" id="category" onChange={guardarCategoria}>
                    <option value="general">General</option>
                    <option value="business" >Negocios</option>
                    <option value="entertainment" >Entretenimiento</option>
                </select>

                <label htmlFor="pais">País</label>
                <select name="" id="pais" onChange={guardarPais}>
                    <option value="us">USA</option>
                    <option value="ar" >ARG</option>
                    <option value="br" >BRS</option>
                </select>
            </form>
            {/* al cambiar el valor de mi estado con el select, cambia el valor del parrafo */}
            <p>{categoria}</p>
            <div className="d-flex flex-wrap">
                {mapNoticias}
            </div>
        </div>
    );
}
