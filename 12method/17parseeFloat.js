parseFloat("3.14")       // 3.14
parseFloat("3.14abc")    // 3.14 → stops at "a"
parseFloat("10")         // 10 → integer is fine
parseFloat("0.5")        // 0.5
parseFloat("abc123")     // NaN → no number at start
parseFloat("   15.2")    // 15.2 → ignores leading spaces
