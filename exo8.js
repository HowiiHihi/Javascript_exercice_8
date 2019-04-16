// if = permet de mettre la condition "si". Ici, si l'âge est supérieur à 17 ans, le premier message s'affiche. Sinon (else) le second message s'affiche.
function verifMajorite()
{
  var age = Number(document.getElementById('age').value);
  if ((age >= 18) && (age <=106))//condition pour afficher le message qui permet d'entrer
  {
    alert("Vous pouvez entrer");
  }
  else
  {
    if (age < 0)//permet d'afficher un message spécifique si l'utilisateur donne un âge inférieur à 0
    {
      alert("Petit rigolo");
    }
    else
    alert("Vous n'avez pas l'âge requis");//réponse par défaut
  }
}
