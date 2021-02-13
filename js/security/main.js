document.oncontextmenu =function(){
    return false;
};

//Bloquear control + p
var isCtrl = false;
document.onkeyup = function(e){
    if(e.which == 17) isCtrl = false;
}
document.onkeydown = function(e){
    if(e.which == 17) isCtrl = true;
    if(e.which == 80 && isCtrl == true){
        return false;
    }
}
