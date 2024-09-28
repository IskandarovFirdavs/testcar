import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Sirdaryo",
  description:
    "Sirdaryo viloyati Oʻzbekistonning markaziy qismida joylashgan kichik viloyatlardan biri hisoblanadi. Asosiy iqtisodiyoti qishloq xoʻjaligiga, xususan, paxta va gʻalla yetishtirishga asoslangan. Sirdaryo daryosi bo‘ylab joylashgani sababli, viloyatda sugʻorish tizimlari yaxshi rivojlangan.",
  attractions: [
    {
      name: "O‘zbekistondagi Sardobalar",
      image:
        "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/3-0-0-0-0-1583472213-0-0-0-0-1583472265.jpg",
      description:
        "Suv hayot manbaidir. Qadimda suv havzalaridan uzoqda yashagan O‘rta Osiyo aholisi bu suvsizlik dardini doimo bilishgan, hayot manbasini qadrlagan va ehtiyotkorlik bilan munosabatda bo‘lishgan.",
    },
    {
      name: "Guliston parki",
      image:
        "https://avatars.mds.yandex.net/get-altay/9829646/2a0000018fb773478da4288cf935d8fc56e9/L_height",
      description:
        " Park toza havo, ko‘kalamzorlar va sayr qilish uchun keng yo‘laklari bilan tanilgan. Shuningdek, u erda bolalar uchun attraksionlar va o‘yin maydonchalari ham mavjud. Oila va do‘stlar bilan sayr qilish, dam olish va tabiat bilan birga vaqt o'tkazish uchun ajoyib joy hisoblanadi.",
    },

    {
      name: "Sirdaryo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bridges_in_Khujand.jpg/375px-Bridges_in_Khujand.jpg",
      description:
        "Sirdaryo Oʻzbekistonning shimoliy chegarasidan oqib oʻtib, Orol dengiziga quyiladi.",
    },
  ],
  hotels: [
    {
      name: "HOTEL HUMO",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPc4J7Kgv54VDg6pEwlz51s1U1vO2qqb6WEyR8U=w287-h192-n-k-rw-no-v1",
      description: "Juda yaxshi mehmonxona, chiroyli xonalar !!!",
    },
    {
      name: "SAYHUN HOTEL",
      image:
        "https://lh3.googleusercontent.com/proxy/miFLjTxF3FoEfrG3ukxtqTVmrs-KdLu1CBn4HIS2qOY2c5K0ZKKLKhY25Hx8ofyGlXhEAtuwwtm8fss40_BJ3jk7YJr0yLmfe5C2eCziC_FXZiUfddfmyY4I6czWpsf4pqELmWSkoxjjALSIpfasxH4cTQE8h34=w287-h192-n-k-rw-no-v1",
      description:
        "Manzil va aloqa ma'lumotlari :Sirdaryo viloyati, Guliston, Al-Xorazmiy ko‘chasi 91 103 58 85",
    },
  ],
  restaurants: [
    {
      name: "JIZ-BIZ RESTORAN",
      image:
        "https://top.uz/upload/iblock/dde/dde2a6dbfa842c8b967d6a7c0ebf35c5.jpg",
      description:
        "👨‍👩‍👧‍👦Oilaviy halol restorani , 🍽Zamonaviy choyxona, 🎉Banketlar, 🕚Ish vaqti: 11:00 - 23:00 (Sergeli, Farxadskiy, Sergeli tumani jiz biz, Tashkent, Uzbekistan",
    },

    {
      name: "Sirdaryo baliqlari choyxona",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNRtHzObMaoYHde0r0p4wEDmHJRPtbAWCQinK-O=s1360-w1360-h1020",
      description:
        "Bu joyda juda mazali pishirilgan baliqlar va xizmat ko'rsatish eng yuqori darajada !",
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
const Sirdaryo = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/8-0-0-0-0-1593511859.jpg">
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

export default Sirdaryo;
