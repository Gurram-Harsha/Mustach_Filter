noseX = 0;
noseY = 0;

function preload(){
    mustach_nose = loadImage('https://i.postimg.cc/xdYq4Zbc/m.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded()
{
    console.log('PoseNet is Initilized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y + 2;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustach_nose, noseX, noseY, 50, 25)
}