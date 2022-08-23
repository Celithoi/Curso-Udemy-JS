const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;
console.log(backGroundColorBody);

for(let p of ps )
{
   p.style.background = backGroundColorBody;
   p.style.color = 'white';
}

//eu que fiz
//document.querySelector('.paragrafos').style.color = 'white';
//document.querySelector('.paragrafos').style.background = backGroundColorBody;