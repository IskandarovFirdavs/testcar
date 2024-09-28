import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Jizzax",
  description:
    "Jizzah — O‘zbekistonning markaziy qismida joylashgan shahar, viloyat markazi.",
  attractions: [
    {
      name: "Zomin",
      image:
        "https://bookatour.me/uploads/images/f4295175fbd629dbbd456c6cb55c37f7.jpg",
      description:
        "Zomin tog‘lari Jizzah viloyatining sharqiy qismida joylashgan bo‘lib, bu tog‘lar Nurota tizmasining bir qismi hisoblanadi. Bu hudud tabiat va toza havo ixlosmandlari uchun juda mos joy bo‘lib, Zomin milliy bog‘i hududida joylashgan. Tog‘larda turli xil o‘simlik va hayvonot turlarini uchratish mumkin, shuningdek, bu yerda trekking va sayohat qilish uchun ko‘plab imkoniyatlar mavjud. Zomin tog‘lari dam olish va tabiat qo‘ynida vaqt o‘tkazish uchun juda yaxshi tanlov.",
    },
    {
      name: "Jizzah tarixiy muzeyi",
      image: "https://xabar.uz/static/crop/2/7/920__95_2788361268.jpg",
      description:
        "Jizzah Tarixiy Muzeyi Jizzah viloyatining boy tarixi va madaniyatini o‘rganish uchun eng yaxshi joylardan biri hisoblanadi. Muzeyda Jizzah viloyatidagi qadimiy obidalar, arxeologik topilmalar va tarixiy eksponatlar saqlanadi. Bu yerda siz viloyatning qadimdan to hozirgi davrgacha bo‘lgan tarixini o‘rganishingiz mumkin. Muzeyda mahalliy madaniyat va an’analarga oid eksponatlar ham namoyish etilgan.",
    },

    {
      name: "PARPI OYIM ZIYORATGOHI",
      image: "https://telegra.ph/file/a0bd48aca20b7cf35f5c9.jpg",
      description:
        "Parpi Oyim ziyoratgohi Jizzah viloyatining muhim ziyorat joylaridan biri hisoblanadi. Bu ziyoratgoh mahalliy aholi orasida muqaddas joy sifatida e’tirof etiladi. Aytishlaricha, Parpi Oyim qadim zamonlarda odamlarni yaxshi niyatlar va duolar bilan davolagan, shifo bergan. Shu sababli, bu joyda ko‘plab ziyoratchilar ibodat qiladi va turli marosimlar o‘tkaziladi. Bu ziyoratgoh tinchlik, xotirjamlik va o‘zgacha ruhiy hissiyotlar bag‘ishlaydi.",
    },
  ],
  hotels: [
    {
      name: "Tojmahal Mehmonxonasi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/1702_1651910193zl2I_1024x768.jpg",
      description:
        "Tojmahal mehmonxonasi Jizzax shahrida joylashgan. Shinam va shu bilan birga zamonaviy mehmonxona sizga kerak bo'lgan barcha narsalar bilan jihozlangan, bu esa to'liq turar muddatingizni yoqimli qiladi. Xonalar konditsioner, sun'iy yo'ldosh kanallariga ulangan televizorlar va Wi-Fi bilan jihozlangan.",
    },
    {
      name: "Afrosiyob Jizzax Mehmonxonasi",
      image:
        "https://mybooking-file-storage-eu.s3.eu-central-1.amazonaws.com/uploads/hotel/images/497_1645417647YhwX_1024x768.jpg",
      description:
        "'Afrosiyob' mehmonxonasining qulay joylashuvi tufayli, uning mehmonlari shaharning diqqatga sazovor joylari bo'ylab erkin hrkatlana oladilar. Mehmonxona derazalaridan shaharning tarixiy qismiga o'ziga xos va g'aroyib ko'rinish mehomonlarning e'tiborini jalb qiladi. Mehmonxona va xonalar asosan Yevropga xos dizayni bilan ajralib turadi. 'Afrosiyob' mehmonxonasi nafaqat ish bo'yicha tashrif buyurgan mehmonlar, balki oddiy mehmonlar uchun ham ajoyib tanlov.",
    },
  ],
  restaurants: [
    {
      name: "Shedevr",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMvS4vOx0uofdVzvrQs33fD5hyfldKfbxS4S8_b=s1360-w1360-h1020-rw",
      description:
        "Sizni va oilangizni bizning qulay va zamonaviy zallarimizda ajoyib kunlarni o‘tkazishga taklif qilamiz.",
    },

    {
      name: "Osiyo Restaurant ",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNxVwIuiFTqi1HLzoMF105HkW8tEQt5sxOGafHG=s220-w165-h220-n-k-no",
      description:
        " Restoran haqida mijozlar ijobiy fikrlar bildirgan, jumladan, u yerning xushmuomalalik va xizmat ko‘rsatish sifati yaxshi ekani ta'kidlangan ",
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
const Jizzax = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://static.review.uz/crop/9/0/1400__100_902470340.jpg?v=1606807243">
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

export default Jizzax;
