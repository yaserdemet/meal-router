import { MainContainer, Card, Header, Image, Button } from './Cards.style';
import defaultImage from '../../assets/default-image.jpg';
import { useNavigate } from 'react-router-dom';

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => (
        <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImage} />
{/* // ? eğer image değeri tanımlanmışsa onu kullanıyoruz, eğer tanımlanmış değilse defaultImage olarak kullanıyoruz */}
          <Button
            onClick={() =>
              navigate('detail', { state: recipe, replace: false })
              // * butona basıldığında detail sayfasına gidiyor
            }
          >
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Cards;
