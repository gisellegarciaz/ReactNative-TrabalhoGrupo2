
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import { addDays, differenceInDays, format, isValid, parse } from 'date-fns';

interface ProximaDoacaoModalProps {
    isVisible: boolean;
    onClose: () => void;
    userGender: 'male' | 'female' | null;
    lastDonation: string | null;
}

const DONATION_INTERVAL_MALE = 60;
const DONATION_INTERVAL_FEMALE = 90;

const ProximaDoacaoModal: React.FC<ProximaDoacaoModalProps> = ({
    isVisible,
    onClose,
    userGender,
    lastDonation
}) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        isApto: boolean;
        nextDate: string;
        daysRemaining: number;
    } | null>(null);

    const handleCalculate = () => {

        if (!userGender) {
            Alert.alert("Você não informou o gênero no seu perfil.")
            return;
        }

        let lastDonationDate: Date;

        if (lastDonation) {
            lastDonationDate = parse(lastDonation, 'yyyy-MM-dd', new Date());
        } else {
            setResult({
                isApto: true,
                nextDate: format(new Date(), 'dd/MM/yyyy'),
                daysRemaining: 0
            });
            return;
        }

        if (!isValid(lastDonationDate)) {
            Alert.alert("Data de última doação inválida");
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const interval = userGender === 'male' ? DONATION_INTERVAL_MALE : DONATION_INTERVAL_FEMALE;
        const nextPossibleDate = addDays(lastDonationDate, interval);

        const daysRemaining = differenceInDays(nextPossibleDate, today);

        setResult({
            isApto: daysRemaining <= 0,
            nextDate: format(nextPossibleDate, 'dd/MM/yyyy'),
            daysRemaining: daysRemaining > 0 ? daysRemaining : 0
        });
    };

    const handleCloseModal = () => {
        onClose();
        setResult(null);
    };


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.centeredView}
                activeOpacity={1}
                onPress={handleCloseModal}
            >
                <View style={styles.modalView}>
                    {!result ? <Text style={styles.modalTitle}>Quando posso doar?</Text> : <Text style={styles.modalTitle}>Seu resultado</Text>}
                    {!result && <Text style={styles.modalSubtitle}>
                        Pressione o botão e descubra a partir de quando pode salvar vidas novamente.
                    </Text>}

                    {result && (
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>
                                {result.isApto ? 'Você já pode doar!' : 'Aguarde um pouco'}
                            </Text>

                            <Text style={styles.resultDate}>{result.nextDate}</Text>

                            <Text style={styles.resultMessage}>
                                {result.isApto
                                    ? 'Seu intervalo de recuperação já foi cumprido. Agende sua doação hoje mesmo!'
                                    : `Faltam apenas ${result.daysRemaining} dias para você poder salvar vidas novamente.`
                                }
                            </Text>
                        </View>
                    )}

                    {!result && <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={handleCalculate}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color={styles.primaryButtonText.color} />
                        ) : (
                            <Text style={styles.primaryButtonText}>Calcular Próxima Doação</Text>
                        )}
                    </TouchableOpacity>}


                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={handleCloseModal}
                    >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default ProximaDoacaoModal;