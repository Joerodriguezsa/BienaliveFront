import React, { useEffect, useState } from 'react';

const ProgressBar2 = ({ title, targetPercentage }) => {
    const [percentage, setPercentage] = useState(0);
    const animationDuration = 3000;

    useEffect(() => {
        const increment = targetPercentage / (animationDuration / 10);
        let currentPercentage = 0;

        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            setPercentage(Math.floor(currentPercentage));
        }, 10);

        return () => clearInterval(interval);
    }, [targetPercentage, animationDuration]);

    return (
        
        <div className="team-details__progress-single">
            <h4 className="team-details__progress-title">{title}</h4>
            <div className="bar">
                <div className="bar-inner count-bar" style={{ width: `${percentage}%` }}>
                    <div className="count-text">{percentage}%</div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar2;
