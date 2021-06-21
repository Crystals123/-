window.addEventListener("load", () => {
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");
    const fullScr = document.querySelector(".model-box");

    const header = document.querySelector(".title");
    const modelBox = document.querySelector(".content");

    open.addEventListener("click", (event) => {
        fullScr.style.display = "block";
        // modelBox.style.top = (document.body.clientHeight - modelBox.style.height) / 2 + "px";
        // modelBox.style.left = (document.body.clientWidth - modelBox.style.width) / 2 + "px";
        // console.log(document.body.clientWidth);
    });

    close.addEventListener("click", () => {
        fullScr.style.display = "none";
    });

    header.addEventListener("mousedown", (event) => {
        const x = event.pageX - modelBox.offsetLeft;
        const y = event.pageY - modelBox.offsetTop;

        document.addEventListener("mousemove", move);

        function move(event) {
            modelBox.style.left = event.pageX - x + "px";
            modelBox.style.top = event.pageY - y + "px";
        }

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", move);
        })
    });


})