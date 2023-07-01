import React, { useState } from 'react';
import { 
  AiOutlineArrowRight, 
  AiFillLinkedin, 
  AiFillGithub,
  AiOutlineMenu
} from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import emailjs from '@emailjs/browser';

import ImgLarning from './assets/wallpaper-larning1.jpg';
import ImgCard from './assets/wallpaper-card.jpg'
import ImgEcommerce from './assets/wallpaper-ecommerce.jpg'
import ImgGerador from './assets/wallpaper-gerador.jpg'
import ImgJogo from './assets/wallpaper-jogo.jpg';
import FotoPerfil from './assets/img-perfil.png';
import { 
  Barras, 
  Container, 
  Contato, 
  Footer, 
  Home, 
  NavHidden, 
  Portfolio, 
  Qualificacoes, 
  Separador, 
  SobreMim, 
  TitulosCat 
} from './styles';

function App() {

  const [showNav, setShowNav] = useState("");
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showNavMobile2, setShowNavMobile2] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [scroll, setScroll] = useState(0);

  const portfolio = [
    {
      nome: "Larning Page 1",
      img: ImgLarning,
      nivel: "Nível: Fácil",
      link: "https://denisnascimento04.github.io/Larning_Page_1/"
    },
    {
      nome: "Gerador de Frases",
      img: ImgGerador,
      nivel: "Nível: Fácil",
      link: "https://denisnascimento04.github.io/Front-end--gerar-frases/"
    },
    {
      nome: "Cartão Interativo",
      img: ImgCard,
      nivel: "Nível: Médio",
      link: "https://denisnascimento04.github.io/Front-end--cartao-interativo/"
    },
    {
      nome: "E-commerce",
      img: ImgEcommerce,
      nivel: "Nível: Médio",
      link: "https://denisnascimento04.github.io/Front-end--ecommerce/"
    },
    {
      nome: "Jogo de Pedra, Papel e Tesoura",
      img: ImgJogo,
      nivel: "Nível: Difícil",
      link: "https://denisnascimento04.github.io/jogo-pedra-papel-tesoura/"
    },
  ];

  const handleScroll = () =>{
    setScroll(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 500) {
      setShowNav("fixed");
    }else{
      setShowNav('');
    }
  }

  const EnviarEmail = (nome: string, email: string, assunto: string, mensagem: string) => {
    setEnviando(true);
    const form = {
      to_name: nome,
      subject: assunto,
      email: email,
      message: mensagem
    }

    if (nome !== '' && email !== '' && assunto !== '' && mensagem !== '') {
      emailjs.send('service_0k28q9s', "template_trpgwg4", form, "1zLafdz-kLtQ1J6Gm")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
        setEnviando(false);
        setEnviado(true);
      });
    }
    else{
      alert('Erro ao enviar o email. Verifique se todos os campos foram prenchidos.')
      setEnviando(false);
    }
  }

  window.onscroll = () => handleScroll()

  return (
    <Container>
      <NavHidden className={showNav}>
          <h1>DENIS</h1>
          <nav className={showNavMobile2 ? 'show' : ''}>
            <a href="#home" onClick={() => setShowNavMobile2(false)}>Home</a>
            <a href="#sobre" onClick={() => setShowNavMobile2(false)} style={{ color: scroll >=500 && scroll<3400 ? '#6F6BF2': ''}}>Sobre mim</a>
            <a href="#portifolio" onClick={() => setShowNavMobile2(false)} style={{ color: scroll >=3400 && scroll<4200 ? '#6F6BF2': ''}}>Portfólio</a>
            <a href="#contato" onClick={() => setShowNavMobile2(false)} style={{ color: scroll >=4200 ? '#6F6BF2': ''}}>Contato</a>
          </nav>
          <button onClick={() => setShowNavMobile2(!showNavMobile2)}>
            <AiOutlineMenu size={30} color='#fff'/>
          </button>
      </NavHidden>
      <Home id='home'>
        <img  alt='imagem de fundo' className='img-back' />
        <div className='fundo-back' />
        <header>
          <h1>DENIS</h1>
          <nav className={showNavMobile ? 'show' : ''}>
            <a href="#home" onClick={() => setShowNavMobile(false)} style={{ color: scroll >=0 && scroll<3400 ? '#6F6BF2': '' }}>Home</a>
            <a href="#sobre" onClick={() => setShowNavMobile(false)}>Sobre mim</a>
            <a href="#portifolio" onClick={() => setShowNavMobile(false)}>Portfólio</a>
            <a href="#contato" onClick={() => setShowNavMobile(false)}>Contato</a>
          </nav>
          <button onClick={() => setShowNavMobile(!showNavMobile)}>
            <AiOutlineMenu size={30} color='#fff'/>
          </button>
        </header>

        <section>
          <div className='apresentacao'>
            <h2>Olá!</h2>
            <h1>
              Sou um <br/><span>Desenvolvedor Web</span>
            </h1>
            <p>
              Desenvolvedor Web e mobile, sem experiência, 
              mas oferecendo aprendizado rápido, insistência e vontade de aprender.
            </p>
            <ul className='redes'>
              <li>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/denisnascimentodossantos22/'>
                  <AiFillLinkedin size={30} color='#fff' />
                </a>
              </li>
              <li>
                <a target='_blank' rel="noreferrer" href='https://github.com/DenisNascimento04'>
                  <AiFillGithub size={30} color='#fff' />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Home>

      <main id='sobre'>
        <SobreMim>
          <TitulosCat data-anime="right" className={scroll >= 350? 'animate': ''}>
            <h1>
              Sobre <span>Mim</span>
            </h1>
            <p>
              Abaixo verá uma breve apresentação destacando habilidade, 
              experiências e conhecimentos
            </p>
            <Separador />
          </TitulosCat>
          <div data-anime="left" className={scroll >=320? 'conteudo-right animate': 'conteudo-right'}>
            <div className='foto'>
              <img src={FotoPerfil} alt="foto de perfil 2" />
            </div>

            <div className='conteudo'>
              <h1>Olá, meu nome é <span>Denis</span></h1>
              <p>
                Entrei na área de tecnologia por acaso e 
                gostei muito foi o melhor chute da minha 
                vida. Apesar de ter feito faculdade e ter 
                aprendido vários conceitos tenho um 
                carinho especial pelo front-end mas 
                nada me impede de me arriscar pelo 
                back-end. Realizei meu estágio como 
                suporte técnico, mas admito que queria 
                ter aprendido mais, estou buscando minha 
                primeira oportunidade como desenvolvedor 
                no mercado de trabalho, mesmo sem 
                experiência estou sempre disposto a 
                aprender e me cobro bastante quando erro e 
                quando não tenho conhecimento para algo.
              </p>
              <div className='dados'>
                <p><span>Nome:</span> Denis Nascimento dos Santos</p>
                <p><span>Idade:</span> 23</p>
                <p><span>Localidade:</span> São José dos Campos, São Paulo</p>
                <p><span>Linguagem:</span> Português</p>
                <p><span>Email:</span> eledenis@hotmail.com</p>
              </div>
            </div>
          </div>
        </SobreMim>

        <Barras>
          <TitulosCat data-anime="left" className={scroll >= 1450 ? 'animate': ''}>
            <h1>Minhas <span>Habilidades</span></h1>
            <Separador />
          </TitulosCat>
          <div data-anime="right" className={scroll >=1500? 'conteudo animate': 'conteudo'}>
            <div className='left'>
              <div>
                <div className='titulos'>
                  <p>HTML5</p>
                  <p>85%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: "85%" }}/>
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>CSS3</p>
                  <p>80%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '80%' }} />
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>Javascript</p>
                  <p>65%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '65%' }} />
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>Typescript</p>
                  <p>65%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '65%' }} />
                </div>
              </div>
            </div>
            <div className='right'>
              <div>
                <div className='titulos'>
                  <p>ReactJs</p>
                  <p>50%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '50%' }} />
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>React Native</p>
                  <p>50%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '50%' }} />
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>Java</p>
                  <p>40%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '40%' }} />
                </div>
              </div>
              <div>
                <div className='titulos'>
                  <p>NodeJs</p>
                  <p>20%</p>
                </div>
                <div className='barra'>
                  <div className='porcentagem' style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>
        </Barras>

        <Qualificacoes>
          <TitulosCat data-anime="up" className={scroll >= 2000 ? 'animate': ''}>
            <h1>Minhas <span>Qualificações</span></h1>
            <Separador />
          </TitulosCat>
          <div data-anime="up" className={scroll >= 2100 ? 'conteudo animate': 'conteudo'}>
            <div className='left'>
              <div className='titulo'>
                <HiAcademicCap size={40} color='#6F6BF2' />
                <h1>Educação:</h1>
              </div>
              <div className='card'>
                <h1>2017 - 2019</h1>
                <h2>Eletrotécnica</h2>
                <p>
                  Curso técnico focado em entender profundamente o 
                  funcionamento da energia elétrica em motores, 
                  circuitos, cabos, geradores, sistemas de transmição 
                  e etc.
                </p>
              </div>
              <div className='card'>
                <h1>2018 - 2022</h1>
                <h2>Ciência da Computação</h2>
                <p>
                  Bacharelado com a função de ensinar os princípios 
                  da computação a evolução da tecnologia e 
                  principalmente a programar diferentes tipos 
                  de sistemas.
                </p>
              </div>
            </div>
            <div className='right'>
              <div className="titulo">
                <MdWork size={40} color='#6F6BF2' />
                <h1>Experiência:</h1>
              </div>
              <div className='card'>
                <h1>2022 - 2022</h1>
                <h2>Estagiário</h2>
                <p>
                  Exercendo a função de suporte técnico para 
                  equipamentos de escritório, recolhendo maquinas, 
                  instalando acessórios e gerenciando estoque.
                </p>
              </div>
            </div>
          </div>
        </Qualificacoes>

        <Portfolio id='portifolio'>
          <TitulosCat data-anime="up" className={scroll >= 3000 ? 'animate': ''}>
            <h1>
              Meu <span>Portfólio</span>
            </h1>
            <p>
              Abaixo poderá ver alguns projeto 
              que mantenho para exibição
            </p>
            <Separador />
          </TitulosCat>
          <div data-anime="left" className={scroll >= 3200 ? 'conteudo animate': 'conteudo'}>
            <ul>
              {portfolio.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt="" />
                  <div className='info-port'>
                    <h1>{item.nome}</h1>
                    <p>{item.nivel}</p>
                    <a rel="noreferrer" href={item.link} target='_blank'>
                      <AiOutlineArrowRight 
                        color='#fff' 
                        size={24} 
                      />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Portfolio>

        <Contato data-anime="left" className={scroll >= 4000 ? 'animate': ''} id='contato'>
          <TitulosCat style={{ marginBottom: 100 }}>
            <h1>
              Entrar em <span>Contato</span>
            </h1>
            <Separador />
          </TitulosCat>
          <form>
            <div className='topo'>
              <input 
                placeholder='Nome' 
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                type='text' 
              />
              <input 
                placeholder='Email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='text' 
              />
              <input 
                placeholder='Assunto' 
                onChange={(e) => setAssunto(e.target.value)}
                value={assunto}
                type='text' 
              />
            </div>
            <div className='mensagem'>
              <input 
                className='texto' 
                placeholder='Sua Mensagem' 
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
                type='text' 
              />
            </div>
            {enviado ?
              <p>Email Enviado.</p>
            :null}
            <div className='botao' onClick={() => EnviarEmail(nome, email, assunto, mensagem)}>
              {enviando ?  
                <div className='enviando'>
                  Enviando...
                </div>
              : 
                <div onClick={() => EnviarEmail(nome, email, assunto, mensagem)}>
                  Enviar
                </div>
              }
            </div>
          </form>
        </Contato>

        <Footer>
          <p>CopyRight © 2023 Denis | Todos os direitos reservados</p>
        </Footer>
        
      </main>
    </Container>
  );
}

export default App;
