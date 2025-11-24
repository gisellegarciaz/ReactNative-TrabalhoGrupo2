import { SlideData } from './types'; 
import { ImageSourcePropType } from 'react-native';


export const introSlides: SlideData[] = [
    {
        id: 0,
        title: 'Olá!',
        description: 'Que bom te ver aqui! Pronto para doar vida?',
        image: require('../../assets/mascote/MascoteComCapa.png') as ImageSourcePropType,
        buttonText: 'Iniciar',
    },
    {
        id: 1,
        title: 'O que Fazer Antes de Doar',
        description: 'Te ajudamos na preparação para doar sangue com um passo a passo.',
        image: require('../../assets/mascote/MascoteOQueFazer.png') as ImageSourcePropType,
        buttonText: 'Arraste para o lado ➠ (1/4)',
    },
    {
        id: 2,
        title: 'Questionário',
        description: 'Responda a perguntas rápidas para verificar sua aptidão para doação.',
        image: require('../../assets/mascote/MascoteDoando.png') as ImageSourcePropType,
        buttonText: 'Próximo (2/4)',
    },
    {
        id: 3,
        title: 'Registro de Doações',
        description: 'Acompanhe seu histórico e descubra quando estará elegível para doar novamente.',
        image: require('../../assets/mascote/MascoteRegistro.png') as ImageSourcePropType, 
        buttonText: 'Próximo (3/4)',
    },
    {
        id: 4,
        title: 'Comunidade',
        description: 'Conecte-se com amigos doadores e encontre locais de doação perto de você.',
        image: require('../../assets/mascote/MascoteComunidade.png') as ImageSourcePropType,
        buttonText: 'Fechar Tour',
    },
];