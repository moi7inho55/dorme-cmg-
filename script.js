function sim(){
    alert("Parabéns, você fez a escolheu ser feliz!")
    }
    function desvia(t){
        var btn = t;
        btn.style.position = 'absolute'
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log("Como assim NÂO???")
    }
    
    function geraPosicao(min, max) {
      return (Math.random() * (max - min) + min) + "%";
    }
    