import React, { Component } from 'react';
import Title from './components/Titel';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;

    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const total = this.countTotalFeedback();

    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section>
          <Title title="Please leave feedback" />

          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementFeedback}
          />

          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
