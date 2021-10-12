input.onButtonPressed(Button.A, function () {
    basic.showString("" + (point))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (node))
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        point += 1
        basic.showString("" + (point))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (time / 1000))
})
let time = 0
let node = 0
let point = 0
basic.showString("x")
radio.setGroup(1)
basic.forever(function () {
    time = randint(5, 10)
    time = time * 1000
    basic.pause(time)
    soundExpression.hello.play()
    node = randint(1, 5)
    radio.sendNumber(node)
})
