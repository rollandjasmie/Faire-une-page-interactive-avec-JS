/*Fonctionnalité 1 :
On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer
 (portant le tag <footer>), tu vas afficher le mot "clique" en console.

Cette fonctionnalité doit être codée avec un addEventListener
("click", function(){ } car c'est une bonne habitude à prendre ! 😇*/ 

/*Fonctionnalité 1-bis :
Maintenant on va upgrader cette première fonctionnalité :
lorsque l'utilisateur va cliquer sur le footer,
tu vas afficher en console "clic numéro x" avec x qui
commence à 1 et s'incrémente de +1 à chaque clic.*/
let x = 1
var foot = document.getElementsByTagName("footer")[0];
function clique(){
 	let cliq = `clic numéro ${x}` 
 	console.log(cliq);
	x = x+ 1
 };
foot.addEventListener("click", clique);
/*Fonctionnalité 2 :
On va enfin faire fonctionner ce satané 
"Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus.
C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales
en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton,
l'élément HTML portant l'Id navbarHeader perde sa classe collapse.
Une fois que ça, ça marche, fait que si on clique à nouveau dessus,
la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader*/
var h = document.getElementsByClassName("navbar-toggler")[0];
let nav = document.getElementById("navbarHeader");
let menu = false
function perd (){ 
	if (menu == false) {
	nav.classList.remove('collapse')
	menu = true}
	else if (menu == true){
	nav.classList.add('collapse');
	menu = false
	}

};
h.addEventListener("click", perd)
/*
Fonctionnalité 3 :
À présent, on va faire cela : si on clique sur le bouton
"Edit" de la première card, le texte de la card va se mettre
en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !*/
var edit1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
//var ps = 
var text1 = document.getElementsByClassName("card-text")[0];
function red(){
	text1.style.color="red";
};
edit1.addEventListener("click", red);
/*
Fonctionnalité 4 :
On va faire quelque chose de similaire à la fonctionnalité 3
mais un peu plus complexe : si on clique sur le bouton "Edit"
de la deuxième card, le texte de la card va se mettre en vert.
Si on re-clique dessus, il redevient comme avant ! Tu l'as compris,
il va falloir que tu cherches comment faire un "toggle" 
sur le style du texte. C'est plus compliqué que sur une classe.*/
var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var text2 =	document.getElementsByClassName("card-text")[1];
var text = false

function green(){
	if (text == false) {
		text2.style.color="green";
		text = true;
	}
	else if(text == true){
		text2.style.color="";
		text = false;
	};
};
edit2.addEventListener("click", green);
/*Fonctionnalité 5 :
Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯.
Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher :
si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et
la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS.
Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).*/

//le href va être supprimer
var danger = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
var bootstrap = document.getElementsByTagName("link")[0];
function nuclear(){
	bootstrap.setAttribute("href", "")
};
danger.addEventListener("dblclick", nuclear);


// on rajoule href
var row = document.getElementsByClassName("text-white")[0];
function ravi2(){
	
	bootstrap.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
}
row.addEventListener("dblclick", ravi2);
/*
Fonctionnalité 6 :
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur
le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire.
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de
sa taille d'origine et les boutons "Edit" / "View" restent visibles.
Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !*/
var view = document.getElementsByClassName("btn btn-sm btn-success");
var image = document.getElementsByTagName("img");
var cards  = document.getElementsByClassName("card-text");
var reduire = false
for (let i = 0; i < 6; i++) {
	view[i].addEventListener("mouseover", function(){
			if (reduire == false) {
			cards[i].textContent="";
			image[i].style.width="20%";
			reduire =true;
	}
	else if(reduire == true){
	cards[i].textContent="L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
	image[i].style.width=""
	reduire =false
	}
}
)
}

