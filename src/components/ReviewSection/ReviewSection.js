import { useState, useEffect } from "react";
import "./style.scss";

const ReviewSection = () => {
  const [curr, setCurr] = useState(0);
  const [newCurr, setNewCurr] = useState(0);
  const [timer, setTimer] = useState(0);
  let reviews = [
    "Cela sert d'exemple de satisfaction afin que les futures clients puissent voir les avis affichés",
    "Ceci est un second exemple afin de vérifier le bon fonctionnement du carousel",
    "Si nous parvenons jusqu'ici c'est que tout fonctionne correctement ! ",
  ];

  const wordToDisplay = [];

  function prev() {
    let t = document.getElementById("textReview");
    t.classList.add("exitAtLeft");
    setTimeout(() => {
      t.classList.add("entranceAtRight");
      t.classList.remove("exitAtLeft");
      setCurr((curr) => (curr === 0 ? reviews.length - 1 : curr - 1));
      setTimeout(() => {
        t.classList.remove("entranceAtRight");
      }, 500);
    }, 500);
  }

  function next() {
    let t = document.getElementById("textReview");
    t.classList.add("exitAtRight");
    setTimeout(() => {
      t.classList.add("entranceAtLeft");
      t.classList.remove("exitAtRight");
      setCurr((curr) => (curr === reviews.length - 1 ? 0 : curr + 1));
      setTimeout(() => {
        t.classList.remove("entranceAtLeft");
      }, 500);
    }, 500);
  }

  function changeWordToDisplay() {
    let a = reviews.shift();
    wordToDisplay.push(a);
    reviews.push(a);
    setTimeout(() => {
      wordToDisplay.splice(0, 1);
    }, 2000);
  }

  function setCurrentSlide(index) {
    setCurr(index);
    setTimer(0);
    setTimeout(() => {
      setNewCurr(index);
    }, 100);
  }

  // useEffect(() => {
  //   changeWordToDisplay();
  // }, [curr]);

  // window.setInterval(function () {
  //   changeWordToDisplay();
  //   console.log(wordToDisplay[0]);
  // }, 3000);

  return (
    <section
      className="w-full h-[55vh] lg:h-[450px] bg-primary lg:shadow-md lg:shadow-[#A4A7B0]"
      id="review"
    >
      <div className="w-full h-full bg-primary">
        <div className="h-[90%] lg:h-full bg-[white] max-lg:rounded-br-[80px] shadow-custom">
          <div className="w-[85%] lg:w-[95%] h-[95%] mx-auto flex flex-row justify-between items-center relative">
            <div className="w-[5%] flex justify-center items-center">
              <i
                className="fa-solid fa-chevron-left text-secondary text-3xl cursor-pointer opacity-80 hover:opacity-100 duration-300"
                onClick={prev}
              ></i>
            </div>
            <div className="w-[85%] h-full flex flex-col justify-evenly items-center">
              <div className="flex justify-center items-center font-bold">
                <p className="w-full text-lg lg:text-3xl" id="textReview">
                  {reviews[curr]}
                </p>
              </div>
              <div className="text-md lg:text-2xl">Anne Serif CA</div>
              <div className="w-[100px] flex justify-evenly items-center flex-row">
                {reviews.map((_, i) => (
                  <div
                    key={i}
                    className={`
                  transition-all w-3 h-3 bg-secondary rounded-full
                  ${
                    curr === i ? "p-2 opacity-100" : "bg-opacity-50"
                  } duration-300
                `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="w-[5%] flex justify-center items-center">
              <i
                className="fa-solid fa-chevron-right text-secondary text-3xl cursor-pointer opacity-80 hover:opacity-100 duration-300"
                onClick={next}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
