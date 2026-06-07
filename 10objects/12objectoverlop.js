const obj = {
    pqr: 100,
    abc: 200,
    xyz: {
        pqr: 300,
        abc: 400
    }
}

const { pqr, abc, xyz: { pqr: p ,abc:z} } = obj;
console.log(pqr,abc,p,z);


/*
Destructuring the object:
The nested destructuring xyz: { pqr: p } means:

From the inner xyz object, take its pqr property.

Rename it to p.

✅ After destructuring:
*/