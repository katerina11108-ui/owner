// Відправка форм у Netlify Forms (форма має data-netlify="true" і приховане поле form-name).
// Поза Netlify (локально) POST не приймається — тоді кидаємо помилку, а інтерфейс показує запасний шлях (Telegram).
export async function submitForm(form: HTMLFormElement): Promise<void> {
  const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
  const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
}
