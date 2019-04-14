import React,{Component} from 'react'
import {storage} from '../firebase'
import firebase from  '../firebase'

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state={
            image:null,
            url:''
        }
        this.handlechange = this.handlechange.bind(this);
        this.handleUpload = this.handleUpload.bind(this)
    }

    handlechange = e =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(()=>
              ({image})
            )
        }
    }

    handleUpload = () =>{
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot)=>{

        },
        (error) =>{
            console.log(error);
        },
        ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url);
            })
        });
    }

    render(){
        const style = {
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            alignItem:'center',
            justifyContent:'center'
        };
        return(
            <div style={style}>
                <input type="file"  onChange={this.handlechange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br></br>
                <img src={this.state.url || 'http://via.placeholder.com/200x300'} alt="uploaded image"/>
             </div>

        )
    }
}

export default ImageUpload

