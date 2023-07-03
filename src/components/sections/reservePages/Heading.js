import HeroImage from "../../../assets/food/feast1.jpeg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Anak PDX Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Reserve a table</h1>
        <h2>(coming soon)</h2>
      </div>
    </header>
  );
}
