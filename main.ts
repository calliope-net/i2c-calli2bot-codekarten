function Seite3LED () {
    Calli2bot.setRgbLed3(0xff0000, true, false, false, false, false)
    basic.pause(100)
    Calli2bot.setRgbLed3(0x0000ff, false, false, false, true, false)
    Calli2bot.setRgbLed3(0x000000, true, false, false, false, false)
    basic.pause(100)
    Calli2bot.setRgbLed3(0xa300ff, false, true, false, false, false)
    Calli2bot.setRgbLed3(0x000000, false, false, false, true, false)
    basic.pause(100)
    Calli2bot.setRgbLed3(0xa300ff, false, true, false, false, false)
    Calli2bot.setRgbLed3(0x000000, false, false, true, false, false)
    basic.pause(100)
    Calli2bot.setRgbLed3(0x000000, false, true, false, false, false)
}
function Seite4StopandGo () {
    laut = input.soundLevel()
    if (laut < 100) {
        if (Motoran) {
            Calli2bot.setMotoren2(80, 80)
        }
    } else {
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 10, 14, laut, lcd16x2rgb.eAlign.right)
        Motoran = !(Motoran)
        Calli2bot.setMotoren2(0, 0)
    }
}
function Seite2Motor () {
    Calli2bot.setMotoren2(100, 100)
    calli2bot.pause(calli2bot.calli2bot_ePause(calli2bot.ePause.p1))
    Calli2bot.setMotoren2(-50, 50)
    calli2bot.pause(calli2bot.calli2bot_ePause(calli2bot.ePause.p1))
    Calli2bot.setMotoren2(0, 0)
}
function Seite4LautMax () {
    laut = input.soundLevel()
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 0, 4, laut, lcd16x2rgb.eAlign.right)
    if (laut > lautmax) {
        lautmax = laut
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 5, 9, lautmax, lcd16x2rgb.eAlign.right)
    }
}
let lautmax = 0
let Motoran = false
let laut = 0
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E))
basic.forever(function () {
    Seite4StopandGo()
})
