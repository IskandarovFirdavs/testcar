import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Andijon",
  description:
    "Andijon Oʻzbekistonning qadimiy viloyatlaridan biri boʻlib, muhim tarixiy va iqtisodiy markazdir.",
  attractions: [
    {
      name: "Bobur nomidagi bog'",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Namangan_shahridagi_Bobur_bog%CA%BBi_7.jpg/1200px-Namangan_shahridagi_Bobur_bog%CA%BBi_7.jpg",
      description:
        "Andijon shahrida joylashgan ushbu bog‘ Zahiriddin Muhammad Boburga bag'ishlangan bo‘lib, yashil maydon va ko‘ngilochar maskanlar bilan to'la.",
    },
    {
      name: "Bobur muzeyi",
      image:
        "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/Andijan-0-0-0-0-1594283872.jpg",
      description:
        "Andijon shahridagi bu muzeyda Bobur hayoti va faoliyati haqida boy ma'lumotlar saqlangan.",
    },
    {
      name: "Andijon viloyat tarixiy muzeyi",
      image:
        "https://avatars.mds.yandex.net/get-altay/7981565/2a000001851a20e6ec06c1efd87227075da1/L_height",
      description:
        "Bu muzeyda Andijon viloyatining boy tarixi va madaniyati haqida qimmatli eksponatlar jamlangan.",
    },
  ],
  hotels: [
    {
      name: "International Andijon Hotel",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483051685.jpg?k=c080f77aa163d982dce4d7ba32290c8a075f18472b094e9bcfd7149b98ca2a66&o=&hp=1",
      description:
        "International Andijon Hotel — Andijondagi yuqori darajadagi mehmonxona, zamonaviy qulayliklar va xizmatlar bilan.",
    },
    {
      name: "Hostel ESKI SHAHAR",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMMXI469vkOugO7-IqDJnToBoeEoChmEHt0us44=w287-h192-n-k-rw-no-v1",
      description: "Eski Shahar — Andijondagi qulay va byudjetli xostel.",
    },
  ],
  restaurants: [
    {
      name: "Ulug'bek Dolma Oshxonasi",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/61/7c/a2/caption.jpg?w=600&h=400&s=1",
      description:
        "O'zbek taomlarini arzon tatib ko'rish uchun ajoyib imkoniyat",
    },
    {
      name: "La Veranda oilaviy restorani",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/1a/f2/e2/caption.jpg?w=600&h=-1&s=1",
      description: "Mazzali taomlar va ajoyib atmosferani taqdim etadi.",
    },
  ],
};

// Styled Components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  background-image: url(${(props) => props.bgImage});
  height: 500px; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  h1 {
    font-size: 3rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: 300px;
    h1 {
      font-size: 2rem;
    }
  }
`;

const Description = styled.section`
  padding: 20px;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const Attractions = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AttractionCard = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    padding: 10px;
  }

  p {
    padding: 0 10px 10px;
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
`;

const Places = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlaceCard = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    padding: 10px;
  }

  p {
    padding: 0 10px 10px;
    font-size: 1rem;
  }
`;

// Asosiy komponent
const Andijon = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://lh5.googleusercontent.com/p/AF1QipOIPfSIBoZ0ZZfxLNDISBu9vmi3-lmjrcOcK8tm=w675-h390-n-k-no">
        <h1>{regionData.name}</h1>
      </Header>

      <Description>
        <p>{regionData.description}</p>
      </Description>

      <SectionTitle>Diqqatga sazovor joylar</SectionTitle>
      <Attractions>
        {regionData.attractions.map((attraction, index) => (
          <AttractionCard key={index}>
            <img src={attraction.image} alt={attraction.name} />
            <h3>{attraction.name}</h3>
            <p>{attraction.description}</p>
          </AttractionCard>
        ))}
      </Attractions>

      <SectionTitle>Mehmonxonalar</SectionTitle>
      <Places>
        {regionData.hotels.map((hotel, index) => (
          <PlaceCard key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
          </PlaceCard>
        ))}
      </Places>

      <SectionTitle>Restoranlar</SectionTitle>
      <Places>
        {regionData.restaurants.map((restaurant, index) => (
          <PlaceCard key={index}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </PlaceCard>
        ))}
      </Places>
    </PageWrapper>
  );
};

export default Andijon;
