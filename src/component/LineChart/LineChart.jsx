import React, { PureComponent } from "react";
import "./style.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LabelList, // Import ReferenceLine
} from "recharts";

const data = [
  {
    name: "",
    uv: 0,
    LG: 0,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'10",
    uv: 66,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'13",
    uv: 50,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'14",
    uv: 50,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'16",
    uv: 30,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'17",
    uv: 40,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'19",
    uv: 55,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'20",
    uv: 20,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
  {
    name: "'22",
    uv: 10,
    LG: 40,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png",
  },
];
// Lấy dữ liệu hiển thị

const CustomLabel = ({ x, y, index, value }) => {
  return (
    <image
      href={value}
      x={x - 12} // Căn chỉnh ngang
      y={y - 40} // Căn chỉnh dọc để đặt flag phía trên
      height={24} // Chiều cao flag
      width={24} // Chiều rộng flag
    />
  );
};

export const LineChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{ fontSize: "14px", fontWeight: "bold", color: "#393E40" }}
          >{`Transfer fee: ${label}`}</p>
          <hr style={{ padding: "10px" }}></hr>
          <p style={{ color: "#1b3fe4" }}>{payload[0].value}M $</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer
      className={
        "rounded-xl border border-[#09379447] p-2 bg-[linear-gradient(45deg,_#09379447_28%,_#09379447_28%,_#09379447_28%)]"
      }
      width="100%"
      height="100%"
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* Chỉ hiển thị các đường kẻ ngang */}
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#272A31"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={{ stroke: "#61B8FF33", strokeWidth: 1 }}
          stroke="#FFFFFF"
        />
        <YAxis
          orientation="right"
          tickLine={false}
          axisLine={{ stroke: "" }}
          stroke="#FFFFFF" // Màu trục Y
          tickFormatter={(value) => (value !== 0 ? `${value} M` : "")}
        />
        <Tooltip content={<CustomTooltip />} />
        {/* Đường ngang nét đứt màu vàng tại giá trị uv = 22 */}
        <ReferenceLine
          y={25} // Giá trị của uv
          stroke="#F6B500" // Màu đường
          strokeDasharray="5 5" // Đường nét đứt
        />

        {/* Định nghĩa gradient */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#61B8FF33" stopOpacity={1} />
            <stop offset="100%" stopColor="#61B8FF00" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#2187E5"
          fill="url(#gradient1)"
          dot={{ stroke: "white", strokeWidth: 2, fill: "white" }}
        >
          {/* Hiển thị flag */}
          <LabelList
            dataKey="flag" // Trường dữ liệu chứa URL hình ảnh
            content={<CustomLabel />}
          />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};
