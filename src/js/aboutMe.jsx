import React from 'react';

const AboutMe = () => {
    return (
        <div className="wrapper">
            <div className="imgAndPic">
                <div className="imgBox">
                    <img
                        src="./images/MyIcon.jpg"
                        className="topicImage"
                        alt="Portrait Icon"
                    />
                </div>
                <div className="imgBox">
                    <h2>About Me</h2>
                    <p> Hello!</p>
                    <p>
                        My name is Madeline Carr, I am a graduate of Virgina
                        Commonwealth University. I like to experiment with
                        different styles of illustration in order to improve my
                        understanding of the world. Most of my work is vector
                        illustrations which I like because it helps me think
                        about shapes. I am working to become a web developer. I
                        hope you enjoy my portfolio!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
