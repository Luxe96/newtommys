

let sinDescuento=30000;
let descuentoRealismo=25;
let descuentoMaori=35;
let descuentoGotico=45;
let descuentoJapones=65;

let  selectCompra=document.getElementById("selectCompra");

let cantidadSesiones=document.getElementById("cantidadSesiones");

let mostrarCompra=document.getElementById("mostrarCompra");


function descuentoTotal(){


let comprarSesiones=(cantidadSesiones.value)*sinDescuento;

if (selectCompra.value == 0){
    comprarSesiones=comprarSesiones;
}

if (selectCompra.value == 1){
comprarSesiones=comprarSesiones-(comprarSesiones*(descuentoRealismo/100));

}if (selectCompra.value == 2){
    comprarSesiones=comprarSesiones-(comprarSesiones*(descuentoMaori/100));
    
    }if (selectCompra.value == 3){
        comprarSesiones=comprarSesiones-(comprarSesiones*(descuentoGotico/100));
        
        }if (selectCompra.value == 4){
            comprarSesiones=comprarSesiones-(comprarSesiones*(descuentoJapones/100));
            
            }
            
     mostrarCompra.innerHTML=comprarSesiones;   
    
}


comprarTattoo.addEventListener('click', descuentoTotal);

