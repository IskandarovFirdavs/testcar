import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Xorazm",
  description:
    "Xorazm — O'zbekistonning shimoli-g'arbida joylashgan viloyat. Tarixi qadimgi sivilizatsiyalar bilan boyitilgan, Al-Xorazmiy kabi mashhur shaxslar bu yerda tug'ilgan. Iqtisodiyoti asosan qishloq xo'jaligiga, xususan, paxta va meva-sabzavot yetishtirishga asoslangan. Xiva shahri, Ayaz Qala va Topraq Qala kabi tarixiy yodgorliklar bilan mashhur. Xorazm go'zal tabiat va mehmondo'stligi bilan ajralib turadi.",
  attractions: [
    {
      name: "Ichan-Qala",
      image:
        "https://whc.unesco.org/uploads/thumbs/site_0543_0007-594-0-20151105163820.jpg",
      description:
        "Xivaning tarixiy qismi, UNESCOning Jahon merosi ro‘yxatiga kiritilgan. Bu yerda qadimiy me'moriy yodgorliklarni, masjidlar va madrasa ko‘rishingiz mumkin.",
    },
    {
      name: "Kalta Minor",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR_Fjc6Yb-SJGIp2n4zxhm44vHilOV3owFdE9O9s2A9b55Jz3iw2CIuf87d6BV2HokuveweBKI2STgCCeMSSXrpsjp6vDt8OgXo6f5Jxw",
      description:
        "Xiva shahridagi eng mashhur minora, uning go‘zal dizayni va rang-barang qoplamasi bilan ajralib turadi.",
    },

    {
      name: "Pahlavon Mahmud maqbarasi",
      image: "https://khivamuseum.uz/sites/default/files/1_32.jpg",
      description:
        "Buyuk shoir va jangchining maqbarasi, mehmonlarni o‘zining go‘zalligi bilan jalb qiladi.",
    },
  ],
  hotels: [
    {
      name: "Asia Khiva Hotel",
      image:
        "https://khiva.asiahotels.uz/wp-content/uploads/2022/04/bf39f71722e458a247c40053de97c338.jpg",
      description:
        " Zamonaviy qulayliklarga ega, tarixiy joylarga yaqin. O'zbek oshxonasini taklif etadi.",
    },
    {
      name: "Hotel Old Khiva",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/1d/6e/61/old-khiva-hotel.jpg?w=500&h=-1&s=1",
      description:
        "An'anaviy me'morchilik va qulay xizmatlar. Ichan-Qala yaqinida joylashgan.",
    },
  ],
  restaurants: [
    {
      name: '"Qamish" Xorazm taomlari',
      image:
        "https://lh3.googleusercontent.com/p/AF1QipP7K_BXqb0TrKQ-p5zrCE-Hc70nfK-w5l_kFMFC=s1360-w1360-h1020",
      description:
        "Mahalliy taomlar, ayniqsa plov va somsa bilan mashhur. Oziq-ovqat sifati yaxshi, xizmat esa tez.",
    },

    {
      name: "Qamish Xorazm Gamburgeri",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AI1nWAYU_Xf9zzpApSwEIvWIM_tMthe2Eg&s",
      description:
        "Кафе  🍽 Хоразм миллий таомлари  👌 Асл тамни ҳис қилинг!  ⌚ Иш вақти: 09:00-23:00  📆 Дам олиш куни: Душанба  📞 Тел:+998914327222  G'ÌMJÌMA KAFE, Urgench  oddmenu.com/uz/p/gimjima",
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
const Xorazm = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://tarix.sinaps.uz/wp-content/uploads/2023/11/xorazm_yuksalishi_single.webp">
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

export default Xorazm;
