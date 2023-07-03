import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
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
             </Carousel>
    )
}