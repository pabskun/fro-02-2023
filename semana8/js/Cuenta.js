class Cuenta {
    numero;
    duenno; //Atributo privado según el ES10
    #saldo;
    #movimientos;

    constructor(numero, duenno, saldo) {
        this.numero = numero;
        this.duenno = duenno;
        this.#movimientos = [];
        if (saldo) {
            this.#saldo = saldo;
        } else {
            this.#saldo = 0;
        }
    }

    aumentarSaldo(montoCredito) {
        this.#saldo += montoCredito;
    }

    disminuirSaldo(montoDebito) {
        if(montoDebito > this.#saldo){
            console.error('No hay saldo suficiente para realizar el movimiento');
        }else{
            this.#saldo -= montoDebito;
        }
        
    }

    getSaldo(){
        return this.#saldo;
    }
    setSaldo(nuevoSaldo){
        if(typeof nuevoSaldo == 'number'){
            this.#saldo = nuevoSaldo;
        }else{
            console.error('El saldo debe ser un valor numérico');
        }
    }

    getMovimientos(){
        return this.#movimientos;
    }
    setMovimientos(listaMovimientos){
        this.#movimientos = listaMovimientos;
    }


}