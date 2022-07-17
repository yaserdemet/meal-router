import {
  HeaderContainer,
  MainHeader,
  FormContainer,
  FoodInput,
  Button,
  Select,
} from './Header.style';

import { useEffect } from 'react';
import { useRef } from 'react';

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
// ! bu değerler homedan geliyor.

  const inputRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [])

// sayfa load olunca focuslanmayı useEffect ve useRef kullanarak yapıyoruz.


  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          ref = { inputRef }
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
