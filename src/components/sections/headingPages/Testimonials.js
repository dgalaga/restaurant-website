import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Darren Galante" description="This is the best Filipino food that I've ever had!"/>
                <TestimonialCard name="Mariam Moch" description="My family and I really loved the friendly atmosphere and 
                delicious food here."/>
                <TestimonialCard name="Andrew Ramos" description="I've had some great Filipino food before, but none of them beats
             Anak PDX in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" description="If you're into vegan food or just want to try something new, you've gotta check out this place. Their menu has a wide range of delicious plant-based options."/>
                <TestimonialCard name="Chloe Reynor" description="The ambiance of this vegan restaurant is inviting, and the friendly staff make dining here an absolute pleasure."/>
                <TestimonialCard name="Rolando Dean" description="The staff at this vegan joint are super friendly and welcoming. It feels like dining with friends who know their way around plant-based cuisine."/>
                <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in or visit Portland."/>
                <TestimonialCard name="Jaime Hu" description="This vegan spot totally impressed me! Their dishes are bursting with flavor and presented so beautifully."/>
                {/* <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/> */}
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}