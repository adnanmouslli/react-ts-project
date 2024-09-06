import { IFormInput, IProduct } from "../interfaces";

export const productList : IProduct[] = [

    {
        id: "1" ,
        title:"2022 car verary model h2kk" ,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione" ,
        imageUrl : "https://images3.alphacoders.com/133/1335169.png"
    } ,
    {
        id: "2" ,
        title:"2023 car verary model h2kk" ,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione" ,
        imageUrl : "https://t4.ftcdn.net/jpg/06/06/89/23/360_F_606892302_NRjSNj0LkvgwIakG9lKDvY7vbK9Nll0n.jpg"
    } ,
    {
        id: "3" ,
        title:"2024 car verary model h2kk" ,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione" ,
        imageUrl : "https://wallpaper-house.com/data/out/8/wallpaper2you_215530.jpg"
    } ,
    {
        id: "4" ,
        title:"2025 car verary model h2kk" ,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione" ,
        imageUrl : "https://wallpapercave.com/wp/wp14029368.jpg"
    } ,
    {
        id: "5" ,
        title:"2026 car verary model h2kk" ,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione" ,
        imageUrl : "https://img.freepik.com/premium-photo/elegant-luxury-super-sports-car-future-design-driving-modern-city-highway_31965-114344.jpg"
    }


];


export const formInputList: IFormInput[] = [
    {
        id : "title" ,
        name : "title" ,
        label : "Product Title" ,
        type : "text" 
    },

    {
        id : "description" ,
        name : "description" ,
        label : "Product Description" ,
        type : "text" 
    },

    {
        id : "image" ,
        name : "imageUrl" ,
        label : "Product TitleImage Url" ,
        type : "text" 
    },

    {
        id : "price" ,
        name : "price" ,
        label : "Product Price" ,
        type : "text" 
    },

];

