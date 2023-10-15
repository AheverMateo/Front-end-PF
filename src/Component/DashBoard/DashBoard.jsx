import "./DashBoard.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar"
import { Card, TabGroup, TabList, Tab, TabPanels, TabPanel, Button, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, TextInput, ProgressCircle } from "@tremor/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";

const DashBoard = () => {
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    const movies = useSelector((state) => state.Allmovies);

    useEffect(() => {
        setDisplay(movies)
    }, [movies]);
    
    const [display, setDisplay] = useState(movies);

    const handleChange = (e) => {
        if(e.target.value !== "") setDisplay(movies.filter((movie)=> movie.title.toLowerCase().includes(`${e.target.value}`.toLowerCase())))
    };

    const harcodeUsers = [
        {name: "Juan", email: "juan@hotmail.com", reviews: 3, purchases: 4, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "María", email: "maria@hotmail.com", reviews: 1, purchases: 2, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"}
    ];

    return (
        <div className="flex flex-row">
            <AdminSideBar></AdminSideBar>
            <div className="dashboard">
                <Card className="w-11/12 ml-8 bg-gray-800">
                    <Title className="text-center text-xl text-teal-400">Admin Dashboard</Title>
                    <TabGroup>
                        {/* <TabList className="mt-8">
                            <Tab>Movies</Tab>
                            <Tab>Users</Tab>
                            <Tab>Sales</Tab>
                        </TabList> */}
                        <TabPanels>
                            <TabPanel><br></br>
                            <Link to="/PostMovie"><Button className="w-40">Create a New Movie</Button></Link><br></br><br></br>
                                <Card>
                                    <Title>List of Movies</Title><br></br>
                                    <TextInput className="w-60" onChange={handleChange} placeholder="Search a Movie..."></TextInput><br></br>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableHeaderCell>Title</TableHeaderCell>
                                                <TableHeaderCell>Duration</TableHeaderCell>
                                                <TableHeaderCell>Year</TableHeaderCell>
                                                <TableHeaderCell>Lang</TableHeaderCell>
                                                <TableHeaderCell>Actions</TableHeaderCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {display?.map((movie)=>
                                            <TableRow key={movie.id}>
                                                <TableCell><Link to={`/Detail/${movie.id}`}><p className="hover:text-teal-600">{movie.title}</p></Link></TableCell>
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
                            <TabPanel>
                                <Card>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>User Name</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Number of Reviews</TableCell>
                                                <TableCell>Purchases</TableCell>
                                                <TableCell>Profile Image</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {harcodeUsers?.map((user)=>
                                            <TableRow key={user.name}>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.reviews}</TableCell>
                                                <TableCell>{user.purchases}</TableCell>
                                                <TableCell><img className="max-w-30 max-h-20" src={user.image}></img></TableCell>
                                            </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </Card>
                            </TabPanel>
                            <TabPanel>Acá iría lo relativo a compras
                                <Card>
                                    <ProgressCircle></ProgressCircle>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Card>
            </div>
        </div>
    )
};
export default DashBoard;