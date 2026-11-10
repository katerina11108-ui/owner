// CMS-типи Material (лекції, курси, PDF, випуски подкасту) і Podcast. УВАГА: демо-наповнення з макета.
// TODO: реальні матеріали, ціни, обкладинки й посилання (href): оплата / YouTube. Без href кнопка веде в Telegram центру.
export type MaterialKind = 'lecture' | 'course' | 'pdf' | 'podcast';
export type Material = { kind: MaterialKind; title: string; text: string; meta: string; price?: number; href?: string; cover?: string };
export const kindLabel: Record<MaterialKind, string> = { lecture: 'Лекція', course: 'Курс', pdf: 'PDF-воркбук', podcast: 'Подкаст' };
export const kindFilter: Record<MaterialKind, string> = { lecture: 'Лекції', course: 'Курси', pdf: 'PDF-воркбуки', podcast: 'Подкаст' };
export const materials: Material[] = [
  { kind: 'lecture', title: 'Тривога і тіло: як вони пов’язані', text: 'Як тривожність проявляється фізично — серцебиття, напруга, безсоння — і що з цим робити.', meta: '1 год 20 хв', price: 490 },
  { kind: 'pdf', title: 'Щоденник емоцій: 30-денна практика', text: '30 бланків із підказками для щоденної роботи з емоційним станом.', meta: '48 сторінок', price: 290 },
  { kind: 'course', title: 'Основи КПТ для самостійної роботи', text: 'Зв’язок між думками, емоціями і поведінкою — із вправами після кожного модуля.', meta: '5 занять · 4 год', price: 1200 },
  { kind: 'lecture', title: 'Як говорити з підлітком про психічне здоров’я', text: 'Для батьків і всіх, хто поруч із підлітком у складний період.', meta: '55 хв', price: 390 },
  { kind: 'course', title: 'Стосунки та близькість', text: 'Про прив’язаність, страх відкинення і близькість без злиття.', meta: '8 тижнів · 12 год', price: 2400 },
  { kind: 'pdf', title: 'Гід із профілактики вигорання', text: 'Чеклист і план відновлення, якщо вже відчуваєте симптоми вигорання.', meta: '24 сторінки', price: 190 },
  { kind: 'lecture', title: 'Що таке ПТСР: пояснення для близьких', text: 'Як розуміти поведінку людини з ПТСР і підтримувати, не зашкодивши.', meta: '40 хв', price: 350 },
  { kind: 'course', title: 'Самооцінка: від теорії до практики', text: 'Як формується самооцінка, чому вона хитається і як зробити її стабільнішою.', meta: '6 занять · 5 год', price: 1500 },
  { kind: 'podcast', title: 'Чому я не можу просто заспокоїтись', text: 'Про тривогу, яка не вимикається, навіть коли небезпеки вже немає.', meta: '38 хв · Еп. 61' },
  { kind: 'podcast', title: 'Терапія для тих, хто не вірить у терапію', text: 'Звідки береться скепсис і як обрати спеціаліста без самообману.', meta: '44 хв · Еп. 60' },
  { kind: 'podcast', title: 'Горе, яке не виглядає як горе', text: 'Коли втрата — це кінець стосунків, переїзд чи хвороба.', meta: '51 хв · Еп. 59' },
];
export const podcast = {
  eyebrow: 'Відеоподкаст на YouTube · безкоштовно', title: 'ПідМанула Підвела', tagline: 'Про психіку, терапію й усе, що між ними.',
  episodes: [ // TODO: реальні випуски, посилання й прев’ю
    { title: 'Як зупинити тривогу за 5 хвилин', minutes: 14, href: '', thumb: '/images/video-thumb-2.jpg' },
    { title: 'Вигорання: коли допомога стає необхідністю', minutes: 22, href: '', thumb: '/images/video-thumb-2.jpg' },
    { title: 'Перша сесія: чого очікувати', minutes: 18, href: '', thumb: '/images/video-thumb-2.jpg' },
  ],
};
