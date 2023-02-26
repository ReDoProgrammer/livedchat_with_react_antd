import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import firebase,{auth} from '../../firebase/config'
const {Title} = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider()
export default function Login() {
    const handleFbLogin = ()=>{
        auth.signInWithPopup(fbProvider)
    }
    auth.onAuthStateChanged(user=>{
        console.log({user})
    })
    return (
        <div>
            <Row justify={'center'} style={{height:800}}>
                <Col span={8}>
                    <Title style={{textAlign:'center'}} Level={3}>Live chat</Title>
                    <Button style={{width:'100%', marginBottom:5}} >Đăng nhập bằng Google</Button>
                    <Button style={{width:'100%'}} onClick={handleFbLogin}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}
