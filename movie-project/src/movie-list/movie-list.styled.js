const StyledDiv = styled.div`
display: flex;
flex-direction: column;
background-image: ${
    props => props.backgroundImage
     ? `linear-gradient(rgba(245,245,245,0),rgba(245,245,245,0)), url(${props.backgroundImage})`
     : ''};
background-position: 50% 50%;
background-size: cover;
padding: 2em;
transition: 0.25s;
&:hover {
    padding-top: 10rem;
    padding-bottom: 10rem;
    > div.sub-introduct {
        display: flex;
        flex-direction: column;
    }
    > div.like-button {
        display: flex;
        justify-content: center;
    }
}
> span.title {
    font-size: 3.5rem;
    color: #61dafb;
    margin-bottom: 2rem;
    cursor: pointer;
}
> div.genre {
    display: flex;
    margin-bottom: 1rem;
    > span {
        margin-right: 1rem;
        font-size: 1rem;
        color: #f5f5f5;
    }
}
> span.sub {
    font-size: 2rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    cursor: pointer;
}
> div.sub-introduce {
    display: none;
    padding-top: 2rem;
    transition: 0.25s;
    > span {
        color: white;
        line-height: 1.5;
        font-size: 1.5rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
    }
}
> div.like-button {
    display: none;
    padding-top: 4rem;

    > span {
        width: 100px;
        height: 100px;
        cursor: pointer;
        background-image: ${props =>
        props.likeImage ? `linear-gradient(rgba(245,245,245,0),rgba(245,245,245,0)), url(${props.likeImage})` : ''};
        background-position: 50% 50%;
        background-size: cover;
    }
}
`;
