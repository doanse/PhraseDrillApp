import { useState, useEffect } from 'react';
import './App.css';

const API_BASE = process.env.REACT_APP_API_URL || '';

/**
 * Root component — главная страница PhraseDrill со списком тем.
 */
function App() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/home/topics`)
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
        return res.json();
      })
      .then(setTopics)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  /** Обработчик выбора темы (заготовка под навигацию или загрузку фраз). */
  const handleTopicClick = (topic) => {
    console.log('Выбрана тема:', topic.id, topic.title);
    // TODO: переход к экрану фраз по теме или загрузка данных
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">PhraseDrill</span>
        </div>
      </header>

      <main className="app-main">
        <section className="hero">
          <h1 className="hero-title">
            Улучшай разговорный <span className="hero-accent">английский</span>
          </h1>
          <p className="hero-subtitle">
            Выберите тему и отрабатывайте фразы в контексте — быстро и понятно.
          </p>
        </section>

        <section className="topics">
          <h2 className="topics-heading">Темы</h2>
          {error && <p className="topics-error">Не удалось загрузить темы: {error}</p>}
          {loading && <p className="topics-loading">Загрузка тем…</p>}
          <ul className="topics-grid">
            {topics.map((topic, index) => (
              <li key={topic.id} className="topics-item" style={{ animationDelay: `${index * 40}ms` }}>
                <button
                  type="button"
                  className="topic-card"
                  onClick={() => handleTopicClick(topic)}
                >
                  <span className="topic-card-text">{topic.title}</span>
                  <span className="topic-card-arrow" aria-hidden>→</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
