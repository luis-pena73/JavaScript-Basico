function fibonacci (n){
    if (n <2){
        return n;
    }
        const resultado = fibonacci(n - 1) + (n -2);
return resultado;
}
const fib = fibonacci(15)
