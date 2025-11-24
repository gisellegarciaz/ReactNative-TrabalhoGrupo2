import { ImageSourcePropType } from 'react-native';

export interface SlideData {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
    buttonText: string;
}

export interface IntroducaoItemProps extends SlideData {
    onNext: (id: number) => void;
    isLast: boolean;
}

export interface IntroducaoAppProps {
    onFinishIntro: () => void;
}
