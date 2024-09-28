import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Navoiy",
  description:
    "Navoiy viloyati Oʻzbekistonning markazida joylashgan sanoat va kon markazi. Viloyat oltin qazib olish, kimyo va metallurgiya sanoati bilan mashhur. Qizilqum cho'li va tarixiy Gʻijduvon shahriga ega bo'lib, Buyuk Ipak yoʻli izlari ham bu yerda uchraydi.",
  attractions: [
    {
      name: "Raboti Malik karvonsaroyi",
      image:
        "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/rabat-malik-2011-0-0-0-0-1583236594-0-0-0-0-1583236652.jpg",
      description:
        "Navoiydan 23 kilometr uzoqlikda bir paytlar karvonlar o‘tgan joyda bir paytlar ko‘rkam bo‘lgan XI asrga oid saroy qoldiqlari – Raboti Malik (“podshoh qal‘asi” degan ma‘noni anglatadi) karvon saroyi joylashgan. Mahalliy aholi omon qolgan peshtoqlarga “Buxoro darvozalari” deb nom bergan.",
    },
    {
      name: "Konimex ekoparki",
      image:
        "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/_%D1%8D%D0%BA%D0%BE%D0%BF%D0%B0%D1%80%D0%BA1-0-0-0-0-1584611732-0-0-0-0-1585220456.jpg",
      description:
        "ho‘l yerlari tub aholining ko‘chmanchi hayot muhitini mukammal tarzda yetkazib beradi. Konimex hududida ekoturizm va kempingni sevuvchilar uchun “Konimex ekoparki” mavjud. Park go‘zal burchakda joylashgan va 4 gektar maydonni egallaydi.",
    },

    {
      name: "To‘dako‘l sohili",
      image:
        "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/3-0-0-0-0-1584609347-0-0-0-0-1584609386.jpg",
      description:
        "Navoiy viloyatining Qiziltepa tumanida To‘dako‘l ko‘li bor.",
    },
  ],
  hotels: [
    {
      name: "Garden City Mehmonxonasi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/2355_1704696454EBfb_1024x768.jpg",
      description:
        "Garden City Mehmonxonasi - 14 ta qulay xonadan iborat. Mehmonxona taklif etadi: bitta, ikki kishilik, uch va to'rt kishilik xona har qanday mehmon uchun qulay.",
    },
    {
      name: "DUNYO Mehmoxonasi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/2458_1711891704Qx7n_1024x768.jpg",
      description:
        "Navoiy shahrida joylashgan DUNYO HOTEL mehmonxonasi. Unda mavsumiy ochiq basseyn, fitness markazi, bog' va restoran mavjud. Mehmonlar umumiy oshxona yoki barbekyu jixozlaridan foydalanishlari mumkin. Mexmonxona xududida quyoshli teras mavjud.",
    },
  ],
  restaurants: [
    {
      name: "RESTAURANT ABU DHABI",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOFWSZkIeUtDdNiUrLup5JF-DtQy0tcrUQHRl3Y=s1360-w1360-h1020",
      description:
        "ABU-DABI RESTORANI 🍽️ZARAFSHONdagi eng mazali taomlar .🌠Banket, tug'ilgan kun va marosimlar. 🕗 Restoran ish vaqti 10:00 - 23:00",
    },

    {
      name: "SARDOBA FOOD Milliy taomlar",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOw5N5VDCxio1pY8cMte5FBprIlOk_TXLKq4hY=s1360-w1360-h1020",
      description:
        "“Sardoba milliy taomlar” o'zingizni qulay his qiladigan joy. 🧡",
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
const Navoiy = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/navoi1920-0-0-0-0-1593515699.jpg">
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

export default Navoiy;
