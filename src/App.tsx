
import { Search, Phone, ChevronRight, Menu, MapPin, CheckCircle, Heart, Building, GraduationCap, Briefcase, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Utilitaires */}
      <div className="bg-uimm-dark text-white text-xs md:text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:0388123456" className="flex items-center hover:text-uimm-yellow transition">
            <Phone size={16} className="mr-2" />
            <span className="font-semibold">03 88 12 34 56</span>
          </a>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hidden md:block hover:text-uimm-yellow transition">Espace Candidat / Apprenti</a>
          <a href="#" className="hidden md:block hover:text-uimm-yellow transition">Espace Entreprise</a>
          <a href="#" className="bg-uimm-orange text-white px-3 py-1 rounded text-xs md:text-sm font-bold hover:bg-opacity-90 transition">Contact</a>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black text-uimm-green tracking-tight">Pôle formation</span>
              <span className="text-lg md:text-xl font-bold text-uimm-dark tracking-widest">UIMM <span className="text-sm font-normal text-gray-500">ALSACE</span></span>
            </div>
          </div>
          
          {/* Main Menu */}
          <nav className="hidden lg:flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-uimm-green transition border-b-2 border-transparent hover:border-uimm-green pb-1">Trouver une formation</a>
            <a href="#" className="hover:text-uimm-green transition border-b-2 border-transparent hover:border-uimm-green pb-1">Ton Parcours Alternance</a>
            <a href="#" className="hover:text-uimm-green transition border-b-2 border-transparent hover:border-uimm-green pb-1">Espace Professionnels</a>
            <a href="#" className="hover:text-uimm-green transition border-b-2 border-transparent hover:border-uimm-green pb-1">Nos Centres</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-uimm-dark">
            <button className="hover:text-uimm-green p-2"><Search size={20} /></button>
            <button className="hover:text-uimm-green p-2 hidden sm:block"><Heart size={20} /></button>
            <button className="lg:hidden text-uimm-dark p-2"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-uimm-dark text-white pt-16 pb-32 md:pt-24 md:pb-40">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-uimm-dark/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Jeunes en formation industrielle" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Formations en alternance dans l'industrie en Alsace
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 font-light">
              Formez-vous aujourd'hui pour performer demain. Du CAP au diplôme d'ingénieur, trouvez la voie qui vous correspond.
            </p>
            
            {/* Search Component embedded in Hero */}
            <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row shadow-2xl max-w-2xl">
              <div className="flex-grow flex items-center px-4 py-3">
                <Search size={20} className="text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Ex: Maintenance, Usinage, Robotique..." 
                  className="w-full text-gray-800 font-medium focus:outline-none placeholder-gray-400"
                />
              </div>
              <button className="bg-uimm-green hover:bg-uimm-dark text-white px-8 py-3 rounded-lg font-bold transition-colors mt-2 md:mt-0 flex items-center justify-center">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par Profil (Cartes d'entrée) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href="#" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border-t-4 border-uimm-green">
            <div className="p-6 flex-grow">
              <div className="w-12 h-12 bg-uimm-green/10 text-uimm-green rounded-lg flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Jeune / Alternant</h2>
              <p className="text-gray-600 text-sm leading-relaxed">Trouve ta formation et ton entreprise pour démarrer ta carrière !</p>
            </div>
            <div className="bg-gray-50 p-4 flex items-center justify-between text-uimm-green font-bold group-hover:bg-uimm-green group-hover:text-white transition-colors">
              <span>Ton parcours</span>
              <ChevronRight size={20} />
            </div>
          </a>

          <a href="#" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border-t-4 border-uimm-orange">
            <div className="p-6 flex-grow">
              <div className="w-12 h-12 bg-uimm-orange/10 text-uimm-orange rounded-lg flex items-center justify-center mb-4">
                <Building size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Entreprise</h2>
              <p className="text-gray-600 text-sm leading-relaxed">Formez et recrutez vos futurs talents pour booster votre compétitivité.</p>
            </div>
            <div className="bg-gray-50 p-4 flex items-center justify-between text-uimm-orange font-bold group-hover:bg-uimm-orange group-hover:text-white transition-colors">
              <span>Espace pro</span>
              <ChevronRight size={20} />
            </div>
          </a>

          <a href="#" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border-t-4 border-uimm-purple">
            <div className="p-6 flex-grow">
              <div className="w-12 h-12 bg-uimm-purple/10 text-uimm-purple rounded-lg flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Salarié</h2>
              <p className="text-gray-600 text-sm leading-relaxed">Évoluez ou certifiez vos compétences dans un secteur d'avenir.</p>
            </div>
            <div className="bg-gray-50 p-4 flex items-center justify-between text-uimm-purple font-bold group-hover:bg-uimm-purple group-hover:text-white transition-colors">
              <span>Se former</span>
              <ChevronRight size={20} />
            </div>
          </a>

          <a href="#" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border-t-4 border-uimm-pink">
            <div className="p-6 flex-grow">
              <div className="w-12 h-12 bg-uimm-pink/10 text-uimm-pink rounded-lg flex items-center justify-center mb-4">
                <User size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Demandeur d'emploi</h2>
              <p className="text-gray-600 text-sm leading-relaxed">Réussissez votre reconversion vers les métiers de l'industrie.</p>
            </div>
            <div className="bg-gray-50 p-4 flex items-center justify-between text-uimm-pink font-bold group-hover:bg-uimm-pink group-hover:text-white transition-colors">
              <span>Se reconvertir</span>
              <ChevronRight size={20} />
            </div>
          </a>

        </div>
      </section>

      {/* Chiffres Clés & Preuve Sociale */}
      <section className="bg-white py-12 mb-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-extrabold text-uimm-dark mb-4 leading-tight">L'excellence au service de l'industrie</h2>
              <p className="text-gray-600 mb-6 text-lg">Le 1er réseau de formation industrielle en Alsace.</p>
              <div className="inline-flex items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                <CheckCircle className="text-uimm-green mr-3" size={32} />
                <div>
                  <div className="text-sm font-black text-gray-900">Certifié QUALIOPI</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Actions de formation & Apprentissage</div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-uimm-green mb-2">94%</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">De recommandation</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-uimm-orange mb-2">1500</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Apprentis / an</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-uimm-dark mb-2">89%</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Taux de réussite</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-uimm-pink mb-2">125k</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Emplois*</div>
              </div>
            </div>

          </div>
          <div className="text-right mt-6">
            <p className="text-xs text-gray-400 font-medium">* 125 000 emplois, 5 000 embauches/an jusqu'en 2028. Source : Observatoire de la métallurgie.</p>
          </div>
        </div>
      </section>

      {/* Formations du moment */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-uimm-dark mb-2">Les formations du moment</h2>
            <p className="text-gray-600 text-lg">Découvrez nos cursus les plus plébiscités.</p>
          </div>
          <a href="#" className="inline-flex items-center text-uimm-green font-bold hover:text-uimm-dark transition group">
            Voir tout le catalogue <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            { tag: "Alternance", title: "BTS Conception de Produits Industriels (CPI)", duration: "2 ans", category: "Ingénierie", location: "Strasbourg" },
            { tag: "Alternance", title: "BTS Maintenance des Systèmes (MS)", duration: "2 ans", category: "Maintenance", location: "Mulhouse" },
            { tag: "Formation continue", title: "Sécurité Machine « SAFETY Advanced » TIA portal", duration: "3 jours", category: "Automatisme", location: "Colmar" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider ${item.tag === 'Alternance' ? 'bg-uimm-light text-uimm-dark' : 'bg-gray-100 text-gray-700'}`}>
                    {item.tag}
                  </span>
                  <button className="text-gray-300 hover:text-uimm-pink transition"><Heart size={20} /></button>
                </div>
                <div className="text-xs font-semibold text-uimm-green mb-2 uppercase tracking-wide">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">{item.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
                  <div className="flex items-center"><MapPin size={16} className="mr-1 opacity-50" /> {item.location}</div>
                  <div className="flex items-center">⏱️ {item.duration}</div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 mt-auto bg-gray-50/50">
                <a href="#" className="w-full text-center text-uimm-dark font-bold flex items-center justify-center hover:text-uimm-green transition">
                  Découvrir cette formation <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002f3d] text-white mt-auto pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div>
              <div className="flex flex-col leading-none mb-6">
                <span className="text-xl font-black text-uimm-green tracking-tight">Pôle formation</span>
                <span className="text-lg font-bold text-white tracking-widest">UIMM <span className="text-sm font-normal opacity-50">ALSACE</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Le partenaire incontournable de votre avenir industriel en Alsace. Formez-vous aujourd'hui pour performer demain.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition font-bold">in</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition font-bold">f</a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition font-bold">Yt</a>
                <a href="#" className="w-10 h-10 bg-uimm-dark text-uimm-light rounded-full flex items-center justify-center hover:bg-uimm-green transition font-bold border border-uimm-green/30">Tk</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-gray-300">Nos Centres</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-2 text-uimm-green" /> Strasbourg</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-2 text-uimm-green" /> Reichshoffen</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-2 text-uimm-green" /> Colmar</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-2 text-uimm-green" /> Mulhouse</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-gray-300">Liens utiles</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition">Rechercher une formation</a></li>
                <li><a href="#" className="hover:text-white transition">Guide Alternance (PDF)</a></li>
                <li><a href="#" className="hover:text-white transition">Recruter un alternant</a></li>
                <li><a href="#" className="hover:text-white transition">Financer sa formation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-gray-300">Contact</h4>
              <p className="text-white text-lg font-bold mb-1">03 88 12 34 56</p>
              <p className="text-gray-400 text-sm mb-6">contact@formation-industries-alsace.fr</p>
              <button className="bg-uimm-green hover:bg-opacity-90 text-white px-6 py-3 rounded-lg text-sm font-bold transition w-full text-center">
                Nous contacter
              </button>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium gap-4">
            <p>&copy; 2026 Pôle formation UIMM Alsace. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-gray-300 transition">Mentions légales</a>
              <a href="#" className="hover:text-gray-300 transition">Politique de confidentialité</a>
              <a href="#" className="hover:text-gray-300 transition">Gestion des cookies</a>
              <a href="#" className="text-uimm-green hover:text-white transition font-bold">Déclaration d'accessibilité (RGAA)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
