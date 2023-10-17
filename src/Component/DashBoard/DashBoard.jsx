import "./DashBoard.css";
import AdminSideBar from "../AdminSideBar/AdminSideBar"
import { Card, BarChart, BarList, TabGroup, TabList, Tab, TabPanels, TabPanel, Button, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, TextInput, ProgressCircle, Metric, Flex, Bold, DonutChart } from "@tremor/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/actions/actions";
import { useEffect, useState } from "react";

const DashBoard = () => {
 
    const dispatch = useDispatch();
    const moviesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [totalSales, setTotalSales] = useState(50000);
    const [favorites, setFavorites] = useState([
        {movie: "Movie", additionsToFavorites: 5 },
        {movie: "Movie1", additionsToFavorites: 1 },
        {movie: "Movie2", additionsToFavorites: 2 },
        {movie: "Movie3", additionsToFavorites: 7 },
        {movie: "Movie4", additionsToFavorites: 6 },
        {movie: "Movie5", additionsToFavorites: 5 },
        {movie: "Movie6", additionsToFavorites: 8 },
        {movie: "Movie7", additionsToFavorites: 3 },
    ]);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    const movies = useSelector((state) => state.Allmovies);

    const [display, setDisplay] = useState([]);
    
    useEffect(() => {
        if (searchTerm) {
            const filteredMovies = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setDisplay(filteredMovies.slice(0, currentPage * moviesPerPage));
        } else {
            setDisplay(movies.slice(0, currentPage * moviesPerPage));
        }
    }, [movies, currentPage, searchTerm]);

    
    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        if (newSearchTerm) {
            setIsSearchActive(true);
        } else {
            setIsSearchActive(false);
        }
    };

    const loadMore = () => {
        if (!isSearchActive) {
            setCurrentPage(currentPage + 1);
        }
    };

    const harcodeSalesByMovie = [
        {name: "Matrix" , value: 8},
        {name: "Gladiator" , value: 3},
        {name: "Movie 1" , value: 2},
        {name: "Movie 2" , value: 9},
        {name: "Movie3" , value: 4},
        {name: "Movie4" , value: 0},
        {name: "Movie5" , value: 15}
    ];

    const harcodeUsers = [
        {name: "Juan", email: "juan@hotmail.com", reviews: 3, purchases: 4, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "María", email: "maria@hotmail.com", reviews: 1, purchases: 8, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Marta", email: "maria@hotmail.com", reviews: 1, purchases: 1, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Mario", email: "maria@hotmail.com", reviews: 1, purchases: 1, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Marcelo", email: "maria@hotmail.com", reviews: 1, purchases: 0, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Mariana", email: "maria@hotmail.com", reviews: 1, purchases: 0, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Marina", email: "maria@hotmail.com", reviews: 1, purchases: 7, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"},
        {name: "Maradona", email: "maria@hotmail.com", reviews: 1, purchases: 3, image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Chucky_Appearance_%28TV_Series%29.jpeg/220px-Chucky_Appearance_%28TV_Series%29.jpeg"}
    ];

    const salesByDate = [
        {salesNumber: 3, createdAt: "15/10", order: 15/10},
        {salesNumber: 2, createdAt: "14/10", order: 14/10},
        {salesNumber: 1, createdAt: "13/10", order: 13/10},
        {salesNumber: 0, createdAt: "12/10", order: 12/10},
        {salesNumber: 8, createdAt: "11/10", order: 11/10},
        {salesNumber: 0, createdAt: "10/10", order: 10/10},
        {salesNumber: 0, createdAt: "9/10", order: 9/10},
    ];

    return (
        <div className="flex flex-row">
            <AdminSideBar></AdminSideBar>
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
                                <button onClick={loadMore}>cargar mas</button>
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
                            <TabPanel>
                                <div className="flex flex-row">                               
                                <Card className="max-w-xs justify-center mx-auto flex flex-col items-center justify-center" decoration="top" decorationColor="teal">
                                    <Text className="text-xl mx-auto text-center">Total Sales</Text>
                                    <Metric className="mx-auto text-center">$ {totalSales}</Metric>
                                </Card>
                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="teal">
                                    <Title>Sales by movie</Title>
                                    <DonutChart
                                    className="mt-6"
                                    data={harcodeSalesByMovie}
                                    category="value"
                                    index="name"
                                    colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                                    ></DonutChart>
                                </Card>
                                </div><br></br>
                                <Card>
                                    <Title>Sales by Movie</Title>
                                    <Flex>
                                        <Text>
                                            <Bold>Movie</Bold>
                                        </Text>
                                        <Text>
                                            <Bold>Sales</Bold>
                                        </Text>
                                    </Flex>
                                    <BarList color={["teal"]} data={harcodeSalesByMovie.sort((a, b)=> b.value - a.value)} className="mt-2" />
                                </Card><br></br>
                                <Card>
                                    <Title>Sales by date</Title>
                                    <BarChart
                                    className="mt-6"
                                    data={salesByDate.sort((a, b) => a.order - b.order)}
                                    index="createdAt"
                                    categories={["salesNumber"]}
                                    colors={["teal"]}
                                    yAxisWidth={48}></BarChart>
                                </Card><br></br>
                                <Card>
                                    <Title>Favorites by Movie</Title>
                                    <BarChart
                                    className="mt-6"
                                    data={favorites.sort((a, b) => b.additionsToFavorites - a.additionsToFavorites)}
                                    index="movie"
                                    categories={["additionsToFavorites"]}
                                    colors={["teal"]}
                                    yAxisWidth={48}></BarChart>
                                </Card><br></br>                            
                                <Card>
                                    <Title>Sales by user</Title>
                                    <BarChart
                                    className="mt-6"
                                    data={harcodeUsers.sort((a, b) => b.purchases - a.purchases)}
                                    index="name"
                                    categories={["purchases"]}
                                    colors={["teal"]}
                                    yAxisWidth={48}></BarChart>
                                </Card><br></br>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Card>
            </div>
        </div>
    )
};
export default DashBoard;