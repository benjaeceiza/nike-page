


const botonMenu = document.getElementById("boton-menu");











function mostrarBarra() {
  

    const contenedor = document.getElementById("barra-lateral");
    contenedor.className = "barra-lateral"

    const contenedorMenu = document.getElementById("contenedor-lista");
    contenedorMenu.className = "contenedor-lista";

    const listaMenu = document.createElement("ul");
    listaMenu.className = "lista-barra";

    const itemMenu1 = document.createElement("li");
    const itemMenu2 = document.createElement("li");
    const itemMenu3 = document.createElement("li");
    const itemMenu4 = document.createElement("li");


    itemMenu1.className = "item-barra";
    itemMenu2.className = "item-barra";
    itemMenu3.className = "item-barra";
    itemMenu4.className = "item-barra";

    const linkItem1 = document.createElement("a");
    linkItem1.innerText ="Niño/a";

    const linkItem2 = document.createElement("a");
    linkItem2.innerText = "Mujer";
    const linkItem3 = document.createElement("a");
    linkItem3.innerText = "Hombre";
    const linkItem4 = document.createElement("a");
    linkItem4.innerText = "Accesorios";

    linkItem1.className = "link-barra";
    linkItem2.className = "link-barra";
    linkItem3.className = "link-barra";
    linkItem4.className = "link-barra";

    const imagenCarrito = document.createElement("img");
    imagenCarrito.src ="./recursos/carrito.png";
    const linkImagen = document.createElement("a");
    const itemCarrito = document.createElement("li");
    itemCarrito.className = "item-barra";

    linkImagen.appendChild(imagenCarrito);
    itemCarrito.appendChild(linkImagen);


    itemMenu1.appendChild(linkItem1);
    itemMenu2.appendChild(linkItem2);
    itemMenu3.appendChild(linkItem3);
    itemMenu4.appendChild(linkItem4);
    

    listaMenu.appendChild(itemMenu1);
    listaMenu.appendChild(itemMenu2);
    listaMenu.appendChild(itemMenu3);
    listaMenu.appendChild(itemMenu4);
    listaMenu.appendChild(itemCarrito);
  

    contenedorMenu.appendChild(listaMenu);


    
    


    contenedor.onclick = () => eliminarBarra();
    
    

    

    const eliminarBarra = () =>{
        

        const contenedor = document.getElementById("barra-lateral");
        contenedor.innerText = "";   
        contenedor.className = "";
        
        const contenedorMenu = document.getElementById("contenedor-lista");
        contenedorMenu.innerText = "";
     }

};

 




botonMenu.onclick = () => mostrarBarra();




