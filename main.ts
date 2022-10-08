input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(13)
