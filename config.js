// =====================================================
//  НАСТРОЙКИ ПУЛЬТА
//  Подписи, цвета и треки теперь меняются с телефона в режиме бога 👑
//  и хранятся в data.json. Здесь — только общие настройки.
// =====================================================

window.PULT_CONFIG = {
  // Меняйте, только если правили index.html / config.js вручную
  VERSION: 11,
  TITLE: "Новогодняя программа",

  // Сколько пэдов в ряду и их высота (1 — квадрат)
  COLUMNS: 4,
  PAD_HEIGHT: 1,

  // Ускорение: шаги скорости и сохранять ли тон
  SPEED_STEPS: [1, 1.25, 1.5, 1.75, 2],
  SPEED_KEEP_PITCH: true,

  // После пэда фон сам продолжается
  RESUME_BACKGROUND: true,

  // Таймер по умолчанию, минуты
  TIMER_DEFAULT_MIN: 60,

  // Режим бога: SHA-256 от пароля (сам пароль здесь не хранится)
  ADMIN_PASSWORD_HASH: "b81b28b000dbceebf0c9342d84ff2b3a192e10c4b69ccdc94d09faff74d2aaea",

  // Репозиторий GitHub (пусто — определится по адресу сайта автоматически)
  GITHUB_OWNER: "",
  GITHUB_REPO: "",
  GITHUB_BRANCH: "main",

  // Запасной список — используется, только если data.json не найден
  PADS: [
    { label: "Старт программы", color: "red" }, { label: "Выход персонажа", color: "orange" },
    { label: "Выход Снегурочки", color: "cyan" }, { label: "Выход Деда Мороза", color: "blue" },
    { label: "Зовём Деда Мороза", color: "blue" }, { label: "Хоровод", color: "green" },
    { label: "Ёлочка, гори!", color: "yellow" }, { label: "Зажигаем ёлку", color: "yellow" },
    { label: "Игра «Снежки»", color: "purple" }, { label: "Конкурс 1", color: "purple" },
    { label: "Конкурс 2", color: "purple" }, { label: "Конкурс 3", color: "purple" },
    { label: "Танец снежинок", color: "cyan" }, { label: "Выход Бабы-яги", color: "orange" },
    { label: "Выход Снеговика", color: "orange" }, { label: "Волшебство", color: "pink" },
    { label: "Фанфары", color: "white" }, { label: "Аплодисменты", color: "white" },
    { label: "Барабанная дробь", color: "white" }, { label: "Сюрприз", color: "pink" },
    { label: "Подарки", color: "red" }, { label: "Мешок с подарками", color: "red" },
    { label: "Фото с Дедом Морозом", color: "blue" }, { label: "Дискотека 1", color: "green" },
    { label: "Дискотека 2", color: "green" }, { label: "Медленный танец", color: "pink" },
    { label: "Бой курантов", color: "yellow" }, { label: "С Новым годом!", color: "red" },
    { label: "Прощание", color: "cyan" }, { label: "Финал", color: "red" },
  ].map((p, i) => ({ ...p, file: String(i + 1).padStart(2, "0") + ".mp3" })),

  BACKGROUND: Array.from({ length: 10 }, (_, i) => ({ title: "Фон " + (i + 1), file: String(i + 1).padStart(2, "0") + ".mp3" })),
};
