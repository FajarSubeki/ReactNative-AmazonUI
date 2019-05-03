//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';

import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import ReccomendedCardItem from '../components/ReccomendedCardItem'
// create a component
class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={[{ backgroundColor: '#3a455c', height: 80, borderBottomColor: '#757575'
                     }, styles.androidHeader]}>
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon onPress={()=>this.props.navigation.navigate('DrawerOpen')} name="md-menu" style={{ color:'white', marginRight: 15 }} />
                        <FAIcon name="amazon" style={{ fontSize:32, color:'white' }} />
                    </Left>
                    <Right>
                        <Icon name="md-cart" style={{ color:'white'}} />
                    </Right>
                </Header>
                <View style={{ position:'absolute', left:0, right:0, top:80.4, height:70,
                        backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center',
                        paddingHorizontal: 5 }}>  
                    <TouchableOpacity>
                        <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50,
                            borderRadius: 4, padding: 10}}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text> 
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>    
                        </View>
                    </TouchableOpacity>

                    <View style={{ flex:1, height:"100%", marginLeft: 5, justifyContent:'center' }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }}></Icon>
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>

                <Content style={{ backgroundColor: '#f0f3fe', marginTop: 70 }}>
                    <View style={{ height: 50, backgroundColor:'white', flexDirection:'row'
                        , paddingHorizontal: 15, alignItems: 'center', justifyContent: "space-between" }}>
                        <Text>Hello, Fajar Subeki</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 5 }}>Your Account</Text>  
                            <Icon name="arrow-forward" style={{ fontSize:18 }} ></Icon>
                        </View>  
                    </View>
                    <Swiper
                        autoplay={true}
                        style={{height:100}}
                    >
                    <View style={{ flex:1, height:null, width:null, resizeMode: 'contain' }}>
                        <Image source={require('../assets/swiper_a.jpg')} ></Image>
                    </View>
                    <View style={{ flex:1, height:null, width:null, resizeMode: 'cover' }}>
                        <Image source={require('../assets/swiper_b.png')} ></Image>
                    </View>
                    <View style={{ flex:1, height:null, width:null, resizeMode: 'cover' }}>
                        <Image source={require('../assets/swiper_d.jpg')} ></Image>
                    </View>
                    <View style={{ flex:1, height:null, width:null, resizeMode: 'cover' }}>
                        <Image source={require('../assets/swiper_c.jpg')} ></Image>
                    </View>
                    </Swiper>
                    <Card style={{ marginTop: 15, marginLeft:5, marginRight: 5 }}>
                        <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                            <Text>Your Reccomendations</Text>
                        </CardItem>
                        <ReccomendedCardItem
                            itemName="Laskar Pelangi"
                            itemCreator="Andrea Hirata"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={require('../assets/laskar.jpg')}
                            rating={4}
                        />
                        <ReccomendedCardItem
                            itemName="Kugapai Dia Dengan Doa"
                            itemCreator="Saba Azam"
                            itemPrice="$12"
                            savings="2.7"
                            imageUri={require('../assets/doa.jpg')}
                            rating={5}
                        />
                        <ReccomendedCardItem
                            itemName="Dilan 1919"
                            itemCreator="Didi Wahyudi"
                            itemPrice="$15"
                            savings="2.5"
                            imageUri={require('../assets/dilan.jpg')}
                            rating={4}
                        />
                    </Card>
                </Content>

            </Container>
        );
    }
}

//make this component available to the app
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
  });