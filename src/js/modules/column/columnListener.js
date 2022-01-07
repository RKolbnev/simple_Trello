import addColumn from './addColumn';
import removeColumn from './removeColumn';
import addCard from './addCard';

const columnListener = () => {
  addColumn();
  removeColumn();
  addCard();
};

export default columnListener;