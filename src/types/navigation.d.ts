
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
};