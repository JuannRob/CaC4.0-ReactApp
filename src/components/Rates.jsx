import React, { useState } from 'react'

const Rates = ({ ratesData, setBase }) => {

  const [baseInput, setBaseInput] = useState('') //aca se almacen los cambios que se van haciendo en el input

  //Cambia la base de baseInput cada vez que se cambia en el input
  const handleChange = (e) => {
    setBaseInput(e.target.value)
  };

  //Cuando se apreta Mostrar cambia la base de la app segun lo que esté asignado en 'baseInput'
  const changeBase = (e) => {
    e.preventDefault();
    setBase(baseInput);
  }

  // Tiene un formulario para cambiar la divisa base, un párrafo que indica la base actual y una lista con todas sus conversiones.
  return (
    <>
      <form onSubmit={changeBase}>
        <label>
          Divisa:
          <input type="text" value={baseInput} onChange={handleChange} placeholder='ARS' />
        </label>
        <input type="submit" value="Mostrar" />
      </form>
      <p>Conversiones del <b>{ratesData.base}</b>:</p>
      <ul>
        {ratesData.rates ? (
          Object.entries(ratesData.rates).map(([key, value], index) => (
            <li key={index}><b>{key}</b>: {value.toString()}</li>
          ))
        ) : (
          <li>Actualizando información...</li>
        )}
      </ul>
    </>
  )

}

export default Rates