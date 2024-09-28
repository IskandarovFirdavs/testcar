import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CityDiv = styled("div")`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }

  h5 {
    margin: 10px 0;
    font-size: 18px;
    color: green;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    width: 45%;
    padding: 8px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s;

    &:hover {
      background-color: #45a049;
      transform: scale(1.05);
    }
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;
const CityMain = styled("div")`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  flex-wrap: wrap; /* Responsive holatda shaharlarni qatorlarga joylashtirish */
`;

const CityAll = styled("div")`
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Shaharlarni qatorlarga joylashtirish */
  gap: 20px; /* Shaharlar orasida bo'shliq */
`;

const CityImg = styled("img")`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const All = styled("div")`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 600px;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 0%;
    height: 0%;
  }
`;
const Right = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    background-image: url("https://www.forumdaily.com/wp-content/uploads/2018/08/Depositphotos_73185717_m-2015.jpg");
  }
`;
const Img = styled("img")`
  width: 80%;
  height: 300px;
  border-radius: 20px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const H1 = styled("h1")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    color: white;
  }
`;

const Buttons = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;
const ButtonLeft = styled("button")`
  width: 30%;
  height: 100%;
  border: 1px solid greenyellow;
  border-bottom-left-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1000px) {
    border: 0px;
    &:hover {
      background-color: greenyellow;
      border: 1px solid greenyellow;
    }
  }
  @media only screen and (max-width: 515px) {
    width: 40%;
  }
  @media only screen and (max-width: 380px) {
    height: 70%;
    width: 45%;
  }
`;
const ButtonRight = styled("button")`
  width: 30%;
  height: 100%;
  border: none;
  border-top-right-radius: 20px;
  border: 1px solid greenyellow;
  background-color: white;
  display: flex;
  align-items: center;
  transition: 0.5s;
  justify-content: center;
  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1000px) {
    border: 0px;
    &:hover {
      background-color: greenyellow;
      border: 1px solid greenyellow;
    }
  }
  @media only screen and (max-width: 515px) {
    width: 40%;
    border-left: 1px solid greenyellow;
  }
  @media only screen and (max-width: 380px) {
    height: 70%;
    width: 45%;
  }
`;

const LocationIcon = styled("img")`
  height: 60%;
`;
const Location = styled("p")`
  font-size: 16px;
  margin-left: 10px;
`;

const Input = styled("input")`
  width: 40%;
  height: 12%;
  border: 1px solid grey;
  padding-left: 10px;
  border: 1px solid grey;
  &:focus-visible {
    outline: none;
  }
  @media only screen and (max-width: 515px) {
    width: 50%;
  }
  @media only screen and (max-width: 515px) {
    width: 60%;
  }
`;
const Button = styled(Link)`
  position: relative;
  height: 15%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: greenyellow;
  border: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:after {
    content: "";
    background: #94de94;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  @media only screen and (max-width: 515px) {
    height: 10%;
    width: 60%;
  }
`;

const H4 = styled("h4")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: black;
`;
const AllDiv = styled("div")`
  width: 100%;
  height: auto;
  padding: 50px 0;
`;
const Yonalish = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <AllDiv>
      <All>
        <Left>
          <Img
            src="https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg"
            alt=""
          />
        </Left>
        <Right>
          <H1>O'zbekiston bo'ylab sayohat</H1>
          <Buttons>
            <ButtonLeft
              key={1}
              className={active === "1" ? "focus" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn-icons-png.flaticon.com/512/106/106195.png"
                alt=""
              />
              <Location>SAYOHAT</Location>
            </ButtonLeft>
            <ButtonRight
              key={2}
              className={active === "2" ? "focus" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn.icon-icons.com/icons2/3514/PNG/512/watch_time_clock_icon_221069.png"
                alt=""
              />
              <Location>SOATLIK IJARA</Location>
            </ButtonRight>
          </Buttons>

          <Input
            list="browsers"
            name="browser"
            placeholder="Qayerdan : viloyatlar , shaharlar"
          />
          <Input
            list="browsers"
            name="browser"
            placeholder="Qayerda : viloyatlar , shaharlar"
          />
          <datalist id="browsers">
            <option value="Surxondaryo" />
            <option value="Jizzax" />
            <option value="Samarqand" />
            <option value="Toshkent" />
            <option value="Namangan" />
            <option value="Farg`ona" />
            <option value="Xorazm" />
            <option value="Sirdaryo" />
            <option value="Navoiy" />
            <option value="Andijon" />
            <option value="Buxoro" />
            <option value="Qashqadaryo" />
          </datalist>

          <Button to={"/takliflar"}>
            <H4>ARIZA QOLDIRMOQ</H4>
          </Button>
        </Right>
      </All>
      <h1 style={{ textAlign: "center" }}>Bizning yo'nalishlarimiz</h1>
      <CityMain>
        <CityAll>
          <CityDiv>
            <CityImg
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/30_Shakhrisabz_Ak_Seraj_%287%29.JPG"
              alt=""
            />
            <h5>Qashqadaryo</h5>
            <div>
              <button>
                <Links to={"/qashqadaryo"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/qashqadaryo"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://lh5.googleusercontent.com/p/AF1QipNt-ALUgRCu564HnpSWwgdg-7pxCd7xDHJNYZl_=w675-h390-n-k-no"
              alt=""
            />
            <h5>Surxondaryo</h5>
            <div>
              <button>
                <Links to={"/surxondaryo"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/surxondaryo"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://static.review.uz/crop/9/0/1400__100_902470340.jpg?v=1606807243"
              alt=""
            />
            <h5>Jizzax</h5>
            <div>
              <button>
                <Links to={"/jizzax"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/jizzax"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://lh5.googleusercontent.com/p/AF1QipNt-ALUgRCu564HnpSWwgdg-7pxCd7xDHJNYZl_=w675-h390-n-k-no"
              alt=""
            />
            <h5>Samarqand</h5>
            <div>
              <button>
                <Links to={"/samarqand"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/samarqand"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/7a188df8327dd502fc336be6d5d2ec47/"
              alt=""
            />
            <h5>Toshkent</h5>
            <div>
              <button>
                <Links to={"/toshkent"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/toshkent"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://www.orexca.com/img/uzbekistan/namangan.jpg"
              alt=""
            />
            <h5>Namangan</h5>
            <div>
              <button>
                <Links to={"/namangan"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/namangan"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
        </CityAll>
        <CityAll>
          <CityDiv>
            <CityImg
              src="https://www.afisha.uz/uploads/media/2014/11/0364373_m.jpg"
              alt=""
            />
            <h5>Farg`ona</h5>
            <div>
              <button>
                <Links to={"/fargona"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/fargona"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://ichef.bbci.co.uk/images/ic/480xn/p0h8l984.jpg.webp"
              alt=""
            />
            <h5>Xorazm</h5>
            <div>
              <button>
                <Links to={"/xorazm"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/xorazm"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/2-0-0-0-0-1583469330-0-0-0-0-1583469382.jpg"
              alt=""
            />
            <h5>Sirdaryo</h5>
            <div>
              <button>
                <Links to={"/sirdaryo"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/sirdaryo"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg src="https://i.imgur.com/jvESmRN.jpg" alt="" />
            <h5>Navoiy</h5>
            <div>
              <button>
                <Links to={"/navoiy"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/navoiy"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://explorers.uz/image/cache/data/info/uzbekistan/ferghana_valley/andijan/01-1600x1200.jpg"
              alt=""
            />
            <h5>Andijon</h5>
            <div>
              <button>
                <Links to={"/andijon"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/andijon"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://www.shutterstock.com/image-photo/bukhara-historical-city-uzbekistan-translation-600nw-2410842963.jpg"
              alt=""
            />
            <h5>Buxoro</h5>
            <div>
              <button>
                <Links to={"/buxoro"}>Restaranlar</Links>
              </button>
              <button>
                <Links to={"/buxoro"}>Mexmoxonalar</Links>
              </button>
            </div>
          </CityDiv>
        </CityAll>
      </CityMain>
    </AllDiv>
  );
};

export default Yonalish;
