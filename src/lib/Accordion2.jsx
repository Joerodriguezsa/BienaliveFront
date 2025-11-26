import React, { useState } from 'react';

const Accordion = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <ul className="accordion-box">
          {[
            { key: 1, title: 'Credit Card / Debit Card', content: (
                <div className="payment-info">
                    <div className="row clearfix">
                        <div className="col-md-6 column">
                            <div className="field-input mb-3">
                                <input type="text" className="form-control" name="name" placeholder="Name on the Card" required />
                            </div>
                        </div>
                        <div className="col-md-6 column">
                            <div className="field-input mb-3">
                                <input type="text" className="form-control" name="number" placeholder="Card Number" required />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 column">
                            <div className="field-input mb-3">
                                <input type="text" className="form-control" name="date" placeholder="Expiry Date" required />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 column">
                            <div className="field-input mb-3">
                                <input type="text" className="form-control" name="code" placeholder="Security Code" required />
                            </div>
                        </div>
                        <div className="col-lg-6 column">
                            <div className="field-input message-btn">
                                <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                                    <span className="btn-two">Make Payment</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )},
            { key: 2, title: 'Direct Bank Transfer', content: (
              <div className="payment-info">
                <p className="mb-0"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
              </div>
            )},
            { key: 3, title: 'Cheque Payment', content: (
                <div className="payment-info">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
            )},
            { key: 4, title: 'Other Payment', content: (
                <div className="payment-info">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
            )}
            ].map(({ key, title, content }) => (
                <li key={key} className={`accordion block ${activeKey === key ? 'active-block' : ''}`}>
                    <div className={`acc-btn ${activeKey === key ? 'active' : ''}`} onClick={() => handleToggle(key)} >
                        <div className="icon-outer">
                            <i className={`lnr-icon-chevron-${activeKey === key ? 'up' : 'down'}`}></i>
                        </div>
                        {title}
                    </div>
                    {activeKey === key && (
                        <div className="acc-content current">
                            {content}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Accordion;