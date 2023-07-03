import HeroImage from "../../../assets/food/feast7.jpeg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Anak PDX Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
        <h2>(coming soon)</h2>
      </div>
    </header>
  );
}
