import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Surxandaryo",
  description:
    "Surxondaryo Oʻzbekistonning janubida joylashgan viloyat boʻlib, uning markazi Termiz shahridir. Viloyat asosan togʻli hududlardan iborat va qadimiy tarixiy obidalarga ega. Iqlimi issiq va quruq boʻlib, Surxondaryoda mevalar, ayniqsa anor va uzum mashhur.",
  attractions: [
    {
      name: "Sangardak Sharsharasi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharsharaning_umumiy_ko%27rinishi.jpg/330px-Sharsharaning_umumiy_ko%27rinishi.jpg",
      description:
        "Sangardak Sharsharasi – Surxandaryo viloyatining tabiiy mo‘jizalaridan biri bo‘lib, ajoyib suv oqimi va go‘zal manzaralari bilan tanilgan. Sharshara hududdagi eng ko‘rkam tabiiy obidalaridan biridir.",
    },
    {
      name: "«Xo'jayikon» Tuz G‘ori",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Xo%27jayikon_tuz_g%27ori_sanatoriysi3.jpg/800px-Xo%27jayikon_tuz_g%27ori_sanatoriysi3.jpg",
      description:
        "«Xo'jayikon» Tuz G‘ori - bu yer ostida joylashgan tuz konlari, minerallar va tabiiy shakllar bilan mashhur. Tuz g‘ori yer yuzidan ko‘p kilometrlar ostida joylashgan bo‘lib, uning tabiiy go‘zalligi har bir tashrif buyuruvchini hayratga soladi.",
    },

    {
      name: "Аль-Хаким ат-Тирмизи",
      image:
        "https://www.advantour.com/img/uzbekistan/termez/khakim-at-termizi-banner.jpg",
      description:
        "Аль-Хаким ат-Тирмизи – islom tarixida yirik ilm-fan va hadis alimi sifatida tanilgan. Termizda yashab, ilm va diniy ta’limot bilan shug‘ullangan bu zotning maqbarasi bugungi kunda ko‘plab ziyoratchilar uchun muqaddas joy hisoblanadi.",
    },
  ],
  hotels: [
    {
      name: "HOTEL Meridian",
      image:
        "https://lh3.googleusercontent.com/gps-proxy/ALd4DhHMnvUGQ-xEVyZ9Lm67hgCe66ij9BXMqHtOmMCs9Eh6Vv2k0YNhBg-kbtGxf8wcazK9npoFySr7efEV9w5VvPHflciNb3wtd5K72ONeCjNCRMjcizjgB7RY7BggXwpd8q1RKT7gkTWOZSbV_z3DPCo7HMEUN0uQ3KlPfYKsNeBLZVyipjoF8CW5=s1360-w1360-h1020",
      description:
        "Barcha xonalarda konditsioner va shaxsiy hammom. Xonada ikki kishilik, qirolicha yoki qirollik karavot mavjud. Qo'shimcha to'shaklar so'rov bo'yicha mavjud. Bundan tashqari Bundan tashqari, sizning ixtiyoringizda minibar mavjud. Internetga kirish, telefon va WiFi (pullik) kabi qulayliklar zamonaviy darajadagi qulaylikni kafolatlaydi.",
    },
    {
      name: "Asson HOTEL",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNykO-mHI7PCDvIS3ub8zljQKubBKgHaU0L0pfC=w287-h192-n-k-rw-no-v1",
      description:
        "'ASSON-HOTEL' mehmonxonasi: Asson mehmonxonasi shahar markazida, xalqaro aeroportdan 15 daqiqa, avtovokzaldan 10 daqiqa va temir yo'l vokzaliga piyoda 5 daqiqalik masofada joylashgan. ",
    },
  ],
  restaurants: [
    {
      name: "Restaurant Asson",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f9/67/a9/la-sala-del-ristorante.jpg?w=1200&h=-1&s=1",
      description:
        "U Arxeologiya muzeyi yaqinida, xuddi shu yo'lning bir tomonida joylashgan: shunchaki muzeydan chiqing va o'ngga boring va juda qisqa masofadan keyin siz ushbu restoranning oldida bo'lasiz",
    },

    {
      name: "Restaurant Pyramid",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMqbpt_4u-kP4esyRgW36e5Z10YFXcLhrVjcp5c=s1360-w1360-h1020",
      description:
        "Taomlar juda mazali ,narxlar va xizmat ko'rsatishga gap yo'q",
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
const Surxandaryo = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://upload.wikimedia.org/wikipedia/commons/5/50/Mausoleum_Termez.jpg">
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

export default Surxandaryo;
