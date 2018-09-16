# MemeKit v0.2.0
A library for messing with people in ES6

(There's also now a Discord bot that uses a module containing modified MemeKit functionality.)

**Note**: I do not own some of the images used here (the ones that are most obviously memes). If anyone has a problem with me using one of these images, report it as an issue and I will remove it as soon as possible (pretty much all the images I don't own are from Instagram and Reddit).

Download this JS file  

**OR**   

Load it like this:  
`<script src="https://scalarfield.github.io/js/tools/memekit.js">`  

**OR**  

Load it into any webpage from the console with  
`document.head.appendChild((($, s)=>{$.src=s;return $})(document.createElement('script'), "https://scalarfield.github.io/js/tools/memekit.js"))`  

**OR**

Invite the MemeKit Discord bot to your server, though I can't promise it'll be online all the time.
(Type `$help` into the chat for documentation)

  
----------------

Start by creating a new `MemeKit` object:    
`let tools = new MemeKit()`  
Then let the fun begin.  

_More presets, images, and features coming soon_

**All optional parameters to functions are inputted last**  
**Remember that `element` refers to an element object**

`MemeKit.rickroll()`
* Should be obvious what this does

`MemeKit.error(message="random")` 
* Creates an alert with a funny message
* Takes an optional message parameter
* Choose a preset or a custom message
* Default is random preset

`MemeKit.rewrite(element, message="random")`
* Replaces target element's `innerHTML` with a message
* Optional message parameter like `error`
* Message parameter uses same rules as `error`

`MemeKit.perpetual(delay, message="random")`
* Perpetually runs `error()` with specified delay in milliseconds
* Optional message parameter to pass to `error`

`MemeKit.messWithElement(element, delay)`
* Random preset text to element every `delay` milliseconds

`MemeKit.animateBox(element, minW, maxW, minH, maxH, steps, delay)`
* Animates the width and height of the specified element
* Dimensions go back and forth between the min and max specified values
* `steps` is the number of steps takes to get from min to max value
* Takes one step every `delay` milliseconds

`MemeKit.animateColor(element, property, c1, c2, steps, delay`
* Changes color of `element` back and forth between  `c1` and `c2`
* `property` is the color property to modify, such as `color` or `backgroundColor`
* `c1` and `c2` are arrays of the form `[redValue, greenValue, blueValue]` where each value is between 0 and 255
* `steps` and `delay` have the same purpose as in `animateBox`

`MemeKit.getMeme(w, h, id="random")`
 * Returns the HTML for a random image from https://scalarfield.github.io/images/memes
 * Can specify an optional ID number to get specific image
 * `w` and `h` specify width and height for the image
 * Set `w` and `h` to something like `undefined` to use default image dimensions
 
 `MemeKit.insertMeme(element, id, fit)`
 * Replaces `innerHTML` of `element` with image returned by `getMeme`
 * `id` is the parameter for `getMeme` (use `"random"` for `id` for random image)
 * `fit` is true if you want to fit the image to `element`'s dimensions, and false if you'll use the image's default size
 
 `MemeKit.inputCipher(ct="random")`
 * Affects all text inputs and `textareas`
 * When you type a key into an input, it gets remapped using a Monoalphabetic Substitution Cipher (MASC)
 * `ct` is an optional parameter outlining the remapped alphabet (must be a permutation of the English lowercase alphabet)
 * By default, it generates a random MASC
 
  `MemeKit.asciiArt(message="random")`
 * Returns a `<p>` with the input written as ASCII art letters
 * Rules for parameter same as the `error` and `rewrite` methods
 
 (Just in case I need to mess with someone later: `alias rickroll="open https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"`)
