let view = document.getElementById("view");
let keypad = Array.from(document.getElementsByClassName("button"));
keypad.map(button => {
    button.addEventListener("click",(e) => {
        switch(e.target.innerText){
            case "C":
                view.innerText = "";
                break;
            case "←":
                if (view.innerText){
                    view.innerText = view.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    view.innerText = parseFloat(eval(view.innerText).toFixed(10));
                } catch {
                    view.innerText = "Math Error"
                }
                break;
            default:
                //let data = view.innerText
                view.innerText += e.target.innerText;
                
        }
    })
})