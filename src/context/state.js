import axios from "axios";
import React, { useEffect, useState } from "react";
import Context from './context'

const State = (props) => {

    const state = {
        'title': "",
        'message': ""
    }
    const [loading, setLoading] = useState(false);
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const [submit, setSubmit] = useState(false) ;
    const [audio, setAudio] = useState(null) ;
    const [error, setError] = useState(state);

    const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    useEffect(() => {

        const fetchData = async () => {
            let api = API + word;
            if (word) {
                try {
    
                    await axios.get(api).then((response) => {
                        setData(response.data);
                        const phonetics = response.data[0].phonetics ;
                        if(phonetics.length)
                        {
                            const url = phonetics[0].audio;
                            setAudio(url);
                        }
                        setError(state);
                        
                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);
    
                    })
    
                } catch (error) {
    
                    setError({
                        'title': error.response.data.title,
                        'message': error.response.data.message
                    })
    
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
    
                }
            }
        };

        //eslint-disable-next-line react-hooks/exhaustive-deps
        fetchData();
        
        
        // eslint-disable-next-line 
    }, [word]);

    return (
        <Context.Provider value={[word, setWord, loading, setLoading, submit, setSubmit, data, error, audio]}>
            {props.children}
        </Context.Provider>
    )
}

export default State;