import HeroImage from "../../../assets/food/feast5.jpeg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Anak PDX Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
}
