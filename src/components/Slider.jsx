const Slider = () => {
  const images = [
    "https://i.ibb.co/BqHQLWJ/85485948-047f-48bf-97ac-745c03030412.jpg",
    "https://i.ibb.co/DQw5vnr/48cebeaf-2695-47cc-9a6b-1fd7a00c6935.jpg",
    "https://i.ibb.co/Tqv0Wzr/fbc8b58d-79f3-45db-a5fb-5981543beef7.jpg",
    "https://i.ibb.co/Bgn1Zr7/0b6e6f6c-a011-4724-97a4-e7b4006b3e6f.jpg",
    "https://i.ibb.co/BgJgm0g/e3cd74fe-db63-4cd0-afc5-3f9cb27956a9.jpg",
  ];

  return (
    <div className="carousel rounded-lg">
      {images.map((img, idx) => (
        <div key={idx} className="carousel-item w-[30%]">
          <img src={img} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
