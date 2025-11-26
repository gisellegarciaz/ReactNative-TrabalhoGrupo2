import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import {
    fetchAddressByCep,
    fetchHemocenters,
    Hemocenter,
    CepAddress
} from '../../services/location';
import { SafeAreaView } from 'react-native-safe-area-context';

const INITIAL_REGION: Region = {
    latitude: -22.5050,
    longitude: -43.1810,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
};

export function Location() {
    const [cep, setCep] = useState('');
    const [loading, setLoading] = useState(false);
    const [hemocenters, setHemocenters] = useState<Hemocenter[]>([]);
    const [mapRegion, setMapRegion] = useState<Region>(INITIAL_REGION);
    const [searchLocation, setSearchLocation] = useState('');

    useEffect(() => {
        if (hemocenters.length > 0) {
            const firstHemocenter = hemocenters[0];

            if (firstHemocenter.latitude && firstHemocenter.longitude) {
                setMapRegion({
                    latitude: firstHemocenter.latitude,
                    longitude: firstHemocenter.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                });
            }
        }
    }, [hemocenters]);

    const handleSearch = async () => {
        if (cep.length !== 8) {
            Alert.alert('Erro', 'Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }

        setLoading(true);
        setHemocenters([]);
        setSearchLocation('');

        try {
            const address: CepAddress | null = await fetchAddressByCep(cep);

            if (!address) {
                Alert.alert('Erro', 'CEP não encontrado ou serviço ViaCEP indisponível.');
                setLoading(false);
                return;
            }

            const locationToSearch = address.localidade || address.uf;

            const list = await fetchHemocenters(locationToSearch);

            setHemocenters(list);
            setSearchLocation(locationToSearch);

            if (list.length === 0) {
                Alert.alert('Aviso', `Nenhum hemocentro encontrado para ${locationToSearch}.`);
            }

        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Encontre hemocentros perto de você!</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu CEP (Somente números)"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={8}
                    value={cep}
                    onChangeText={setCep}
                    editable={!loading}
                    placeholderTextColor={'#9c9c9c'}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={handleSearch}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <MaterialIcons name="search" size={24} color="#fff" />
                    )}
                </TouchableOpacity>
            </View>

            <MapView
                style={styles.map}
                region={mapRegion}
                onRegionChangeComplete={setMapRegion}
                showsUserLocation={true}
                loadingEnabled={true}
            >
                {hemocenters.map((hemocenter) => (
                    hemocenter.latitude && hemocenter.longitude ? (
                        <Marker
                            key={hemocenter.id}
                            coordinate={{
                                latitude: hemocenter.latitude,
                                longitude: hemocenter.longitude,
                            }}
                            title={hemocenter.nome}
                            description={`${hemocenter.endereco}, ${hemocenter.cidade}`}
                            pinColor="#E74C3C"
                        />
                    ) : null
                ))}
            </MapView>

            {searchLocation && !loading && (
                <Text style={styles.statusMessage}>

                    {hemocenters.length > 0 ? (
                        <>
                            Hemocentros encontrados em:
                            <Text style={{ fontWeight: 'bold' }}> {searchLocation}</Text>
                        </>
                    ) : (
                        `Nenhum hemocentro encontrado para ${searchLocation}.`
                    )}

                </Text>
            )}

            {loading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color="#E74C3C" />
                </View>
            )}
        </SafeAreaView>
    );
}
