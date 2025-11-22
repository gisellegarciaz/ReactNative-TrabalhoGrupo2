import axios from 'axios';

export interface CepAddress {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;          
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: boolean;
}

export interface Hemocenter {
    id: string;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    telefone: string;
    horario: string;
    latitude?: number;
    longitude?: number;
}

const VIACEP_BASE_URL = 'https://viacep.com.br/ws';

const HEMOCENTER_MOCKAPI_URL = 'https://691f65c231e684d7bfc99eb2.mockapi.io/hemocenters';

//meninas, esse arquivo é o serviço de localização, onde temos as funções para buscar o endereço pelo CEP e buscar os hemocentros

export const fetchAddressByCep = async (cep: string): Promise<CepAddress | null> => {
    try {
        const cleanCep = cep.replace(/\D/g, '');
        if (cleanCep.length !== 8) return null;

        const response = await axios.get<CepAddress>(`${VIACEP_BASE_URL}/${cleanCep}/json/`);
        
        if (response.data.erro) return null;

        return response.data;

    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        return null;
    }
};

export const fetchHemocenters = async (location: string): Promise<Hemocenter[]> => {
    try {
        const response = await axios.get<Hemocenter[]>(HEMOCENTER_MOCKAPI_URL);
        
        const normalizedLocation = location.toLowerCase().trim();

        return response.data.filter(h => 
            h.cidade.toLowerCase().includes(normalizedLocation) || 
            h.estado.toLowerCase().includes(normalizedLocation)
        );

    } catch (error) {
        console.error('Erro ao buscar hemocentros:', error);
        return [];
    }
};