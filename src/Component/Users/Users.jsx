//import "./DashBoard.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import style from "./Users.module.css"
import {
  Card,
  Title,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  
} from "@tremor/react";

import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
} from "../../Redux/actions/actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.allUsers);

  return (
    <div className="flex flex-row">
      <AdminSideBar></AdminSideBar>
      <div className={style.users}>
        <Card className="w-11/12 ml-8 bg-gray-800">
          <Title className="text-center text-xl text-teal-400">
            Registered Users
          </Title>
          
                <Card>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Number of Reviews</TableCell>
                        <TableCell>Purchases</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>Profile Image</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users?.map((user) => (
                        <TableRow key={user.name}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.reviews}</TableCell>
                          <TableCell>{user.purchases}</TableCell>
                          <TableCell>{`${user.admin}`}</TableCell>
                          <TableCell>
                            <img
                              className="max-w-30 max-h-20"
                              src={user.image}
                            ></img>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              
        </Card>
      </div>
    </div>
  );
};
export default Users;