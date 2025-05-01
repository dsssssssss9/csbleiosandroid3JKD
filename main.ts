bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
function BlueCtrl () {
	
}
let SerialData = ""
robotbit.MotorStopAll()
basic.showIcon(IconNames.Duck)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
bluetooth.startUartService()
robotbit.MotorStopAll()
basic.showString("S")
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
// LCD Screen Wiring Colour Code
// 
// Red     ----->     3V
// 
// Black   ----->     GND
// 
// Green   ----->     SCL
// 
// Blue    ----->     SDA
basic.forever(function () {
    SerialData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (SerialData == "A") {
        lcdDisplay.lcdSetBgIamge("fruit.png")
        robotbit.MotorRun(robotbit.Motors.M1A, 199)
    } else if (SerialData == "B") {
        lcdDisplay.lcdSetBgIamge("building.png")
        robotbit.MotorStopAll()
    }
})
