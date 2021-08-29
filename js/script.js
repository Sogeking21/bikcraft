// Slide
if (window.SimpleSlide) {

  // slide quote
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    auto: true, // se o slide deve passar automaticamente
    time: 2000, // tempo de transição dos slides
    nav: true, //
    pauseOnHover: true, // pausa a transição automática
  })

  //slide portifolio
  new SimpleSlide({
    slide: 'slide-portifolio', // nome do atributo data-slide="principal"
    auto: true, // se o slide deve passar automaticamente
    time: 2000, // tempo de transição dos slides
    nav: true, // Muda o slide
    pauseOnHover: true, // pausa a transição automática
  })
}

// animacão

if (window.SimpleAnime) {
  new SimpleAnime(
  );
}
if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Ocoreu um erro!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });

}