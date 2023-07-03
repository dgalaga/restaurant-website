// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// // import GreekSalad from '../../../assets/food/greek-salad.webp';
// import LumpiangSariwa from '../../../assets/food/lumpiang_sariwa.png';
// // import Bruschetta from '../../../assets/food/bruschetta.jpeg';
// import PancitBihonGuisado from '../../../assets/food/pancit_guisado.jpeg';
// // import LemonDessert from '../../../assets/food/lemon-dessert.webp';
// import adobongKangkong from '../../../assets/food/adobongKangkong.png';
// import SpecialCard from './CardInfo/SpecialCard';

// export default function CarouselPage() {
//     return (
//         <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
//             <SpecialCard image={LumpiangSariwa} name="Lumpiang Sariwa" price="$12.99" description="Vegetables, tofu, peanut sauce"/>
//             <SpecialCard image={PancitBihonGuisado}name="Pancit Bihon Guisado" price="$16.99" description="rice noodles, vegetables, and seasonings"/>
//             <SpecialCard image={adobongKangkong}name="Adobong Kangkong" price="$12.50" description="water spinach, garlic, soy sauce, vinegar, and spices"/>
//             {/* <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/> */}
//             {/* <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/> */}
//         </Carousel>
//     )
// }


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import LumpiangSariwa from '../../../assets/food/lumpiang_sariwa.png';
import PancitBihonGuisado from '../../../assets/food/pancit_guisado.jpeg';
import adobongKangkong from '../../../assets/food/adobongKangkong.png';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} showThumbs={true}>
            <SpecialCard image={LumpiangSariwa} name="Lumpiang Sariwa" price="$12.99" description="Vegetables, tofu, peanut sauce"/>
            <SpecialCard image={PancitBihonGuisado} name="Pancit Bihon Guisado" price="$16.99" description="rice noodles, vegetables, and seasonings"/>
            <SpecialCard image={adobongKangkong} name="Adobong Kangkong" price="$12.50" description="water spinach, garlic, soy sauce, vinegar, and spices"/>
        </Carousel>
    )
}

