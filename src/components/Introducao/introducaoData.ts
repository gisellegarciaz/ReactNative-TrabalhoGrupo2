import { SlideData } from './types'; 
import { ImageSourcePropType } from 'react-native';
import MascoteComCapa from '../../assets/Mascote/MascoteComCapa.png';
import MascoteOQueFazer from '../../assets/Mascote/MascoteOQueFazer.png';
import MascoteDoando from '../../assets/Mascote/MascoteDoando.png';
import MascoteRegistro from '../../assets/Mascote/MascoteRegistro.png';
import MascoteComunidade from '../../assets/Mascote/MascoteComunidade.png';


export const introSlides: SlideData[] = [
    {
        id: 0,
        title: 'Olá!',
        description: 'Que bom te ver aqui! Pronto para doar vida?',
        image: MascoteComCapa as ImageSourcePropType,
        buttonText: 'Iniciar',
    },
    {
       id: 1,
        title: 'O que Fazer Antes de Doar',
        description: 'Te ajudamos com várias dicas de preparação para doação.',
        image: MascoteOQueFazer as ImageSourcePropType,
        buttonText: 'Arraste para o lado ➠ (1/4)',
    },
    {
        id: 2,
        title: 'Questionário',
        description: 'Responda a perguntas rápidas para verificar sua aptidão para doação.',
        image: MascoteDoando as ImageSourcePropType,
        buttonText: 'Próximo (2/4)',
    },
    {
        id: 3,
        title: 'Registro de Doações',
        description: 'Registre uma data e descubra quando estará elegível para doar novamente.',
        image: MascoteRegistro as ImageSourcePropType, 
        buttonText: 'Próximo (3/4)',
    },
    {
        id: 4,
        title: 'Badges',
        description: 'Ganhe medalhas e celebre seu impacto em vidas. Você é um herói!',
        image: MascoteComunidade as ImageSourcePropType,
        buttonText: 'Fechar Tour',
    },
];