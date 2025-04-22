import React from 'react'
import "./NewPage.css"
const NewPage = () => {
  return (
<div>
<div className='new-add'>
<div className="img-section">
    <img src="https://wallpapercave.com/wp/wp5172535.jpg" alt="" />
</div>
<div className="info-section">
    <h1><u>who we are?</u></h1>
    <p>we are a team of passionate individuals who are dedicated to creating a better world through our work.</p>
    <p>Our mission is to provide high-quality products and services that meet the needs of our customers.</p>
    <p>Our vision is to be the leading provider of innovative solutions that make a positive impact on society.</p>
    <p>We help the community by providing them with the necessary resources and support to achieve their goals.</p>
    <p>Our team is committed to excellence and strives to deliver exceptional results in everything we do .</p>
    <p>Our valuesare:</p>
    <ul>
        <li>Integrity</li>
        <li>Respect</li>
        <li>Teamwork</li>
        </ul>
</div>

</div>
        <div className="we-done">
            <div className="our-std">
                <h2>We helped </h2>
                <p>100+ students to ace their dream jobs </p>
                <p>It is the proud thing we can say</p>
            </div>
            <div className="our-cmp">
                <h2>We served</h2>
                <p>100+ companies with our innovative solutions</p>
                <p>successfully completed all the projects and got the positive feedback</p>
                </div>
            <div className="our-skills">
                <h2>Our skills</h2>
                <p>Our team has the following skills:</p>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                    </ul>
            </div>
        </div>
</div>
  )
}

export default NewPage
