import { Col, Form, Row, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Contactus = () => {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="max-w-[1240px] mx-auto h-full">
      <h2 className="text-white font-bold text-5xl py-5">Get In Touch</h2>
      <div className="flex flex-col gap-5 justify-between items-center  md:flex-col md:gap-y-3  lg:flex lg:items-center lg:gap-8 p-4">
        <div className="w-full text-center md:max-w-full md:text-center  bg-[#0f1624] p-5 rounded-md skillshadow h-[24rem]">
          <div className=" lg:text-3xl block font-semibold text-gray-400 ">
            Binod khatri
          </div>
          <p className="font-thin text-xl text-gray-400">
            Front-end Developer---Reactjs
          </p>
          <div className="font-thin mt-5 text-xl text-gray-400">
            I am available for work. Contact Me through Email.
          </div>
          <span className="flex  justify-center md:justify-center items-center gap-2 mt-4">
            <AiOutlineMail size={20} color="white" />
            <address>
              <strong className="text-gray-400 text-xl">
                devsbinod@gmail.com
              </strong>
            </address>
          </span>
          <div className="flex flex-col justify-center items-center md:justify-center md:items-center  mt-5 space-y-5">
            <div>
              <text className="font-semibold text-gray-400 text-xl ">
                FIND WITH ME
              </text>
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-600 p-3 rounded-md ">
                <a href="">
                  <AiFillFacebook color="white" size={28} />
                </a>
              </div>
              <div className="bg-gray-600 p-3 rounded-md">
                <a href="">
                  <AiFillLinkedin color="white" size={28} />
                </a>
              </div>
              <div className="bg-gray-600 p-3 rounded-md">
                <a href="">
                  <AiFillGithub color="white" size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1624] px-14 w-full py-10 ">
          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ remember: true }}
            requiredMark="false"
          >
            <Row className="p-2" gutter={5}>
              <Col xs={24} xsm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name!",
                    },
                  ]}
                >
                  <Input placeholder="name" className="h-10" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="">
                <Form.Item
                  name="number"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your number!",
                    },
                  ]}
                >
                  <Input placeholder="number" className="h-10" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="email"
              label="EMAIL"
              className=""
              rules={[
                {
                  required: true,
                  message: "please provide email",
                },
              ]}
            >
              <Input placeholder="Basic usage" className="h-10" />
            </Form.Item>

            <Form.Item
              name="subject"
              label="SUBJECT"
              className=""
              rules={[
                {
                  required: true,
                  message: "please provide subject",
                },
              ]}
            >
              <Input placeholder="Basic usage" className="h-10" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                  message: "please provide Message",
                },
              ]}
            >
              <Input.TextArea rows={6} />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-slate-800 text-white text-semibold w-full h-[4rem]"
              >
                SEND
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
