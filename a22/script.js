let textInput1, textInput2;
let title1 = 'Title 1';
let title2 = 'Title 2';
let fontRadio;
let fonts = {
  'Impact': 'Impact',
  'Comic Sans': 'Comic Sans MS, cursive',
  'Arial': 'Arial'
};

let imageSelect;
let images = {
  'Image 1': 'assets/back.jpg', 
  'Image 2': 'assets/sis.jpg',
  'Image 3': 'assets/download.jpg'
};

let slider1, slider2, slider3, slider4;


function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('column-two');

  textInput1 = select('#textInput1');
  textInput1.position(20, 160)
textInput2 = select('#textInput2');
textInput2.position(20, 210)

  //Sliders---------------------------------------------------------------------------------------------//
  
  
  slider1 = createSlider(0, 255, 0);
  slider1.parent('column-one');
  slider1.class('sliderRed');
  slider1.position(20, 365);

  slider2 = createSlider(0, 255, 0);
  slider2.parent('column-one');
  slider2.class('sliderGreen');
  slider2.position(20, 385);

  slider3 = createSlider(0, 255, 0);
  slider3.parent('column-one');
  slider3.class('sliderBlue');
  slider3.position(20, 405);

  slider4 = createSlider(0, 45, 20);
  slider4.parent('column-one');
  slider4.class('sliderfont');
  slider4.position(20, 315);

//Font List---------------------------------------------------------------------------------------------//
  fontRadio = createRadio();
  fontRadio.position(10, 265);
  fontRadio.class('fontRadio')
  for (let font in fonts) {
    fontRadio.option(font);
  }
  fontRadio.selected('Impact');

//Image Selector----------------------------------------------------------------------------------------//

imageSelect = createSelect();
imageSelect.position(20, 100);
imageSelect.class('dropdown')
for (let image in images) {
  imageSelect.option(image);
}
imageSelect.changed(updateSelectedImage);

updateSelectedImage();

function updateSelectedImage() {
  let selectedImage = images[imageSelect.value()];
  if (selectedImage) {
    loadImage(selectedImage, function(img) {
      image(img, 0, 50, 400, 300);
    });
  }
}

//Save Button-------------------------------------------------------------------------------------------//
let saveButton = select('#saveButton');
  saveButton.mousePressed(saveImage);
  saveButton.position(55, 470);
  saveButton.class('save');

function saveImage() {
  saveCanvas('myCanvas', 'png');  
}

//Labels------------------------------------------------------------------------------------------------//
let imgLabel = createP('Image Select:');
  imgLabel.class('labels')
  imgLabel.position(20, 60);
  
  let tLabel = createP('Top Text');
  tLabel.class('labels')
  tLabel.position(20, 120);

  let bLabel = createP('Bottom Text');
  bLabel.class('labels')
  bLabel.position(20, 170);

  let fLabel = createP('Font:');
  fLabel.class('labels')
  fLabel.position(20, 230);

  let sLabel = createP('Font Size:');
  sLabel.class('labels')
  sLabel.position(20, 280);

  let cLabel = createP('Text Colour:');
  cLabel.class('labels')
  cLabel.position(20, 325);


}
//------------------------------------------------------------------------------------------------------//

  function draw() {
    noStroke();
    fill(400);
    rect(0, 0, 400, 50);
    rect(0, 350, 400, 50);

    let selectedFont = fonts[fontRadio.value()];
    textFont(selectedFont)  

    title1 = textInput1.value();
    title2 = textInput2.value();

    let r = slider1.value();
    let g = slider2.value();
    let b = slider3.value();
  
    fill(r, g, b);
    textAlign(CENTER, CENTER);
    text(title1, width / 2, 25);
    text(title2, width / 2, 375);

    let textSizeVal = slider4.value();
    textSize(textSizeVal);
  }