
<img width="920" height="350" alt="LogoCardHome" src="https://github.com/user-attachments/assets/0bb762fb-14ba-4bd8-81f1-a1413a0e0530" />

<br><p>O "Doe Mais - Conectando Heróis a Quem Precisa" é uma aplicação móvel desenvolvida para incentivar a doação de sangue através da gamificação e facilidade de acesso à informação.<br>
O objetivo é transformar o ato de doar em uma jornada de herói, onde o usuário desbloqueia conquistas e acompanha seu histórico de forma simples, além de localizar hemocentros próximos.</p>

___
SERRATEC - Residência TIC/ Software 2025.2
<br>React Native - Grupo 2 - Devs: Emmanueli Schulze, Giselle Garcia, Natália Siqueira e Thaís Turl.
___
<h3>🚀 Funcionalidades Principais</h3>
<h4>1. Gamificação e Badges (Sistema de Heróis)</h4>
Para estimular a recorrência, o app utiliza um sistema de recompensas visuais:<br>
FlatList de Conquistas: Na Home, o usuário visualiza suas medalhas.<br>
Níveis de Herói: A cada doação registrada (de 1 a 7), o usuário desbloqueia uma nova badge, evoluindo seu status de "herói".<br><br>
<img width="5955" height="1315" alt="Dcumentacao" src="https://github.com/user-attachments/assets/01996012-95be-456c-9707-4a71f1b217a7" />

<h4>2. Home Interativa e Educativa</h4>
Cards Informativos: Curiosidades sobre doação de sangue para educar o usuário.<br>
Checklist de Aptidão: Uma lista rápida para o usuário verificar se cumpre os requisitos básicos antes de sair de casa.<br>
Calculadora de Próxima Doação (Diferencial):
Ao clicar em um HomeCard de "Quando Posso Doar Novamente", um Modal se abre.<br>
O sistema calcula automaticamente a data da próxima doação permitida baseada em duas variáveis: Gênero Biológico e Data da Última Doação.<br>
Regra: Homens podem doar a cada 2 meses (máx 4x/ano) e mulheres a cada 3 meses (máx 3x/ano).<br>

<h4>3. Perfil e Histórico:</h4>
CRUD de Usuário: Integração com MockAPI para: Registrar nova doação, Visualizar dados pessoais, Atualizar informações (Método PUT).

<h4>4. APIs usadas:</h4>
<p>O aplicativo usa três serviços externos principais, todos acessados via Axios (nossa biblioteca de comunicação):</p>
<h5>- MockAPI (Usuários e Doações):</h5>
- Função: Atua como nosso backend. Armazena os perfis de doadores (cadastro e login).<br>
- Fluxo: Login/Cadastro: O MockAPI valida as credenciais e armazena os dados do usuário.<br>
- Registro de Doação: Atualizamos o perfil do usuário (campo lastDonation e totalDonations) diretamente no MockAPI.<br>
<br>
<h5>- MockAPI (Hemocentros):</h5>
- Função: Lista todos os locais de doação.<br>
- Fluxo: A lista completa é baixada e depois filtrada localmente para mostrar apenas os hemocentros da cidade desejada.<br>

<h5>ViaCEP:</h5>

- Função: Conversão de endereço.<br>
- Fluxo (Localização): O usuário digita o CEP → o ViaCEP retorna a cidade/estado → usamos essa cidade/estado para filtrar a lista do MockAPI/hemocenters.<br>
Em resumo: O MockAPI guarda nossos dados de usuário e hemocentros, e o ViaCEP ajuda a descobrir a cidade de um CEP para encontrarmos os hemocentros mais próximos.

<h3>Telas do App:</h3>
<img width="7590" height="10680" alt="PrintsDoeMais-Documentacao" src="https://github.com/user-attachments/assets/3b4ab4c4-79db-48c2-ad1c-34e374a686a1" />

<h4>5. Stack Tecnológica:</h4>
Core: React Native com Expo<br>
Manipulação de Datas: date-fns (Utilizado para addDays, differenceInDays, format, isValid, parse).<br>
Componentes UI: Modal, TouchableOpacity, ActivityIndicator, Flatlist.<br>
Estilização: StyleSheet (Nativo).<br>
Fontes Personalizadas: Família de fontes Neulis (NeulisBold, NeulisSemiBold, NeulisRegular).<br>
