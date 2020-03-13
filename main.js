$(document).ready(function(){
  const setNumber = (coord, valor) => {
    $(`#${coord}`).html(`
    <div class="color">
    <h1>${valor}</h1>
    </div>
    `)
  }
  const setNumberTwo = () => {
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero.length; j++) {
        if(tablero[i][j] != 0){
          $(`#${i+1}-${j+1}`).html(`
          <div class="color">
          <h1>2</h1>
          </div>
          `)
        }
        else{
          $(`#${i+1}-${j+1}`).html(`
          <div></div>
          `)
        }
      }
    }

  }
  let tablero = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  const colision = (a, b) => {
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < array.length; j++) {
        tablero[i][j]
      }
    }
    if(a == b){
      
    }
  }

  const randomNumbers = () => {
    let opc1 = [parseInt(Math.random() * 4), parseInt(Math.random() * 4)]
    let opc2 = [parseInt(Math.random() * 4), parseInt(Math.random() * 4)]
    if(opc1[0] == opc2[0] && opc1[1] == opc2[1]){
      opc1 = [0,0]
      opc2 = [3,3]
      tablero[opc1[0]][opc1[1]] = 2
      tablero[opc2[0]][opc2[1]] = 2
    }
    else{
      tablero[opc1[0]][opc1[1]] = 2
      tablero[opc2[0]][opc2[1]] = 2
    }
  }
  randomNumbers()
  
  const gameStart = () => {
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero.length; j++) {
        if(tablero[i][j] > 1){
          setNumber(`${i+1}-${j+1}`, tablero[i][j])
        }
      }
    }
  } 
  gameStart();

  function swap(tablero, x1, y1, x2, y2){
    var aux = tablero[x1][y1];
    tablero[x1][y1] = tablero[x2][y2];
    tablero[x2][y2] = aux; 
  }

  document.onkeydown = function(e){
    if(e.keyCode === 37){
      const moverIzquierda = () => {
        for (let k = 0; k < 4; k++) {
          var fila = tablero[k]
          for(let i = 0; i <= 4; i++) {
            if(fila[i-1] === 0){
              var anterior = fila[i-1]
              fila.splice(i-1, 1)
              fila.push(anterior)
              setNumberTwo()
            }
          }
        }
      }
      moverIzquierda()
    }

    if(e.keyCode === 39){
      const moverDerecha = () => {
        for (let k = 0; k < 4; k++) {
          var fila = tablero[k]
          for(let i = 0; i <= 4; i++) {
            if(fila[i-1] === 0){
              var anterior = fila[i-1]
              fila.splice(i-1, 1)
              fila.unshift(anterior)
              setNumberTwo()
            }
          }
        }
      }
      moverDerecha()
    } 
    if(e.keyCode === 38){
      const moverArriba = () => {
        let fila = []
        for (let z = 0; z < 4; z++) {
          for (let a = 0; a < 4; a++) {
            fila[a] = tablero[a][z]
          }
          console.log(fila)
          if(fila[0] == 0){
            fila.splice(0,1)
            fila.push(0)
          }
          if(fila[1] == 0){
            fila.splice(1,1)
            fila.push(0)
          }
          if(fila[2] == 0){
            fila.splice(2,1)
            fila.push(0)
          }
          if(fila[3] == 0){
            fila.splice(3,1)
            fila.push(0)
          }
          for (let k = 0; k < fila.length; k++) {
            tablero[k][z] = fila[k]
          }
        }
        setNumberTwo()
      }
      moverArriba()
    } 
    if(e.keyCode === 40){
      const moverAbajo = () => {
        let fila = []
        for (let z = 0; z < 4; z++) {
          for (let a = 0; a < 4; a++) {
            fila[a] = tablero[a][z]
          }
          console.log(fila)
          if(fila[0] == 0){
            fila.splice(0,1)
            fila.unshift(0)
          }
          if(fila[1] == 0){
            fila.splice(1,1)
            fila.unshift(0)
          }
          if(fila[2] == 0){
            fila.splice(2,1)
            fila.unshift(0)
          }
          if(fila[3] == 0){
            fila.splice(3,1)
            fila.unshift(0)
          }
          for (let k = 0; k < fila.length; k++) {
            tablero[k][z] = fila[k]
          }
        }
        setNumberTwo()
      }
      moverAbajo()
    }
  }
})