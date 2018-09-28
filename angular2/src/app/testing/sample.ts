export function factorial(n){

    /* if(n<=0){return undefined}
    if (n === 1){ return 1 }
    return n * factorial (n-1) */

    if(n <= 0){ return undefined }
    return (n === 1) ? 1: n * factorial (n-1)

}