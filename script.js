document.addEventListener('DOMContentLoaded', () => {
    // Наблюдатель за появлением секций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    });

    // Добавляем наблюдение за всеми секциями
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Плавная анимация при наведении на контент
    document.querySelectorAll('.content').forEach(content => {
        content.addEventListener('mouseenter', () => {
            content.style.transform = 'translateY(-10px)';
        });

        content.addEventListener('mouseleave', () => {
            content.style.transform = 'translateY(0)';
        });
    });

    // Функция создания салюта
    function createFirework(x = 50, delay = 0, color = null) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${x}%`;
            document.body.appendChild(firework);

            // Если цвет не указан, выбираем случайный
            const specificColor = color || Math.floor(Math.random() * 5) + 1;

            // Создаем искры
            for (let i = 0; i < 24; i++) {
                const spark = document.createElement('div');
                // Если указан конкретный цвет, используем его, иначе чередуем цвета
                spark.className = `spark color-${specificColor}`;
                spark.style.transform = `rotate(${i * 15}deg) translateY(-15px)`;
                spark.style.animation = 'fireworkSparkle 1.2s ease-out forwards';
                firework.appendChild(spark);
            }

            // Анимируем салют
            requestAnimationFrame(() => {
                firework.style.animation = 'firework 1.5s ease-out forwards';
            });
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }, delay);
    }

    // Запускаем приветственный салют с разных позиций
    setTimeout(() => {
        // Первая волна - разные цвета
        createFirework(30, 0, 1);    // Красный
        createFirework(50, 100, 2);  // Синий
        createFirework(70, 200, 3);  // Зеленый

        // Вторая волна - случайные цвета
        setTimeout(() => {
            createFirework(40, 0);
            createFirework(60, 100);
            createFirework(20, 200);
            createFirework(80, 300);
        }, 800);

        // Финальный залп - золотой
        setTimeout(() => {
            createFirework(50, 0, 5);
            createFirework(35, 100, 5);
            createFirework(65, 100, 5);
        }, 1600);
    }, 500);
}); 