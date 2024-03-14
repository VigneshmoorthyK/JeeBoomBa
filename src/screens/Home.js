import { Component, PureComponent } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [{id:1,name:"Guru",photo:"https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"},
            {id:2,name:"Guru",photo:"https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"},
            {id:3,name:"Guru",photo:"https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"},
            {id:4,name:"Guru",photo:"https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"},
            {id:5,name:"Guru",photo:"https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"},
            {id:6,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:7,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:8,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:9,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:10,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:11,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:12,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:13,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},
            {id:14,name:"Guru",photo:"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"},]
        }
    }

    renderItem = ({item}) => {
        console.log(" ii =>",item)
        return(
                <View style={{padding:30,backgroundColor:"pink",margin:10,flexDirection:"row",alignItems:"center"}}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Image source={{uri:item.photo}} style={{width : 70,height :70}}/>
                </View>
        )
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <Button title="update" onPress={()=>{
                    let d = [...this.state.data];
                    const filterData = d.map(item=>{
                        if(item.id ==1 ){
                            console.log("come")
                            return {...item,name:`${item.name}${item.id}`}
                        }else {

                            return item
                        }
                    })
                    this.setState({data : [...filterData]})
                }}/>
                <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={(item)=><RenderItem {...item}/>}
                />
            </View>
        )
    }
}

class RenderItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{padding:30,backgroundColor:"#FFFFFF",margin:10,flexDirection:"row",alignItems:"center",}}>
            <Text>{this.props.item.id}</Text>
            <Text>{this.props.item.name}</Text>
            <Image source={{uri:this.props.item.photo}} style={{width : 70,height :70}}/>
            </View>
        )
    }
}