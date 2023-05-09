const string = `
.head *{margin:0;padding:0;box-sizing: border-box;}
.head *::before,.head *::after{box-sizing: border-box;}

.head{
    width: 100vw;
    min-height: 50vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#b0cac7;
    z-index:1;
}
.face{
    width: 250px;
    height: 250px;
    position: absolute;
    background-color: #ffb78e;
    border-radius: 70% 65% 12% 90%/70% 50% 70% 65%;
    border: 2px solid #000;
}
.face::before{
    content: '';
    position: absolute;
    width: 65px;
    height: 80px;
    background-color: #ffb78e;
    transform: translate(-60px,100px) rotate(-10deg);
    border-radius: 80% 65% 73% 80% / 80% 40% 30% 70%;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
}
.face::after{
    content: '';
    position: absolute;
    width: 155px;
    height: 149px;
    background-color: #ffb78e;
    transform: translate(145px,98px);
    border-radius: 90% 65% 80% 90% / 40% 100% 70% 60%;
    border-right: 3px solid #000;
}
.hair{
    width: 150px;
    height: 15px;
    background-color: #000;
    position: absolute;
    border-radius: 45% 65% 0% 100% / 100% 100% 0% 0%;
    top: -2px;
    left: 39px;
}
.hair::before{
    content: '';
    position:absolute;
    width: 100px;
    height: 140px;
    background-color: #000;
    top: -5px;
    left: -50px;
    transform: rotate(19deg);
    z-index: -1;
    border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
}
.eyebrowLeft{
    position: absolute;
    background-color: #000;
    width: 67px;
    height: 25px;
    border-radius: 30px;
    transform: rotate(137deg);
    top: 12px;
    left: 9px;
    animation: wave 0.4s infinite ease-in-out;
}
.eyebrowLeft::after{
    content: '';
    position: absolute;
    background-color: #000;
    width: 67px;
    height: 25px;
    border-radius: 30px;
    transform: rotate(85deg);
    top: -24px;
    right: 25px;
}
.eyebrowRight{
    position: absolute;
    background-color: #000;
    width: 67px;
    height: 25px;
    border-radius: 30px;
    transform: rotate(137deg);
    top: 12px;
    left: 130px;
    animation: wave 0.4s infinite ease-in-out;
}
.eyebrowRight::after{
    content: '';
    position: absolute;
    background-color: #000;
    width: 67px;
    height: 25px;
    border-radius: 30px;
    transform: rotate(85deg);
    top: -24px;
    right: 25px;
}
@keyframes wave {
    to {top :-0.01px}
}
.eyeLeft{
    position: absolute;
    background-color: #000;
    width: 68px;
    height: 60px;
    border-radius: 50%;
    top: 80px;
    left: 43px;
}
.eyeLeft::before{
    content: '';
    position: absolute;
    width: 80px;
    height: 60px;
    border-top: 4px solid #000;
    border-radius: 53% 47% 45% 55% / 57% 36% 64% 43%;
    top: -25px;
    left: -15px;
}
.eyeLeft::after{
    content: '';
    position: absolute;
    width: 26px;
    height: 23px;
    background-color: #fff;
    border-radius: 50%;
    top: 16px;
    left: 20px;
}
.eyeRight{
    position: absolute;
    background-color: #000;
    width: 68px;
    height: 60px;
    border-radius: 50%;
    top: 80px;
    left: 143px;
    z-index: 3;
}
.eyeRight::before{
    content: '';
    position: absolute;
    width: 80px;
    height: 60px;
    border-top: 4px solid #000;
    border-radius: 53% 47% 45% 55% / 38% 52% 48% 66%;;
    top: -25px;
    left: -2px;
}
.eyeRight::after{
    content: '';
    position: absolute;
    width: 26px;
    height: 23px;
    background-color: #fff;
    border-radius: 50%;
    top: 16px;
    left: 20px;
}
.mouth{
    position: absolute;
    width: 45px;
    height: 60px;
    background-color: rgb(165, 67, 84);
    border-radius: 50%;
    border: 2px solid  #000;
    top: 205px;
    right:50px;
    z-index: 2;
    animation: move 2s infinite ease-in-out;
}
@keyframes move {
    0% {transform: scale(0.3, 0.5)}
    10% {transform: scale(1, 1)}
    20% {transform: scale(0.3, 0.5)}
    30% {transform: scale(1, 1)}
    40% {transform: scale(0.3, 0.7)}
    60% {transform: scale(1, 1)}
    80% {transform: scale(0.8, 0.3)}
    100% {transform: scale(0.5, 0.9)}
}


`
export default string;