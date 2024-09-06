export interface IProduct {

    id?: string | undefined ;
    title: string ;
    description: string ;
    imageUrl: string;
    price: string ;

}


export interface IFormInput {

    id : string ,
    name : "title" | "description" | "imageUrl" | "price" ,
    label : string ,
    type : string

}