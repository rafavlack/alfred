import React, { useEffect, useState} from "react";
import './FormAllCustomer.css'
import {Badge, Button, Empty, Spin, Table, Tag} from "antd";
import {Container} from "react-bootstrap";
import {getAllConstumers} from "../../client";
import {errorNotification} from "../Notification";
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, customer) =>
            <TheAvatar name={customer.name}/>
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <p style={{color:"blue"}}>{text}</p>,
    },
    {
        title: 'Registration Number',
        dataIndex: 'registrationNumber',
        key: 'registrationNumber'
    }
    ,
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    }
    ,
    {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber'
    }
    ,
    {
        title: 'User name',
        dataIndex: 'username',
        key: 'username'
    },
    {
        title: 'street Name',
        dataIndex: ["address", "streetName"],
        key: ["address", "streetName"]
    },
    {
        title: 'Floor Details',
        dataIndex: ["address", "floorDetails"],
        key: ["address", "floorDetails"]
    }
    ,
    {
        title: 'City',
        dataIndex: ["address", "city"],
        key: ["address", "city"]
    }
    ,
    {
        title: 'Zip Code',
        dataIndex: ["address", "zipCode"],
        key: ["address", "zipCode"]
    }
];

const TheAvatar = ({name}) => {
    let trim = name.trim();
    if (trim.length === 0) {
        return <Avatar icon={<UserOutlined/>}/>
    }
    const split = trim.split(" ");
    if (split.length === 1) {
        return <Avatar>{name.charAt(0)}</Avatar>
    }
    return <Avatar>
        {`${name.charAt(0)}${name.charAt(name.length - 1)}`}
    </Avatar>
}


function FormAllCustomer(){
    const [customer, setCustomer] = useState([]);
    const [fetching, setFetching] = useState(true);

    const fetchCustomers = () =>
        getAllConstumers()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCustomer(data);
            }).catch(err => {
            console.log(err.response)
            err.response.json().then(res => {
                console.log(res);
                errorNotification(
                    "There was an issue",
                    `${res.message} [${res.status}] [${res.error}]`
                )
            });
        }).finally(() => setFetching(false))

    useEffect(() => {
        console.log("component is mounted");
        fetchCustomers();
    }, []);

    const renderCustomer = () => {
        if (customer.length <= 0) {
            return <>
                <Empty/>
            </>
        }
        return <>
            <h2>Customers</h2>
            <Table
                dataSource={customer}
                columns={columns}
                bordered

                title={() =>
                    <>
                        <Tag>Number of customer</Tag>
                        <Badge count={customer.length} className="site-badge-count-4"/>
                    </>
                }

                pagination={{pageSize: 50}}
                scroll={{y: 500}}
                rowKey={(customer) => customer.id}
            />
        </>
    }

    return(
        <div className="FormAllCustomer">
            <Container>
                {renderCustomer()}
            </Container>
        </div>
    );
}

export default FormAllCustomer;