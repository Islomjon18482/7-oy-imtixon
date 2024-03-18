const initialState = {
    cards: []
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CARD':
        const existingCard = state.cards.find((el) => el.id === action.payload.id);
  
        if (existingCard) {
          const updatedCards = state.cards.map((el) => {
            if (el.id === existingCard.id) {
              return {
                ...el,
                num: el.num + action.payload.num // Agar num qiymati ham payloadda kelgan bo'lsa
              };
            }
            return el;
          });
  
          return {
            ...state,
            cards: updatedCards
          };
        } else {
          return {
            ...state,
            cards: [...state.cards, action.payload]
          };
        }
  
      case 'REMOVE_CARDS':
        return {
          ...state,
          cards: []
        };
        
      default:
        return state;
    }
  };
  
  export default cardReducer;
  