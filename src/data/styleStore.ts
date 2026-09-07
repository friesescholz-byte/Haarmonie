import { GalleryItem, DAMEN_GALLERY, HERREN_GALLERY } from './content';

const DAMEN_KEY = 'haarmonie_damen_styles';
const HERREN_KEY = 'haarmonie_herren_styles';

export const getDamenStyles = (): GalleryItem[] => {
  try {
    const data = localStorage.getItem(DAMEN_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return DAMEN_GALLERY;
};

export const getHerrenStyles = (): GalleryItem[] => {
  try {
    const data = localStorage.getItem(HERREN_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return HERREN_GALLERY;
};

export const saveDamenStyles = (items: GalleryItem[]) => {
  try {
    localStorage.setItem(DAMEN_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('haarmonie_styles_updated'));
  } catch (e) {
    console.error(e);
  }
};

export const saveHerrenStyles = (items: GalleryItem[]) => {
  try {
    localStorage.setItem(HERREN_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('haarmonie_styles_updated'));
  } catch (e) {
    console.error(e);
  }
};

export const resetStylesToDefault = () => {
  try {
    localStorage.setItem(DAMEN_KEY, JSON.stringify(DAMEN_GALLERY));
    localStorage.setItem(HERREN_KEY, JSON.stringify(HERREN_GALLERY));
    window.dispatchEvent(new Event('haarmonie_styles_updated'));
  } catch (e) {
    console.error(e);
  }
};
