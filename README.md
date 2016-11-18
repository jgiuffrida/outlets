# outlets
Raspberry Pi outlet control

side project for raspberry pi controlled outlets

## running
This project requires root access on the pi's to alter gpio pins

*This will only run on raspberry pi*

`sudo npm start`
- Turn all outlets off and start express.js server at port 3000

`sudo npm run power`
- Random outlet blinking

`sudo npm run post`
- Turn all outlets on and then off in order

`sudo npm run on`
- Turn all outlets on

`sudo npm run off`
- Turn all outlets off