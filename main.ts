IR.onPressEvent(RemoteButton.NUM4, function () {
	
})
IR.onPressEvent(RemoteButton.NUM9, function () {
	
})
IR.onPressEvent(RemoteButton.Menu, function () {
	
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
	
})
IR.onPressEvent(RemoteButton.NUM1, function () {
	
})
IR.onPressEvent(RemoteButton.FastForward, function () {
	
})
IR.onPressEvent(RemoteButton.Mode, function () {
	
})
IR.onPressEvent(RemoteButton.Return, function () {
	
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    OLED.init(128, 64)
    menu()
})
IR.onPressEvent(RemoteButton.NUM7, function () {
	
})
IR.onPressEvent(RemoteButton.Minus, function () {
	
})
IR.onPressEvent(RemoteButton.NUM5, function () {
	
})
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
	
})
IR.onPressEvent(RemoteButton.OK, function () {
	
})
IR.onPressEvent(RemoteButton.Power, function () {
	
})
IR.onPressEvent(RemoteButton.NUM2, function () {
	
})
IR.onPressEvent(RemoteButton.NUM0, function () {
	
})
IR.onPressEvent(RemoteButton.NUM6, function () {
	
})
IR.onPressEvent(RemoteButton.FastBackward, function () {
	
})
IR.onPressEvent(RemoteButton.Plus, function () {
	
})
IR.onPressEvent(RemoteButton.NUM8, function () {
	
})
IR.onPressEvent(RemoteButton.Play, function () {
	
})
IR.init(Pins.P2)
OLED.init(128, 64)
menu()
