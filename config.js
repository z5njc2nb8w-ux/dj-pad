// =====================================================
//  НАСТРОЙКИ ПУЛЬТА — меняйте только этот файл
// =====================================================
//  label — подпись на кнопке
//  file  — имя файла в папке tracks/pads/
//  color — цвет пэда: red, orange, yellow, green, cyan, blue, purple, pink, white
//  Если поменяли треки или подписи — увеличьте VERSION на 1,
//  чтобы телефоны скачали обновление.
// =====================================================

window.PULT_CONFIG = {
  VERSION: 4,
  TITLE: "Новогодняя программа",

  // Пока играет пэд, фон стоит на паузе и сам продолжается после пэда.
  // Громкость фона меняется только ползунком.
  RESUME_BACKGROUND: true,

  // Сколько пэдов в ряду
  COLUMNS: 4,

  // Кнопка ускорения: шаги скорости (нажатие ⚡ переключает на следующий)
  SPEED_STEPS: [1, 1.25, 1.5, 1.75, 2],
  // true — ускоряется без изменения тона; false — с повышением тона («мультяшный» голос)
  SPEED_KEEP_PITCH: true,

  // Таймер по умолчанию, минуты
  TIMER_DEFAULT_MIN: 60,

  PADS: [
    { label: "Старт программы",     file: "01.mp3", color: "red" },
    { label: "Выход персонажа",     file: "02.mp3", color: "orange" },
    { label: "Выход Снегурочки",    file: "03.mp3", color: "cyan" },
    { label: "Выход Деда Мороза",   file: "04.mp3", color: "blue" },
    { label: "Зовём Деда Мороза",   file: "05.mp3", color: "blue" },

    { label: "Хоровод",             file: "06.mp3", color: "green" },
    { label: "Ёлочка, гори!",       file: "07.mp3", color: "yellow" },
    { label: "Зажигаем ёлку",       file: "08.mp3", color: "yellow" },
    { label: "Игра «Снежки»",       file: "09.mp3", color: "purple" },
    { label: "Конкурс 1",           file: "10.mp3", color: "purple" },

    { label: "Конкурс 2",           file: "11.mp3", color: "purple" },
    { label: "Конкурс 3",           file: "12.mp3", color: "purple" },
    { label: "Танец снежинок",      file: "13.mp3", color: "cyan" },
    { label: "Выход Бабы-яги",      file: "14.mp3", color: "orange" },
    { label: "Выход Снеговика",     file: "15.mp3", color: "orange" },

    { label: "Волшебство",          file: "16.mp3", color: "pink" },
    { label: "Фанфары",             file: "17.mp3", color: "white" },
    { label: "Аплодисменты",        file: "18.mp3", color: "white" },
    { label: "Барабанная дробь",    file: "19.mp3", color: "white" },
    { label: "Сюрприз",             file: "20.mp3", color: "pink" },

    { label: "Подарки",             file: "21.mp3", color: "red" },
    { label: "Мешок с подарками",   file: "22.mp3", color: "red" },
    { label: "Фото с Дедом Морозом",file: "23.mp3", color: "blue" },
    { label: "Дискотека 1",         file: "24.mp3", color: "green" },
    { label: "Дискотека 2",         file: "25.mp3", color: "green" },

    { label: "Медленный танец",     file: "26.mp3", color: "pink" },
    { label: "Бой курантов",        file: "27.mp3", color: "yellow" },
    { label: "С Новым годом!",      file: "28.mp3", color: "red" },
    { label: "Прощание",            file: "29.mp3", color: "cyan" },
    { label: "Финал",               file: "30.mp3", color: "red" },
  ],

  // Фоновая музыка — папка tracks/bg/. Играет в случайном порядке без повторов.
  BACKGROUND: [
    { title: "Фон 1",  file: "01.mp3" },
    { title: "Фон 2",  file: "02.mp3" },
    { title: "Фон 3",  file: "03.mp3" },
    { title: "Фон 4",  file: "04.mp3" },
    { title: "Фон 5",  file: "05.mp3" },
    { title: "Фон 6",  file: "06.mp3" },
    { title: "Фон 7",  file: "07.mp3" },
    { title: "Фон 8",  file: "08.mp3" },
    { title: "Фон 9",  file: "09.mp3" },
    { title: "Фон 10", file: "10.mp3" },
  ],
};
