import { Drivetrain } from "./Drivetrain";

export interface Car {
    id: number,
    name: string,
    year: number,
    price: number,
    drivetrain: Drivetrain,
    imgSrc: string,
}