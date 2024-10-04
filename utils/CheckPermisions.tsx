import * as Permissions from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// Modified CheckPermissions to accept a callback prop
const CheckPermissions = ({ onPermissionChecked }: { onPermissionChecked: (status: boolean | null) => void }) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  
    const getPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      const permissionGranted = status === 'granted';
      setHasPermission(permissionGranted);
      onPermissionChecked(permissionGranted);  // Notify parent about permission status
    };
  
    useEffect(() => {
      getPermissions();
    }, []);
  
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        {hasPermission === null ? (
          <Text>Checking permissions...</Text>
        ) : hasPermission === false ? (
          <Text>Permission to access media library was denied</Text>
        ) : (
          <Text>Permission granted!</Text>
        )}
      </View>
    );
  };
  
export default CheckPermissions;
