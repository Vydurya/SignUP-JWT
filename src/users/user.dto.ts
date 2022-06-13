import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class User {
    
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
};