export const categories = {
   
    Ciencias_Exatas_e_Naturais: { id: 1, name: 'Ciências Exatas e Naturais', color:'#0074D9' },
    Ciências_Humanas_e_Sociais: { id: 2, name: 'Ciências Humanas e Sociais', color:'#8B4513' },
    Linguagens_e_Comunicação: { id: 3, name: 'Linguagens e Comunicação', color:'#FF851B' },
    Ciências_da_Saúde: { id: 4, name: 'Ciências da Saúde', color:'#2ECC40' },
    Ciências_Aplicadas_e_Tecnológicas: { id: 5, name: 'Ciências Aplicadas e Tecnológicas', color:'#95A5A6' },
    Educação_e_Pedagogia: { id: 6, name: 'Educação e Pedagogia', color:'#FFD700' },
    Artes_e_Cultura: { id: 7, name: 'Artes e Cultura', color:'#800080' },
    Literatura_e_Entretenimento: { id: 8, name: 'Literatura e Entretenimento', color:'#FF4136' },
    Religião_e_Espiritualidade: { id: 9, name: 'Religião e Espiritualidade', color:'#F5F5F5' },
    Esportes_e_Lazer: { id: 10, name: 'Esportes e Lazer', color:'#32CD32' },
    Ciências_Agrárias: { id: 11, name: 'Ciências Agrárias', color:'#6B8E23' }
  };
  
  export const subcategories = {
    
    
    Ciencias_Exatas_e_Naturais: [
      { id: 1, name: 'Matemática',  color: '#7FDBFF' },
      { id: 2, name: 'Física',  color: '#39CCCC' },
      { id: 3, name: 'Química',  color: '#001F3F'},
      { id: 4, name: 'Biologia', color: '#3D9970' },
      { id: 5, name: 'Astronomia', color: '#000080' },
      { id: 6, name: 'Geociências', color: '#5D9CEC' },
      { id: 7, name: 'Ciências Ambientais', color: '#1F618D' },
    ],
Ciências_Humanas_e_Sociais: [
    {id: 5, name: "Filosofia", color: "#CD853F", ordem: 1},
    {id: 6, name: "Sociologia", color: "#5C4033", ordem: 2},
    {id: 7, name: "Antropologia", color: "#D2B48C", ordem: 3},
    {id: 8, name: "Psicologia", color: "#A0522D", ordem: 4},
    {id: 9, name: "História", color: "#B8860B", ordem: 5},
    {id: 10, name: "Geografia", color: "#8F5E1E", ordem: 6},
    {id: 11, name: "Ciência Política", color: "#556B2F", ordem: 7},
    {id: 12, name: "Direito", color: "#654321", ordem: 8}
    ],
Linguagens_e_Comunicação: [
        {id: 12, name: "Literatura", color: "#FFA07A", ordem: 1},
  {id: 13, name: "Linguística", color: "#E25822", ordem: 2},
  {id: 14, name: "Comunicação e Mídia", color: "#FFA500", ordem: 3},
  {id: 15, name: "Jornalismo", color: "#FF4500", ordem: 4},
  {id: 16, name: "Publicidade e Propaganda", color: "#FF8C00", ordem: 5},
  {id: 17, name: "Artes Visuais", color: "#FF7043", ordem: 6},
  {id: 18, name: "Cinema e Audiovisual", color: "#E97451", ordem: 7}
    ],
    Ciências_da_Saúde: [
        {id: 19, name: "Medicina", color: "#1E8449", ordem: 1},
        {id: 20, name: "Enfermagem", color: "#90EE90", ordem: 2},
        {id: 21, name: "Farmácia", color: "#556B2F", ordem: 3},
        {id: 22, name: "Odontologia", color: "#808000", ordem: 4},
        {id: 23, name: "Nutrição", color: "#ADFF2F", ordem: 5},
        {id: 24, name: "Saúde Pública", color: "#98FB98", ordem: 6},
        {id: 25, name: "Fisioterapia", color: "#3CB371", ordem: 7}
    ],
    Ciências_Aplicadas_e_Tecnológicas: [
  {id: 26, name: "Engenharia", color: "#2C3E50", ordem: 1},
  {id: 27, name: "Arquitetura e Urbanismo", color: "#BDC3C7", ordem: 2},
  {id: 28, name: "Tecnologia da Informação", color: "#34495E", ordem: 3},
  {id: 29, name: "Inteligência Artificial", color: "#7F8C8D", ordem: 4},
  {id: 30, name: "Gestão e Administração", color: "#5D6D7E", ordem: 5},
  {id: 31, name: "Economia", color: "#D5D8DC", ordem: 6},
  {id: 32, name: "Marketing", color: "#AAB7B8", ordem: 7}
      ],
      Educação_e_Pedagogia: [
        {id: 33, name: "Educação Infantil", color: "#FFFFE0", ordem: 1},
  {id: 34, name: "Ensino Fundamental e Médio", color: "#FFD700", ordem: 2},
  {id: 35, name: "Didática", color: "#FFDB58", ordem: 3},
  {id: 36, name: "Metodologias de Ensino", color: "#F5DEB3", ordem: 4},
  {id: 37, name: "Educação Especial e Inclusiva", color: "#FFFF33", ordem: 5}
      ],
      Artes_e_Cultura: [
        {id: 38, name: "Música", color: "#D8BFD8", ordem: 1},
  {id: 39, name: "Teatro", color: "#4B0082", ordem: 2},
  {id: 40, name: "Dança", color: "#6A0DAD", ordem: 3},
  {id: 41, name: "Moda", color: "#BA55D3", ordem: 4},
  {id: 42, name: "Patrimônio Cultural", color: "#5D3FD3", ordem: 5}
      ],
      Literatura_e_Entretenimento: [
        {id: 43, name: "Ficção (Romances, Contos, Poesia)", color: "#FF7F7F", ordem: 1},
  {id: 44, name: "Não-ficção", color: "#B22222", ordem: 2},
  {id: 45, name: "Literatura Infantil e Juvenil", color: "#FF4D4D", ordem: 3},
  {id: 46, name: "HQs e Mangás", color: "#DC143C", ordem: 4},
  {id: 47, name: "Ficção Científica e Fantasia", color: "#8B0000", ordem: 5}
      ],
      Religião_e_Espiritualidade: [
        {id: 48, name: "Teologia", color: "#FFF5E1", ordem: 1},
  {id: 49, name: "Religiões Comparadas", color: "#EDEDED", ordem: 2},
  {id: 50, name: "Filosofias Espirituais", color: "#FAF0E6", ordem: 3}
      ],
      Esportes_e_Lazer: [
        {id: 51, name: "Educação Física", color: "#228B22", ordem: 1},
        {id: 52, name: "Esportes Coletivos e Individuais", color: "#00FF7F", ordem: 2},
        {id: 53, name: "Jogos e Recreação", color: "#00FA9A", ordem: 3},
        {id: 54, name: "Bem-estar e Qualidade de Vida", color: "#98FB98", ordem: 4}
      ],
      Ciências_Agrárias: [
        {id: 55, name: "Agricultura", color: "#556B2F", ordem: 1},
        {id: 56, name: "Pecuária", color: "#3E4B29", ordem: 2},
        {id: 57, name: "Sustentabilidade Rural", color: "#8F9779", ordem: 3}
      ]
  };