import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({good: 0, neutral: 0, bad: 0});
  const {good, neutral, bad} = state;

 const onLeaveFeedback = value => {
    setState(prevState => {
      return {...prevState, [value]: prevState[value] + 1
      };
    })
  };

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <div className='conteiner'>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );

  };



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good / total) * 100;
//     return Math.round(percentage);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalVotes = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);

//     return (
//       <div className='conteiner'>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {!totalVotes ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               totalVotes={totalVotes}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
