import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
      const consultarAPI = async () =>{
        const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5c84029faf6442d3825aa327948fccc8`;

        const respuesta = await fetch(url);

        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
      }

      consultarAPI();
  },[categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <Listado noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
