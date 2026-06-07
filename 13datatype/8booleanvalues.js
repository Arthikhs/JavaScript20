
console.log(Boolean(null));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(5));
console.log(Boolean());

 for(let i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}

for(var i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}
/*
for(const i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}


*/
  







