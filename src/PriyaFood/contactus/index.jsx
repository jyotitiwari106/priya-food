import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState([]);

  const getContactFn = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.73:9098/api/store/contact-us-form/",
        {
          headers: {
            "Store-Id": 3,
          },
        }
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getContactFn();
  }, []);

  return (
    <div>
      <p className="flex text-xl font-bold  p-4 justify-center items-center">
        Contact Form
      </p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Topics</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Store</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.topics}</TableCell>
                <TableCell>{user.message}</TableCell>
                <TableCell>{user.store}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactForm;
