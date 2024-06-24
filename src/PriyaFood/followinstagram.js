import { Instagram } from "@mui/icons-material";
import React from "react";

const Followinstagram = () => {
  const images = [
    "https://scontent.cdninstagram.com/v/t39.30808-6/447612969_775490824695047_7370510324456886569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=RN_xWlDrabIQ7kNvgGTXvDz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBinGFPXSnYwjUzV-08AwxdoB23nzMfljWaUgQArHtOlg&oe=666C58A2",
    "https://scontent.cdninstagram.com/v/t39.30808-6/447667239_777204321190364_1939630413142036724_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Cyfdf3ZQv6EQ7kNvgG-q4PB&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYACU89NyP0A0ZhRRCEYnbJNRRMQQO9ZWmY3yPNbI_adsA&oe=666C6D30",
    "https://scontent.cdninstagram.com/v/t39.30808-6/447503196_775515124692617_1423634395797329875_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=z_oS-4lqcSsQ7kNvgFtVAed&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDml68yyLNekgpM5QQtGt7nhmurL-aqGlSA418crFSFQQ&oe=666C77F1",
    "https://scontent.cdninstagram.com/v/t39.30808-6/441923342_775020301408766_1807136229317696726_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=8NTpLTR8VFMQ7kNvgGti9E_&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCGYU1MH5-KMwTu1IQIEymyn8e1koE05Vq7XD-FrdFiyw&oe=666C6E59",
    "https://scontent.cdninstagram.com/v/t39.30808-6/445512800_773736991537097_351339819001771846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=lil9iJtuS_4Q7kNvgEZgpNx&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCd5BqF3FlN1rRXYwmZLG5G5AajADDOZKmdJsAHEJO4Xw&oe=666C5521",
    "https://scontent.cdninstagram.com/v/t39.30808-6/444488345_772147635029366_1048895342455537360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=vmDWKa3PM9MQ7kNvgHFJ-UV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDapwe5m-oEcrxis71h0LPFT9s7TVYsJMlN3-8iKbAq8Q&oe=666C4855",
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-yellow-800 font-bold text-xl font-serif mb-4">
        Follow us on Instagram
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group w-56 h-56 overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div
              className="absolute inset-0 flex justify-center items-center opacity-0.5 
            group-hover:opacity-80 transition-opacity duration-300"
            >
              <Instagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followinstagram;
