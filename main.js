function preload(){}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 50, 50, 540, 380);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(60, 60, 100);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(60, 420, 100);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(580, 60, 100);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(580, 420, 100);

    fill(0, 191, 255);
    stroke(0, 191, 255);
    rect(105, 40, 430, 40, 10);

    fill(0, 191, 255);
    stroke(0, 191, 255);
    rect(105, 405, 430, 40, 10);

    fill(0, 191, 255);
    stroke(0, 191, 255);
    rect(40, 100, 40, 280, 10);

    fill(0, 191, 255);
    stroke(0, 191, 255);
    rect(560, 100, 40, 280, 10);
}

function save(){
    save("Photo.png");
}