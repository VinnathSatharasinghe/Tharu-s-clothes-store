import { useState, useEffect, useRef } from "react";
import "../css/home.css";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Navbar from "../navbar/navbar";
import Footer from "../navbar/footer";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const items = [
    {
      imgSrc: "image/1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      imgSrc: "image/2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "NATURE",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      imgSrc: "image/3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "TECH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      imgSrc: "image/4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "CITY",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
  ];

  const timeRunning = 3000; // Time for animation
  const timeAutoNext = 3000; // Auto slide interval time
  const intervalRef = useRef(null); // To keep reference of interval

  // Function to handle next slide
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Effect to handle automatic slide changes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, []);

  // Effect to handle animation reset after a delay
  useEffect(() => {
    const resetAnimation = setTimeout(() => {
      setIsAnimating(false);
    }, timeRunning);

    return () => clearTimeout(resetAnimation);
  }, [currentIndex]);

  return (
    <>
      <Navbar/>

      <div>
        <div>
          {/* carousel */}
          <div className="carousel">
            {/* list item */}
            <div className="list">
              {items.map((item, index) => (
                <div
                  className={`item ${index === currentIndex ? "active" : ""}`}
                  key={index}
                  style={{ display: index === currentIndex ? "block" : "none" }}
                >
                  <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
                  <div className="content">
                    <div className="author">{item.author}</div>
                    <div className="title">{item.title}</div>
                    <div className="topic">{item.topic}</div>
                    <div className="des">{item.description}</div>
                    <div className="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* list thumbnail */}
            <div className="thumbnail">
              {items.map((item, index) => (
                <div
                  className={`item ${index === currentIndex ? "active" : ""}`}
                  key={index}
                >
                  <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
                  <div className="content">
                    <div className="title">Name Slider</div>
                    <div className="description">Description</div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="arrows">
              <button onClick={handlePrev} disabled={isAnimating}>
                &lt;
              </button>
              <button onClick={handleNext} disabled={isAnimating}>
                &gt;
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <section className="second">
        <h1>Second Section</h1>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card border="primary" style={{ width: "22rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "22rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "22rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "22rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Home;
