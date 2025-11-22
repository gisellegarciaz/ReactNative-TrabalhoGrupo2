
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDays, isFuture, parseISO, differenceInDays } from 'date-fns';

const LAST_DONATION_KEY = '@last_donation_date';
const DONOR_GENDER_KEY = '@donor_gender'; 

const DONATION_WAIT_DAYS = {
    M: 60, 
    F: 90, 
};

type Gender = 'M' | 'F';

export const saveLastDonationDate = async (date: Date): Promise<void> => {
    await AsyncStorage.setItem(LAST_DONATION_KEY, date.toISOString());
};

export const saveDonorGender = async (gender: Gender): Promise<void> => {
    await AsyncStorage.setItem(DONOR_GENDER_KEY, gender);
};

export const getDonorProfile = async (): Promise<{ lastDonation: string | null; gender: Gender | null }> => {
    const lastDonation = await AsyncStorage.getItem(LAST_DONATION_KEY);
    const gender = await AsyncStorage.getItem(DONOR_GENDER_KEY) as Gender | null;
    return { lastDonation, gender };
};

export const getNextDonationDate = async (): Promise<{ nextDate: Date | null; daysRemaining: number | null }> => {
    const { lastDonation: lastDateISO, gender } = await getDonorProfile();

    if (!lastDateISO || !gender) {
        return { nextDate: null, daysRemaining: null };
    }

    const lastDate = parseISO(lastDateISO);
    const waitDays = DONATION_WAIT_DAYS[gender] || 90; 
    
    const nextDate = addDays(lastDate, waitDays);
    const today = new Date();
    
    let daysRemaining = null;
    
    if (isFuture(nextDate) && differenceInDays(nextDate, today) > 0) {
        daysRemaining = differenceInDays(nextDate, today);
    } else {
        daysRemaining = 0;
    }
    
    return { nextDate, daysRemaining };
};