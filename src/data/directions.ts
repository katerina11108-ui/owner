// CMS-тип Direction. count — кількість фахівців (у CMS рахується автоматично з Specialist.requests).
export type Direction = { slug: string; title: string; hint: string; count: number; group: string };
export type Group = { slug: string; title: string; sub: string; icon: string; count: number; items: Direction[] };
const g = (slug: string, title: string, sub: string, icon: string, count: number, items: [string, string, string, number][]): Group =>
  ({ slug, title, sub, icon, count, items: items.map(([s, t, h, c]) => ({ slug: s, title: t, hint: h, count: c, group: slug })) });
export const groups: Group[] = [
  g('inner', 'Всередині мене', 'Коли важко з собою', 'inner', 11, [
    ['anxiety', 'Тривога і панічні атаки', 'заважає жити, а не просто «нервуєте перед іспитом»', 9],
    ['depression', 'Депресивні стани', 'немає сил і радості, усе здається марним', 6],
    ['burnout', 'Стрес і вигорання', 'сили закінчились, відпочинок не допомагає', 5],
    ['self-esteem', 'Самооцінка і межі', 'важко сказати «ні», здається, що з вами щось не так', 8],
    ['psychosomatics', 'Психосоматика', 'тіло реагує на те, що не вдається сказати', 3],
    ['eating', 'Харчова поведінка', 'складні стосунки з їжею і тілом', 2],
  ]),
  g('between', 'Між людьми', 'Коли важко з іншими', 'between', 12, [
    ['relationships', 'Стосунки та близькість', 'партнер, довіра, розставання, терапія для пар', 10],
    ['family', 'Діти, підлітки й сім\u2019я', 'з дитиною, підлітком чи батьками; сімейна терапія', 4],
    ['addiction', 'Залежності й співзалежність', 'коли звичка чи стосунки тримають сильніше, ніж хочеться', 2],
    ['lgbtq', 'ЛГБТК+ та сексуальність', 'простір, де не треба доводити право бути собою', 2],
  ]),
  g('after', 'Після того, що сталося', 'Коли життя різко змінилось', 'after', 11, [
    ['trauma', 'Травма і ПТСР', 'наслідки травматичного досвіду', 7],
    ['grief', 'Втрата і горе', 'смерть близької людини, розлучення, втрата звичного життя', 6],
    ['crisis', 'Кризи й пошук себе', '«не знаю, чого хочу, але так більше не можу»', 5],
    ['emigration', 'Еміграція та адаптація', 'життя на дві країни, пошук опори на новому місці', 2],
    ['military', 'Військові та їхні близькі', 'служба, повернення, життя поруч зі службою близької людини', 1],
  ]),
];
export const allDirections = groups.flatMap((x) => x.items);
export const findDirection = (slug: string) => allDirections.find((d) => d.slug === slug);
