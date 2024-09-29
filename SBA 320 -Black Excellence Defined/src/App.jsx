import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomFact from './components/RandomFact';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <RandomFact />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <Quiz />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
