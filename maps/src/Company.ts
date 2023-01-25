import { faker } from "@faker-js/faker";

export class Company {
    name:string;
    catchPhrase:string;
    location:{
        lat:number,
        lng:number
    }
    constructor(){
        this.name = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location ={
            lat:parseFloat(faker.address.longitude()),
            lng:parseFloat(faker.address.latitude())
        }
    }
    content = ():string=>{
    
        return `<h2> Company Name: ${this.name} </h2>`  
        }

}