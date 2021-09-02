import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, FormControl, Pagination, Button } from 'react-bootstrap';
import Character from './Character';


export default function Characters(props) {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('rick');
    const [status, setStatus] = useState('alive');


    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`);
                const charactersRM = response.data.results;
                setCharacters(charactersRM);
                console.log("🚀 ~ file: Characters.jsx ~ line 15 ~ request ~ haractersRM", charactersRM)
            } catch (error) {
                console.error(error);
                alert('Hubo un error en la conexion al servidor de Rick & & Morty API')
            }
        }
        request();

    }, [page, name, status])

    const mapCharacters = characters.map((char) => (
        <Character key={char.id} character={char} />
    ));

    const prevPage = () => { setPage(page - 1) };
    const nextPage = () => { setPage(page + 1) };
    const firstPage = () => { setPage(page === 0) };
    const lastPage = () => setPage(page === 34);
    return (
        <>
            <h2>Personajes de Rick and Morty</h2>
            <div className="d-flex ">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                {mapCharacters}
            </div>
            <div className="d-flex justify-content-center my-4">
                <Pagination size="lg">
                    <Pagination.Prev onClick={prevPage} disabled={page === 1} />
                    <Pagination.Item onClick={firstPage} disabled={page === 1} >{1}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item active>{page}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={lastPage} disabled={page === 34} >{34}</Pagination.Item>
                    <Pagination.Next onClick={nextPage} disabled={page === 34} />
                </Pagination>
            </div>
        </>
    );
};

