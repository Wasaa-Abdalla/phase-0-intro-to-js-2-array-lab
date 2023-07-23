//1
function cats(x) {
    x=["Milo", "Otis", "Garfield"];
    console.log(x);
    
}
cats();

//2
function ArrayFunction(cats) {
    cats=[];
    cats.push("Milo", "Otis", "Garfield");
    
    console.log(cats);
}
ArrayFunction();

//3
function destructivelyAppendCat(cats){
    cats=["Milo", "Otis", "Garfield"] ;
    cats.push('Ralph');
    console.log(cats);
}
destructivelyAppendCat();

//4
function destructivelyPrependCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    cats.unshift('Bob');
    console.log(cats);
}
destructivelyPrependCat();

//5
function destructivelyRemoveLastCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    cats.pop();
    console.log(cats);
}

destructivelyRemoveLastCat();

//6
function destructivelyRemoveFirstCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    cats.shift();
    console.log(cats);    
}
destructivelyRemoveFirstCat();

//7
function appendCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    pussy = [...cats,'Broom']; 
    console.log(pussy);
    console.log(cats);
}
appendCat();

//8
function prependCat(cats) {
    cats=["Milo", "Otis", "Garfield"];
    pussy= ['Arnold',...cats];
    console.log(pussy);
    console.log(cats);  
}
prependCat();

//9
function removeLastCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    pussy = [...cats.slice(0,2)];
    console.log(pussy);  
    console.log(cats); 
}
removeLastCat();

//10
function removeFirstCat(cats){
    cats=["Milo", "Otis", "Garfield"];
    pussy = [...cats.slice(1)]
    console.log(pussy);
    console.log(cats);
}
removeFirstCat();


