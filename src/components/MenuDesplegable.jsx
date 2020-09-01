import React from 'react';

const MenuDesplegable = ({ arrayMarcas }) => {
  console.log('comp', arrayMarcas);
  return (
    <select name="marca">
      {
        arrayMarcas.length > 0
          ? arrayMarcas.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index}>
              {item}
            </option>
          ))
          : null
      }
    </select>
)};

export default MenuDesplegable;
