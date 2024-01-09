# pixels-manipulation-noise

# Code Documentation

## Purpose

This code creates a continuous visual effect of a flickering black and white image on a canvas element.

## Functions

### - rand ()

Description:

Generates a random integer of either 0 or 1.
Usage:

JavaScript
const randomValue = rand(); // Returns 0 or 1

# - pixelsManipulation()

Description:

Randomly sets the pixels of an image to black or white, creating a flickering effect.
Utilizes requestAnimationFrame for continuous animation.
Usage:

JavaScript
// Assuming `ctx` is a reference to a 2D canvas context and `imageData` is the image data
pixelsManipulation(); // Initiates the animation loop

# Code Breakdown

### rand() function:

Generates a random integer (0 or 1) using Math.random() and Math.floor().

pixelsManipulation() function:

Loops through the pixel data in imageData.data.
For each pixel:
Calls rand() to determine black or white (0 or 255).
Sets the pixel's red, green, and blue values accordingly.
Sets the alpha value to 255 for full opacity.
Updates the canvas with modified pixel data using ctx.putImageData().
Schedules the next animation frame using requestAnimationFrame(pixelsManipulation).

## Assumptions:

The code assumes the existence of a canvas context (ctx) and image data (imageData).

## Additional Notes:

The flickering effect is achieved by constantly modifying pixel values.
requestAnimationFrame ensures smooth animation by synchronizing with the browser's repainting.
