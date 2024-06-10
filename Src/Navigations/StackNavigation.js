// Libiary
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert } from 'react-native';

// Constants
import VectorIcon from '../Constants/VectorIcon';
import ScreensName from '../Constants/ScreensName';
import { hp, wp } from '../Constants/Responsive';
import Colors from '../Constants/Colors';

// Screens
import ManageService from '../Screens/ManageService/ManageService';

const iconSize = hp(3.5);
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreensName.MANAGESERVICE}>
        <Stack.Screen
          name={ScreensName.MANAGESERVICE}
          component={ManageService}
          options={() => ({
            headerLeft: () => (
              <VectorIcon
                type="AntDesign"
                name={'arrowleft'}
                size={iconSize}
                color={Colors.Gray}
                onPress={() => {
                  Alert.alert('goBack Alert');
                }}
                style={{ marginRight: wp(2.5) }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
