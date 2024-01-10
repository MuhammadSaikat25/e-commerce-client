import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import ProductsSellDetails from "../components/saler/ProductsSellDetails";
import { useState } from "react";
import SellerIncome from "../components/saler/SellerIncome";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const OverView = () => {
  const [pc, setPc] = useState(0);
  const [phone, setPhone] = useState(0);
  const [accessory, setAccessory] = useState(0);

  const data = [
    {
      name: "PC",
      uv: pc,
      pv: pc,
      amt: pc,
    },

    {
      name: "Phone",
      uv: phone,
      pv: phone,
      amt: phone,
    },
    {
      name: "accessory",
      uv: accessory,
      pv: accessory,
      amt: accessory,
    },
  ];

  return (
    <div className="flex lg:items-center flex-col-reverse ">
      <div className="flex">
        <div className="hidden lg:block">
          <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="lg:hidden">
          <BarChart
            width={360}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <ProductsSellDetails
          setPc={setPc}
          setPhone={setPhone}
          setAccessory={setAccessory}
        ></ProductsSellDetails>
        <SellerIncome></SellerIncome>
      </div>
    </div>
  );
};

export default OverView;
