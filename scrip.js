function buscaImagem(data){
    const apiUrl = '2zXODwwkqnva3kSRhGt5P53csPu7lV7NdYOjWUlH';

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${apiUrl}&date=${data}`,
    dataType: 'json', 
    success: function(dados){
        $('#title').html(dados.title);
        $('#copyright').html(dados.copyright);
        $('#explanation').html(dados.explanation);
        document.getElementById('url').src = dados.url;
        }
    })
}

$('#botao').click(function(event){
    event.preventDefault();
    let imagemDia = $('#data').val();
    buscaImagem(imagemDia)
    console.log('vai mano!');
});
