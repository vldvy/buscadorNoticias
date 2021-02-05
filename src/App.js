import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=643bde3537b3411f88922d77be4faa44`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias);

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);



  return (
  
    <Fragment>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
    );

}

export default App;
