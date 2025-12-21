const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;
const usersFile = path.join(__dirname, 'users.json');


const ACCESS_SECRET = 'inai-access-super-secret-2025';
const REFRESH_SECRET = 'inai-refresh-even-more-secret-2025';

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Чтение пользователей
const readUsers = () => {
  const data = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(data);
};

// Запись пользователей
const writeUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// Регистрация
app.post('/api/register', (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ message: 'Логин и пароль обязательны' });

  const users = readUsers();
  if (users.find(u => u.login === login)) {
    return res.status(400).json({ message: 'Такой логин уже существует' });
  }

  users.push({ login, password });
  writeUsers(users);

  res.json({ message: 'Регистрация успешна' });
});

// Логин + выдача токенов
app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.login === login && u.password === password);
  if (!user) return res.status(401).json({ message: 'Неверный логин или пароль' });

  // Access Token — 15 минут
  const accessToken = jwt.sign({ login }, ACCESS_SECRET, { expiresIn: '15m' });

  // Refresh Token — 30 дней
  const refreshToken = jwt.sign({ login }, REFRESH_SECRET, { expiresIn: '30d' });

  // Отправляем refresh в httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000
  });

  res.json({ accessToken });
});

// Обновление access-токена
app.post('/api/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: 'Нет refresh токена' });

  try {
    const decoded = jwt.verify(token, REFRESH_SECRET);
    const newAccessToken = jwt.sign({ login: decoded.login }, ACCESS_SECRET, { expiresIn: '15m' });
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ message: 'Недействительный refresh токен' });
  }
});

// Выход, очистка куки
app.post('/api/logout', (req, res) => {
  res.clearCookie('refreshToken');
  res.json({ message: 'Выход выполнен' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});