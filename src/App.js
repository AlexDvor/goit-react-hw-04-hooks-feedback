import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Container from './components/Container/Container';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalValueObj = Object.values(this.state);
    const totalValue = totalValueObj.reduce((total, value) => {
      return total + value;
    }, 0);

    return totalValue;
  };

  countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }

    const { good } = this.state;
    const percentage = (good / total) * 100;
    return Number(percentage.toFixed());
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(totalFeedback);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section text="please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onchangeState={this.changeState}
          ></FeedbackOptions>
        </Section>

        <Section text="statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}

export default App;
