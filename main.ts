let h = 0
let f = 0
basic.forever(function () {
    h = 0
    while (input.buttonIsPressed(Button.A)) {
        led.plot(h, 0)
        basic.pause(500)
        basic.clearScreen()
        h += 1
        if (true) {
            if (h > 4) {
                h = 0
            }
        }
    }
})
basic.forever(function () {
    f = 0
    while (input.buttonIsPressed(Button.B)) {
        led.plot(0, f)
        basic.pause(500)
        basic.clearScreen()
        f += 1
        if (true) {
            if (f > 4) {
                f = 0
            }
        }
    }
})
