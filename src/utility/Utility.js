import image1 from "../assets/images/randomFoodImage/food_image1.jpg";
import image2 from "../assets/images/randomFoodImage/food_image2.jpg";
import image3 from "../assets/images/randomFoodImage/food_image3.jpg";
import image4 from "../assets/images/randomFoodImage/food_image4.jpg";
import image5 from "../assets/images/randomFoodImage/food_image5.jpg";
import image6 from "../assets/images/randomFoodImage/food_image6.jpg";
import image7 from "../assets/images/randomFoodImage/food_image7.jpg";
import image8 from "../assets/images/randomFoodImage/food_image8.jpg";
import image9 from "../assets/images/randomFoodImage/food_image9.jpg";

const randomImage = () => {
    const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9];
    let index_to_return = Math.floor(Math.random() * 10);
    if(index_to_return === 9){
        index_to_return = 8;
    }
    return images[index_to_return];
};

export default randomImage;


