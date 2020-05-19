/*Trata a submissão de url de notícia pelo usuário, enviado ao back-end*/

document.addEventListener("DOMContentLoaded", function () {
    const formCadNot = document.getElementById("formCadNoticia")
    console.log(formCadNot)

    axios.get('/teste').then(resp => {
        console.log(resp)
    })

    formCadNot.onsubmit = e => {
        e.preventDefault()
        const form = e.target
        const urlNoticia = form.urlNoticia.value
        console.log(urlNoticia+" URL notícia")

        axios.post(form.cadastrarNoticia,
            { url: urlNoticia })
                .then(resp => {
                    console.log("REsposta")
                    if (resp.status == true) appendNoticia(urlNoticia)
                    else appendNoticia("ERRO AO SALVAR NOTICIA NO BANCO DE DADOS")
                })
        
    }
})


function appendNoticia(url) {
    const noticia = document.createElement('div')
    const conteudoNoticia = gerarPreview(url)
    noticia.innerHTML = conteudoNoticia
    noticia.classList.add('noticia')
    const feed = document.getElementById('feed')
    feed.insertAdjacentElement('afterbegin', noticia)
}

function gerarPreview(url) {
    /*CONSTRÓI PREVIEW DA NOTÍCIA*/
    return "TESTANDO PREVIEW"
}