function verificar(){
    var anoNas = document.querySelector("input#txtano")
    var resultado = document.querySelector("div#res")
    var data = new Date()
    var anoAtual = data.getFullYear()
    var img = document.createElement("img")
    img.setAttribute("id","foto")

    if(anoNas.value.length == 0 || anoNas.value > anoAtual){
        alert("[error] verifique os dados apresentados")
    }else{
        var idade = anoAtual - Number(anoNas.value)
        var sexoMasculino = document.querySelector("input#masculino")
        var sexoFeminino = document.querySelector("input#feminino")

        if(sexoMasculino.checked){
            if( idade < 10){
                //bebe
                img.setAttribute("src","homemBebe.jpg")
            }else if(idade < 23 ){
                //adolescente
                img.setAttribute("src","homemAdolescente.jpg")
            }else if(idade < 65){
                //adulto
                img.setAttribute("src","homemAdulto.jpg")
            }else{
                //idoso
                img.setAttribute("src","homemIdoso.jpg")
            }
        }else if(sexoFeminino.checked){
                if(idade > 0 && idade < 10){
                    //bebe
                    img.setAttribute("src","mulherBebe.jpg")
                }else if(idade < 23 ){
                    //adolescente
                    img.setAttribute("src","mulherAdolescente.jpg")
                }else if(idade < 65){
                    //adulto
                    img.setAttribute("src","mulherAdulta.jpg")
                }else{
                    //idoso
                    img.setAttribute("src","mulherIdosa.jpg")
                }
        }
        resultado.innerHTML = `Você nasceu em ${Number(anoNas.value)} e agora você tem ${idade} anos de idade!!!`
        resultado.appendChild(img)
    }
}