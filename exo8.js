// if = permet de mettre la condition "si". Ici, si l'âge est supérieur à 17 ans, le premier message s'affiche. Sinon (else) le second message s'affiche.
function verifMajorite()
{
  var age = Number(document.getElementById('age').value);
  if (age > 17.9)
  {
    alert("Tu peux entrer")
  }
  else {
    alert("Reviens quand tu auras 18 ans")
  }
}
