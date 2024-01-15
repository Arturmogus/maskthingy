function setup()
{
    canvas = createCanvas(300, 400)
    canvas.position(100, 50)
    video = createCapture(VIDEO);
    video.size(100, 100);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jO1VXeloA/model.json")
}
function draw()
{
    image(video, 0, 100, 400, 200)
}
function take_snapShot()
{
    save('mask.png')
}