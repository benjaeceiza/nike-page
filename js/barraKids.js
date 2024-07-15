


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
    linkItem1.href = "./pages/kids.html";

    const linkItem2 = document.createElement("a");
    linkItem2.innerText = "Mujer";
    linkItem2.href = "./pages/women.html";

    const linkItem3 = document.createElement("a");
    linkItem3.innerText = "Hombre";
    linkItem3.href = "./pages/men.html";

    const linkItem4 = document.createElement("a");
    linkItem4.innerText = "Accesorios";
    linkItem4.href = "./page/accessories.html";

    linkItem1.className = "link-barra";
    linkItem2.className = "link-barra"; 
    linkItem3.className = "link-barra";
    linkItem4.className = "link-barra";

    const imagenCarrito = document.createElement("img");
    imagenCarrito.src ="../recursos/carrito.png";
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
    
    contenedorMenu.style = "translate: 0px"

    contenedorMenu.style.transition = "all .5s"
    
    




    contenedor.onclick = () => eliminarBarra();
    
    const eliminarBarra = () =>{
        
       

       
        
        const contenedorMenu = document.getElementById("contenedor-lista");

        contenedorMenu.style = "translate: 200px"

        contenedorMenu.style.transition = "all .5s"
        contenedorMenu.innerText = "";

        const contenedor = document.getElementById("barra-lateral");

       

        contenedor.innerHTML = "";   
        contenedor.className = "";

        
     }

};

 




botonMenu.onclick = () => mostrarBarra();




