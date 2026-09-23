export const CATEGORY_LABELS: Record<string, string> = {
  sehir: 'Şehir & Keşif',
  moda: 'Moda & Stil',
  ekran: 'Ekranda Hayat',
};

export function categoryLabel(key: string): string {
  return CATEGORY_LABELS[key] ?? key;
}
