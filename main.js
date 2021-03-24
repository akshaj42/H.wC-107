//https://teachablemachine.withgoogle.com/models/Q1HatMs3N/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach ("#camera");

function take_Snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}
console.log("ml5version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q1HatMs3N/model.json",ModelLoaded);
