import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Qarshi",
  description:
    "Qadimiy Qarshi shahri 2006-yilda YUNESKO shafeligida 2700 yillik yubileyini nishonladi. Buyuk Aleksandr Makedonskiy bu yerda bo‘lgan. Afsonada aytilishicha, shaharda mashhur jasur va so‘g‘d harbiy qo‘mondoni Spitamen tug‘ilgan. Uning jasoratidan Makedonskiy hayratda qoldi.",
  attractions: [
    {
      name: "Qarshi shahrining 8 ta qadimiy meʼmoriy yodgorliklari",
      image:
        "https://uzbekistan.travel/storage/app/media/1600px-kok-gumbazmosqueinqarshifrontview.jpg",
      description:
        "Qashqadaryo viloyatining maʼmuriy markazi — Qarshi shahri. Qadimiy shahar 2006-yilda YuNESKO boshchiligida o‘zining 2700 yilligini nishonladi. Shaharga Iskandar Makedonskiyning o‘zi tashrif buyurganligi haqida afsonalar mavjud.",
    },
    {
      name: "Oq saroy",
      image:
        "https://uzbekistan.travel/storage/app/media/uploaded-files/photo_2024-07-01_12-11-20.jpg",
      description:
        "Oq saroy, Shahrisabzning asosiy diqqatga sazovor joyi va marvarididir. Sizga, Temur davridning ushbu ulug‘vor me’moriy yodgorligining qurilish tarixi haqida 10 ta faktni taqdim etamiz.",
    },

    {
      name: "Qarshi ko‘prigi",
      image:
        "https://dolorestravel.com/uploads/Article/675/blog-5d73a28756523.webp",
      description:
        "Boy tarixga ega qadimiy ko‘prik. Uning bir necha nomi bor: Amir Temur koʻprigi, Shayboniylar koʻprigi, Qashqadaryo koʻprigi, Nikolaevskiy koʻprigi. Inshoot 1583-yilda forscha uslubda qurilgan. ",
    },
  ],
  hotels: [
    {
      name: "ROYAL PLAZA Hotel",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOplzLGgN_kJqsa5pz_8yZEQh7DXd1fEBz30jpC=w287-h192-n-k-rw-no-v1",
      description:
        "Juda yaxshi mehmonxona, yangi, juda chiroyli xonalar, muloyim xodimlar, hammaga tavsiya qilaman!!!!!",
    },
    {
      name: "Astra Mehmoxonasi",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMF7L7F6ANhJGfrVJhi0gqTckzOlcJlA0UL4lI=w287-h192-n-k-rw-no-v1",
      description:
        "Manzil va aloqa ma'lumotlari  Alisher Navoiy 8 6, 180100, Qarshi, Qashqadaryo viloyati 88 481 01 01",
    },
  ],
  restaurants: [
    {
      name: "Chorsu Tandir Gusht",
      image:
        "https://avatars.mds.yandex.net/get-altay/4265086/2a0000017c55782f57e5e03d5cebce7e8855/XXL_height",
      description: "Restorandagi taomlar juda mazali, xizmat a'lo darajada.",
    },

    {
      name: "Navro'z Restarani",
      image:
        "https://avatars.mds.yandex.net/get-altay/4508101/2a0000017920337963eef6e370cd188f0fc0/XXL_height",
      description:
        "Bu joy juda zo'r, narx, taom sifati, xizmat ko'rsatish eng yuqori darajada !",
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
const Qarshi = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://uzbekistan.travel/storage/app/uploads/public/5eb/480/630/thumb_783_600_0_0_0_crop.jpg">
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

export default Qarshi;
