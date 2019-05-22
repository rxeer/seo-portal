export function getLocalization() {
  return localStorage.getItem('seo_localization') || 'ua';
}

export function setLocalization(localization = 'ua') {
  localStorage.setItem('seo_localization', localization);
}
