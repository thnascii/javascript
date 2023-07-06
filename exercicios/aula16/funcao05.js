//Recursividade (Quando uma função chama ela mesma)

function fatorial(n) {
    if (n == 0) {
        return 1
    }else {
        return n * fatorial(n-1)
    }  
}

console.log(fatorial(10))

/*

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!

a não ser que seja fatorial de 1 pois:
1! = 1

*/