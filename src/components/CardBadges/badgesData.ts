import { ImageSourcePropType } from 'react-native';
import BadgeSuperDoador from '../../assets/Badges/BadgePrimeiraDoacao.png';
import BadgeJump from '../../assets/Badges/BadgeSalvaVidasActive.png';
import BadgeBatDoador from '../../assets/Badges/BadgeBatmanActive.png';
import BadgeSalvadorDeVidas from '../../assets/Badges/BadgeSalvaVidasActive.png'

export interface BadgeItem {
    id: string;
    label: string;
    image: any;
    goal: number;
}

export const BADGES_DATA: BadgeItem[] = [
    {
        id: '1',
        label: 'Super Doador - \nPrimeira Doação',
        image: BadgeSuperDoador as ImageSourcePropType,
        goal: 1,
    },
    {
        id: '2',
        label: 'Salvador de Vidas -  \n2 Doações',
        image: BadgeJump as ImageSourcePropType,
        goal: 2,
    },
    {
        id: '3',
        label: 'Eu sou o BatDoador - \n3 Doações',
        image: BadgeBatDoador as ImageSourcePropType,
        goal: 3,
    },
    {
        id: '4',
        label: 'Lenda Viva - \n5 Doações',
        image: BadgeSalvadorDeVidas as ImageSourcePropType,
        goal: 5,
    }
];