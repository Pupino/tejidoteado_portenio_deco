import React, { createContext, CreateContext, useContext } from "react";

//1. Importamos e inicializamos el context. Se exporta para los componentes q necesiten usar su info
export const CartContext = createContext();

//2. Definimos nuestro provider (no olvidar guardar estado)
const user = {
    user: "anonymous",
    profile: ""
}

const provider = useContext.provider;

//function userContextProvider