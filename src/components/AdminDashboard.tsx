import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../data/content';
import {
  getDamenStyles,
  getHerrenStyles,
  saveDamenStyles,
  saveHerrenStyles
} from '../data/styleStore';
import {
  Lock,
  Plus,
  Trash2,
  Edit2,
  ArrowLeft,
  X,
  LogOut
} from 'lucide-react';

const ADMIN_PASSWORD = 'haarmonie2026'; // Standard-Passwort

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [activeTab, setActiveTab] = useState<'damen' | 'herren'>('damen');
  const [damenStyles, setDamenStyles] = useState<GalleryItem[]>([]);
  const [herrenStyles, setHerrenStyles] = useState<GalleryItem[]>([]);

  // Modal State for Add / Edit
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isNewItem, setIsNewItem] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formSubtitle, setFormSubtitle] = useState('');
  const [formImage, setFormImage] = useState('');

  // Check Session
  useEffect(() => {
    const auth = sessionStorage.getItem('haarmonie_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load Styles
  const loadData = () => {
    setDamenStyles(getDamenStyles());
    setHerrenStyles(getHerrenStyles());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('haarmonie_styles_updated', loadData);
    return () => window.removeEventListener('haarmonie_styles_updated', loadData);
  }, []);

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem('haarmonie_admin_auth', 'true');
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('haarmonie_admin_auth');
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setIsNewItem(true);
    setEditingItem({
      id: `${activeTab}-${Date.now()}`,
      title: '',
      subtitle: '',
      image: ''
    });
    setFormTitle('');
    setFormSubtitle('');
    setFormImage('');
  };

  // Open Edit Modal
  const handleOpenEdit = (item: GalleryItem) => {
    setIsNewItem(false);
    setEditingItem(item);
    setFormTitle(item.title);
    setFormSubtitle(item.subtitle || '');
    setFormImage(item.image);
  };

  // Save Add / Edit
  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem || !formTitle || !formImage) return;

    const updatedItem: GalleryItem = {
      ...editingItem,
      title: formTitle,
      subtitle: formSubtitle,
      image: formImage
    };

    if (activeTab === 'damen') {
      let updated: GalleryItem[];
      if (isNewItem) {
        updated = [updatedItem, ...damenStyles];
      } else {
        updated = damenStyles.map((it) => (it.id === updatedItem.id ? updatedItem : it));
      }
      setDamenStyles(updated);
      saveDamenStyles(updated);
    } else {
      let updated: GalleryItem[];
      if (isNewItem) {
        updated = [updatedItem, ...herrenStyles];
      } else {
        updated = herrenStyles.map((it) => (it.id === updatedItem.id ? updatedItem : it));
      }
      setHerrenStyles(updated);
      saveHerrenStyles(updated);
    }

    setEditingItem(null);
  };

  // Delete Handler
  const handleDeleteItem = (id: string) => {
    if (!window.confirm('Möchten Sie diesen Haarschnitt wirklich unwiderruflich löschen?')) return;

    if (activeTab === 'damen') {
      const updated = damenStyles.filter((it) => it.id !== id);
      setDamenStyles(updated);
      saveDamenStyles(updated);
    } else {
      const updated = herrenStyles.filter((it) => it.id !== id);
      setHerrenStyles(updated);
      saveHerrenStyles(updated);
    }
  };

  // -------------------------------------------------------------
  // 1. Password Screen
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6 text-zinc-900 font-sans">
        <div className="bg-white border border-zinc-200 shadow-2xl rounded-3xl p-8 sm:p-10 max-w-md w-full text-center space-y-6">
          
          <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-heading font-bold text-black">
              Haarmonie Admin
            </h1>
            <p className="text-sm text-zinc-600">
              Bitte Passwort eingeben, um Haarschnitte zu bearbeiten.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 block mb-1.5">
                Passwort
              </label>
              <input
                type="password"
                required
                autoFocus
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Passwort eingeben"
                className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
              />
              {loginError && (
                <p className="text-xs text-red-600 font-medium mt-1.5">
                  Falsches Passwort. Bitte erneut versuchen.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Anmelden
            </button>
          </form>

          <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
            <button
              type="button"
              onClick={onBack}
              className="hover:text-black flex items-center gap-1 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Zurück zur Website
            </button>
            <span className="text-[11px] text-zinc-400">Standard: haarmonie2026</span>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. Main Admin Dashboard
  // -------------------------------------------------------------
  const currentList = activeTab === 'damen' ? damenStyles : herrenStyles;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-24">
      
      {/* Admin Topbar */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-black bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Website ansehen
            </button>
            <h1 className="text-lg font-heading font-bold text-black hidden sm:block">
              Haarmonie &bull; Frisuren-Verwaltung
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-black px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors border border-zinc-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Abmelden</span>
            </button>
          </div>

        </div>
      </header>

      {/* Admin Main Body */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 space-y-8">
        
        {/* Tab & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('damen')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'damen'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-zinc-600 hover:text-black border border-zinc-200'
              }`}
            >
              Damen-Frisuren ({damenStyles.length})
            </button>

            <button
              onClick={() => setActiveTab('herren')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'herren'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-zinc-600 hover:text-black border border-zinc-200'
              }`}
            >
              Herren-Frisuren ({herrenStyles.length})
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow transition-all hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Neuen Schnitt hinzufügen</span>
          </button>

        </div>

        {/* Haircuts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                {/* Image Thumbnail */}
                <div className="aspect-[3/4] bg-zinc-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x800?text=Kein+Bild';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                    {activeTab === 'damen' ? 'Damen' : 'Herren'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-1">
                  <h3 className="font-heading font-bold text-base text-black leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 line-clamp-2">
                    {item.subtitle || 'Keine Beschreibung'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 border-t border-zinc-100 flex items-center justify-between gap-2 mt-2">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg border border-zinc-200 hover:border-black hover:bg-zinc-50 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Bearbeiten</span>
                </button>

                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors border border-zinc-200 hover:border-red-200"
                  title="Schnitt löschen"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {currentList.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 space-y-3">
            <p className="text-zinc-500 text-sm">
              Aktuell sind keine Frisuren in dieser Kategorie eingetragen.
            </p>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-xs font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              Ersten Schnitt anlegen
            </button>
          </div>
        )}

      </main>

      {/* Edit / Add Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-zinc-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 animate-fadeIn">
            
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <h3 className="text-xl font-heading font-bold text-black">
                {isNewItem ? 'Neuen Schnitt anlegen' : 'Schnitt bearbeiten'}
              </h3>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveItem} className="space-y-4 text-left">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Titel / Bezeichnung *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z. B. Warmes Kupfer-Gold"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Untertitel / Beschreibung
                </label>
                <input
                  type="text"
                  placeholder="z. B. Pflanzenbasierte Nuancierung & Glanz"
                  value={formSubtitle}
                  onChange={(e) => setFormSubtitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Bild-URL (z. B. R2 oder WebP-Link) *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/..."
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:border-black"
                />
              </div>

              {/* Image Preview */}
              {formImage && (
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">
                    Vorschau:
                  </span>
                  <div className="w-24 h-32 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                    <img
                      src={formImage}
                      alt="Vorschau"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x800?text=Ungültig';
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                >
                  Abbrechen
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  Speichern
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
