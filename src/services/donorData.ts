import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDays, isFuture, parseISO, differenceInDays, format } from 'date-fns';

const LAST_DONATION_KEY = '@last_donation_date';
const DONOR_GENDER_KEY = '@donor_gender'; 


type ProfileGender = 'male' | 'female' | '';

const DONATION_WAIT_DAYS = {
    male: 60, 
    female: 90, 
};

export const saveLastDonationDate = async (date: Date): Promise<void> => {
    await AsyncStorage.setItem(LAST_DONATION_KEY, format(date, 'yyyy-MM-dd'));
};


export const saveDonorGender = async (gender: ProfileGender): Promise<void> => {
    await AsyncStorage.setItem(DONOR_GENDER_KEY, gender);
};

export const getDonorProfile = async (): Promise<{ lastDonation: string | null; gender: ProfileGender | null }> => {
    const lastDonation = await AsyncStorage.getItem(LAST_DONATION_KEY);

    const gender = await AsyncStorage.getItem(DONOR_GENDER_KEY) as ProfileGender | null;
    return { lastDonation, gender };
};
