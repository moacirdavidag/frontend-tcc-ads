import { useState, useEffect } from 'react';
import { url } from '../utils/api';

export const useConsulta = (consulta, nomeConsulta, variaveis) => {
    const [dados, setDados] = useState([]);
    const [statusConsulta, setStatusConsulta] = useState(false);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                setCarregando(true);

                const query = await fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        query: consulta,
                        variables: {
                            filtros: {
                                filtro: {
                                    limit: 11,
                                    ...variaveis
                                }
                            }
                        }
                    }),
                });

                if (query.status === 400) {
                    setCarregando(false);
                    setStatusConsulta(false);
                    return;
                }

                const res = await query.json();
                const data = res.data[`${nomeConsulta}`];

                setDados(data || []);
                setStatusConsulta(data !== '');

                setCarregando(false);
            } catch (error) {
                setCarregando(false);
                setDados([]);
                setStatusConsulta(false);
                console.log(error.message);
            }
        };

        consultarAPI();
    }, [consulta, variaveis]);

    return { dados, statusConsulta, carregando };
};