import React from "react";
import styled from "styled-components";

// Viloyat ma'lumotlari
const regionData = {
  name: "Namangan",
  description:
    "Namangan viloyati, tabiiy go'zalliklari, tarixiy obidalari va madaniy merosiga ega.",
  attractions: [
    {
      name: "Xo‘ja Amin maqbarasi",
      image:
        "https://uzbekistan.travel/storage/app/media/Yuliya/cropped-images/130-2-0-0-0-0-1603196647.jpg",
      description:
        "Maqbaraning peshtoqi va gumbazi XVII asrning ikkinchi yarmida qurilgan. Uni yaratishda ustalar O‘rta Osiyo meʼmorchiligining anʼanaviy uslublaridan foydalanganlar. Bir muncha vaqt o‘tgach, masjid qurib bitkazilgan, ammo afsuski, bizgacha masjidning bir qismi va maqbaraning bir qismi saqlanib qolgan.",
    },
    {
      name: "Chodak qishlog‘i va Yig‘layotgan qoyatosh",
      image:
        "https://uzbekistan.travel/storage/app/media/uploaded-files/chadak.jpg",
      description:
        "Namangan yaqinida qadimiy Chadak qishlog‘i mavjud. U Chodaksoy daryosi vodiysida joylashgan. Qishloq to‘rt ming yillik tarixga ega. Bunday ulug‘ yoshga qaramay, qishloq Markaziy Osiyo qishlog‘ining anʼanaviy shaklini saqlab qoldi.",
    },

    {
      name: "Mavlon Buva majmuasi",
      image:
        "https://uzbekistan.travel/storage/app/media/uploaded-files/2020072409205823664.jpg",
      description:
        "Mavlon Buva majmuasi 1806 yilda qurilgan. Maqbaraga kiraverishda tepada tokchalar va uchli arka joylashgan. Kirishning ikkala tomonida ustki qismi katta bo‘lgan ustunlar mahobat bilan ko‘tarilgan.",
    },
  ],
  hotels: [
    {
      name: "Sayhun hotel",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNOC8qzg5KcCF7mlRMaYV_KtFtPWb3lki-mdwDe=w253-h337-k-no",
      description:
        "Chiroyli Namangan shahrida joylashgan Sayhun mehmonxonasiga xush kelibsiz! Mehmonxonamiz qulay dam olish uchun zarur bo'lgan barcha narsalar bilan jihozlangan qulay xonalarni taklif etadi. ",
    },
    {
      name: "Reikartz Namangan",
      image:
        "https://lh3.googleusercontent.com/proxy/3gNYWHyUrk-202hlLq905oKRPwKqBWV3TCu_FYjo6RTrLdVljtSfN6fs8eJz4e85djwKDyTK5Uuy_em3ujMxvphk27UrmBMoyYUG5UsQuBBIo2qYbbtOmMJos5UvW_cJF5PfvWs81C9_8B4-CH9ITsgoUMO72A=w287-h192-n-k-rw-no-v1",
      description:
        "Reikartz Namangan Namangan shahrining markazida, motamsaro ona haykali va birinchi viloyat shifoxonasi yonida joylashgan.",
    },
  ],
  restaurants: [
    {
      name: "Fazo restaranti",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMbtcqFOsSiiuHoRvcsTjGJFo8tjT-Gss3s788Y=s1360-w1360-h1020-rw",
      description:
        "Sho'rvalar, salatlar va panjara go'shtlari taqdim etiladigan terasli kamtarona restoran.",
    },

    {
      name: "GAVHAR restorant",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMEekIQCkk-ewKMt97_XejlizdSRrF-3cWwSwsP=s1360-w1360-h1020-rw",
      description:
        "'Gavhar' turk restorani O'zbekistonning turk oshxonasining turli taomlarini taklif etadigan joylardan biridir.",
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
const Namangan = () => {
  return (
    <PageWrapper>
      <Header bgImage="https://uzbekistan.travel/storage/app/media/noviy/DJI_0004.jpg">
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

export default Namangan;
