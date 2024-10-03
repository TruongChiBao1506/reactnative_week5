import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = ({ navigation, route }) => {
    const [imageSource, setImageSource] = useState(require('./Images/vs_blue.png'));

    React.useEffect(() => {
        if (route.params?.color) {
            setImageSource(route.params.color);
        }
      }, [route.params?.color]);
    
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.Image}>
                    <Image source={imageSource} style={{ width: 271, height: 331 }} />
                </View>
                <View style={styles.InfoProduct}>
                    <Text style={styles.NameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <View style={styles.viewer}>
                        <View style={styles.star}>
                            <Image source={require('./Images/star.png')} />
                            <Image source={require('./Images/star.png')} />
                            <Image source={require('./Images/star.png')} />
                            <Image source={require('./Images/star.png')} />
                            <Image source={require('./Images/star.png')} />
                        </View>
                        <Text style={[styles.NameProduct, { left: -20 }]}>(Xem 828 đánh giá)</Text>
                    </View>
                    <View>
                        <View style = {{flexDirection:'row', justifyContent:'space-around', left:-20, marginTop:10}}>
                            <Text style = {{fontWeight:700, fontFamily:'', fontSize:18, left:-15}}>1.790.000 đ</Text>
                            <Text style = {{
                                fontWeight:700, fontFamily:'', fontSize:15, color:'#00000094', textDecorationLine:'line-through',
                                left:-25
                                }}>1.790.000 đ</Text>
                        </View>
                        <View style = {{flexDirection:'row', alignItems:'center', marginTop:10}}>
                            <Text style = {{fontWeight:700, fontSize:12, fontFamily:'', color:'#FA0000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                            <Image source={require('./Images/Group 1.png')} style = {{width:20, height:20, marginLeft:10}}/>
                        </View>

                    </View>
                </View>
                {/* Navigation.navigate('ProductColorList') */}
                <View style = {styles.chooseColor}>
                    <TouchableOpacity style = {styles.buttonColor} onPress={()=> navigation.navigate('ProductColorList')}>
                        <Text style = {{fontWeight:400, fontSize:15, fontFamily:''}}>4 MÀU-CHỌN MÀU</Text>
                        <Image source={require('./Images/Vector.png')} style = {{width:11.5, height:14, position:'absolute', right:20, top:10}}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.Buy}>
                    <TouchableOpacity style = {styles.buttonBuy}>
                        <Text style = {{fontFamily:'', fontWeight:700, fontStyle:20, color:'#F9F2F2'}}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InfoProduct: {
        flex: 1,
    },
    NameProduct: {
        fontWeight: 400,
        fontSize: 15,
        fontFamily: ''
    },
    star: {
        flexDirection: 'row',
        left: -20
    },
    viewer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:10
    },
    chooseColor:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonColor:{
        width:332,
        height:34,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C4C4C400',
        position:'relative',
        borderWidth:1,
        borderColor:'#00000075',
        borderRadius:10,
        marginBottom:15
    },
    Buy:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonBuy:{
        width:326,
        height:44,
        backgroundColor:'#EE0A0A',
        borderWidth:1,
        borderColor:'#CA1536',
        borderRadius:10,
        justifyContent:'center',
         alignItems:'center',
        marginBottom:10
    }

})
export default App;