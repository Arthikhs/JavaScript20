const a = {}
const b = { name: 'tilak' }
const c = { name: 'ram' }

a[b] = { name: 'ankit' }
a[c] = { name: 'rahul' }

console.log(a[b])
  /* 
  🔹 Step 1: Object keys in JavaScript

Only string and symbol types can be used as keys in normal objects.
If you use any non-string key (like an object, array, number, etc.),
JavaScript automatically converts it into a string — this is called
👉 Object key coercion.

🔹 Step 2: What happens here

b and c are both objects.

When you use them as keys (a[b], a[c]), JavaScript runs:

b.toString()  // "[object Object]"
c.toString()  // "[object Object]"


So internally:

a["[object Object]"] = { name: 'ankit' }
a["[object Object]"] = { name: 'rahul' }


Both use the same key — "[object Object]".

🔹 Step 3: Overwriting happens

Because both b and c become the same string key,
the second assignment (a[c] = ...) overwrites the first one.

🔹 Step 4: Final output
console.log(a[b])  // { name: 'rahul' }*/