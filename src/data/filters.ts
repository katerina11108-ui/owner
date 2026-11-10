// Фільтри каталогу (/specialists). Значення груп рахуються з полів Specialist — у CMS це будуть окремі поля-довідники.
// Логіка: всередині групи — «або», між групами — «і». Стан — у query-параметрах URL (ключ = FilterGroup.key).
import { type Specialist, specialists, fromPrice } from './specialists';
import { allDirections } from './directions';

export type FilterOption = { value: string; label: string };
export type FilterGroup = { key: string; title: string; options: FilterOption[]; collapseAfter?: number };

// Короткі назви запитів для пілюль (повні — у directions.ts).
export const requestShort: Record<string, string> = {
  anxiety: 'Тривога', depression: 'Депресія', burnout: 'Вигорання', 'self-esteem': 'Самооцінка', psychosomatics: 'Психосоматика',
  eating: 'Харчова поведінка', relationships: 'Стосунки', family: 'Діти й сім’я', addiction: 'Залежності', lgbtq: 'ЛГБТК+',
  trauma: 'Травма і ПТСР', grief: 'Втрата і горе', crisis: 'Кризи', emigration: 'Еміграція', military: 'Військові',
};

const kinds: [string, string, RegExp][] = [
  ['psychologist', 'Психолог', /психолог/i],
  ['psychotherapist', 'Психотерапевт', /психотерапевт/i],
  ['psychiatrist', 'Психіатр', /психіатр/i],
];
const methods: [string, string, RegExp][] = [
  ['gestalt', 'Гештальт', /гештальт/i],
  ['cbt', 'КПТ', /КПТ|когнітивно/i],
  ['emdr', 'EMDR', /EMDR/i],
  ['psychoanalysis', 'Психоаналіз', /психоаналіз/i],
  ['ta', 'Транзактний аналіз', /транзактн/i],
  ['body', 'Тілесна терапія', /тілесн/i],
  ['systemic', 'Системна сімейна', /систем/i],
];
const sessionTypes: [string, string, RegExp][] = [
  ['individual', 'Індивідуальна', /індивідуальна/i],
  ['couple', 'Парна', /парна/i],
  ['family', 'Сімейна', /сімейна/i],
  ['child', 'Дитяча й підліткова', /дитяча|підліткова/i],
  ['group', 'Групова', /груп/i],
];
const formats: FilterOption[] = [
  { value: 'online', label: 'Онлайн' },
  { value: 'kyiv', label: 'Офлайн, Київ' },
  { value: 'dnipro', label: 'Офлайн, Дніпро' },
];
const langSlug: Record<string, string> = { Українська: 'uk', Російська: 'ru', Англійська: 'en', Польська: 'pl' };

const match = (table: [string, string, RegExp][], texts: string[]) => table.filter(([, , re]) => texts.some((t) => re.test(t))).map(([v]) => v);

// «Найближче» поки текстом із таблиці; ранг потрібен лише для сортування. TODO: реальні слоти з Altegio API.
export const nearestRank = (n?: string | null) =>
  !n ? 999 : /сьогодні/i.test(n) ? 0 : /завтра/i.test(n) ? 1 : /тиж/i.test(n) ? 7 * (parseInt(n.replace(/\D/g, '')) || 1) : 4;

/** Значення фільтрів одного фахівця: { kind: [...], request: [...], ... } */
export const facets = (sp: Specialist): Record<string, string[]> => ({
  kind: match(kinds, [sp.role]),
  request: sp.requests,
  method: match(methods, sp.methods),
  format: [...(sp.online ? ['online'] : []), ...(sp.offline ? [/дніпро/i.test(sp.offline) ? 'dnipro' : 'kyiv'] : [])],
  type: match(sessionTypes, sp.types),
  lang: sp.languages.map((l) => langSlug[l] ?? l),
});

const used = (key: string) => new Set(specialists.flatMap((sp) => facets(sp)[key]));
const opts = (key: string, table: [string, string, RegExp][]) => table.filter(([v]) => used(key).has(v)).map(([value, label]) => ({ value, label }));

export const filterGroups: FilterGroup[] = [
  { key: 'kind', title: 'Фахівець', options: opts('kind', kinds) },
  { key: 'request', title: 'З чим ви прийшли', options: allDirections.map((d) => ({ value: d.slug, label: requestShort[d.slug] ?? d.title })), collapseAfter: 6 },
  { key: 'method', title: 'Метод роботи', options: opts('method', methods) },
  { key: 'format', title: 'Формат сесії', options: formats.filter((f) => used('format').has(f.value)) },
  { key: 'type', title: 'Тип сесії', options: opts('type', sessionTypes) },
  { key: 'lang', title: 'Мова', options: Object.entries(langSlug).filter(([, v]) => used('lang').has(v)).map(([label, value]) => ({ value, label })) },
];

const prices = specialists.map(fromPrice);
export const priceBounds = { min: Math.min(...prices), max: Math.max(...prices), step: 50 };

export const sortOptions = [
  { value: 'nearest', label: 'Спершу: найближчий вільний час', short: 'Спершу вільні' },
  { value: 'price-asc', label: 'Спершу: дешевші', short: 'Спершу дешевші' },
  { value: 'price-desc', label: 'Спершу: дорожчі', short: 'Спершу дорожчі' },
  { value: 'years', label: 'Спершу: більше досвіду', short: 'Більше досвіду' },
];
