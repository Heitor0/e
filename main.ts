input.onButtonPressed(Button.A, function () {
    basic.showString(String1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Number1)
})
input.onGesture(Gesture.Shake, function () {
	
})
let String1 = ""
let Number1 = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showNumber(5)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showNumber(4)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showNumber(3)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showNumber(2)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showNumber(1)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showNumber(0)
basic.showString("EVACUATE")
music.playMelody("C D E F G A B C5 ", 40)
Number1 = 4
String1 = "FOLLOW EVACUATION PROCEDURES"
basic.forever(function () {
	
})
