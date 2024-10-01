'use client';
import { Button, Col, Form, Input, Row } from 'antd';

const Profile = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <div
            className="form-container"
            style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '12px',
                maxWidth: '900px',
                margin: '0 auto',
            }}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">User Name</span>} name="username">
                            <Input placeholder="Asadujjaman" style={{ borderRadius: '24px', height: '48px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">Email</span>} name="email">
                            <Input
                                placeholder="Asadujjaman@gmail.com"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">Contact No</span>} name="contact">
                            <Input placeholder="+9910003030" style={{ borderRadius: '24px', height: '48px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">Where you from</span>} name="location">
                            <Input
                                placeholder="22/96A, New York, USA"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">N.ID/Passport</span>} name="nid">
                            <Input placeholder="1651612652" style={{ borderRadius: '24px', height: '48px' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label={<span className="custom-label">Occupation</span>} name="occupation">
                            <Input
                                placeholder="Doctor, CEO Gotham Hospital"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            backgroundColor: '#0A8FDC',
                            borderRadius: '24px',
                            height: '48px',
                            width: '100%',
                            maxWidth: '300px',
                            margin: '0 auto',
                            display: 'block',
                        }}
                    >
                        Save & Change
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Profile;
