const headerEl = document.querySelector(".header")

window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
})

{
    // 1 - task 
    // function myFunc(a){
    //     return a * 2;
    // }
    // console.log( myFunc(5) );
    // console.log( myFunc(4) );
}

{
    // 2 - task 
    // function salomlash(ism){
    //     return `Salom, ${ism}`;
    // }
    // console.log( salomlash("Lazizbek") );
    // console.log( salomlash("Bobur") );
    // console.log( salomlash("John") );
}

{
    // 3 - task 
    // function lorem(num){
    //     if ( num > 0 ){
    //         return `${ num } - Musbat`;
    //     }
    //     else if( num === 0 ){
    //         return `${ num } - Son 0 ga teng`;
    //     }
    //     else{
    //         return `${ num } - Manfiy`;
    //     }
    // }
    // console.log( lorem(6) );    
    // console.log( lorem(-66) );    
    // console.log( lorem(0) ); 
}

{
    // 4 - task 
    // function lorem(num){
    //     if ( num % 2 == 0 ){
    //         return `${ num } - Juft son`;
    //     }
    //     else{
    //         return `${ num } - Toq son`;
    //     }
    // }
    // console.log( lorem(7) );    
    // console.log( lorem(124) );    
    // console.log( lorem(0) ); 
}

{
    // 5 - task 
    // function bigNum(a, b){
    //     if ( a > b){
    //         return `${ a } - ${ b } dan katta`
    //     }
    //     else{
    //         return `${ b } - ${ a } dan katta`
            
    //     }
    // }
    // console.log( bigNum(10, 15) );
    // console.log( bigNum(2, 1) );   
}

{
    // 6 - task 
    // function incNum(n) {
    //     for (let i = 1; i <= n; i++) {
    //       console.log(i);
    //     }
    // }
    // incNum(10);
}

{
    // 7 - task 
    // function sumNum(arr) {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //       sum += arr[i];
    //     }
    //     return `Sonlar yig'indisi ${ sum } ga teng`;
    // }
    // console.log(sumNum([1, 2, 3, 4, 5])); 
}

{
    // 9 - task 
    // function findMax(arr) {
    //     let max = arr[0];
    //     for (let i = 1; i < arr.length; i++) {
    //       if ( arr[i] > max ) {
    //         max = arr[i];
    //       }
    //     }
    //     return `${ max } - eng katta son`;
    // }
    // console.log(findMax([10, 11, 1, 5, 100]));
}

{
    // 10 - task 
    // function factorial(n) {
    //     let result = 1;
    //     for (let i = 2; i <= n; i++) {
    //       result *= i;
    //     }
    //     return `${n} ning faktorial soni ${result} ga teng`;
    // }
    // console.log(factorial(5));
}