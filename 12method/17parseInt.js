console.log(parseInt("250"));
console.log(parseInt("0.23"));

parseInt("42");           // 42
parseInt("42px");         // 42  → stops at "p"
parseInt("3.14");          // 3   → only integer part
parseInt("0b101", 2);     // 5   → binary to decimal
parseInt("0xF", 16);      // 15  → hexadecimal to decimal
parseInt("hello");         // NaN → no number at start
parseInt("08");    // 8 
parseInt("08", 10) // 8 
parseInt("3.99")   // 3
console.log(parseInt('10+2'));
