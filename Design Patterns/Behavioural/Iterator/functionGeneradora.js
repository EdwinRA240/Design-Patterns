//Funcion generadora
function* generarNumeros() {
    let i = 0;
    while (i < 5) {
      yield i;
      i++;
    }

  }
  
  let generador = generarNumeros();

  console.log(generador.next().value); // 0
  console.log(generador.next().value); // 1
  console.log(generador.next().value); // 2
  console.log(generador.next().value); // 3
  console.log(generador.next().value); // 4
  console.log(generador.next().value); // undefined