let cachorro = {
    patas: 4,
    raca: "srd",
    latir: function(){
        console.log("au au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "labrador";



let pastor = Object.create(cachorro);
pastor.raca = "pastor";

console.log(labrador.raca);
console.log(pastor.raca);
console.log(cachorro.raca);
