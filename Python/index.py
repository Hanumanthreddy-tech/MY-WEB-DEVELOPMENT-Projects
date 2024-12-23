import qrcode
data='https://www.youtube.com/@Bro_techs'
qr=qrcode.make(data)
qr.save("qrcode.png")
qr.show()