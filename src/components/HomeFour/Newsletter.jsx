import React, { useState } from 'react';

function Newsletter() {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(null); // padding for first week
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    return days;
    };
    const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };
    const monthData = getMonthData(currentDate);
    const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <section className="newsletter-section pt-130 pb-130">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4 newsletter-block wow fadeInLeft" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <h2 className="title">News Letter</h2>
                            <p>Suspendisse sit amet neque</p>
                            <form action="#">
                                <input type="email" placeholder="E-mail address"/>
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 wow calendar-block fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="calendar">
                                <div className="calendar-header flex justify-between items-center py-2 px-4 bg-gray-200 rounded">
                                    <button onClick={handlePrevMonth} className="material-symbols-rounded">
                                    <i className="fa-light fa-angle-left"></i>
                                    </button>
                                    <p className="calendar-current-date font-medium">
                                    {currentMonthName} {currentYear}
                                    </p>
                                    <button onClick={handleNextMonth} className="material-symbols-rounded">
                                    <i className="fa-light fa-angle-right"></i>
                                    </button>
                                </div>
                                <div className="calendar-body mt-4">
                                    <ul className="calendar-weekdays grid grid-cols-7 text-center font-bold">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                        <li key={day}>{day}</li>
                                    ))}
                                    </ul>
                                    <ul className="calendar-dates grid grid-cols-7 text-center mt-2">
                                    {monthData.map((day, idx) => (
                                        <li key={idx} className="py-2">
                                        {day || ''}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow newsletter-block fadeInRight" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <h2 className="title">Working Hours</h2>
                            <ul>
                                <li>
                                    <p>Monday to Friday</p> <span>09:00-20:00</span>
                                </li>
                                <li>
                                    <p>Saturday</p> <span>10:00-17:00</span>
                                </li>
                                <li>
                                    <p>Sunday</p> <span>Close</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
