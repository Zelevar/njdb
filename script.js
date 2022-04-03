var fs = require('fs'); // Подключаем модуль для работы с файлами

function file(file) {
    // Функция для получения файла и работы с ним
    global.filepath = file

    fs.stat(file, function(err, stat) {
        if (err == null) {
            var file = JSON.parse(fs.readFileSync(file, 'utf8')); // Читаем файл
        } else if (err.code == 'ENOENT') {
            fs.writeFile(global.filepath, '{}', function (error) {
                if (error) throw error; // Ошибка записи (если есть)
            });
        } else {
            console.log(err.code);
        }
    });

    global.file = file; // Записываем в глобальную переменную
    return file; // Возвращаем файл
}

function set(key, value) {
    // Функция записывает значение по ключу
    global.file[key] = value // Записываем значение
    fs.writeFileSync(global.filepath, JSON.stringify(global.file, null, 2)) // Записываем в файл
}

function add(key, subkey, value) {
    // Функция добавляет ключ
    let file = get(key) // Получаем значение по ключу и записываем в локальную переменную
    if (file == undefined) {
        file = {} // Если значение по ключу не найдено, то создаем пустой объект
    }
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