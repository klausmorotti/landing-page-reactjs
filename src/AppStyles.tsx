import styled from 'styled-components';

export const Container = styled.main`
    min-height:100vh;
    display:flex;
    flex-direction:column;

    @media ( max-width: 1100px ) {
        height:auto;
    }
`;

export const Article = styled.article`
    height:85vh;
    color:#FFF;
    background-image:url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/88e83db431e7575eaab695eb/cvcvc.jpg');
    background-position:center;
    background-size:cover;
    display: flex;
    flex-direction: column;
    padding:10px;
    
    h1 {
        text-align: center;
        font-size:50px;
        font-weight:500;
        margin:50px 0 0 0;

        @media ( max-width:600px ) {
            font-size:35px;
        }
    }

    .desc {
        text-align: center;
        font-size:20px;
        font-weight:300;

        @media ( max-width:600px ) {
            font-size:15px;
        }
    }

    .areaMain {
        max-width:1200px;
        width:100%;
        height:350px;
        margin:auto;
        display:flex;
    }

    .areaMain div:last-child {
        margin-right:0;
    }

    @media ( max-width:1100px ) {
        height:auto;

        .areaMain {
            margin-top:50px;
            max-width:1100px;
            height:auto;
            flex-wrap:wrap;
        }
        .areaMain div:nth-child(1),
        .areaMain div:nth-child(2) {
            margin-right:10px;
        }
        .areaMain div:nth-child(3),
        .areaMain div:nth-child(4) {
            margin-top:10px;
            margin-right:10px;
        }
    }

    
`;


export const CardsArticle = styled.div`
    height:100%;
    background-color:white;
    border:2px solid #72D9EF;
    color:#72D9EF;
    border-radius:15px;
    width:100%;
    margin-right:15px;
    padding:30px;

    @media ( max-width: 1100px ) {
        width:calc( 50% - 10px );
        
    }

    @media ( max-width:600px ) {
        width:100%;
        height:auto;
        margin-top:10px;
        margin-right:0 !important;
    }
`;

export const NumberCard = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#72D9EF;
    color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:500;
`;

export const TitleCard = styled.h3`
    margin:20px 0;
`;

export const TextCard = styled.p`
    text-align:left;
    font-style:italic;
    font-weight:300;
    font-size:16px;
    color:#808080;
`;

export const ButtonCard = styled.a`
    display:inline-block;
    padding:5px 20px;
    border:2px solid #72D9EF;
    border-radius:40px;
    margin-top:30px;
    transition:all ease 0.5s;
    cursor:pointer;

    &:hover {
        background-color:#72D9EF;
        color:#FFF;
    }
`;

export const Footer = styled.footer`
    height:15vh;
    background-color:#72D9EF;
    color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    padding:15px;
    text-align:center;
`;