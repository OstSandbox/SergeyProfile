// static/js/password-protection.js
(function() {
  // Проверяем, авторизован ли пользователь
  if (!sessionStorage.getItem('authenticated')) {
    // Скрываем содержимое сайта
    document.body.style.display = 'none';
    
    // Создаем форму входа
    const loginForm = document.createElement('div');
    loginForm.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 9999;">
        <h2>Вход на сайт</h2>
        <p>Пожалуйста, введите пароль для доступа к содержимому:</p>
        <input type="password" id="password-input" style="margin: 10px; padding: 8px; width: 250px;">
        <button id="submit-btn" style="padding: 8px 16px; background: #4CAF50; color: white; border: none; cursor: pointer;">Войти</button>
        <p id="error-message" style="color: red; display: none;">Неверный пароль. Попробуйте еще раз.</p>
      </div>
    `;
    
    document.body.appendChild(loginForm);
    
    // Обработчик нажатия кнопки входа
    document.getElementById('submit-btn').addEventListener('click', function() {
      checkPassword();
    });
    
    // Обработчик нажатия Enter в поле ввода
    document.getElementById('password-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });
    
    // Функция проверки пароля
    function checkPassword() {
      const password = document.getElementById('password-input').value;
      // Замените 'ваш_пароль' на желаемый пароль
      if (password === '220586') {
        sessionStorage.setItem('authenticated', 'true');
        document.body.style.display = 'block';
        loginForm.remove();
      } else {
        document.getElementById('error-message').style.display = 'block';
      }
    }
  } else {
    // Если пользователь уже авторизован, показываем содержимое
    document.body.style.display = 'block';
  }
})();
