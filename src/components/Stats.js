import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'use-count-up'; // Correctly import useCountUp

const statsData = [
  { value: 4800, label: 'Job Completed', formatType: 'k' }, // 4.8k
  { value: 12, label: 'Industry Experience', formatType: '+' }, // 12+
  { value: 2500, label: 'World wide clients', formatType: 'k+' }, // 2.5k+
  { value: 120, label: 'Won Awards', formatType: '+' }, // 120+
];

// Function to format large numbers like 4.8k, 2.5k+, 12+, 120+
const formatNumber = (num, formatType) => {
  if (formatType === 'k') {
    return (num / 1000).toFixed(1) + 'k'; // Format to 1 decimal place and add 'k'
  } else if (formatType === 'k+') {
    return (num / 1000).toFixed(1) + 'k+'; // Format to 1 decimal place, add 'k+'
  } else if (formatType === '+') {
    return num + '+'; // Add '+' to the number
  }
  return num; // If no format needed, just return the number
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only trigger once
    threshold: 0.1,    // Trigger when 10% of the section is in view
  });

  return (
    <section ref={ref} className="stats-section">
      <div className="container">
        <div className="row text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="col-md-3 col-6" data-aos="fade-up">
              <span className="stat-value">
                {inView ? (
                  <CountUpComponent end={stat.value} formatType={stat.formatType} />
                ) : null}
              </span>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component to handle each counter with useCountUp and number formatting
const CountUpComponent = ({ end, formatType }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useCountUp({
    isCounting: true,
    end,
    duration: 3,
    onUpdate: (latestValue) => {
      setDisplayValue(formatNumber(latestValue, formatType)); // Update with formatted number as it counts
    },
    onComplete: () => {
      setDisplayValue(formatNumber(end, formatType)); // Ensure the final value is formatted
    },
    separator: ',',
  });

  return <>{displayValue}</>;
};

export default Stats;
