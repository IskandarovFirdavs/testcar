import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Buxoro",
  description:
    "Buxoro — Oʻzbekistonning qadimiy shahri va madaniy merosi boy joylardan biri. ",
  attractions: [
    {
      name: "Buxoro Arki",
      image:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSuLLhKcRGZHPdcaWqJwa8gpuJ0msVaKYrUGPphypbN4DkspZUZC9n9f0T0KrCwn6yVdjwX51lCOISAig-GcxZ-O-86rPdpl2Cc9vox9A",
      description:
        "Buxoro Ark — qadimiy qal’a bo‘lib, Buxoroning eng mashhur tarixiy yodgorliklaridan biri. U shaharning siyosiy va ma’muriy markazi bo‘lgan. Ark ichida masjidlar, muzeylar va saroylar joylashgan.",
    },
    {
      name: "Somoniylar maqbarasi",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS4H-nFbSNBw8tRqQO6Xkmkuw3LBe_KnaC5IXlse6rxY7Jnzkb1bAq71fWsod--IWFx2Q4rHN2XyFD7oo1MQ8iv1fEyg-5I26ZtBdttKvM",
      description:
        "Somoniylar maqbarasi — tinch va maftunkor joy bo'lib, Buxorodagi muhim ziyoratgohlaridan biri. Uning arxitekturasi nafis g'isht ishlovlari bilan ajralib turadi va atrofida yashil maydonlar mavjud.",
    },
    {
      name: "Chor-Minor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwK_hI8wOn6b4T9MGowxrjQ1gs9yky2gHQ3Q&s",
      description:
        "Chor-Minor — Buxorodagi to‘rt minarali, kichik va betakror madrasadir. Uning noyob tuzilishi va tinch muhiti sayyohlar uchun diqqatga sazovor joy.",
    },
  ],
  hotels: [
    {
      name: "Hotel Uncle Kolya Boutique",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/540390384.webp?k=a7b1a7c12ccaad3b1bdb414824a1de943d15e010312e0ba281c9bc5d768f7d48&o=",
      description:
        "Uncle Kolya butik mehmonxonasi — shinam, milliy uslubdagi mehmonxona, qulay va osoyishta joylashuvi bilan mashhur.",
    },
    {
      name: "ASL mehmonxonasi",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/436915885.webp?k=ee8d5120059c6fe083c1f7c0c3d6e53c01bcbe2869b357682086b4b98f5a6f1a&o=",
      description: "ASL mehmonxonasi",
    },
  ],
  restaurants: [
    {
      name: "Ayvan Restaurant",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPBBhgL7uBa5dGdj5-aF7hWjiktF-mqyj_BgGxR=s1360-w1360-h1020",
      description:
        "Unutilmas muhit - 19-asrdagi Buxoro yahudiylarining tarixiy merosi AYVAN (terrasa) Yevropa taomlari va a'lo darajadagi xizmat bilan tandem. Bu sizning qalbingizda uzoq vaqt saqlanib qoladi. Rasmiy sayt: https://www.lyabihouse.com/en/restaurant-ayvan",
    },
    {
      name: "Eski Buxoro restorani",
      image: "https://old-bukhara.uz/images/about.jpg",
      description:
        "Qadimgi Buxoro atmosferasiga sho'ng'ing . Rasmiy sayt: https://old-bukhara.uz/",
    },
  ],
};

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
const Buxoro = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQVTm7CmL7Ucb-qOrW6IXvP4-3oIJmRDw4MLRIVW0N0YbkS373rUX_QfSHuLToF6rwW6euEcjTyexUz07WV9cJNjSeMyfHwcd54wytFbA">
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

export default Buxoro;
