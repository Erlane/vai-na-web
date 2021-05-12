import React from "react";
import styled from 'styled-components';

//Component
import PageTitle from '../pageTitle/pageTitle';
import CardSchool from './cardSchool';
import Button from '../button/Button';

//Images
import ImageDevFront from '../../images/images/iconFront.svg';
import ImageDevMob from '../../images/images/iconMobile.svg';
import ImageDevBack from '../../images/images/iconBack.svg';
import ImageCient from '../../images/images/iconCientista.svg';

// styles
const ContainerSchool = styled.div`
	display: flex;
	height: 125vh;

	@media (min-width: 1920px) {
		height: 90vh;
	  }

	@media (min-width: 1440px) {
		height: 70vh;
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	  }

`;

const SchoolText = styled.p`
	font-size: 14px;
	font-weight: 300;
	line-height: 1.5rem;
	width: 17.5rem;
	margin-left: 11.4rem;
	margin-top: -1rem;
	margin-bottom: 2rem;

	@media (min-width: 1920px) {
	margin-left: 16.4rem;
	line-height: 2.5rem;
	font-size: 25px;
	width: 27.5rem;
  }

	@media (min-width: 1024px) {
		margin-left: 11.4rem;
		font-size: 13px;
		width: 17.5rem;
	}
	

	
`;

const BoldSchool = styled.b`
  font-weight: 500;
`;

const BoxButton = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7rem;
  margin-left: 11rem;
  margin-bottom: 2;

  @media (min-width: 2560px) {
    margin-right: 40rem;
	height: 11rem;
  }

  @media (min-width: 1920px) {
    margin-left: 17rem;
	margin-right: 30rem;
	height: 8rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const BoxButtonTop = styled.div `
	width: 13.5rem;
	height: 3.375rem;

	@media (min-width: 2560px) {
		margin-bottom: 1rem;
		width: 15.5rem;
		height: 4.375rem;
	}
	@media (min-width: 1920px) {
		margin-right: 1rem;
		width: 15.5rem;
		height: 4.375rem;
	}

	
	
`;

const BoxButtonBottom = styled.div `
	width: 13.5rem;
	height: 3.375rem;
	margin-left: 4rem;

	@media (min-width: 2560px) {
		margin-left: 14rem;
	}
	@media (min-width: 1920px) {
		margin-left: 5rem;
		width: 15.5rem;
		height: 4.375rem;
	  }
	
`;

const ContentCardSchool = styled.section`
  display: flex;
  width: 50%;
  margin-top: 9rem;
  flex-direction: column;

  @media (min-width 2560px) {
    margin-top: 2rem;
	width: 50%;
  }

  @media (min-width: 1920px) {
	margin-top: 10rem;
	width: 50%;
  }

  @media (min-width: 1440px) {
	margin-top: 4rem;
	width: 50%;
	height: 35vh;
  }


  
`;

const DivCardsTop = styled.div`
  display: flex;
  width: 70%;
  height: 45vh;

  @media (min-width: 1920px) {
	height: 35vh;
  }
  
  
`;

const DivCardsBottom = styled.div`
  display: flex;
  width: 70%;
  height: 45vh;

  @media (min-width: 1440px) {
	margin-bottom: 4rem;
  }
`;

const ContentCardDf = styled.div`
  position: relative;
  margin-left: -7rem;
  z-index: 1;

  @media (min-width: 1440px) {
	margin-top: 4rem;
  }
  @media (min-width: 1024px) {
	margin-top: 2rem;
	margin-left: -5rem;
  }
  
`;

const ContentCardDm = styled.div`
  position: relative;
  z-index: 1;

  @media (min-width: 1440px) {
	margin-top: 4rem;
  }
  @media (min-width: 1024px) {
	margin-top: 2rem;
  }
`;

const ContentCardDb = styled.div`
  position: relative;
  margin-left: -14rem;
  z-index: 1;

  @media (min-width: 1440px) {
	margin-top: -4rem;
  }
  @media (min-width: 1024px) {
	margin-top: -2rem;
  }
`;
const ContentCardCd = styled.div`
  position: relative;
  z-index: 1;

  @media (min-width: 1440px) {
	margin-top: -4rem;
  }
  @media (min-width: 1024px) {
	margin-top: -2rem;
  }
  
`;





const PartnerSchols = () => {
	const isTitleSchool = { typePage: 'Escola', title: 'Uma plataforma de <br/> lançamento de estrelas' };

	return (

		<ContainerSchool>
			<div>
				<PageTitle data={isTitleSchool} isPage='isHome' />
				<SchoolText>
					Preparamos <BoldSchool>talentos diversos de todo o Brasil</BoldSchool>,
				das <BoldSchool>classes C, D e E</BoldSchool>, através do <BoldSchool> ensino de
				programação digital avançada</BoldSchool> e habilidades socioemocionais.
				Desejamos ajudar pessoas a construir <BoldSchool>carreiras relevantes</BoldSchool>
				dentro do espaço profundo da <BoldSchool>economia digital</BoldSchool>, injetando
				<BoldSchool> diversidade</BoldSchool>, promovendo <BoldSchool> inclusão </BoldSchool>
				e fortalecendo os <BoldSchool>direitos humanos</BoldSchool> no <BoldSchool>mercado
				de tecnologia</BoldSchool>.
				</SchoolText>

				<BoxButton>
					<BoxButtonTop>
						<Button colorHover='#272727' >Quero ser estudante!</Button>
					</BoxButtonTop> 
					<BoxButtonBottom>
						<Button background='none' border='2px solid #00145D' color='#00145D'> Quero ser vontuntário!</Button>
					</BoxButtonBottom>
				</BoxButton>
			</div>
			<ContentCardSchool>
				<DivCardsTop>
					
					<ContentCardDf>
						<CardSchool title='Desenvolvedor Front-End' description='Desenvolve 
                websites e aplicações responsivas. É o profissional responsável por dar 
                vida e movimento às interfaces digitais. Ou seja, atua desenvolvendo 
                os componentes de um site ou aplicativo que vão interagir diretamente 
                com os usuários.' image={ImageDevFront} />
						{/* <ImageCard src={ImageDevFront} /> */}
					</ContentCardDf>

					<ContentCardDm>
						<CardSchool title='Desenvolvedor Mobile' description='Desenvolve aplicativos 
                nativos para Android e iOS. É o profissional responsável pelo planejamento, 
                elaboração, testes e implementação de softwares para dispositivos móveis 
                (Smartphones, smartwatches, tablets, câmeras…).' image={ImageDevMob} />
						{/* <ImageCard src={ImageDevMob} /> */}
					</ContentCardDm>
					
				</DivCardsTop>
				<DivCardsBottom>	

					<ContentCardDb>
						
						<CardSchool background='rgba(253,231,169,0.4)' title='Desenvolvedor Back-end' description='É o profissional 
                responsável por construir e organizar as engrenagens, banco de dados e 
                servidores que possibilitam os sites e sistemas funcionarem.' image={ImageDevBack} soon />
						{/* <ImageCard src={ImageDevBack} /> */}
					</ContentCardDb>
						
					
					<ContentCardCd>
						<CardSchool background='rgba(254,213,178,0.5)' title='Cientista de Dados' description='Uma nova geração de 
                especialistas analíticos, aptos a resolverem problemas complexos de negócios 
                a partir da coleta, estruturação e gerenciamento de uma quantidade massiva de 
                dados.' image={ImageCient} soon />
						{/* <ImageCard src={ImageCient} /> */}
					</ContentCardCd>
				</DivCardsBottom>
			</ContentCardSchool>
		</ContainerSchool>
	)
}

export default PartnerSchols;
