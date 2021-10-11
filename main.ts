let node = 0
let time = 0
basic.showString("Inicio")
radio.setGroup(1)
basic.forever(function () {
    time = randint(5, 10)
    time = time * 1000000
    control.waitMicros(time)
    basic.showNumber(time / 1000000)
    node = randint(1, 5)
    radio.sendNumber(node)
})
