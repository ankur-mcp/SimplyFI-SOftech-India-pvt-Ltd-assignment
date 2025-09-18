
import React, { useState } from "react";
import { Card, Modal, Form, Input } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function UserCard({ user, onDelete, onEdit }) {
  const [liked, setLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Open modal and load current user data
  const showModal = () => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
    setIsModalVisible(true);
  };

  // Save edited values
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onEdit(user.id, { ...user, ...values });
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            alt={user.name}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          liked ? (
            <HeartFilled
              key="like"
              style={{ color: "red" }}
              onClick={() => setLiked(false)}
            />
          ) : (
            <HeartOutlined key="like" onClick={() => setLiked(true)} />
          ),
          <EditOutlined key="edit" onClick={showModal} />,
          <DeleteOutlined key="delete" onClick={() => onDelete(user.id)} />,
        ]}
      >
        <Meta
          title={user.name}
          description={
            <div>
              <p>
                <MailOutlined /> {user.email}
              </p>
              <p>
                <PhoneOutlined /> {user.phone}
              </p>
              <p>
                <GlobalOutlined /> {user.website}
              </p>
            </div>
          }
        />
      </Card>

      {/* Modal for Editing */}
      <Modal
        title="Edit User Profile"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        okText="Save"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Enter valid email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter phone" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please enter website" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UserCard;
