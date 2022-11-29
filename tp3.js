function affichage_tableau()
{
    document.write("<table border=2 width=30%>");
            for(i=0; i<=5; i++ )
            (
                document.write("<tr><td>*</td><td>*</td><td>*</td>")
            )
            document.write("</table>")
}

function affichage_tableau2()
{
    var ligne = prompt("Donner le nombre de ligne a afficher.")

    document.write("<table border=2 width=30%>");
            for(i=1; i<=ligne; i++ )
            (
                document.write("<tr><td>"+i+"</td><td>A</td><td>B</td>")
            )
            document.write("</table>")
}

function connexion()
{
    var id = prompt("Donner votre identifiant.");
    var mdp = prompt("Donner votre mot de passe");
    if (id=="admin" && mdp=="admin")
    {
        document.write("Bienvenue, "+id);
    }
    else
    {
    alert("Accès refusé");
    }
}

function connexion2()
    {var i=0;
    
    do {

    var id = prompt("Donner votre identifiant.");
    var mdp = prompt("Donner votre mot de passe");
    if (id=="admin" && mdp=="admin")
    {
        document.write("Bienvenue, "+id+".");
        break
    }
    else
    
    alert("Accès refusé.");
    i+=1;
}while (i< 3);
if (i==3)
alert("Trop de tentative érroné.")
}

function fun_switch()
{
    var color = prompt("Choisissez votre couleur");
    switch(color)
    {
        case "vert": document.body.style.background ="green";;
        break;
        case "VERT": document.body.style.background ="green";;
        break;
        case "bleu": document.body.style.background ="blue";;
        break;
        case "BLEU": document.body.style.background ="blue";;
        break;
    }
}

function chaine_caractere()
{
    var chaine= prompt("Donnez un mot.")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient "+ chaine.length +" caractères. <br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>")
   

}

function chaine_caractere2(){

var mot=prompt("Donnez un mot");
document.write("<br><b> Le mot saisie est : "+mot+"</b>");
document.write ("<br>La première lettre du mot <strong> <span style='color:blue;'> "+mot+" </span> </strong> est : "+mot.substr(0,1)+" et il se compose de "+mot.length+" caratères ");
document.write ("<br>La dernière lettre du mot <strong> <span style='color:blue;'> "+mot+" </span> </strong> est : " +mot.substr(-1));
} 


var nbClic=0;

function clic() {
    nbClic++;//incrémente le nb de clic de 1
    if (nbClic>=3) {
        alert('Perdu!!! Vous avez cliquez '+nbClic+' fois.')
    }
}

function raz() {
    nbClic = 0
}
