import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Samarqand",
  description:
    "Samarqand - qadimiy shahar, O'rta Osiyo tarixiy markazi. U o'zining boy madaniy merosi bilan mashhur.",
  attractions: [
    {
      name: "Registon",
      image:
        "https://storage.googleapis.com/mari-a5cc7.appspot.com/photos/regular/75593ee9-7ca8-4f6e-8676-41b6a38960a4.jpg",
      description: "Samarqandning eng mashhur tarixiy joyi.",
    },
    {
      name: "Amir Temur maqbarasi",
      image:
        "https://samarkandtourism.uz/media/uploads/2022/12/17/foto-2022-06-03t213449063.jpg",
      description: "Amir Temur va uning avlodlari dafn etilgan joy.",
    },
    {
      name: "Shah-i-Zinda",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Shah-i-Zinda_01.jpg",
      description: "O'rta asrlarning ajoyib yodgorlik majmuasi.",
    },
  ],
  hotels: [
    {
      name: "Grand Samarkand Hotel",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/172097965.jpg?k=441f4b2522b4519468fc0849bf59875744be336557e59ff23a9cd1653b16ee57&o=&hp=1",
      description:
        "Samarqandning markazida joylashgan, zamonaviy qulayliklarga ega mehmonxona.",
    },
    {
      name: "Hotel Asia",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/41/32/51/caption.jpg?w=700&h=-1&s=1",
      description:
        "Ushbu mehmonxona an'anaviy uslubda bezatilgan bo'lib, mehmonlarga qulaylik yaratadi.",
    },
  ],
  restaurants: [
    {
      name: "Registan Restaurant",
      image: "https://www.afisha.uz/uploads/media/2019/11/0711721.jpeg",
      description: "Mahalliy taomlar bilan tanishish uchun ajoyib joy.",
    },
    {
      name: "SIRIUS Restaurent",
      image: "https://estar-hotel.com/img/40ae92d003ea706e.webp",
      description: "Yengil taomlar va ajoyib atmosferani taqdim etadi.",
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
const Samarqand = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://811417.selcdn.ru/img/2023/10/11/90574b13202ba3fd1faf2e52b14bd64058326530.png">
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

export default Samarqand;
