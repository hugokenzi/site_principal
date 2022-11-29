function verif(){
 var juste, faute = 0

    if (document.getElementById(a1).checked == true && document.getElementById(a2).cheked == false && document.getElementById(a3).cheked == false)
        juste= juste+1

    else
        faute= faute+1

    if (document.getElementById(b2).checked == true && document.getElementById(b1).cheked == false && document.getElementById(b3).cheked == false)
        juste= juste+1

    else
        faute= faute+1


    if (document.getElementById(c3).checked == true && document.getElementById(c1).cheked == false && document.getElementById(c2).cheked == false)
        juste= juste+1

    else
        faute= faute+1


    if (document.getElementById(d1).checked == true && document.getElementById(d2).cheked == false && document.getElementById(d3).cheked == false)
        juste= juste+1

    else
        faute= faute+1


    if (document.getElementById(e2).checked == true && document.getElementById(e1).cheked == false && document.getElementById(e3).cheked == false)
        juste= juste+1

    else
        faute= faute+1

   {
    alert("Vous avez eu"+juste+"bonnes réponses et"+faute+"fautes")
    }

}