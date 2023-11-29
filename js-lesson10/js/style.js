function start_game(){

    document.title = `Score: ${score}`;
    object.classList.toggle('is-moving');

}

function finish_game(){


}


function hit() {
score++;
document.title = `Score: ${score}`;
object.classList.remove('is-moving');
void object.offsetWidth;//магия
object.classList.add('is-moving');

change_object_size();
change_object_backgraund();

}

function miss(event){
if (event.target.id == "area"){
    score--;
    document.title = `Score: ${score}`;
}

}

function change_object_size(){
   const random_size = 20 + Math.random() * 40;
   object.style.width = `${random_size}px`;
}

function change_object_backgraund(){

    const colors =['red','blue','orange','purple','gold'];
 const random_index = Math.round (Math.random() * colors.length);
    object.style.background = colors[random_index];
}
let score = 0;

let object = document.querySelector("#object");






































































































































































































































































