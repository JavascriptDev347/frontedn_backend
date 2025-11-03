// === SCOPE ===

const color = 'red';// color has GLOBAL scope
function start() {
    const message = "Hello World!";
    // console.log(color)// red
    const color = "Blue"
    console.log(color) // Blue
    if (true) {
        const another = 'bye';
    }

    // console.log(another); // another is not defined

}

function stop() {
    const message = "Bye and Stopped"
}

start();

// console.log(message);// message is not defined


// CHANGING
const video = {
    title: "A",
    tags: ['a', 'b', 'c'],
    showTags() {
        // this.tags.forEach(function (tag) {
        //     console.log(this.title + "  " + tag);
        // }.bind(this));
        this.tags.forEach(tag => {
            console.log(this.title + " " + tag);
        })
    }
};

video.showTags();

// function playVideo(a, b) {
//     console.log(this)
// }
//
// playVideo.call({name: "Mosh"}, 1, 2);
// playVideo.apply({name: "Mosh"}, [1, 2]);
// playVideo.bind({name: "Mosh"});
//
// playVideo();