import './App.css';

/** Темы: времена и основные конструкции в английском (заготовка под дальнейшее расширение). */
const TOPICS = [
  { id: 'present-simple', title: 'Present Simple' },
  { id: 'present-continuous', title: 'Present Continuous' },
  { id: 'past-simple', title: 'Past Simple' },
  { id: 'past-continuous', title: 'Past Continuous' },
  { id: 'present-perfect', title: 'Present Perfect' },
  { id: 'future-will-going-to', title: 'Future: will / going to' },
  { id: 'there-is-are', title: 'There is / There are' },
  { id: 'to-be', title: 'To be (am, is, are)' },
  { id: 'have-got', title: 'Have got / Has got' },
  { id: 'modals', title: 'Модальные глаголы (can, must, should)' },
  { id: 'questions', title: 'Вопросы (общие и специальные)' },
  { id: 'passive', title: 'Passive Voice (страдательный залог)' },
  { id: 'conditionals', title: 'Условные предложения (Conditionals)' },
];

/**
 * Root component — главная страница PhraseDrill со списком тем.
 */
function App() {
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
          <ul className="topics-grid">
            {TOPICS.map((topic, index) => (
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
