const changelogs = [
    {
        title: "Посты с картинками, профили участников, страны и многое другое",
        text: `Выпущена первая рабочая версия сайта, спустя более чем 6 месяцев разработки, начиная практически с нуля 4 раза!😌`,
        date: "17.12.2023",
        attach: [
            "https://99px.ru/sstorage/86/2015/12/image_862412152238097572064.gif",
        ]
    },
    {
        title: "Вход без логина и пароля",
        text: `Теперь, чтобы войти в свой аккаунт, достаточно отправить боту код со страницы входа или ввести уже существующий токен авторизации.`,
        date: "24.12.2023",
        attach: [
            "https://sun9-54.userapi.com/impg/AamToA_Hyw3gTeY7MzvzPkKNFPHgs8iE5Ihm0g/SvOC67bB5RA.jpg?size=1054x931&quality=96&sign=ce9a33b0ef1f7a9d240ae5a52feec56a&type=album"
        ]
    },
    {
        title: "Иконки, полноэкранный просмотр изображений и багфикс",
        text: `• Добавлены иконки для большинства кнопок
• Новая функция полноэкранного просмотра изображений в постах, профилях участников и стран
• Множество визуальных изменений и исправлены баги
• Добавлена инструкция "Как использовать токен авторизации" который используется на странице входа
• Добавлена инструкция "Где можно опубликовать идеи для сайта и отправить обнаруженные баги"
Инструкции можно найти на странице "Помощь".`,
        date: "28.04.2024",
        attach: []
    },
    {
        title: "Новый домен и страница обновлений",
        text: `У сайта появился свой крутой и красивый домен "hedgehog-rp.ru", а также список обновлений переехал на новую страницу "Обновления", чтобы не засорять ленту с новостями.`,
        date: "30.04.2024",
        attach: [],
    },
    {
        title: "Поля ввода с иконками",
        text: `• Добавлены иконки внутри полей ввода для поиска по участникам и странам, а так же при редактировании тега страны.
• Добавлены кнопки для отчистки поля поиска по участникам и странам
• Добавлена кнопка авторизации на верхней части экрана в моб. версии
• Уменьшен отступ от краев экрана в моб. версии
• Добавлен заголовок на странице входа
• Новая тема сайта в настройках (простите)`,
        date: "06.05.2024",
        attach: [],
    },
    {
        title: "Редактирование профиля и оптимизация",
        text: `• Добавлена функция редактирования профиля, она доступна только если вы авторизовались и открыли свой профиль
• Сайт оптимизирован и работает быстрее на ~25%😊
• Основное и дополнительное описание страны было заменено на одно общее описание с ограничением в 5000 символов
• Увеличен размер больших полей ввода описания страны и профиля
• Уменьшена длина тега с 32 символов до 16
• Изменено слово "Новость" на "Пост" в некоторых местах
• Добавлен "Предпросмотр" на странице "Участники и "Страны" во время загрузки
• Добавлена кнопка вставки текста в поле токена на странице входа
• Уменьшен размер картинки загрузки сайта в моб. версии`,
        date: "12.05.2024",
        attach: [],
    },
    {
        title: "Слайдер с картинками в постах",
        text: `• Добавлен слайдер для переключения картинок в постах (Слайдер появляется при добавлении минимум двух картинок в посте)
• Увеличен размер картинки в посте в моб. версии
• Добавлен задний фон для картинок в слайдере поста
• Добавлен задний фон для кнопки "Поделиться"
• Добавлены 3 крутых рекомендации от знаменитых личностей на странице "О нас"
• Немного увеличена ширина полосы прокрутки страницы в пк версии`,
        date: "21.05.2024",
        attach: [
            "https://cdn3.emoji.gg/emojis/7225-chipichipi-cat.gif",
            "https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif",
            "https://media.tenor.com/cGzc08rXDCwAAAAj/cat.gif"
        ],
    },
    {
        title: "Список опасных существ",
        text: `Добавлен инструмент под названием "Шиповник" для отображения особо опасных существ
Его вы можете найти на странице "Инструменты"
(Разработано вместе с Данечкой)`,
        date: "22.05.2024",
        attach: [],
    },
    {
        title: "Обновление функционала создания, редактирования и просмотра новостей",
        text: `• Добавлена загрузка всех новостей страны при переходе на страницу страны
• Добавлена возможность редактировать посты
• Добавлен новый инструмент "Новость из сообщения в ВК" которая позволяет прямо на сайте найти свое сообщение из беседы и по нему создать новость
• Добавлен полноэкранный предпросмотр картинки на страницах: создание/редактирование поста, редактирование профиля участника и страны (Так же добавлен текст указывающий на предпросмотр картинки)
• Изменено отображение списка загруженных картинок при создании/редактировании поста, так же загруженные картинки можно посмотреть в полноэкранном режиме
• Минимальный размер картинки в посте уменьшен с 40px до 20px
• Теперь некоторые инструменты не доступны неавторизованным пользователям
• Добавлен "Предпросмотр" профиля участника и страны во время загрузки сайта
• Добавлен "Предпросмотр" поста на странице с постом если он был открыт по ссылке
• Уменьшен логотип на странице "Авторизации" в пк версии сайта
• Добавлен отступ сверху и снизу страницы у полосы прокрутки страницы и навигации
• Уменьшен отступ между ссылкой страницы (h/...) и первой секцией`,
        date: "12.06.2024",
        attach: [],
    },
]

// Возвращаем посты в обратном порядке
export default changelogs.reverse()