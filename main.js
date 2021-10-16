prediction1 = ""
prediction2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("Camera");

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'">';
    });
}
console.log('ml5 version :', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RJ2t5MRQ8/model.json',modelLoaded);

function modelLoaded(){
    console.log('model Loaded!');
}

function speak(){
   var synth = window.speechSynthesis;
   speak_data_1 = "The first prediction is" + prediction1;
   speak_data_2 = "And the second prediction is" + prediction2;
   var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
   synth.speak(utterThis);
}