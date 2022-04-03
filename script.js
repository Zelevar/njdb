var fs = require('fs'); // Подключаем модуль для работы с файлами

function file(file) {
    // Функция для получения файла и работы с ним
    global.path = file
    var file = JSON.parse(fs.readFileSync(file, 'utf8')); // Читаем файл
    global.file = file; // Записываем в глобальную переменную
    return file; // Возвращаем файл
}

function set(key, value) {
    // Функция записывает значение по ключу
    global.file[key] = value // Записываем значение
    fs.writeFileSync(global.path, JSON.stringify(global.file, null, 2)) // Записываем в файл
}

function add(key, subkey, value) {
    // Функция добавляет ключ
    let file = get(key) // Получаем значение по ключу и записываем в локальную переменную
    file[subkey] = value // Записываем значение по ключу
    set(key, file) // Записываем значение по ключу
}

function get(key, subkey) {
    // Функция возвращает значение по ключу
    if (subkey == undefined) {
        return global.file[key]; // Возвращаем значение
    } else if (subkey != undefined) {
        return global.file[key][subkey]; // Возвращаем значение
    }
}

function remove(file, key) {
    // Функция удаляет ключ
    delete global.file[key]; // Удаляем ключ
}

module.exports = {
    // Публичные функции
    file: file,
    set: set,
    add: add,
    get: get,
    remove: remove
}; 