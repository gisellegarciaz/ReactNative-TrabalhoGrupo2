import { ImageSourcePropType } from 'react-native';
import BadgePrimeira from '../../assets/Badges/BadgesDoacao1.png';
import BadgeSegunda from '../../assets/Badges/BadgesDoacao2.png';
import BadgeTerceira from '../../assets/Badges/BadgesDoacao3.png';
import BadgeQuarta from '../../assets/Badges/BadgesDoacao4.png'
import BadgeQuinta from '../../assets/Badges/BadgesDoacao5.png'
import BadgeSexta from '../../assets/Badges/BadgesDoacao6.png'
import BadgeSetima from '../../assets/Badges/BadgesDoacao7.png'

export interface BadgeItem {
    id: string;
    label: string;
    image: any;
    goal: number;
}

export const BADGES_DATA: BadgeItem[] = [
    {
        id: '1',
        label: 'Salva Vidas - \nPrimeira Doação',
        image: BadgePrimeira as ImageSourcePropType,
        goal: 1,
    },
    {
        id: '2',
        label: 'Super Doador -  \n2 Doações',
        image: BadgeSegunda as ImageSourcePropType,
        goal: 2,
    },
    {
        id: '3',
        label: 'Doador Maravilha - \n3 Doações',
        image: BadgeTerceira as ImageSourcePropType,
        goal: 3,
    },
    {
        id: '4',
        label: 'BatDoador - \n4 Doações',
        image: BadgeQuarta as ImageSourcePropType,
        goal: 5,
    },
    {
        id: '5',
        label: 'Doador Escarlate - \n5 Doações',
        image: BadgeQuinta as ImageSourcePropType,
        goal: 6,
    },
    {
        id: '6',
        label: 'Doador Esmagador - \n6 Doações',
        image: BadgeSexta as ImageSourcePropType,
        goal: 7,
    },
    {
        id: '7',
        label: 'Mago das Doações - \n7 Doações',
        image: BadgeSetima as ImageSourcePropType,
        goal: 8,
    }
];