let xvalue = 0
let yvaule = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(xvalue, 0)
        basic.pause(500)
        basic.clearScreen()
        xvalue += 1
    }
    if (xvalue) {
        yvaule = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.plot(0, yvaule)
        basic.pause(500)
        basic.clearScreen()
        yvaule += 1
    }
})
