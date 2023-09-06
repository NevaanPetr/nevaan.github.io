
const memeContainer = document.createElement('div');
memeContainer.className = 'meme-container';

const memeCaption = document.createElement('div');
memeCaption.className = 'meme-caption';
memeCaption.textContent = "Users when the scrolling speed changes slightly";

const memeImage = document.createElement('img');
memeImage.src = 'assets/spiderman.jpg';
memeImage.alt = 'Glitching Spiderman';
memeImage.style.width = '100%';  // Image width adjusts to the container's width
memeImage.style.height = 'auto';

const textBox = document.createElement('div');
textBox.className = 'textbox';
textBox.textContent = "(They got scrolljacked)";
textBox.style.height='auto';
textBox.style.width='auto';


memeContainer.appendChild(memeCaption);
memeContainer.appendChild(memeImage);
memeContainer.appendChild(textBox);
document.body.appendChild(memeContainer);

const styles = `
    body {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        min-height: 100vh;
        background-color: rgb(0, 0, 0);
        width: 100%;
    }
    .meme-container {
        text-align: center;
        color: rgb(0, 0, 0);
    }
    .meme-caption, .textbox {
        background-color: rgb(239, 239, 239);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 35px;
        font-weight: normal;
        color: #000000;
        padding: 10px;
        width: 100%;
    }
`;


const styleElement = document.createElement('style');
styleElement.textContent = styles;

document.head.appendChild(styleElement);
