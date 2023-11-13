import React, {useState} from 'react';
import { StyleSheet,View, TextInput, Button} from 'react-native';
import axios from 'axios';

const Api_Url = 'http://localhost:8000/students';

export default function MyBackendApp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async () => {
        if (!name || !email || !phone || !address) {
            setErrorMessage('Please fill out all fields');
            return;
          }
        const data = { name, email, phone, address };
        try {
          const response = await axios.post(Api_Url, data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <View>
            <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
       <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
       <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
       <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title='submit' onPress={handleSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        width:20,
    }
})