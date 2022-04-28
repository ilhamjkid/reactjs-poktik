import React, { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Mas Seringalau",
    image: "WOLF.jpg",
    message: "Saya suka masakan ayamnya, Sangat lezat untuk dijadikan santapan.",
  },
  { id: 2, name: "Mas Megapro", image: "TIGER.jpg", message: "Rasanya sangat memuaskan, Bikin Saya jadi pengen nambah terus." },
  { id: 3, name: "Kang Burhan", image: "OWL.jpg", message: "Yang paling Saya suka adalah Ayam Kecap, Sangat direkomendasikan." },
];

const Review = () => {
  const [getReviews, setReviews] = useState([]);
  useEffect(() => {
    document.title = "Poktik - Tinjauan";
    setReviews(reviews);
  }, []);
  return (
    <section className="container">
      <div className="w-full min-h-screen pt-20 pb-4 px-4 flex flex-wrap justify-center content-start items-start md:pt-24 lg:px-0 lg:items-centers">
        <div className="w-full h-auto">
          <h1 className="text-3xl text-center font-semibold">TINJAUAN</h1>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-evenly items-center">
          {getReviews.map((review) => {
            return (
              <div key={review.id} className="w-full h-auto p-4 md:w-1/2 md:h-auto lg:w-[33%]">
                <div className="bg-glass backdrop-blur-lg p-4 rounded-2xl border-light-custom">
                  <img className="w-3/4 h-auto my-2 mx-auto rounded-full block" src={`/images/review/${review.image}`} alt={review.name} />
                  <h2 className="text-3xl text-center font-semibold my-1">{review.name}</h2>
                  <p className="text-lg text-center font-normal my-1">{review.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
