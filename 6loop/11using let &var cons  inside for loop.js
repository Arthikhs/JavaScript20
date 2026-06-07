 for(let i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}
/*let is block-scoped,
 which means a new i is created for each iteration of the loop.

Each iteration's i is a fresh binding, 
and the closure inside setTimeout captures that iteration’s i.

So when the callback runs, 
it sees the i that existed in that iteration, not the final i.

*/

for(var i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}


/*var is function-scoped, not block-scoped. 
That means the single i variable is shared across all iterations of the loop.

Each iteration doesn’t create a new i; 
it reuses the same i.

By the time the setTimeout callbacks execute, 
the loop is already finished, and i has become 3.*/
/*
for(const i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i)
    }, (10))
}


*/
 