var liste =  [ 6, 2, 5, 1, 4, 7, 3 ];
var liste_bis = [];
var a = document.getElementById("aig1")
var b = document.getElementById("aig2")
var c = document.getElementById("aig3")
var d = document.getElementById("aig4")
var e = document.getElementById("aig5")
var f = document.getElementById("aig6")
var g = document.getElementById("aig7")
var formule = document.getElementById("formule")
var parole = document.getElementById("parole")
var parole_bis = document.getElementById("parole_bis")

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false;
  
    for (var i = 0; i < getArray.length; i++) {
        if (this[i] instanceof Array && getArray[i] instanceof Array) {
            if (!this[i].equals(getArray[i])) return false;
        } else if (this[i] != getArray[i]) {
            return false;
        }
    }
    return true;
};

function nouv(nombre){
    console.log("clique")
    liste_bis.push(nombre);
    console.log(liste_bis)
    if (nombre == 1){
        a.style.visibility = "hidden"
    }
    if (nombre == 2){
        b.style.visibility = "hidden"
    }
    if (nombre == 3){
        c.style.visibility = "hidden"
    }
    if (nombre == 4){
        d.style.visibility = "hidden"
    }
    if (nombre == 5){
        e.style.visibility = "hidden"
    }
    if (nombre == 6){
        f.style.visibility = "hidden"
    }
    if (nombre == 7){
        g.style.visibility = "hidden"
    }
    verif()
}

function verif(){
    if (liste.length == liste_bis.length){
        console.log(liste_bis)
        console.log(liste)
        if (liste.equals(liste_bis)){
            console.log("trouver")
            sleep(3000).then(() => {
                formule.style.visibility = "visible"
            })
            sleep(1000).then(() => {
                parole_bis.style.visibility = "visible"
            }) 
            sleep(2000).then(() => {
                parole_bis.style.visibility = "hidden"
            }) 
            parole.style.visibility = "hidden"
            
        }
        else {
            console.log("pas trouver")
            parole.style.visibility = "hidden"
            sleep(1000).then(() => {
                parole_bis_bis.style.visibility = "visible"
            }) 
            sleep(3000).then(() => {
                parole_bis_bis.style.visibility = "hidden"
            })
            sleep(4000).then(() => {
                parole.style.visibility = "visible"
                a.style.visibility = "visible"
                b.style.visibility = "visible"
                c.style.visibility = "visible"
                d.style.visibility = "visible"
                e.style.visibility = "visible"
                f.style.visibility = "visible"
                g.style.visibility = "visible"
                liste_bis = [];
            })
        }
    }
}