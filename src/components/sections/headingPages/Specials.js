import Carousel from './SpecialsCarousel';
// import GreekSalad from '../../../assets/food/greek-salad.webp';
import LumpiaShanghai from '../../../assets/food/lumpia_shanghai.jpeg';
// import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import ArrozValenciana from '../../../assets/food/arroz_valenciana.jpeg';
// import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import BBQWings from '../../../assets/food/bbq_wings.jpeg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/check_back_menu.pdf')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                {/* <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/> */}
                <SpecialCard image={LumpiaShanghai} name="Lumpia Shanghai" price="$10.99" description="Vegan Lumpia Shanghai is a delightful Filipino appetizer consisting of crispy, bite-sized spring rolls filled with a savory mixture of plant-based ingredients, such as seasoned tofu, vegetables, and aromatic herbs and spices."/>
                {/* <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/> */}
                <SpecialCard image={ArrozValenciana}name="Arroz Valenciana" price="$9.99" description="Vegan Arroz Valenciana is a delightful Filipino rice dish cooked with fragrant jasmine rice, plant-based protein like tofu or tempeh, and a medley of colorful vegetables, resulting in a flavorful and satisfying vegan rendition of this classic dish."/>
                <SpecialCard image={BBQWings} name="BBQ Wings of Jackfruit" price="$12.50" description="Vegan BBQ wings made of jackfruit are delicious plant-based wings crafted from tender jackfruit, seasoned with smoky barbecue flavors, and cooked to perfection, providing a satisfying and cruelty-free alternative to traditional chicken wings."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}