import { CaretRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Collapse, theme } from "antd";
import MemberCards from "../../../activeMembers/Section2/Section2"


const Profile_details = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const getItems = (panelStyle, activeKeys) => [
    {
      key: "1",
      label: "About John Cooper",
      children: <p>{text}</p>,
      style: {
        ...panelStyle,
        color: activeKeys.includes("1") ? "pink" : "black",
      },
    },
    {
      key: "2",
      label: "Basic Information",
      children: <p>{text}</p>,
      style: {
        ...panelStyle,
        color: activeKeys.includes("2") ? "pink" : "black",
      },
    },
    {
      key: "3",
      label: "Present Address",
      children: <p>{text}</p>,
      style: {
        ...panelStyle,
        color: activeKeys.includes("3") ? "pink" : "black",
      },
    },
  ];

  const { token } = theme.useToken();
  const [activeKeys, setActiveKeys] = useState(["1"]);

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const handleChange = (keys) => {
    setActiveKeys(keys);
  };

  return (
    <>
      <div className="w-[80%] mx-auto my-[50px]">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          onChange={handleChange}
          activeKey={activeKeys}
          items={getItems(panelStyle, activeKeys)}
        />
      </div>
      <div>
        <h2 className="text-center text-black text-[40px] font-normal font-['BR Omega']">
          Similar Profiles
        </h2>
        <MemberCards />
      </div>
    </>
  );
};

export default Profile_details;
