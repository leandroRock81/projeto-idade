function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var come = window.document.getElementById('com')

        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('ERRO Verifique os dados e tente novamente')
        }else {
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gen = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gen = 'Masculino'

                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'imagens/menino.png')
                    come.innerHTML = ('Você deve ser uma criança fofa!!!')

                }else if (idade >= 10 && idade <= 21){
                    img.setAttribute('src','imagens/jovemh.png' )
                    come.innerHTML = ('Você deve ser um jovem lindo!!')

                }else if (idade >= 21 && idade < 58) {
                    img.setAttribute('src', 'imagens/homem.png')
                    come.innerHTML = ('As mulheres devem ficar loucas por um homem como você')

                } else {
                    img.setAttribute('src', 'imagens/idoso.png')
                    come.innerHTML = ('Que velhinho fofo é você!!!')
                }

            }else if (fsex[1].checked) {
                gen = 'Feminino'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'imagens/menina.png')
                    come.innerHTML = ('Você deve ter puxado a beleza da mãe!!')

                }else if (idade >= 10 && idade <= 21){
                    img.setAttribute('src', 'imagens/jovemm.png')
                    come.innerHTML = ('Na flor da idade e exalando beleza!!')

                }else if (idade >= 21 && idade < 58) {
                    img.setAttribute('src', 'imagens/mulher.png')
                    come.innerHTML = ('Que mulherão deve ser você!!!')

                } else {
                    img.setAttribute('src', 'imagens/idosa.png')
                    come.innerHTML = (`${idade} anos? Nem parece de tão linda!!!`)
                }
            }   
            res.style.textAlign = 'center'
            res.innerHTML = `<h4>Sexo ${gen} ${idade} anos.</h4>`
            res.appendChild(img)
            
        }
}