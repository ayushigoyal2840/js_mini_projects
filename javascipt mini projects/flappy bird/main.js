let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');


// cvs.style.backgroundColor = "skyblue";

let frames = 0;

let sprite = new Image();
sprite.src = "images/sprite.png";

const state = {
    current: 0,
    getready: 0,
    game: 1,
    gameOver: 2
}

// cvs.addEventListener("click", function(event) {
//     // console.log("hello");
//     switch (state.current) {
//         case state.getready:
//             // console.log("getready");
//             state.current = state.game;
//             break;
//         case state.game:
//             // console.log("getready game");

//             bird.move();
//             break;
//         case state.gameOver:
//             // console.log("getready over");

//             state.current = state.getready;
//             break;

//         default:
//             // console.log("game not working");s
//             break;

//     }

// })


const getready = {
    sX: 0,
    sY: 228,
    w: 173,
    h: 150,
    x: cvs.width / 2 - (173 / 2),
    y: 200,
    draw: function() {
        if (state.current == state.getready) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.y);

        }
    }

}


const gameOver = {
    sX: 178,
    sY: 228,
    w: 225,
    h: 202,
    x: cvs.width / 2 - (225 / 2),
    y: 200,
    draw: function() {
        if (state.current == state.gameOver) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.y);


        }
    }

}
const game = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 220,
    x: 0,
    y: 200,
    draw: function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.y);


    }

}

let cloud = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 220,
    x: 0,
    y: cvs.height - 220,

    draw: function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (2 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (3 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (4 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (5 * this.w), this.y, this.w, this.h);
    }
}
let ground = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: cvs.height - 112,
    dx: 3,

    draw: function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (2 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (3 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (4 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (5 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (6 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (7 * this.w), this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + (8 * this.w), this.y, this.w, this.h);
    },
    update: function() {
        this.x = this.x - this.dx;
        if (this.x % 112 == 0) {
            this.x = 0;
        }
    }
}
const bird = {
    animation: [
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 }
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,
    frame: 0,
    period: 5,
    speed: 0,
    gravity: 0.20,
    jump: 4.6,
    draw: function() {
        let bird = this.animation[this.frame];
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    },
    update: function() {
        this.frame += frames % this.period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;
        this.y = this.y + this.speed;
        this.speed = this.speed + this.gravity;

    },
    // move: function() {
    //     console.log("moving");
    //     ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);


    // }


}

function draw() {
    cloud.draw();
    ground.draw();
    bird.draw();
    // getready.draw();
    // gameOver.draw();
}

function update() {
    ground.update();
    bird.update();

}


function loop() {
    // console.log("hello");
    draw();
    update();
    requestAnimationFrame(loop);
    frames++;
}
loop();