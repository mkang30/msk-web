var outerDiams = [];
var currentPoints = []
var currentColors = []
const colors = []
var paused = [true,false,true]
const n = 3

function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.position(0,0)
    canvas.style('z-index', '-1')
    canvas.style('align-content', 'center')
    background(0);
    colors.push(color(13,110,253))
    colors.push(color(171,32,253))
    colors.push(color(125,18,255))
    colors.push(color(57,255,20))
    colors.push(color(224,231,34))
    colors.push(color(15, 232, 245))

    for (var i=0;i<n;i++){
        outerDiams.push(0)
        currentPoints.push([random(0,innerWidth),random(0,innerHeight)])
        currentColors.push(random(colors))
    }
  }

function windowResized() {
    resizeCanvas(innerWidth, innerHeight)
    background(0)
}


function draw() {
    for (var j=0;j<n;j++){
        if (paused[j]==true){
            paused[j] = random([true,true,true,true,false])
            continue
        }
        stroke(currentColors[j])
        for (var i = 0; i < 5; i++){
            var diam = outerDiams[j] - 30 * i;    
            if (diam > 0){
                fill(0)
                ellipse(currentPoints[j][0], currentPoints[j][1], diam);
            }
        }
        outerDiams[j] = outerDiams[j] + 2;
        if (outerDiams[j]>800){
            //clear()
            //background(0)
            paused[j] = true
            outerDiams[j] = 0
            currentPoints[j] = [random(0,innerWidth),random(0,innerHeight)]
            currentColors[j] = random(colors)
        }
    }
  
}
  