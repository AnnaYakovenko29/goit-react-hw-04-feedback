import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good / total) * 100;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className='conteiner'>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!totalVotes ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalVotes={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
