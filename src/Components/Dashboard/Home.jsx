import React, { useState, useEffect } from 'react';


function Home() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        // Update the currentDateTime every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);
    const formattedDateTime = currentDateTime.toLocaleString(); // You can adjust the format as needed
    return (
        <main>
            <h1>Dashoard</h1>
            <p class="date">{formattedDateTime}</p>
            <div class="insights">
                <div class="dashboard-card">
                    <span class="material-icons-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                            <p><br></br></p>
                            <h2>MY JAMIA</h2>
                            <h3>Main</h3>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx='46' cy='44' r='36'></circle>
                            </svg>
                            <div class="number">
                                <button type="button" class="go"
                                    onclick="location.href='https://www.jmi.ac.in/'">Go</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="dashboard-card">
                    <span class="material-icons-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                            <p><br></br></p>
                            <h2>JMI COE</h2>
                            <h3>Examination</h3>
                        </div>
                        <div class="progress middle-progress">
                            <svg>
                                <circle cx='48' cy='44' r='36'></circle>
                            </svg>
                            <div class="number">
                                <button type="button" class="go" onclick="location.href='https://www.jmi.ac.in/'">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-card">
                    <span class="material-icons-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                            <p><br></br></p>
                            <h2>STUDENT</h2>
                            <h3>Account</h3>
                        </div>
                        <div class="progress right-progress">
                            <svg>
                                <circle cx='48' cy='44' r='36'></circle>
                            </svg>
                            <div class="number">
                                <button type="button" class="go"
                                    onclick="location.href='https://www.jmi.ac.in/'">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;
