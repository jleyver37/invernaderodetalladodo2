input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.temperature())
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.temperature() < 8) {
        if (input.lightLevel() <= 100) {
            basic.showString("TyL.bajas")
        } else if (input.lightLevel() >= 200) {
            basic.showString("T.baja,L.alta")
        } else {
            basic.showString("T.baja")
        }
        music.playTone(523, music.beat(BeatFraction.Breve))
    } else if (input.temperature() > 30) {
        if (input.lightLevel() <= 100) {
            basic.showString("T.alta,L.baja")
        } else if (input.lightLevel() >= 200) {
            basic.showString("TyL.altas")
        } else {
            basic.showString("T.alta")
        }
        music.playTone(523, music.beat(BeatFraction.Breve))
    } else {
        if (input.lightLevel() <= 100) {
            basic.showString("L.baja")
            music.playTone(523, music.beat(BeatFraction.Breve))
        } else if (input.lightLevel() >= 200) {
            basic.showString("L.alta")
            music.playTone(523, music.beat(BeatFraction.Breve))
        } else {
            basic.showIcon(IconNames.Umbrella)
            music.playMelody("A F E F D G E F ", 120)
        }
    }
})
