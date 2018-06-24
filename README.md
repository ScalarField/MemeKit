# MemeKit
A library for messing with people

Start by creating a new `MemeKit` object:  
`let tools = new MemeKit()`
Then let the fun begin.

**All optional parameters to functions are inputted last**

`MemeKit.rickroll()`
* Should be obvious what this does

`MemeKit.error()` 
* Creates an alert with a funny message
* Takes an optional message parameter
* Choose a preset or a custom message
* Default is random preset

`MemeKit.rewrite(element)`
* Replaces target element's `innerHTML` with a message
* Optional message parameter like `error()`
* Message parameter uses same rules as `error()`

`MemeKit.perpetual(delay)`
* Perpetually runs `error()` with specified delay in milliseconds
* Optional message parameter to pass to `error()`

`MemeKit.messWithElement(element, t)`
* Random preset text to element every t milliseconds
