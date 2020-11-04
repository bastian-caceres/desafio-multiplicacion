// condicion si el nuemro es 
while (true) {
    let num1 = prompt("Ingrese un numero entre el 1 y el 20");
    console.log(num1);
    if (num1 < 1 || num1 > 20) {
        alert(`Numero ${num1} es invalido \n Ingrese un numero mayot o igual a 1 y menor o igual a 20`);
        continue;
    }else {

        // muestra el resultado de la multiplicacion
        document.write(`
        <main class="container pt-5">    
            <h1 class="text-center">Tabla de multiplicacion de ${num1}</h1>
            <table class="table table-sm table-hover table-dark text-center">
                <thead>
                    <tr class="bg-info">
                        <th scope="col">Tabla del ${num1}</th>
                    </tr>
                </thead>
                <tbody>
        `);

        let tablas = (i) => {
            document.write(`
                <tr>
                    <td>la multiplicacion de ${num1} X ${i} es ${i*num1}</td>
                </tr>
            `);  
        }
        // hace la multiplicacion
        for (let i = 1; i <= num1; i++) {
            tablas(i);
        }

        document.write(`
                </tbody>
            </table>
        </main>
        `);

        
        document.write(`
        <main class="container pt-5">    
            <h1 class="text-center">Factorial hasta ${num1}</h1>
            <table class="table table-sm table-hover table-dark text-center">
                <thead>
                    <tr class="bg-info">
                        <th scope="col">Factorial hasta el ${num1}</th>
                    </tr>
                </thead>
                <tbody>
        `);
        // factorial
        for (let i = 1; i <= num1; i++) {
            let resul = 1;
            for (let j = 1; j <= i; j++) {
                resul *= j;
            }
            document.write(`
            <tr>
                <td>el factorial de ${i} es igual a: ${resul} </td>
            </tr>
            `);  
        }
        document.write(`
                </tbody>
            </table>
        </main>
        `);
        break;
        
    };
};