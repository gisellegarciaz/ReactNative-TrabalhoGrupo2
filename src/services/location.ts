import axios, { AxiosError } from 'axios';
import { Alert } from 'react-native'; 

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


/**
 * 
 * @param cep 
 * @returns 
 */
export const fetchAddressByCep = async (cep: string): Promise<CepAddress | null> => {
    try {
        const cleanCep = cep.replace(/\D/g, '');
     
        if (cleanCep.length !== 8) {
            return null;
        }

        const response = await axios.get<CepAddress>(`${VIACEP_BASE_URL}/${cleanCep}/json/`);
        
        
        if (response.data.erro) {
            return null;
        }

        return response.data;

    } catch (error) {
        if (error instanceof AxiosError) {
             console.error('Erro de rede ao buscar CEP:', error.message);
        } else {
             console.error('Erro desconhecido ao buscar CEP:', error);
        }
        return null;
    }
};

/**
 * 
 * @param location 
 * @returns 
 */
export const fetchHemocenters = async (location: string): Promise<Hemocenter[]> => {
    try {
        if (!location || location.trim() === '') {
            
            return [];
        }

       
        const response = await axios.get<Hemocenter[]>(HEMOCENTER_MOCKAPI_URL);
        
        const normalizedLocation = location.toLowerCase().trim();

      
        return response.data.filter(h => 
           
            h.cidade.toLowerCase().includes(normalizedLocation) || 
            h.estado.toLowerCase().includes(normalizedLocation)
        );

    } catch (error) {
         if (error instanceof AxiosError) {
             console.error('Erro de rede ao buscar hemocentros:', error.message);
           
             Alert.alert("Erro de Conexão", "Não foi possível carregar a lista de hemocentros. Verifique sua conexão.");
        } else {
             console.error('Erro desconhecido ao buscar hemocentros:', error);
        }
        return [];
    }
};