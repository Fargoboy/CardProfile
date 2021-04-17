
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View,Image } from 'react-native';


const App = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.medium);

      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <View style={styles.Cardbox}>
     
        <img src={profileImage}/>
        <Text style={styles.Textformat}>{profileName}</Text>
        <Text style={styles.Textformat}>{profileEmail}</Text>
        <Text style={styles.Textformat}>{profileCell}</Text>
        <View style={styles.buttons}>
        <button  onClick={() => profileData()}>Click On ME!</button>
        </View>
 
      
      </View>
  );
};

export default App;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Cardbox:{
      flex: 1,
    justifyContent: 'center',
 backgroundColor:'#0793C7',
    borderRadius: 20,
    width: 500,
    height: 400,
    color: '#fff',
    textAlign: 'center',
    borderColor: '#000d',
    borderWidth: 20,
    
    },
    Textformat:{
      color:'#fff',
      fontSize: 18
      },
      buttons:{
          width: '100%',
          height: 100,
          textAlign: 'center',
          justifyContent:' center',
          backgroundColor: 'red',
          color:'#fff',
          borderRadius: '10%',
          
       
      },
  
  });