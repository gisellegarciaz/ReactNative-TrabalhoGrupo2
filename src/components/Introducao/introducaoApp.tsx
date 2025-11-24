import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList as FlatListType } from 'react-native'; 
import { introSlides } from './introducaoData'; 
import IntroducaoItem from './introducaoItem';
import { IntroducaoAppProps, SlideData } from './types'; 
import { appStyles } from './styles'; 

const { width } = Dimensions.get('window');

const IntroducaoApp: React.FC<IntroducaoAppProps> = ({ onFinishIntro }) => {
    const flatListRef = useRef<FlatListType<SlideData>>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (currentSlideId: number) => {
        const nextIndex = currentSlideId + 1;

        if (nextIndex < introSlides.length) {
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        } else {
            onFinishIntro();
        }
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / width);
        setCurrentIndex(newIndex);
    };

    const renderItem = ({ item , index }: { item: SlideData, index: number }) => (
        <IntroducaoItem 
            {...item} 
            onNext={handleNext} 
            isLast={index === introSlides.length - 1} 
        />
    );

    return (
        <View style={appStyles.appContainer}>
            <FlatList
                ref={flatListRef}
                data={introSlides}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled // Habilita o comportamento de carrossel (snap)
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={1}
            />

            {/* Paginação (Dots) */}
            {/* <View style={appStyles.paginationContainer}>
                {introSlides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            appStyles.paginationDot,
                            index === currentIndex ? appStyles.dotActive : appStyles.dotInactive,
                        ]}
                    />
                ))}
            </View> */}
        </View>
    );
};

export default IntroducaoApp;