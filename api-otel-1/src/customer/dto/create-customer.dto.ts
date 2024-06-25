import { IsDateString, IsNotEmpty } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty({message: 'Name cannot be empty'})
    name: string;

    @IsNotEmpty({message: 'Birth date cannot be empty'})
    @IsDateString()
    dateBirth: string;

}
