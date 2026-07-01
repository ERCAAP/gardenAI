import { Ionicons } from '@expo/vector-icons';
import { Slot, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../src/constants/Colors';

const NAV_ITEMS = [
  { key: 'index', label: 'Home', icon: 'home', route: '/(tabs)' },
  { key: 'explore', label: 'Explore', icon: 'compass', route: '/(tabs)/explore' },
  { key: 'history', label: 'History', icon: 'time', route: '/(tabs)/history' },
];

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  // Aktif tabı route'a göre belirle
  const activeTab = React.useMemo(() => {
    if (pathname === '/' || pathname === '/(tabs)' || pathname === '/(tabs)/index') return 'index';
    if (pathname.startsWith('/(tabs)/explore') || pathname.startsWith('/explore')) return 'explore';
    if (pathname.startsWith('/(tabs)/history') || pathname.startsWith('/history')) return 'history';
    return 'index';
  }, [pathname]);

  const handleTabPress = (key: string, route: string) => {
    if (activeTab !== key) {
      router.push(route as any);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Slot />
      
      {/* Bottom Navigation Bar - Görseldeki gibi tasarım */}
      <View style={styles.bottomBarContainer}>
        <View style={styles.navBar}>
          {NAV_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.navItem,
                activeTab === item.key && styles.activeNavItem
              ]}
              onPress={() => handleTabPress(item.key, item.route)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.iconContainer,
                activeTab === item.key && styles.activeIconContainer
              ]}>
                <Ionicons
                  name={
                    activeTab === item.key
                      ? (item.icon as any)
                      : (`${item.icon}-outline` as any)
                  }
                  size={22}
                  color={activeTab === item.key ? Colors.surface : Colors.textSecondary}
                />
              </View>
              <Text
                style={[
                  styles.navLabel,
                  activeTab === item.key && styles.activeNavLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 34, // Safe area için
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeNavItem: {
    // Aktif item için ekstra stil
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  activeIconContainer: {
    backgroundColor: Colors.primary,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  activeNavLabel: {
    color: Colors.primary,
    fontWeight: '600',
  },
}); 