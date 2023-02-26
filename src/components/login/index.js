import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
const {Title} = Typography;
export default function Login() {
    return (
        <div>
            <Row justify={'center'} style={{height:800}}>
                <Col span={8}>
                    <Title style={{textAlign:'center'}} Level={3}>Live chat</Title>
                    <Button style={{width:'100%', marginBottom:5}}>Đăng nhập bằng Google</Button>
                    <Button style={{width:'100%'}}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}
