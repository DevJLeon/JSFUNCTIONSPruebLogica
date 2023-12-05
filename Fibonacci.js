function calcFibonacci (k)
{
  if (k == 0 || k == 1)
  {
    return k
  }
  else if (k >= 2)
  {
    return (calcFibonacci(k-1) +calcFibonacci(k-2))
  }

}

//console.log("El resultado es "+calcFibonacci(12))




function Russian(x,y)
{
  let sum = 0
  while(x != 1)
  {
    if ((x % 2) > 0)
    {
      sum += y
    }
    x = Math.floor(x/2)
    y *= 2
  }
  sum += y
  return sum
}

console.log(Russian(37,12))

console.log(Math.floor(3/2))
console.log(37/2)



function FriendlyNumbers()
{
  for (let y = 1500; y > 0; y--) 
  {
    let temp = 1;
    let x = 1;

    for (let i = 2; i < y; i++)
    {
      if (y % i === 0)
      {
        x += y/i
      }
    }
    for (let j = 2; j < x; j++)
    {
      if (x % j === 0)
      {
        temp += x/j
      }
    }
    if (temp == y && y>x ) {
      return [x,y]
    }
  }
}

console.log(FriendlyNumbers())





function UVoting(n)
{
  let votes = []
  for (let i = 0; i < n; i++) 
  {
    let votebox = new Array(4)
    votes.push(votebox)
  }
}

function voting()
{
  
}



function calculateDays(a,b,c)
{
  let p1 =  0 + c
  let p2 =  0 
  days = 0
  for (let i = 1; p1+1 > p2; i++) 
  {
    p1 += a
    p2 += b
    days = i
  }
  return days
}

console.log(calculateDays(4,5,1))


function generarArrayAleatorio(n) {
  let numerosAleatorios = [];
  for (let i = 1; i <= n; i++) {
    numerosAleatorios.push(i);
  }
  return numerosAleatorios.sort();
}

function generarSubArraysDiferentes(arrayOriginal) {
  let subArrays = [];
  for (let i = 0; i < arrayOriginal.length; i++) {
    for (let j = i + 1; j <= arrayOriginal.length; j++) {
      let subArray = arrayOriginal.slice(i, j);
      if (!subArrays.some(arr => JSON.stringify(arr) === JSON.stringify(subArray))) {
        subArrays.push(subArray);
      }
    }
  }
  return subArrays;
}


/* let arrayOriginal = generarArrayAleatorio(5);
console.log("Array Original:", arrayOriginal);

let subArraysDiferentes = generarSubArraysDiferentes(arrayOriginal);
console.log("Sub Arrays Diferentes:", subArraysDiferentes); */

