export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Anak PDX</h1>
                <h2>Portland, OR</h2>
                <p className="about-subtext">Experience the vibrant Vegan Filipino flavors at Anak PDX, the ultimate destination for plant-based food lovers in Portland, Oregon. Our talented chefs have reimagined classic Filipino dishes with a vegan twist, crafting a menu that is both delicious and sustainable. With a commitment to locally sourced, organic ingredients, we bring the rich tapestry of Filipino culinary traditions to life while supporting local farmers. Join us on a mouthwatering journey where every bite is a celebration of flavor, culture, and compassion. Anak PDX - Where Vegan Filipino Delights Come Alive!</p>
            </section>

            <section className="double-image">
                {/* <img className="about-1" src={require('../../../assets/food/feast1.jpeg')} alt="Anak PDX restaurant cuisine 1"></img> */}
                <img className="about-2" src={require('../../../assets/food/feast2.jpeg')} alt="Anak PDX restaurant cuisine 2"></img>
                {/* <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img> */}
                {/* <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img> */}
            </section>
    </article>
    );
}