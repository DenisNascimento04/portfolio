import styled from 'styled-components';
import WallpaperHome from './assets/walllpaper-home.jpg';
import WallpaperHomeMobile from './assets/wallpaper-home-mobile.jpg';

export const Container = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    /* height: 100%; */
    main{
        display: flex;
        flex-direction: column;
        gap: 100px;
    }
    @media only screen and (max-width: 425px) {
        width: 100%;
    }
    @media only screen and (min-width: 1440px) {
        [data-anime]{
            opacity: 0;
            transition: .7s;
        }
        [data-anime='right']{
            transform: translateX(200px);
        }
        [data-anime='left']{
            transform: translateX(-200px);
        }
        [data-anime='up']{
            transform: translateY(200px);
        }
        [data-anime].animate{
            opacity: 1;
            transform: translateX(0);
            transform: translateY(0);
        }
        
    }
`;

export const NavHidden = styled.header`
    position: fixed;
    z-index: 9999;
    width: 100%;
    transform: translateY(-100%);
    background-color: var(--cinza);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    h1{
        margin-left: 12%;
    }
    nav{
        margin-right: 12%;
        display: flex;
        gap: 20px;
    }
    nav a{
        font-size: 20px;
        color: #fff;
        text-decoration: none;
        transition: .5s;
    }
    nav a:hover{
        color: var(--destaque);
        border-bottom: 1px solid var(--destaque);
    }
    button{
        display: none;
    }
    &.fixed{
        /* opacity: 1; */
        -webkit-animation-name: slideInDown;
        animation-name: slideInDown;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    nav a:hover{
        color: var(--destaque);
        border-bottom: 1px solid var(--destaque);
    }
    @-webkit-keyframes slideInDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
            visibility: visible;
        }
        100% {
            -webkit-transform: translateY(-10%);
            transform: translateY(-10%);
        }
    }
    @keyframes slideInDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
            visibility: visible;
        }
        100% {
            -webkit-transform: translateY(-10%);
            transform: translateY(-10%);
        }
    } 
    @media only screen and (max-width: 425px) {
        /* display: none; */
        width: 100%;
        padding: 10px 0;
        h1{
            font-size: 24px;
            margin-left: 10px;
        }
        nav{
            position: absolute;
            flex-direction: column;
            background-color: #000;
            right:-5%;
            top: 85%;
            border-radius: 10px;
            padding: 20px;
            opacity: 0;
            transition: .2s;
        }
        nav.show{
            opacity: 1;
        }
        button{
            display: block;
            padding: 0;
            border: 0;
            background-color: transparent;
            margin-right: 10px;
        }
    }
`

export const Home = styled.div`
    position: relative;
    overflow: hidden;
    br{
        display: none;
    }
    .img-back{
        z-index: -5;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: cover;
        position: absolute;
        content: url(${WallpaperHome});
    }

    .fundo-back{
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(50,50,50,.9);
    }

    header{
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 40px 12%;
    }

    header h1{
        letter-spacing: 2px;
        color: var(--destaque);
    }
    header nav{
        display: flex;
        gap: 20px;
    }
    header nav a{
        font-size: 20px;
        color: #fff;
        text-decoration: none;
        transition: .5s;
    }
    header nav a:hover{
        color: var(--destaque);
        border-bottom: 1px solid var(--destaque);
    }

    header.fixed{
        position: fixed;
        width: 100%;
        background-color: red;
        left: 0;
        top: 0;
    }

    header button{
        display: none;
    }

    section{
        z-index: 999;
        display: flex;
        align-items: center;
        /* background-color: red; */
        flex: 2;
        margin: 0 12%;
        padding-bottom: 100px;
    }

    section .apresentacao{
        display: flex;
        gap: 20px;
        flex-direction: column;
        flex: 1;
    }
    section .apresentacao h2{
        font-size: 32px;
        font-weight: 500;
        color: var(--destaque);
    }
    section .apresentacao h1{
        /* display: flex; */
        font-size: 32px;
    }
    section .apresentacao h1 span{
        display: inline-flex;
        overflow: hidden;
        /* background-color: red; */
        color: var(--destaque);
        max-width: 0%;
        box-shadow: 2px 0 0 var(--destaque);
        white-space: nowrap;
        animation: 
        caret .5s step-end infinite alternate,
        escrever 5s steps(55) infinite;
    }
    @keyframes escrever {
        100% {
            max-width: 100%;
        }
    }
    @keyframes caret { 
        50% { 
            box-shadow: 2px 0 0 transparent;
        }
    }
    section .apresentacao p{
        font-size: 24px;
    }
    section .apresentacao ul{
        display: flex;
        padding: 0;
        border: 0;
        list-style: none;
    }
    section .apresentacao ul li{
        padding: 10px;
        border-color: red;
        cursor: pointer;
        /* border: 1px solid var(--cinza); */
    }
    section .foto-home{
        /* background-color: green; */
        flex: 1;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px;
    } 
    section .foto-home img{
        width: 80%;
        height: 80%;
        border-radius: 50px;
        object-fit: cover;
    }
    @media only screen and (max-width: 425px) {
        width: 100%;
        br{
            display: block;
        }
        .img-back{
            content: url(${WallpaperHomeMobile});
        }
        header{
            margin: 20px 5%;
        }
        header nav{
            /* display: none; */
            position: absolute;
            flex-direction: column;
            background-color: #000;
            right: 10%;
            top: 7%;
            border-radius: 10px;
            padding: 20px;
            opacity: 0;
            transition: .2s;
        }
        header nav.show{
            opacity: 1;
        }
        header button{
            display: block;
            padding: 0;
            border: 0;
            background-color: transparent;
        }
        section {
            margin: 0 5%;
            flex-direction: column;
            padding: 0;
        }

        section .apresentacao h2{
            font-size: 24px;
        }
        section .apresentacao h1{
            font-size: 24px;
        }
        section .apresentacao p{
            font-size: 16px;
        }
        section .foto-home{
            height: auto;
            padding: 20px 0;
        }
        section .foto-home img{
            border-radius: 200px;
        }
    }
`

export const TitulosCat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h1{
        font-size: 48px;
    }
    p{
        font-size: 20px;
        line-height: 30px;
        max-width: 55%;
        text-align: center;
    }
    @media only screen and (max-width: 425px) {
        h1{
            font-size: 32px;
            text-align: center;
        }
        p{
            font-size: 14px;
            max-width: 85%;
        }
    }
`

export const SobreMim = styled.section`
    display: flex;
    flex-direction: column;
    flex: 2;
    align-items: center;
    margin: 0 12%;
    gap: 60px;
    padding-top: 100px;
    .conteudo-right .foto{
        height: 600px;
        padding: 20px;
        background-color: var(--cinza);
        flex: 1;
    }
    .conteudo-right .foto img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .conteudo-right{
        display: flex;
        gap: 100px;
    }
    .conteudo-right .conteudo{
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }
    .conteudo-right .conteudo h1{
        font-size: 32px;
    }
    .conteudo-right .conteudo p{
        line-height: 30px;
        font-size: 16px;
    }
    .conteudo-right .conteudo .dados{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .conteudo-right .conteudo .dados p{}
    .conteudo-right .conteudo .dados p span{font-weight: 700; margin-right: 5px}
    @media only screen and (max-width: 425px) {
        margin: 0 6%;
        .conteudo-right{
            flex-direction: column;
        }
        .conteudo-right .conteudo{
            /* gap: 10px; */
        }
        .conteudo-right .conteudo h1{
            font-size: 24px;
        }
        .conteudo-right .conteudo p{
            font-size: 14px;
        }
        .conteudo-right .conteudo .dados{
            gap: 5px;
        }
        .conteudo-right .conteudo{}
    }
`

export const Barras = styled.section`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin: 0 12%;
    gap: 60px;
    padding-top: 50px;
    .conteudo{
        display: flex;
        gap: 40px;
    }
    .conteudo .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .conteudo .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .conteudo .titulos{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
    }
    .conteudo .titulos p{
        font-size: 20px;
    }
    .conteudo .barra{
        width: 100%;
        height: 10px;
        background-color: var(--cinza);
        border-radius: 20px;
    }
    .conteudo .porcentagem{
        height: 10px;
        background-color: var(--destaque);
        border-radius: 20px;
    }
    @media only screen and (max-width: 425px) {
        margin: 0 6%;
        .conteudo{
            flex-direction: column;
            gap: 20px;
        }
        .conteudo .titulos p{
            font-size: 14px;
        }
    }
`

export const Qualificacoes = styled.section`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin: 0 12%;
    gap: 60px;
    padding-top: 100px;
    .conteudo{
        display: flex;
        gap: 40px;
    }
    .conteudo .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .conteudo .left .titulo,
    .conteudo .right .titulo{
        display: flex;
        align-items: center;
    }    
    .conteudo .left .titulo h1,    
    .conteudo .right .titulo h1{
        margin-left: 10px;
        font-size: 40px;
    }
    
    .conteudo .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .conteudo .card{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        border: 1px solid #5A5A5A;
    }

    .conteudo .card h1,h2,p{
        font-size: 20px;
    }
    .conteudo .card h2{
        color: var(--destaque);
    }
    .conteudo .card p{}
    @media only screen and (max-width: 425px) {
        .conteudo{
            flex-direction: column;
        }
        .conteudo .left .titulo h1,    
        .conteudo .right .titulo h1{
            font-size: 32px;
        }
        .conteudo .card h1,h2,p{
            font-size: 14px;
        }
        .conteudo .card p{
            line-height: 25px;
        }
    }
`

export const Portfolio = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 12%;
    gap: 60px;
    padding-top: 80px;
    .conteudo ul{
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap: 10px;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .conteudo ul li img{
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
    .conteudo ul li:hover img{
        filter: blur(5px);
    }
    .conteudo ul li{
        position: relative;
        display:block;  
        width: 49%;  
        overflow: hidden;
    }
    .conteudo ul li:hover .info-port{
        opacity: 1;
        background-color: rgba(20,20,20,.8);
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .conteudo ul li .info-port{
        display: flex;
        opacity: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
    }
    @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @media only screen and (max-width: 425px){
        margin: 0 6%;
        .conteudo ul{
            flex-direction: column;
        }
        .conteudo ul li{
            width: 100%;
        }
    }
`

export const Contato = styled.section`
    margin: 0 12%;
    form{
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        gap: 20px;
    }
    input{
        flex: 1;
        border: 0;
        background-color: var(--cinza);
        color: #fff;
        padding: 20px;
    }
    input.texto{
        width: 100%;
        height: 200px;
    }
    form .topo{
        flex: 3;
        display: flex;
        gap: 20px;
    }
    form .mensagem{
        display: flex;
    }
    form .mensagem{}
    form .botao{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form .botao div{
        max-width: 100px;
        cursor: pointer;
        padding: 20px;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-weight: 700;
        background-color: var(--destaque);
    }
    form .botao div.enviando{
        max-width: 100px;
        cursor: pointer;
        padding: 20px;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-weight: 700;
        background-color: #58D68D;
    }
    form p{
        color: #58D68D;
    }
    @media only screen and (max-width: 425px){
        margin: 0 6%;
        form .topo{
            flex-direction: column;
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: var(--destaque);
    p{
        font-size: 20px;
    }
    @media only screen and (max-width: 425px){
        p{
            font-size: 12px;
        }
    }
`

export const Separador = styled.div`
    width: 200px;
    height: 2px;
    background-color: var(--destaque);
`