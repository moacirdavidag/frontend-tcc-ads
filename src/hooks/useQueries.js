import React, { useEffect, useState } from "react";

import { url } from "../services/api";
import axios from "axios";

export const useQueries = async (consulta, ...filtros) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
        query {
          ${consulta} {
            ${filtros}
          }
        }
      `
      //AWS Amplify

                }),
            })
                .then((res) => res.json())
                .then((result) => console.log(result));

        }

        fetchData()
        console.log(consulta, filtros.toString())
        console.log(data)

    }, [])

    return data;

}