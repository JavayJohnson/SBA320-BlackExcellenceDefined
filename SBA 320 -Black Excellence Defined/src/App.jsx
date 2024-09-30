import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomFact from './components/RandomFact';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Carousel from './components/Carousel';
import './App.css'; // Importing the App's CSS for styling

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="carousel">
          <Carousel />
        </section>
        <section id="random-fact">
          <RandomFact />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
      </main>
      <footer>
        <section id="quiz">
          <Quiz />
        </section>
        {/* <p>© 2024 Black Excellence Infinitely Defined</p> */}
        <Footer />
      </footer>
    </div>
  );
}

export default App;
