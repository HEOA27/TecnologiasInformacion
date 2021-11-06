function fill_bar(){
    var barra = document.getElementById("barra")
    barra.value += 10;
}
function restart(){
    var barra = document.getElementById("barra")
    barra.value =0;
}
let colors=["blue","white"];
    function change(){
    let random=Math.floor(Math.random()*colors.length);
    console.log("Ramdom value: " + random );
    let x=document.getElementById("container").style.background = colors[random];
}