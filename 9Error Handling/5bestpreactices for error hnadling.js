/*1. Always Use try...catch for Critical Code

Wrap risky operations (API calls, parsing, file operations) in try...catch.

try {
  let data = JSON.parse("{ invalid json }");
} catch (err) {
  console.error("Parsing failed:", err.message);
}

🔹 2. Use finally for Cleanup

Use finally to release resources, stop loaders, or close connections.

try {
  connectDB();
} catch (err) {
  console.error("DB Error:", err.message);
} finally {
  disconnectDB(); // always runs
}

🔹 3. Handle Errors in Async Code

Promises → always end chains with .catch()

async/await → wrap in try...catch

async function fetchData() {
  try {
    let res = await fetch("https://api.example.com/data");
    return await res.json();
  } catch (err) {
    console.error("API failed:", err);
  }
}

🔹 4. Don’t Swallow Errors Silently

Bad ❌

try {
  riskyCode();
} catch (err) {
  // ignored
}


Good ✅

try {
  riskyCode();
} catch (err) {
  console.error("Error occurred:", err);
  throw err; // rethrow if needed
}

🔹 5. Create Custom Error Classes

Helps differentiate error types.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
throw new ValidationError("Invalid email format");

🔹 6. Use Global Error Handlers

For sync code: window.onerror (browser)

For async promises: window.onunhandledrejection

For Node.js: process.on("uncaughtException"), process.on("unhandledRejection")

🔹 7. Log Errors (Don’t Just Print)

Use logging libraries (Winston, Pino, Sentry, etc.) in production.

Helps in debugging and monitoring.

🔹 8. Provide Meaningful Error Messages

Instead of:

throw new Error("Something broke");


Use:

throw new Error("Payment failed: Invalid credit card number");

✅ Quick Interview Answer

Best practices in error handling are:
Use try...catch with meaningful error messages, handle async errors with .catch or try...catch, always clean up in finally, avoid swallowing errors silently, use custom error classes for clarity, and log errors for debugging.
In production, also set up global error handlers to catch unhandled exceptions.
*/