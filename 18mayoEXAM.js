// EXAMEN 3ª Evaluación (18 de mayo) - DW1D1E
// Utilizamos uno de los objetos utilizados en los ejercicios (3 y 4)
// Necesitamos actualizar los pesos para obtener una nota
// Elige un estudiante y personalízalo con tu nombre (real) y con tus notas
// Muestra por *console.log* tus resultados en el formato indicado


//Examen de Pablo J. Guilabert
const pesos = [0.1, 0.1, 0.25, 0.25, 0.3];
const claseDW1 = {
  est1: {
    nombre: "Pablo J. Guilabert",
    notas: [100, 0, 0, 100, 78],
  },
  est2: {
    nombre: "Blas",
    notas: [84, 30, 1, 90, 60],
  },
  est3: {
    nombre: "Carlos",
    notas: [100, 90, 90, 60, 75],
  },
  est4: {
    nombre: "Damián",
    notas: [65, 65, 65, 65, 65],
  },
  est5: {
    nombre: "Enma",
    notas: [90, 80, 70, 60, 50],
  },
  est6: {
    nombre: "Filomena",
    notas: [30, 40, 50, 60, 75],
  },
  promedio: function () {
    const notasPonderadas = this.notas.map((nota, i) => nota * pesos[i]);
    const sumaNotasPonderadas = notasPonderadas.reduce((a, b) => a + b, 0);
    const notaFinal =
      (0.03 * sumaNotasPonderadas) / pesos.reduce((a, b) => a + b, 0);
    return notaFinal;
  },

};

//estatico
console.log("- Mi nombre es: ".concat(claseDW1.est1.nombre));
console.log("- Mis notas son: ".concat(claseDW1.est1.notas));


class Estud {
  constructor(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas;
  }

  promedio() {
    const pesos = [0.1, 0.1, 0.25, 0.25, 0.3];
    const notasPonderadas = this.notas.map((nota, i) => nota * pesos[i]);
    const sumaNotasPonderadas = notasPonderadas.reduce((a, b) => a + b, 0);
    const notaFinal =
      (0.03 * sumaNotasPonderadas) / pesos.reduce((a, b) => a + b, 0);
    return notaFinal;
  }
}

console.log("-Version con clases:");

const pebbles = new Estud("Pablo J. Guilabert", [100, 0, 0, 100, 78]);
console.log("- Mi nombre es: ".concat(pebbles.nombre));
console.log("- Mis notas son: ".concat(pebbles.notas));
console.log("- Mi nota total de los ejercicios es: ".concat(pebbles.promedio().toFixed(2)));


// Utlizar este formato de salida

// console.log("- Mi nombre es: " + *tú código*);
// console.log("- Mis notas son: " + *tú código*);
// console.log("- Mi nota total de los ejercicios es: " + *tú código*);
