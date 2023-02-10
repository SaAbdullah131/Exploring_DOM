console.log("This is seprate js file");
//option:01
//<button onclick="console.log(65)">Another Button</button>
// option: 2 onclick function directly set on the element
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// option 3: onclick
const makeButtonBlue = document.getElementById("make-blue");
makeButtonBlue.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// option: 03 another

const makeButtonPurple = document.getElementById("make-purple");
        makeButtonPurple.onclick = function makePurple() {
            document.body.style.backgroundColor = "purple";
        }
        // console.log(makeButtonPurple);
//   option 04
const pinkButton = document.getElementById("make-pink");
       pinkButton.addEventListener('click',makePink);

       function makePink() {
        document.body.style.backgroundColor = 'pink';
       }    
// option -4 another
// option - 4 final we will use this
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener('click',function makeGreen() {
    document.body.style.backgroundColor="green";

})

const makeButtonOrange = document.getElementById("make-orange");

makeButtonOrange.addEventListener('click',function(){
    document.body.style.backgroundColor = 'orange';
})

// comment posted
const  postCommentBtn=document.getElementById("post-comment-bt");
postCommentBtn.addEventListener('click',function() {
 const textArea = document.getElementById("comment-area");
 const textAreasText = textArea.value;
console.log(textAreasText);
 const updateText = document.getElementById("posted");
 updateText = textAreasText;
})
