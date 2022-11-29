import { Drivetrain } from "../../types/Drivetrain";
import { Button, Image } from '@chakra-ui/react'
import './ItemCard.css'
import { useState } from "react";

export interface ItemCardProps {
    id: number,
    name: string,
    year: number,
    price: number, // sort & filter & aggregator
    drivetrain: Drivetrain, // filter
    shoppingCartTotal: number, // for aggregating
    setShoppingCartTotal: (x: number) => void,
    imgSrc: string,
    selected: boolean,
    addedCars: number[]
}

export default function ItemCard(props: ItemCardProps) {
    let {id, name, year, price, drivetrain, shoppingCartTotal, setShoppingCartTotal, imgSrc, selected, addedCars} = props
    const [addedToFleet, setAddedToFleet] = useState(selected)
    const handleAddOrRemoveFromFleet = () => {
        if (addedToFleet) {
            setShoppingCartTotal(shoppingCartTotal-price)
            addedCars.push(id)
        } else {
            setShoppingCartTotal(shoppingCartTotal+price)
            addedCars = addedCars.filter(obj => obj !== id);
        }
        setAddedToFleet(!addedToFleet)
    }
    return (
        <div className="item-card">
            <div className="img-wrapper">
                <Image src={imgSrc} alt={year + ' ' + name} borderRadius='15px 0px 0px 15px'/>
            </div>
            <div className="item-card-right">
                <div className="description-wrapper">
                    <div className="name">
                        {name}
                    </div>
                    <div className="year">
                        Year: {year}
                    </div>
                    <div className="price">
                        Price: {'$' + price}
                    </div>
                    <div className="drivetrain">
                        Drivetrain: {drivetrain}
                    </div>
                </div>
                <Button colorScheme={addedToFleet ? 'red' : 'teal'} size='sm' onClick={handleAddOrRemoveFromFleet}>
                    {addedToFleet ? 'Remove from fleet' : 'Add to fleet'}
                </Button>
            </div>
        </div>
    );
  }