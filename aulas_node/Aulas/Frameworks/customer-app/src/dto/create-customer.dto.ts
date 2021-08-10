import {  IsString, IsNumber } from "class-validator";

export class CustomerDto {
    @IsString()
    name: string;
    @IsNumber()
    idade: number;
    @IsString()
    documento: string;
}