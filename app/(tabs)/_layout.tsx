import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index Table',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />  
      <Tabs.Screen
        name="connection"
        options={{
          title: 'Connection',
          tabBarIcon: ({ color }) => <TabBarIcon name="bluetooth" color={color} />,
        }}
      />  
      <Tabs.Screen
        name="protect"
        options={{
          title: 'Protective Actions',
          tabBarIcon: ({ color }) => <TabBarIcon name="shield" color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Information',
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
    </Tabs>
  );
}
