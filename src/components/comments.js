import React, { useState } from 'react'
import { useParams } from 'react-router';
import useComments from '../hooks/useComments';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    padding: 2rem;
    border: 2px solid black;
    border-radius: 10px;
`

const CommentItem = styled.div`
    background-color: white;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    font-style: italic;
    margin-top: 10px;

`

const Header = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
`

const AddComment = styled.button`
    background-color: #F4E869;
    margin-top: 10px;
    border: none;
    padding: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`

const CommentInput = styled.div`
    margin-top: 4rem;
`

function Comments() {
    const { movieid } = useParams();
    const [comment, setComment] = useState('')
    const { comments, addComment } = useComments()

    const handleSubmitComment = (event) => {
        event.preventDefault()
        addComment({ movieid, comment, date: new Date() })
        setComment('')
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value)
    }

    const filerComments = comments.filter(val => val.movieid === movieid)

    return (
        <Wrapper>
            <Header>Comments</Header>
            {filerComments.map(val => (
                <CommentItem>
                    {val.comment}
                </CommentItem>
            ))}
            <CommentInput>
                <form onSubmit={handleSubmitComment}>
                    <input value={comment} onChange={handleChangeComment} />
                    <AddComment onClick={handleSubmitComment}>Add Comment</AddComment>
                </form>
            </CommentInput>
        </Wrapper>
    )
}

export default Comments