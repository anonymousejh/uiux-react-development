import { ChakraProvider, Select } from '@chakra-ui/react'
import React, { useState } from 'react';
import './App.css';
import ItemCard from './components/ItemCard/ItemCard';
import { Car } from './types/Car';

const allItems: Car[] = [
  {
    id: 1,
    name: 'Porsche Macan',
    year: 2017,
    price: 44998,
    drivetrain: 'Gasoline',
    imgSrc: 'https://pictures.dealer.com/h/herbchambersporsche/0668/8413cb78f00662e9490d84f56e6f23adx.jpg?impolicy=downsize_bkpt&imdensity=1&w=520'
  },
  {
    id: 2,
    name: 'Toyota Prius',
    year: 2013,
    price: 15598,
    drivetrain: 'Hybrid',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/47-jtdkn3du3d1630569/img-1-600x400.jpg'
  },
  {
    id: 3,
    name: 'Toyota Prius',
    year: 2016,
    price: 27997,
    drivetrain: 'Hybrid',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/33-jtdkarfu9g3005422/img-1-600x400.jpg'
  },
  {
    id: 4,
    name: 'Toyota RAV4',
    year: 2019,
    price: 27998,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/e9-2t3a1rfvxkc026775/img-1-600x400.jpg'
  },
  {
    id: 5,
    name: 'Toyota RAV4',
    year: 2019,
    price: 22998,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/c8-2t3p1rfv4kc005902/img-1-600x400.jpg'
  },
  {
    id: 6,
    name: 'Toyota RAV4',
    year: 2018,
    price: 21998,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/e5-jtmp1rfv2kj023957/img-1-600x400.jpg'
  },
  {
    id: 7,
    name: 'Toyota RAV4 Prime',
    year: 2020,
    price: 32598,
    drivetrain: 'Hybrid',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/24-2t3p1rfv4kc051973/img-1-600x400.jpg'
  },
  {
    id: 8,
    name: 'Genesis GV70',
    year: 2019,
    price: 30000,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/de-kmtg34la5ku015740/img-1-600x400.jpg'
  },
  {
    id: 9,
    name: 'Genesis GV70',
    year: 2021,
    price: 42998,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/af-kmtg34ta7nu096695/img-1-600x400.jpg'
  },
  {
    id: 10,
    name: 'Tesla Model 3',
    year: 2021,
    price: 45203,
    drivetrain: 'Electric',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/39-5yj3e1ea5mf016031/img-1-600x400.jpg'
  },
  {
    id: 11,
    name: 'Tesla Model 3',
    year: 2019,
    price: 32998,
    drivetrain: 'Electric',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/3d-5yj3e1eb2kf437548/img-1-600x400.jpg'
  },
  {
    id: 12,
    name: 'Porsche 911',
    year: 2021,
    price: 92322,
    drivetrain: 'Gasoline',
    imgSrc: 'https://www.edmunds.com/assets/m/for-sale/15-wp0ad2a92ks140902/img-1-600x400.jpg'
  },
]

function App() {
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0)
  const [priceSort, setPriceSort] = useState(null)
  const [drivetrainFilter, setDrivetrainFilter] = useState(null)
  const [yearFilter, setYearFilter] = useState(null)
  const addedCars: number[] = []

  const renderedItems = () => {
    let toRender = allItems
    if (priceSort === 'high-to-low') {
      toRender = toRender.sort((a: Car, b: Car) => {
        return b.price - a.price
      })
    }
    else if (priceSort === 'low-to-high') {
      toRender = toRender.sort((a: Car, b: Car) => {
        return a.price - b.price
      })
    }
    if (drivetrainFilter !== null) {
      toRender = toRender.filter((a: Car) => {
        return a.drivetrain === drivetrainFilter
      })
    }
    if (yearFilter !== null) {
      toRender = toRender.filter((a: Car) => {
        return a.year == yearFilter
      })
    }
    let temp = []
    for (const item of toRender) {
      temp.push(<ItemCard id={item.id} key={item.id} name={item.name} year={item.year} price={item.price} drivetrain={item.drivetrain} shoppingCartTotal={shoppingCartTotal} setShoppingCartTotal={setShoppingCartTotal} imgSrc={item.imgSrc} selected={item.id in addedCars} addedCars={addedCars}/>)
    }
    return(temp)
  }

  const sortByPrice = (e: any) => {
    if (e.target.value === 'high-to-low' || e.target.value === 'low-to-high') {
      setPriceSort(e.target.value)
    } else {
      setPriceSort(null)
    }
  }

  const filterByDrivetrain = (e: any) => {
    if (e.target.value === 'Gasoline' || e.target.value === 'Hybrid' || e.target.value === 'Electric') {
      setDrivetrainFilter(e.target.value)
    } else {
      setDrivetrainFilter(null)
    }
    console.log(e.target.value)
  }

  const filterByYear = (e: any) => {
    if (e.target.value === '2013' || e.target.value === '2016' || e.target.value === '2017' || e.target.value === '2018' || e.target.value === '2019' || e.target.value === '2020' || e.target.value === '2021') {
      setYearFilter(e.target.value)
    } else {
      setYearFilter(null)
    }
    console.log(e.target.value)
  }

  return (
    <ChakraProvider>
      <div className="App">
        <div className="top-bar">
          <div className="main-header">
            Purchase Cars for the Whole Family
          </div>
          <div className="filters-sort-and-total-price">
            <div className="filters-and-sort-bar">
              <Select placeholder='Filter a drivetrain' width='200px' marginLeft='20px' onChange={filterByDrivetrain}>
                <option value='Gasoline'>Gasoline</option>
                <option value='Hybrid'>Hybrid</option>
                <option value='Electric'>Electric</option>
              </Select>
              <Select placeholder='Filter a year' width='200px' marginLeft='20px' onChange={filterByYear}>
                <option value='2013'>2013</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
              </Select>
              <Select placeholder='Sort by price' width='200px' marginLeft='20px' onChange={sortByPrice}>
                <option value='high-to-low'>From High to Low</option>
                <option value='low-to-high'>From Low to High</option>
              </Select>
            </div>
            <div className="total-price">
              Cart Total: ${shoppingCartTotal}
            </div>
          </div>
        </div>
      <div className="items-wrapper">
        {renderedItems()}
      </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
