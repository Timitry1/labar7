var foldBtns = document.getElementsByClassName("sver");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(e) {
        var onePost = e.target.parentElement; // родительский элемент поста
        if (onePost.classList.contains("folded")) {
            e.target.innerHTML = "Свернуть";
            onePost.classList.remove("folded");
        }
        else {
            e.target.innerHTML = "Развернуть";
            onePost.classList.add("folded");
        }
    });
}
