import "./DashBoard.css";
import SideBar from "../SideBar/SideBar"
import { Card, TabGroup, TabList, Tab, TabPanels, TabPanel, Button, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text } from "@tremor/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/actions";
import { useEffect } from "react";

const DashBoard = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, []);

    const movies = useSelector((state) => state.Allmovies);

    return (
        <div className="flex flex-row">
            <SideBar></SideBar>
            <div className="dashboard">
                <Card className="w-11/12 ml-8 bg-gray-800">
                    <Title className="text-center text-xl text-teal-400">Admin Dashboard</Title>
                    <TabGroup>
                        <TabList className="mt-8">
                            <Tab>Movies</Tab>
                            <Tab>Users</Tab>
                            <Tab>Sales</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel><br></br>
                            <Link to="/PostMovie"><Button className="w-40">Post a New Movie</Button></Link><br></br><br></br>
                                <Card>
                                    <Title>List of Movies</Title>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableHeaderCell>Title</TableHeaderCell>
                                                <TableHeaderCell>Duration</TableHeaderCell>
                                                <TableHeaderCell>Year</TableHeaderCell>
                                                <TableHeaderCell>Lang</TableHeaderCell>
                                                <TableHeaderCell>Modify</TableHeaderCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {movies?.map((movie)=>
                                            <TableRow>
                                                <TableCell>{movie.title}</TableCell>
                                                <TableCell>{movie.duration}min</TableCell>
                                                <TableCell>{movie.year}</TableCell>
                                                <TableCell>{movie.language}</TableCell>
                                                <TableCell><Link><Button size="xs">Edit</Button></Link> <Link><Button size="xs">Delete</Button></Link></TableCell>
                                            </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </Card>
                                <br></br>
                                
                            </TabPanel>
                            <TabPanel>Acá iría todo lo de Users</TabPanel>
                            <TabPanel>Acá iría lo relativo a compras</TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Card>
            </div>
        </div>
    )
};
export default DashBoard;