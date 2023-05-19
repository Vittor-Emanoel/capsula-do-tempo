import { SplashScreen, Stack } from 'expo-router';
import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import blugBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';

import * as SecureStore from 'expo-secure-store';

import {
    Roboto_400Regular,
    Roboto_700Bold,
    useFonts
} from '@expo-google-fonts/roboto';

import {
    BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';
import { StatusBar } from 'expo-status-bar';



const StyledStripes = styled(Stripes)

export default function Layout() {
    const [isUserAuthenticated, SetIsUserAuthenticated] = useState<null | boolean >(null)

    const [hasloadedFonts] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold
      })

      useEffect(() => {
        SecureStore.getItemAsync('token').then(token => {
            SetIsUserAuthenticated(!!token)
        })
      }, [])


      if(!hasloadedFonts) {
        return <SplashScreen  />
      }
    

    return (       
        <ImageBackground source={blugBg} className='bg-gray-900 relative flex-1  '
        imageStyle={{position: 'absolute', left: '-100%'}}
      >
        <StyledStripes  className='absolute left-2'/>
        <StatusBar style="light" translucent/>


        <Stack screenOptions={{headerShown: false, contentStyle: {backgroundColor: 'transparent'}}}>


        <Stack.Screen name='index' redirect={isUserAuthenticated}/>
        <Stack.Screen name='new'/>
        <Stack.Screen name='memories'/>

        </Stack>

    </ImageBackground>
    )
}