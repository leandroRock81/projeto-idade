function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('ERRO Verifique os dados e tente novamente')
        }else {
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gen = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gen = 'Homem'
            }else if (fsex[1].checked) {
                gen = 'Mulher'
            }   
                res.style.textAlign = 'center'
                res.innerHTML = `${gen} ${idade} anos`
            
        }
}