import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Fargʻona ",
  description:
    "Fargʻona — Oʻzbekistonning sharqidagi viloyat, sanoat va qishloq xoʻjaligi rivojlangan hudud.",
  attractions: [
    {
      name: "Al-Fargʻoniy bog‘i",
      image:
        "https://cdn1.img.sputniknews.uz/img/397/02/3970274_0:0:1500:844_1920x0_80_0_0_b4bd664ed53049cd11a84bf1f81b6287.jpg",
      description:
        " Bu bog‘, mashhur astronom va matematik Muhammad al-Farg‘oniyga bag‘ishlangan. Bog‘da uning hayoti va faoliyatiga oid ma'lumotlar ko‘rsatilgan. Ajoyib manzaralar va me'moriy elementlar bilan to‘la, dam olish uchun juda qulay joy.",
    },
    {
      name: "Qirq Qiz qal’asi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Qirq_qiz.jpg/240px-Qirq_qiz.jpg",
      description:
        "Farg‘ona vodiysining qadimiy tarixiy qal’asi bo‘lib, o‘zining noyob arxitekturasi va tarixi bilan mashhur. U tarixiy voqealar va afsonalar bilan bog‘liq bo‘lib, sayyohlar uchun qiziqarli joy hisoblanadi. Qal'adan ajoyib manzaralarni tomosha qilish mumkin.",
    },
    {
      name: "Rishton kulolchilik markazi",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOQrNTiCOjBbbVlF3oewAKJWXsl2A2r_BFupXTu=s1360-w1360-h1020",
      description:
        "Rishton shahri o'zining an'anaviy kulolchilik san'ati bilan tanilgan. Bu yerda turli xil chinni idishlar, amaliy san'at asarlari yaratiladi. Sayyohlar bu yerda ustalar bilan tanishib, kulolchilik jarayonini ko‘rishlari mumkin.",
    },
  ],
  hotels: [
    {
      name: "Mehmonsaroy Mehmonxonasi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/2664_17160177913rMj_1024x768.jpg",
      description:
        "Mehmonsaroy Mehmonxonasi Farg'ona shahrida joylashgan. Mehmonxona xonalarida tekis ekranli televizor, wi-fi va hammom mavjud. Mehmonxona tashqarisida avtoturargoh joylashgan.",
    },
    {
      name: "Status Mehmon uyi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/_1669042263dyZ1_1024x768.jpg",
      description:
        "Status Guest House Farg'ona shahrida joylashgan. Xonalarda wi-fi mavjud. Mehmonxona yonida mashinalar uchun avtoturargoh mavjud.",
    },
  ],
  restaurants: [
    {
      name: "Restaran Maxizadem",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/15/2b/8d/caption.jpg?w=600&h=400&s=1",
      description:
        "Sizni va oilangizni bizning qulay va zamonaviy zallarimizda ajoyib kunlarni o‘tkazishga taklif qilamiz.",
    },
    {
      name: "Yaponyamama Fergana",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/ed/82/interior.jpg?w=600&h=-1&s=1",
      description:
        "O‘zbekistonning eng katta panaziyat oshxonasi restoranlari tarmog‘i. Halol sushi, rollar, salatlar, zakuskalar va issiq taomlar.",
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
const Fargona = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://tarix.sinaps.uz/wp-content/uploads/2023/08/ahmad_al_fargoniy_01.webp">
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

export default Fargona;
