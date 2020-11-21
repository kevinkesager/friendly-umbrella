IR.onPressEvent(RemoteButton.NUM4, function () {
    NUM4 = 1
})
IR.onPressEvent(RemoteButton.NUM9, function () {
    NUM9 = 1
})
IR.onPressEvent(RemoteButton.Menu, function () {
    Menu = 1
})
function menu () {
    OLED.writeStringNewLine("         menu")
    OLED.writeStringNewLine("1)calculation")
    OLED.writeStringNewLine("2)Game")
    OLED.writeStringNewLine("3)Music")
    OLED.writeStringNewLine("4)Radio")
    OLED.writeStringNewLine("5)Device information")
    OLED.writeStringNewLine("(C) 2020 kevin.kesager All rights reserved")
}
IR.onPressEvent(RemoteButton.NUM3, function () {
    NUM3 = 1
})
IR.onPressEvent(RemoteButton.NUM1, function () {
    NUM1 = 1
})
IR.onPressEvent(RemoteButton.FastForward, function () {
    FastForward = 0
})
IR.onPressEvent(RemoteButton.Mode, function () {
    Mode = 1
})
IR.onPressEvent(RemoteButton.Return, function () {
    Return = 1
})
IR.onPressEvent(RemoteButton.NUM7, function () {
    NUM7 = 1
})
IR.onPressEvent(RemoteButton.Minus, function () {
    Minus = 0
})
IR.onPressEvent(RemoteButton.NUM5, function () {
    NUM5 = 1
})
function initialize () {
    IR.init(Pins.P2)
    OLED.init(128, 64)
    FastBackward = 0
    FastForward = 0
    Menu = 0
    Minus = 0
    Mode = 0
    Mute = 0
    NUM0 = 0
    NUM1 = 0
    NUM2 = 0
    NUM3 = 0
    NUM4 = 0
    NUM5 = 0
    NUM6 = 0
    NUM7 = 0
    NUM8 = 0
    NUM9 = 0
    Play = 0
    Plus = 0
    Power = 0
    Return = 0
}
function _3Music () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.OnceInBackground)
    OLED.clear()
    OLED.writeStringNewLine("        Music")
    OLED.writeStringNewLine("1)Dadadadum")
    OLED.writeStringNewLine("2)Entertainer")
    OLED.writeStringNewLine("3)Prelude")
    OLED.writeStringNewLine("4)ode")
    OLED.writeStringNewLine("5)nyan")
    OLED.writeStringNewLine("6)Ringtone")
}
IR.onPressEvent(RemoteButton.Mute, function () {
    Mute = 0
})
IR.onPressEvent(RemoteButton.Power, function () {
    Power = 1
})
IR.onPressEvent(RemoteButton.NUM2, function () {
    NUM2 = 1
})
IR.onPressEvent(RemoteButton.NUM0, function () {
    NUM0 = 1
})
IR.onPressEvent(RemoteButton.NUM6, function () {
    NUM6 = 1
})
IR.onPressEvent(RemoteButton.FastBackward, function () {
    FastBackward = 0
})
IR.onPressEvent(RemoteButton.Plus, function () {
    Plus = 1
})
IR.onPressEvent(RemoteButton.NUM8, function () {
    NUM8 = 1
})
IR.onPressEvent(RemoteButton.Play, function () {
    Play = 0
})
let Power = 0
let Plus = 0
let Play = 0
let NUM8 = 0
let NUM6 = 0
let NUM2 = 0
let NUM0 = 0
let Mute = 0
let FastBackward = 0
let NUM5 = 0
let Minus = 0
let NUM7 = 0
let Return = 0
let Mode = 0
let FastForward = 0
let NUM1 = 0
let NUM3 = 0
let Menu = 0
let NUM9 = 0
let NUM4 = 0
menu()
