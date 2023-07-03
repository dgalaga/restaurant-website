import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Anak PDX</h1>
                    <h2>Portland</h2>
                    <p className="subsection">Experience the best of Vegan Filipino cuisine with a modern twist at our family-owned restaurant, where traditional recipes come alive in a plant-based feast.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/feast3.jpeg')} alt="Anak PDX restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}