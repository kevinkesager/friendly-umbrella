def menu():
    OLED.write_string_new_line("         menu")
    OLED.write_string_new_line("1)calculation")
    OLED.write_string_new_line("2)Game")
    OLED.write_string_new_line("3)Music")
    OLED.write_string_new_line("4)Radio")
    OLED.write_string_new_line("5)Device information")
    OLED.write_string_new_line("(C) 2020 kevin.kesager All rights reserved")

def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    OLED.init(128, 64)
    menu()
input.on_button_pressed(Button.A, on_button_pressed_a)

pins.digital_write_pin(DigitalPin.P2, 1)
OLED.init(128, 64)

def on_forever():
    pass
basic.forever(on_forever)
