import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/post.css'

const Post = () => {
    // O gancho useHistory fornece acesso à instância do histórico que você pode usar para navegar.
    let history = useHistory();

    // useParams retorna um objeto de pares chave/valor de parâmetros de URL.
    const { id } = useParams();
    
    const[post, setPost] = useState({});

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
        .catch(() => {
            history.push('/404')
        })
    }, [id])

    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="carta__texto">{post.body}</p>
            </article>
        </main>
    );
}

export default Post