import './App.css'
import Golden from './assets/golden.jpg'
import Gato from './assets/gato.jpg'
import Coelho from './assets/coelho.jpg'
import Pato from './assets/pato.jpg'
import Gato2 from './assets/gato2.avif'
import Rottweiler from './assets/rottweiler.jpg'
import Footer from './Footer'

function TelaInicial() {

    return (
        <>
            <body id='TelaInicial'>
                <h1 className='inicialH1'>Nossos PET's esperando por adoção: </h1>

                <div className='menu-botões'>
                    <button type='button'>Adotar</button>
                    <button type='button'>Anuncie um PET para adoção</button>
                </div>

                <div className='container-adocao'>
                    <h2>Golden Retriever</h2>
                    <h2>ID do animal: #59ff007884</h2>
                    <img className='inicial-img' src={Golden} />
                </div>

                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> disponível em abrigo parceiro / região urbana.</p>
                        <p><strong>Raça:</strong> Golden Retriever puro / porte grande.</p>
                        <p><strong>Temperamento:</strong> dócil, companheiro, sociável com crianças.</p>
                        <p><strong>Cidade:</strong> São Paulo - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> vacinado, vermifugado e castrado.</p>
                        <p><strong>Idade:</strong> 3 anos.</p>
                    </div>
                </div>

                <div className='container-adocao'>
                    <h2>Gato Siames</h2>
                    <h2>ID do animal: #59ff460084</h2>
                    <img className='inicial-img' src={Gato} />
                </div>

                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> lar temporário com protetor voluntário.</p>
                        <p><strong>Raça:</strong> Siamês.</p>
                        <p><strong>Temperamento:</strong> calmo, carinhoso, adora colo e atenção.</p>
                        <p><strong>Cidade:</strong> Campinas - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> vermifugado e vacinado, sem histórico de alergias.</p>
                        <p><strong>Idade:</strong> 2 anos.</p>

                    </div>
                </div>

                <div className='container-adocao'>
                    <h2>Coelho</h2>
                    <h2>ID do animal: #59ff4430084</h2>
                    <img className='inicial-img' src={Coelho} />
                </div>
                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> abrigo interno de ONG especializada.</p>
                        <p><strong>Raça:</strong> Coelho Mini Rex.</p>
                        <p><strong>Temperamento:</strong> dócil, curioso, silencioso.</p>
                        <p><strong>Cidade:</strong> Sorocaba - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> saudável, testado, sem parasitas.</p>
                        <p><strong>Idade:</strong> 1 ano.</p>

                    </div>
                </div>

                <div className='container-adocao'>
                    <h2>Pato</h2>
                    <h2>ID do animal: #59f564f0084</h2>
                    <img className='inicial-img' src={Pato} />
                </div>
                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> fazenda parceira que resgata animais.</p>
                        <p><strong>Raça:</strong> Pato Pekin.</p>
                        <p><strong>Temperamento:</strong> tranquilo, sociável com outros animais.</p>
                        <p><strong>Cidade:</strong> Atibaia - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> em boas condições, acompanhamento veterinário regular.</p>
                        <p><strong>Idade:</strong> 8 meses.</p>

                    </div>
                </div>
                <div className='container-adocao'>
                    <h2>Gato Cinza</h2>
                    <h2>ID do animal: #59ff2340084</h2>
                    <img className='inicial-img' src={Gato2} />
                </div>
                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> resgatado das ruas, atualmente em lar temporário.</p>
                        <p><strong>Raça:</strong> SRD (sem raça definida).</p>
                        <p><strong>Temperamento:</strong> tímido no começo, mas muito carinhoso quando confia.</p>
                        <p><strong>Cidade:</strong> Guarulhos - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> castrado, vermifugado e vacinado.</p>
                        <p><strong>Idade:</strong> 1 ano e 6 meses.</p>

                    </div>
                </div>
                <div className='container-adocao'>
                    <h2>Rotweiler</h2>
                    <h2>ID do animal: #59ff0742384</h2>
                    <img className='inicial-img' src={Rottweiler} />
                </div>
                <div className='centralizar'>
                    <div className='especificacoes'>
                        <p><strong>Localização:</strong> abrigo parceiro — área externa própria para cães grandes.</p>
                        <p><strong>Raça:</strong> Rottweiler.</p>
                        <p><strong>Temperamento:</strong> protetor, inteligente, extremamente fiel ao tutor.</p>
                        <p><strong>Cidade:</strong> Osasco - SP.</p>
                        <p><strong>País:</strong> Brasil.</p>
                        <p><strong>Saúde:</strong> forte, castrado, vacinas em dia.</p>
                        <p><strong>Idade:</strong> 4 anos.</p>

                    </div>
                </div>

                <Footer />

            </body>

        </>
    )
}

export default TelaInicial