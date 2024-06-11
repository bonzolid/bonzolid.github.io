

</head><?php

define('LANDING_DIR', '');

$apiKey = '2xhOTmmzxFZSzoEE80A4yL17pfpOCT9BIANr0h5nZ1j0fAo6DukcJbwgVC5eO';          // Ключ доступа к API
$offer_id = 5435;         // для каждого оффера свой айди, надо уточнять его в админке или у суппортов
$stream_hid = 'M8ztm50n';     // id потока
$landKey = '2aea2b2b1b30ebacd1dca70a618d7743';

$default_main_site = 'http://api.cpa.tl';
//$default_main_site = 'http://api.tradeblg.ru';
$apiSendLeadUrl = 'http://api.cpa.tl/api/lead/send_archive';
//$apiSendLeadUrl = 'http://api.tradeblg.ru/api/lead/send_archive';
$apiGetLeadUrl = 'http://api.cpa.tl/api/lead/feed';
//$apiGetLeadUrl = 'http://api.tradeblg.ru/api/lead/feed';

$dataOffers = '{"21587":{"id":21587,"name":"PowerWavy","country":{"code":"ES","name":"\u0418\u0441\u043f\u0430\u043d\u0438\u044f"},"price":"59","price2":"118","currency":{"code":"EUR","name":"\u20ac"}},"24234":{"id":24234,"name":"PowerWavy","country":{"code":"HU","name":"\u0412\u0435\u043d\u0433\u0440\u0438\u044f"},"price":"16900","price2":"33800","currency":{"code":"HUF","name":"Ft"}},"24235":{"id":24235,"name":"PowerWavy","country":{"code":"RO","name":"\u0420\u0443\u043c\u044b\u043d\u0438\u044f"},"price":"249","price2":"498","currency":{"code":"RON","name":"RON"}},"24236":{"id":24236,"name":"PowerWavy","country":{"code":"IT","name":"\u0418\u0442\u0430\u043b\u0438\u044f"},"price":"59","price2":"118","currency":{"code":"EUR","name":"\u20ac"}},"24237":{"id":24237,"name":"PowerWavy","country":{"code":"PL","name":"\u041f\u043e\u043b\u044c\u0448\u0430"},"price":"229","price2":"458","currency":{"code":"PLN","name":"Z\u0141"}},"24238":{"id":24238,"name":"PowerWavy","country":{"code":"CZ","name":"\u0427\u0435\u0445\u0438\u044f"},"price":"1290","price2":"2580","currency":{"code":"CZK","name":"K\u010d"}}}';
$dataOffer = '{"id":21587,"name":"PowerWavy","country":{"code":"ES","name":"\u0418\u0441\u043f\u0430\u043d\u0438\u044f"},"price":"59","price2":"118","currency":{"code":"EUR","name":"\u20ac"}}';
$is_geo_detect = '';
$productName = 'PowerWavy';
$invoice = 'index.php';
$push_link = '';
$language = 'es';
$companyInfo = array('address' => '362041, РЕСПУБЛИКА СЕВЕРНАЯ ОСЕТИЯ - АЛАНИЯ, ГОРОДСКОЙ ОКРУГ ГОРОД ВЛАДИКАВКАЗ, Г ВЛАДИКАВКАЗ, УЛ ВЛАДИКАВКАЗСКАЯ, Д. 44, ТОРГ.ЗАЛ 29', 'detail' => 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХАС ТОРГ" ОГРН: 1221500005121 ИНН: 1500006267 КПП: 150001001 e-mail: HAS@Yandex.ru skype : HASTorg');
$companyInfoEN = array('address' => '16 George street, London, UK. skype: Galaxy-trade, email: Galaxy-trade2000@gmail.com', 'detail' => 'Galaxy Trade LTD');
$fb_verification = '';
$showcase_url = '';

$_debug = False; // установите True для вывода дополнительной информации для отладки и поиска ошибок
$pixels = [
    'fb_pixel', 'fb_verify', 'google_pixel', 'google_adw_pixel', 'tiktok_pixel', 'topmail_pixel', 'vk_pixel', 
    'yandex_metrika', 'mail_pixel', 'bigo_pixel'
];

if(!$apiKey){
    echo 'Ключ доступа к API не определен. Получите в личном кабинете или обратитесь в службу поддержки';
    die;
}

if(!$offer_id){
    echo 'ID оффера не определен';
    die;
}


/**
 * Настройки валидации полей формы.
 *
 * Для активации настройки нужно раскомментировать нужную строку и поставить нужное значение.
 *
 * Пример:
 * Длина телефонного номера (только цифры) должна быть от 9 до 12 цифр.
 *
 * $formValidatorOptions = [
 *     'phone_min_length' => 9,
 *     'phone_max_length' => 12,
 * ];
 */
$formValidatorOptions = [
    # Отключить маску телефонного номера (код страны) по умолчанию
    #'disable_phone_mask' => true,

    # Минимальная длина телефонного номера (считаются только цифры)
    #'phone_min_length' => 7,

    # Максимальная длинателефонного номера (считаются только цифры)
    #'phone_max_length' => 15,
];


/**
 * Конверсионные элементы для лендинга.
 *
 * Для подключения конверсионного элемента его необходимо внести в массив $plugins. Где ключ - название конверсионного
 * элемента, а значение массив с необходимыми параметрами, если параметры не нужны - пустой массив.
 *
 * Пример:
 * $plugins = [
 *      'online_visitors_top' => [],
 *      'delivery' => [],
 *      'promocode' => ['promocode' => 'super'],
 *      'popup' => ['timeout' => 15],
 * ];
 *
 * Для активации элемента раскомментируйте строку в массиве $plugins, который объявлен ниже.
 * Параметры установлены по умолчанию.
 */

$plugins = [
#    'corona_delivery_top' => [],
#    'corona_delivery_eng_top' => [],
#    'online_visitors_top' => [],
#    'quick_order' => [],
#    'promocode' => ['promocode' => 'sale'],
#    'online_visitors' => [],
#    'made_order' => [],
#    'delivery' => [],
#    'freeze_price' => [],
#    'recall' => ['timeout' => 10],
#    'popup' => ['timeout' => 20],
#    'sale_11_ru_top' => [],
#    'black_friday_ru_top' => [],
#    'black_friday_eng_top' => [],
#    'christmas_sale_ru_top' => [],
#    'christmas_sale_eng_top' => [],
#    'valentines_day_ru_top' => [],
#    'valentines_day_eng_top' => [],
#    'march_8_top' => [],
];

/**
 * Из элементов 'corona_delivery_top', 'corona_delivery_eng_top', 'online_visitors_top' одновременно можно
 * выбрать только один. То же самое с элементами 'quick_order', 'promocode'.
 *
 * Элементы у которых доступны все языки, язык зависит от значения переменной $language.
 *
 *
 * Описание конверсионных элементов:
 *
 * 'corona_delivery_top' - Бесконтактное вручение (в условиях вируса).
 * Сверху лендинга отображается информация о бесконтактной доставке. Все языки.
 *
 * 'corona_delivery_eng_top' - Бесконтактное вручение (в условиях вируса).
 * Сверху лендинга отображается информация о бесконтактной доставке на английском. Только английский язык.
 *
 * 'online_visitors_top' - Плашка в шапке "посетители онлайн".
 * Сверху лендинга отображаются показатели продаж и посетителей за день. Все языки.
 *
 * 'quick_order' - Форма быстрого заказа. Закрепленная внизу экрана строка для быстрого заказа. Все языки.
 *
 * 'promocode' - Промо-код. Форма для ввода промокода для получения скидки. Все языки.
 * Необходимо указать значение промокода. Пример: 'promocode' => ['promocode' => 'super']
 *
 * 'online_visitors' - Поплавок "просматривают сейчас сайт".
 * Окошко сбоку с показателями, сколько посетителей сейчас на сайте. Все языки.
 *
 * 'made_order' - Поплавок сделавших заказ справа. Всплывающее каждые 30 секунд окошко о клиентах, оформивших заказ.
 * Только русский язык.
 *
 * 'delivery' - Информация о доставке. Всплывающая плашка с информацией о доставке по ГЕО клиента. Все языки.
 *
 * 'freeze_price' - Мы заморозили цену. Закрепленное справа окошко с "замороженным" курсом доллара. Только русский язык.
 *
 * 'recall' - Кнопка "Перезвоните мне". Через заданное время внизу лендинга появляется кнопка "Перезвонить". Все языки.
 * Необходимо указать время в секундах. Пример: 'recall' => ['timeout' => 10]
 *
 * 'popup' - Попап после открытия ленда в секундах. Через заданное время появляется попап с формой заказа. Все языки.
 * Необходимо указат время в секундах. Пример: 'popup' => ['timeout' => 20]
 *
 * 'sale_11_ru_top' - Вверху лендинга появляется баннер 'Всемирный День Шопинга'. Только русский язык.
 *
 * 'black_friday_ru_top' - Вверху лендинга появляется баннер 'Черная пятница'. Русский язык.
 *
 * 'black_friday_eng_top' - Вверху лендинга появляется баннер 'Black friday'. Английский язык.
 *
 * 'christmas_sale_ru_top' - Вверху лендинга появляется баннер 'Новогодняя распродажа'. Русский язык.
 *
 * 'christmas_sale_eng_top' - Вверху лендинга появляется баннер 'Christmas sale'. Английский язык.
 * 
 * 'valentines_day_ru_top' - Вверху лендинга появляется баннер 'Большая распродажа ко Дню всех влюбленных!' Русский язык.
 *
 * 'valentines_day_eng_top' - Вверху лендинга появляется баннер 'St. Valentine's Day Sale'. Английский язык.
 * 
 * 'march_8_top' - Вверху лендинга появляется баннер 'Распродажа к 8 марта!' или 'Распродажа для милых дам!' Русский язык.
 */
