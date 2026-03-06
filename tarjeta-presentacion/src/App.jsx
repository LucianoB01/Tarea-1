import { useState } from 'react'
import Tarjeta from './components/Tarjeta'
import './App.css'

const luis = {
  nombre: "Luis",
  profesion: "Electricista",
  imagen: "https://img3.stockfresh.com/files/k/kurhan/m/31/430736_stock-photo-electrician.jpg",
  descripcion: "Luis es una electricista de Villa Celina con bastos años de experiencia en el rubro"
}

const juan = {
  nombre: "Juan",
  profesion: "Plomero",
  imagen: "https://c8.alamy.com/comp/2BJD60F/young-handsome-plumber-with-pipe-wrench-on-white-background-2BJD60F.jpg",
  descripcion: "Juan es un confiable plomero de Cordoba, especializado en edificios"
}

const carlos = {
  nombre: "Carlos",
  profesion: "Abogado",
  imagen: "https://media.istockphoto.com/id/1458896133/photo/lawyer-and-client-on-steps.jpg?s=612x612&w=0&k=20&c=qP0UrtuSe4JX6tJrZIUz0Q7vZAdN7wDOXWJ3eb7Tcjo=",
  descripcion: "Carlos es un reconocido abogado penalista con mas de 20 años de experiencia"
}




function App() {

  return (
    <>
      <h1>Profesionales</h1>
      <div className='tarjeta-container'>
        <Tarjeta datos={luis} />
        <Tarjeta datos={juan} />
        <Tarjeta datos={carlos} />
      </div>
    </>
  )
}

export default App
