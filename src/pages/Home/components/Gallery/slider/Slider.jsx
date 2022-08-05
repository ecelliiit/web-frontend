import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    { url: "https://ik.imagekit.io/officialprashant/Designs/Portrait/Leadership_Program__17__ZLTcmB9b2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657465966467", title: "beach" },
    { url: "https://ik.imagekit.io/officialprashant/Designs/Portrait/Talk_With_Alumni__5__slo-5JRmmk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657465973260", title: "boat" },
    { url: "https://ik.imagekit.io/officialprashant/Designs/Portrait/Leadership_Program__16__ZQRvfhrjk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657465972423", title: "forest" },
    { url: "https://ik.imagekit.io/officialprashant/Designs/Portrait/Instagram_post_-_1_xnSxirSl7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657465971421", title: "city" },
    { url: "https://ik.imagekit.io/officialprashant/Designs/Portrait/Twitter___Musk_QBEdt8ulB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657806417205", title: "italy" },
  ];
  const containerStyles = {
    width: "300px",
    height: "300px",
    margin: "2rem auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;