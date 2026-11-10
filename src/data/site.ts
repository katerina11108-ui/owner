// Глобальні налаштування (у CMS — тип Settings).
export const nav = [
  { label: 'Спеціалісти', href: '/specialists' },
  { label: 'Напрями', href: '/directions' },
  { label: 'Психіатр', href: '/directions/psychiatric-consultation' },
  { label: 'Про центр', href: '/about' },
  { label: 'Блог', href: '/blog' },
];
export const mobileNav = [...nav.slice(0, 4), { label: 'Події та матеріали', href: '/events' }, nav[4]];
export const settings = {
  name: 'Neoiatria',
  tagline: 'Центр психіатрії та практичної психології',
  footerAbout: 'Психіатри, психотерапевти й психологи в одній команді. Онлайн або в офісах у Києві.',
  email: 'hello@newpsychiatry.ua', // TODO: новий домен
  telegram: 'https://t.me/', // TODO: посилання на менеджера
  instagram: 'https://www.instagram.com/new__psychiatry/',
  youtube: 'https://www.youtube.com/',
  license: { holder: 'ТОВ «НПО НЕОІАТРІЯ»', number: '№ 1234', date: '12.03.2021', registry: 'https://moz.gov.ua/' }, // TODO: реальні дані
  crisis: [ { phone: '7333', label: 'Lifeline Ukraine' }, { phone: '112', label: 'Екстрена служба' } ],
  minPrice: 2000, // рахує CMS: мінімальна ціна індивідуальної сесії після перерахунку за курсом
};
export const ua = (n: number, one = 'фахівець', few = 'фахівці', many = 'фахівців') =>
  n % 10 === 1 && n % 100 !== 11 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? few : many;
export const uah = (n: number) => n.toLocaleString('uk-UA').replace(/\u00a0/g, ' ') + ' ₴';
