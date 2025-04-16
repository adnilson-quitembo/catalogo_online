import React, { useState, useEffect, useMemo } from 'react';
import { Search, Book, User, Hash, Pencil,Bookmark,MapPinned  } from 'lucide-react';
import {subcategories, categories } from '../../categpria_subcategoria'
import api from '../../api.js'
import cdd from '../../cdd'





const BookList = () => {
 
  const [data, setData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // Livros filtrados pela API
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  




  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('🔄 Buscando dados da API...');
      setLoading(true);
  
      api
        .get('/livros')
        .then((response) => {
          const raw = response.data;
  
          // ✅ Adaptação: força transformar em array
          const livros = Array.isArray(raw) ? raw : raw.data;
  
          setData(livros);
          setFilteredBooks(livros);
          console.log('✅ Dados carregados com sucesso');
  
          clearInterval(interval);
        })
        .catch((err) => {
          console.error('❌ Erro ao buscar dados:', err);
          setError('Não foi possível carregar os dados.');
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
  
  
  const livrosParaExibir = searchQuery
  ? Array.isArray(filteredSearchResults) ? filteredSearchResults : []
  : Array.isArray(filteredBooks) && filteredBooks.length > 0
    ? filteredBooks
    : Array.isArray(data)
      ? data
      : [];
  
  
  
      // 🔹 Pesquisa rápida no front-end (filtra em allBooks)
 

      const filteredSearchResults = searchQuery && Array.isArray(data)
      ? data.filter(book =>
          String(book.TITULO_DO_LIVRO).toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(book.AUTOR_PRINCIPAL).toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(book.ISBN).includes(searchQuery)
        )
      : Array.isArray(data) ? data : [];
  
    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
      setSelectedSubcategory(); // Reset subcategory when category changes
    };
    
    async function handleSearch () {
      try {
        const params = {};
        if (selectedCategory) params.ARE_TEMATICA = selectedCategory; 
        if (selectedSubcategory) params.SUBTEMA = selectedSubcategory;
        if (selectedCourse) params.CURSOS = selectedCourse;
  
        console.log("🔍 Enviando parâmetros para API:", params);
  
        const response = await api.get("/atributos", { params });
  
        console.log("📥 Resposta da API:", response.data);
  
        if (Array.isArray(response.data)) {
          setFilteredBooks(response.data); // ✅ Já é array
        } else if (Array.isArray(response.data.livros)) {
          setFilteredBooks(response.data.livros); // ✅ Está dentro de "livros"
        } else {
          console.warn("⚠️ Formato inesperado da resposta:", response.data);
          setFilteredBooks([]); // Evita erros no .map
        }
        
      } catch (error) {
        console.error("❌ Erro ao buscar livros:", error);
      }
    }
  
  
  
  
    function Pegar_description (item) {
  
    const matchedCdd = cdd.find((c) => c.code === item)?.description;
  
    return matchedCdd
  }
  
     function Pegar_categories_cor(item) {
        if (!item || typeof item !== "string") return "transparent"; // Evita erro
        const formattedItem = item.replace(/_/g, ' '); // Substitui "_" por espaço
        const matchedCategory = Object.values(categories).find((c) => c.name === formattedItem);
        return matchedCategory ? matchedCategory.color : "transparent"; // Re
    }
    
      function Pegar_subtema_cor (item) {
        if (!item) return 'transparent'; // Cor padrão caso item seja null/undefined
        const formattedItem = item.replace(/_/g, ' '); // Substitui "_" por espaço
        const matchedSubcategory = Object.values(subcategories) // Pega todos os arrays dentro do objeto
            .flat() // Achata o array para procurar diretamente nas subcategorias
            .find((c) => c.name === formattedItem); // Procura pelo nome
        return matchedSubcategory ? matchedSubcategory.color : 'transparent'; 
       
      }
  
  
  const foto = 'http://172.27.152.80:3333/'
  


  return (
    <div className="py-8"> 
      {/* Quick Search */}
      <div className="relative mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Pesquisar por título, autor ou ISBN..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
        <Search 
          size={20} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Advanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <select 
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
            <option value="">Area tematica</option>
            {Object.entries(categories).map(([key, category]) => (
          <option  key={category.id} value={key}>
             {category.name}
         </option >
          ))}
        </select>
        
        <select
          value={selectedSubcategory}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedSubcategory(value);
            
          }}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
            <option value="">Categoria</option>
              {selectedCategory &&
                subcategories[selectedCategory].map((subcategory) => (
                  <option  key={subcategory.id} value={subcategory.name}>
                    {subcategory.name}
                  </option >
                ))}




        </select>

        <div className="flex gap-2 md:col-span-2 lg:col-span-1">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedValue( e.target.value )}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Cursos</option>
    <option value='ENSINO PRIMARIO'>ENSINO PRIMARIO</option>
    <option value='MATEMATICA'>MATEMATICA</option>
    <option value='BIOLOGIA'>BIOLOGIA</option>
    <option value='LIGUA PORTUGUESA'>LINGUA PORTUGUESA</option>
    <option value='ARQUITETURA'>ARQUITETURA</option>
    <option value='ENGENHARIA CIVIL'>ENGENHARIA CIVIL</option>
    <option value='EDUCAÇÃO INFANTIL'>EDUCAÇÃO INFANTIL</option>
    <option value='CONTABILIDADE'>CONTABILIDADE</option>
    <option value='MEDICINA DENTÁRIA'>MEDICINA DENTÁRIA</option>
    <option value='ENFERMAGEM'>ENFERMAGEM</option>
    <option value='FISIOTERAPIA'>FISIOTERAPIA</option>
    <option value='ANALISES CLINICAS'>ANALISES CLINICAS</option>
    <option value='FARMACIA'>FARMACIA</option>
          </select>

          <button onClick={handleSearch}  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-2 transition-colors">
            <Search size={20} />
            <span className="hidden sm:inline">BUSCAR</span>
          </button>
        </div>
      </div>
      
      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {livrosParaExibir.length > 0 ? (
  livrosParaExibir.map((book)  => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
    <div className="h-48 overflow-hidden">
      <img 
        src={`${foto}/${book.IMAGEM}`}
        alt={book.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.TITULO_DO_LIVRO}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span className="line-clamp-1"> {book.AUTOR_PRINCIPAL} {book.SOBRENOME}</span>
        </div>
        <div className="flex items-center gap-2">
          <Bookmark bookMarked size={16} />
          <span className="line-clamp-1">{book.EDITORA} / {book.ANO}</span>
        </div>
        <div className="flex items-center gap-2">
          <Pencil size={16} />
          <span className="line-clamp-1">{book.ARE_TEMATICA}</span>
        </div>
        <div className="flex items-center gap-2">
          <Book size={16} />
          <span>{book.SUBTEMA}: {Pegar_description (book.CATEGORIA)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Hash size={16} />
          <span className="font-mono">{book.ISBN}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinned  size={16} />
          <span className="font-mono">LOCALIZAÇÃO</span>
        </div>
        <div className="flex items-center gap-2">
          
          <span>
            ESTANTE: {book.ESTANTE} | PRATELEIRA: {book.PRATELEIRA_NUMERO}
          </span>
          
        </div>
      </div>
      <div className="mt-4 relative">
        <div style={{ backgroundColor: Pegar_categories_cor(book.ARE_TEMATICA),  padding: "9px" }}>
          <div style={{ backgroundColor: Pegar_subtema_cor(book.SUBTEMA),  padding: "2px" }}></div>
        </div>
      </div>
    </div>
  </div>
          ))
        ) : (
          <div className="col-span-full p-8 text-center text-gray-500 bg-white rounded-lg">
  <div className="flex justify-center items-center h-20">
    <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    
  </div>
  carregando os livros
</div>
        )}
      </div>

      {/* Footer */}
    
    </div>
  );
};

export default BookList;