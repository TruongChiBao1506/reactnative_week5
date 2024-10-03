import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const App = ({ navigation, route }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [imageSource, setImageSource] = useState(require('./Images/vs_blue.png'));
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.InfoProduct}>
                    <Image source={imageSource} style={{ width: 92, height: 112, marginLeft:10, marginTop:10 }} />
                    {/* <Text style={{ fontWeight: 400, fontSize: '15', width: 164, height: 36, marginTop: 10, marginLeft: 10 }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text> */}
                    <View style={styles.InforDetail}>
                        <Text style={{ fontWeight: 400, fontSize: '15', width: 164, height: 36, marginBottom: 5 }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                        {selectedColor && (<Text style={{ fontWeight: 400, fontSize: 15, marginVertical: 5 }}>Màu: <Text style={{ fontWeight: 700, fontSize: 15 }}>{selectedColor}</Text></Text>)}
                        {selectedColor && (<Text style={{ fontWeight: 400, fontSize: 15, marginVertical: 5 }}>Cung cấp bởi <Text style={{ fontWeight: 700, fontSize: 15 }}>Tiki Tradding</Text></Text>)}
                        {selectedColor && (<Text style={{ fontWeight: 700, fontSize: 18, marginTop: 5, marginBottom: 10 }}>1.790.000 đ</Text>)}                     
                    </View>
                </View>
                {/* <View style={{ flex: 3, backgroundColor: '#C4C4C4' }}> */}
                <View style={styles.chooseColor}>
                    <Text style={{ fontWeight: 400, fontSize: 18, marginLeft: 15, marginBottom: 10, marginTop: 5 }}>Chọn một màu bên dưới:</Text>
                    <View style={styles.Color}>
                        <TouchableOpacity onPress={() => { setSelectedColor('bạc'); setImageSource(require('./Images/vs_silver.png')) }} style={{ width: 85, height: 80, backgroundColor: '#C5F1FB', marginVertical: 5 }}></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedColor('đỏ'); setImageSource(require('./Images/vs_red.png')) }} style={{ width: 85, height: 80, backgroundColor: '#F30D0D', marginVertical: 5 }}></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedColor('đen'); setImageSource(require('./Images/vs_black.png')) }} style={{ width: 85, height: 80, backgroundColor: '#000000', marginVertical: 5 }}></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedColor('xanh'); setImageSource(require('./Images/vs_blue.png')) }} style={{ width: 85, height: 80, backgroundColor: '#234896', marginVertical: 5 }}></TouchableOpacity>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity style={styles.ButtonAccess} onPress={()=> navigation.navigate({
                            name: 'ProductDetail',
                            params: {color: imageSource },
                        })}>
                            <Text style={{ fontWeight: 700, fontSize: 20, color: '#F9F2F2' }}>XONG</Text>
                        </TouchableOpacity>
                    </View>
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
    InfoProduct: {
        flex: 1,
        flexDirection: 'row',
    },
    InforDetail: {
        marginTop: 10,
        marginLeft: 10
    },
    chooseColor: {
        flex: 3,
        // justifyContent:'flex-start',
        // alignItems:'center',
        backgroundColor: '#C4C4C4'
    },
    Color: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
    },
    ButtonAccess: {
        width: 326,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1952E294',
        borderWidth: 1,
        borderColor: '#CA1536',
        borderRadius: 10,
    }
})
export default App;