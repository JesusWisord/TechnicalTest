import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from './styles/index.module.scss';
import MenuDesplegable from '../components/MenuDesplegable';

const arrayMarcas = [];

function HomePage() {
  const [marcas, setMarcas] = useState([]);
  const [items, setItems] = useState([]);

  function addMarca(marcaToAdd) {
    setMarcas([...marcas, marcaToAdd]);
  }

  const handleSubmitMarca = (e) => {
    const marcaToAdd = document.getElementById('marca').value;
    addMarca(marcaToAdd);
    console.log(marcas);
  };

  const addItem = (nuevoItem) => {
    setItems([...items, nuevoItem]);
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    const marca = e.target.marca.value;
    const modelo = e.target.modelo.value;
    const precio = e.target.precio.value;
    const nuevoItem = {
      marca,
      modelo,
      precio,
      id: uuidv4(),
    };
    addItem(nuevoItem);
  };

  const deleteItem = (itemId) => {
    const newArray = items.filter((item) => item.id !== itemId);
    setItems(newArray);
  };

  const handleDelete = (e) => {
    const itemId = e.target.parentNode.id;
    deleteItem(itemId);
  };

  return (
    <div className={style.container}>
      <input type="text" name="marca" placeholder="Marca: " id="marca" />
      <button type="submit" onClick={(e) => handleSubmitMarca(e)}>Agregar marca</button>
      <form onSubmit={(e) => handleSubmitItem(e)}>
        <MenuDesplegable arrayMarcas={marcas} />
        <input type="text" name="modelo" placeholder="Modelo: " id="modelo" />
        <input type="text" name="precio" placeholder="Precio: " id="precio" />
        <button type="submit">Agregar Modelo</button>
      </form>
      <ul>
        {items.length > 0
          ? items.map((item) => (
            <li key={item.id} id={item.id}>
              {item.marca}
              {' '}
              -
              {item.modelo}
              {' '}
              -
              {item.precio}
              {' '}
              -
              <button type="button" onClick={(e) => handleDelete(e)}> DELETE </button>
            </li>
          ))
          : null}

      </ul>
    </div>
  );
}

export default HomePage;
