input.onButtonPressed(Button.A, function () {
    basic.showString("" + (node))
})
let time = 0
let node = 0
basic.showString("Inicio")
radio.setGroup(1)
basic.forever(function () {
    time = randint(5, 10)
    time = time * 1000
    basic.pause(time)
    basic.showNumber(time / 1000)
    node = randint(1, 5)
    radio.sendNumber(node)
})
