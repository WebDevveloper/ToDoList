# ToDoList — минимальный CRUD (React + Vite)

**Кратко (30 сек):** быстрый список задач с локальным хранением (localStorage), чистой компонентной архитектурой и базовыми функциями (добавление, редактирование, удаление).

## Демо / скриншоты
- Деплой: https://webdevveloper-todolist.netlify.app/ (Netlify)
- Скриншоты: ./docs/screenshots/ (Lighthouse mobile и ключевые экраны)

## Стек
- **Frontend:** React 18, Vite 5, JSX, HTML5/CSS3
- **UI:** Google Fonts (Inter), иконки — Font Awesome (CDN)
- **Состояние:** `useState` на уровне `App`
- **Хранение:** `localStorage` (persist/restore)
- **Качество:** ESLint

## Фичи (то, что есть сейчас)
- Добавление задачи из поля ввода
- Редактирование задачи (иконка ✎)
- Удаление задачи (иконка 🗑)
- Сохранение списка между перезагрузками (localStorage)

## Архитектура (коротко)
- src/
- components/
 - ToDoInput.jsx # инпут + кнопка Add
 - ToDoList.jsx # список задач
 - ToDoCard.jsx # элемент + действия (edit/delete)
- App.jsx
- index.css
- main.jsx
- index.html # lang="en", Google Fonts + Font Awesome
- vite.config.js

## Метрики (цели для мобильных)
- Lighthouse: **90–100**
- Web Vitals: **LCP < 2.0 s**, **CLS ~ 0.01**
- Bundle: **≤ 300 KB**
> Скриншоты и результаты будут в `./docs/screenshots/`.

## Доступность (A11y)
- Клавиатурная навигация и видимые фокусы
- Понятные иконки действий; рекомендуется добавить ARIA-метки для инпута/кнопок

## Roadmap
- RU/EN i18n (placeholder/кнопки)
- Пустые и ошибочные состояния
- Фильтры: all/active/completed (требует флага completed)
- Drag&Drop сортировка (опционально)
- Unit-тесты для storage/редактирования
- GitHub Actions (lint/build) и скрины Lighthouse
- Перевод на TypeScript (опционально)

## Цель проекта
Показать понимание React/Vite и базовой фронтенд-архитектуры на простом ToDo как «разминочном» мини-проекте перед более сложными приложениями.

## Запуск
```bash
npm i
npm run dev        # http://localhost:5173
npm run build
npm run preview
