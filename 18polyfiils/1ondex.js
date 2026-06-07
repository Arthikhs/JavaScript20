if (['a', 'b', 'c'].includes('c')) {
  console.log('Found!');
}
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
 /*💡 Example 2: Polyfill for Promise

Before Promise existed, you could add this:

<script src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>


This script adds support for Promise if the browser doesn’t have it.

🧠 How Polyfills Work (Step-by-step)

Check if the feature exists:

if (!window.Promise) {


If not, define it manually (with equivalent logic):

window.Promise = function(executor) {
  // simplified implementation
};


Load polyfill before your main JavaScript runs (usually at the top of your <script> tags).*/