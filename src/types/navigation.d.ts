
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
    Login: undefined; 
    Register: undefined;
    
    Home: undefined; 
    Location: undefined; 

    HemocenterDetail: { id: string; name: string; latitude: number; longitude: number }; 
    
    Profile: undefined; 
    Settings: undefined;

    PossoDoar: undefined;
    Checklist: undefined;
    
    Compatibilidade: undefined;
    Nutricao: undefined;
    Curiosidade: undefined;
    ProximaDoacao: undefined;

    ProfileEdit: undefined;
    NewDonation: undefined;
};