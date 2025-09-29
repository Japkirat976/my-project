import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const initialCars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', price: 14000 },
  { id: 2, brand: 'Hyundai', model: 'Creta', price: 17000 },
  { id: 3, brand: 'Kia', model: 'Seltos', price: 20000 },
  { id: 4, brand: 'Honda', model: 'Civic', price: 12000 },
  { id: 5, brand: 'Kia', model: 'Carrens', price: 16000 },
  { id: 6, brand: 'Tesla', model: 'Model 3', price: 23000 }
]


function App() {
  const [cars, setCars] = useState(initialCars)


  function removeCar(id) {
    setCars(prev => prev.filter(car => car.id !== id))
  }


    return (
      <div className="Car-display">
        <h1 className="Car-title">Cars</h1>

        <ul className="car-list">
          {cars.map(car => (
          <li key={car.id} className="car-item">
            <span>
              {car.brand} {car.model} - ${car.price}
            </span>
            <button onClick={() => removeCar(car.id)} className="remove-btn">Remove</button>
          </li>
          ))}
          {cars.length === 0 && (
            <li className="empty">No cars available.</li>
          )}
        </ul>
      </div>
  )
}


export default App
