import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Toshkent",
  description:
    "Toshkent shahri — O‘zbekiston poytaxti va eng yirik shahri. U mamlakatning iqtisodiy, madaniy va siyosiy markazi hisoblanadi. Shaharda ko‘plab tarixiy joylar, zamonaviy infratuzilma va universitetlar mavjud. Shahar O‘rta Osiyodagi muhim transport markazlaridan biri sanaladi.",
  attractions: [
    {
      name: "Magic City",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOoHQmiu7YXUSjt2tn2UzOQCFe_NVS1ojxX5e1P=w675-h390-n-k-no",
      description:
        "Sehrli shahar – Toshkent markazida Markaziy Osiyoda o‘xshashi bo‘lmagan loyiha. Butun oila uchun sehr va o'yin-kulgining eng katta maydoni, bu erda na kattalar, na bolalar zerikmaydi.",
    },
    {
      name: "Tashkent City Mall",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPo_HAR_TyhUbRzmKvH30FUy2-77zTKvTTVFMMP=s1360-w1360-h1020",
      description:
        "Tashkent City Mall – bu Toshkentning zamonaviy savdo markazi bo‘lib, u yerda turli brend do‘konlari, restoranlar va ko‘ngilochar joylar mavjud.",
    },

    {
      name: "Chorsu Bozori",
      image: "https://ru.suntravel.uz/d/bazar_tashkenta_chorsu.jpg",
      description:
        "Chorsu bozori — Toshkentning eng qadimiy va mashhur bozorlaridan biri. U shahar markazida joylashgan bo‘lib, asosan qishloq xo‘jaligi mahsulotlari, ziravorlar, milliy taomlar va hunarmandchilik buyumlarini sotadi.",
    },
  ],
  hotels: [
    {
      name: "HOTEL PALM",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPY02bTuNXy8b9FnboYhLICeNVaNEd8WtCb7l0=w287-h192-n-k-rw-no-v1",
      description:
        "Manzil va aloqa ma'lumotlari, Toshkent, Ektirom koʻchasi, 99 149 07 77",
    },
    {
      name: "UZBEKISTAN HOTEL",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/484224608.jpg?k=626a6ca47cdafadf48aaefe19079905a0127e7c99c08d0a116214758037cb316&o=&hp=1",
      description:
        " Mehmonlar uchun bepul mashinalar va yaqin atrofda ajoyib transport aloqalari mavjud. 'O'zbekiston' mehmonxonasi klassik tarzda jihozlangan xonalar va minibar bilan jihozlangan suitlarni taklif etadi.",
    },
  ],
  restaurants: [
    {
      name: "Rayhon milliy taomlari",
      image:
        "https://avatars.mds.yandex.net/get-altay/1588111/2a0000016ca2468dfc2b79eeb94ed6155412/orig",
      description:
        "Toshkentdagi 'Rayxon Milliy Taomlari' restorani o'zbek milliy oshxonasiga ixtisoslashgan maskanlardan biri hisoblanadi. Bu yerda an'anaviy o'zbek taomlari, jumladan, palov, somsa, shurva, manti, va lag'mon kabi taomlar tayyorlanadi. Restoran o'ziga xos milliy uslubda bezatilgan bo'lib, mijozlarga qulay muhit va yuqori sifatli xizmat ko'rsatish bilan mashhur.",
    },

    {
      name: "Diet Cafe",
      image:
        "https://avatars.mds.yandex.net/get-altay/10814540/2a0000018b427d0af131089054c56bf1e6ca/L_height",
      description:
        "Toshkentdagi diet kafelar sog‘lom ovqatlanishga ixtisoslashgan joylardir. Bu kafelarda odatda kam kaloriyali, oqsilga boy, va organik mahsulotlardan tayyorlangan taomlar taklif etiladi. Shuningdek, vegansiy va glutensiz taomlar ham menyularda mavjud bo‘lib, sog‘lom turmush tarzini qo‘llab-quvvatlashga mo‘ljallangan.",
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
const Toshkent = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://trvlland.com/wp-content/uploads/2022/09/uzbekistan_tashkent-3.jpg">
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

export default Toshkent;
