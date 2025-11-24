// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { styles } from './styles'

// const SimpleHeader: React.FC = () => {
//     return (
//         // O container principal define a linha e a separação
//         <View style={styles.headerContainer}>

//             {/* 1. Lado Esquerdo: Texto "Olá" */}
//             <View style={styles.leftContent}>
//                 <Text style={styles.greetingText}>Olá</Text>
//             </View>

//             {/* 2. Lado Direito: Botão/Ação */}
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => console.log('Botão Pressionado')}
//             >
//                 <Text style={styles.buttonText}>Ação</Text>
//             </TouchableOpacity>

//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Olá, {user.name}!</Text>
//                 <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//                     <Text style={styles.logoutButtonText}>Sair</Text>
//                 </TouchableOpacity>
//             </View>


//         </View>
//     );
// };

// export default SimpleHeader;