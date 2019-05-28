import { createAppContainer, createStackNavigator, } from 'react-navigation';
import GameSheet from '../Codes/Games/GameSheet';
import GameDetails from '../Codes/Games/GameDetails'

const HomeStack = createStackNavigator({
  Home: GameSheet,
  Details: GameDetails,
});

export default createAppContainer(HomeStack);