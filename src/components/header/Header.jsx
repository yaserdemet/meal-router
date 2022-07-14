import HeaderStyle, { Select } from "./Header.style";
import { HeaderContainer, MainHeader, FoodInput, FormContainer, Button } from "./Header.style";

const Header = ({setQuery , setSelectedMeal , mealTypes, getData}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput placeholder="Search" type="text"  onChange={(e) => setQuery(e.target.value) }/>
        <Button type= "submit">Search</Button>
            <Select name="mealType" id="mealType" onChange={(e) => setSelectedMeal(e.target.value)}>
              {
                mealTypes.map((meal,index) => {
                  return <option key={index} value={meal.toLowerCase()}>{meal}</option>
                })
              }
            </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
