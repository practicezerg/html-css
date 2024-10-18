// Функция для обновления времени
function updateClocks() {
    // Текущее время
    let now = new Date();

    // Московское время (временная зона: Europe/Moscow)
    let moscowTime = now.toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow', hour12: false });
    document.getElementById('clock').textContent = 'MSK : ' + moscowTime;

    // Центральноевропейское время (временная зона: CET)
    let cetTime = now.toLocaleTimeString('en-GB', { timeZone: 'CET', hour12: false });
    document.getElementById('clock2').textContent = 'CET : ' + cetTime;
}

// Обновляем время каждую секунду
setInterval(updateClocks, 1000);

// Обновляем часы сразу после загрузки страницы
updateClocks();