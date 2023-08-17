var SpeechRecognition =window.webkitSpeechRecognition;//Web Speech API se utiliza para reconocer lo que decimos y convertirlo en texto

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");
function start (){
    Textbox.innerHTML = " "
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results [0]
    [0].transcript;
    console.log(Content);
    Textbox.innerHTML = Content;
if (Content=="Toma mi selfie"){

    speak();
    }
}
function speak(){
    synth=window.speechSynthesis
    speak_data="tomando tu selfie en 5 segundos"
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();

    },5000);
     
}
Webcam.set({
    width:360, height:250, image_format:"png", png_quality:90,
});
camera=document.getElementById("camara");
function takeselfie(){
    Webcam.snap(function (data_uri){
document.getElementById("resultado").innerHTML="<img id='selfieimage' src='"+data_uri+"'/>"; });
}
function save(){
link=document.getElementById("link");
Imagen=document.getElementById("selfieimage").src;
link.href=Imagen
link.click();
}