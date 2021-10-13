radio.onReceivedNumber(function (receivedNumber) {
    value = receivedNumber
    if (value == 1) {
        point += 1
        basic.showString("" + (point))
        basic.clearScreen()
        soundExpression.mysterious.play()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (point))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (node))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (time / 1000))
})
let time = 0
let node = 0
let point = 0
let value = 0
music.setVolume(101)
radio.setGroup(1)
soundExpression.hello.play()
basic.forever(function () {
    basic.clearScreen()
    time = randint(1, 5)
    time = time * 1000
    basic.pause(time)
    node = randint(1, 2)
    radio.sendNumber(node)
    basic.showNumber(node)
})
