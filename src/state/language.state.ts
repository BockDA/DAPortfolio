import { signal, computed } from '@angular/core';

export const statusLanguage = signal('en');
export const isGerman = computed(() => statusLanguage() === 'de');

export function setLanguage(lang: 'de' | 'en') {
  statusLanguage.set(lang);
}
