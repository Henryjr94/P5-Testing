let tileSize = 35
let map1 = [
  [1,1,1,1,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1]
]
let cubeTesting;
let randomColor = []
map1.map((array) => array.map((e,i) => array[i] = Math.round(Math.random()*100)/100))

function setup() {
  cubeTesting = new cubeRender(map1)
  createCanvas(400, 400);
}

function draw() {

  background(220);

  
  //map1[1][1] += .001

  cubeTesting.drawMap(10,100)
  
}

class cubeRender {

  constructor (map) {

    this.currMap = map.slice()
    this.xTile = tileSize * 0.866025   

    this.xPlayer
    this.yPlayer
    
  }

  cubeMaker (xStart,yStart,color) {

    let p1_ = [xStart,yStart+tileSize/2]
    let p2_ = [xStart+this.xTile,yStart+tileSize]
    let p3_ = [xStart+this.xTile*2,yStart+tileSize/2]
    let [...sideColor] = color == undefined ? [120] : color
    sideColor.map((e,i) => sideColor[i] = e - 30 < 0 ? 0 : e - 30)
    
    strokeWeight(0.3)
    fill (color == undefined ? [120] : color)

    beginShape();
    vertex(p1_[0],p1_[1]);
    vertex(p2_[0],p2_[1]);
    vertex(p3_[0],p3_[1]); 
    vertex(p2_[0],yStart)
    vertex(p1_[0],p1_[1]);
    endShape();

    fill (sideColor)

    beginShape();
    vertex(p1_[0],p1_[1]);
    vertex(p2_[0],p2_[1]);
    vertex(p2_[0],p2_[1]+tileSize);
    vertex(p1_[0],p1_[1]+tileSize);
    vertex(p1_[0],p1_[1]);    
    endShape()

    beginShape();
    vertex(p2_[0],p2_[1])
    vertex(p3_[0],p3_[1])
    vertex(p3_[0],p3_[1]+tileSize)
    vertex(p2_[0],p2_[1]+tileSize)
    vertex(p2_[0],p2_[1])
    endShape();   

  }

  drawMap (xInput,yInput) {

    let _x = xInput + (this.xTile*(this.currMap.length-1))

    this.currMap.forEach((e,i) => {
      this.drawRow(e,_x-(this.xTile*i),yInput+(tileSize/2)*i)
    })
    
  }

  drawRow (mapArray,xInput,yInput) {
    
    mapArray.forEach((e,i) => {

      this.cubeMaker(xInput+this.xTile*i,yInput+(tileSize/2)*i-(tileSize*e))

    })  

   }
}