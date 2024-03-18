import { Link } from "react-router-dom"

export const Tags = ({tags}) => {
    let temp = []

    tags.forEach((tag) => {
        if (tag == tags[0]) {
            temp.push(<Link key={tag} to={`/category/${tag}`}>{tag}</Link>)
        } else {
            temp.push(<Link key={tag} to={`/category/${tag}`}>, {tag}</Link>)
        }
    });

    return (
        temp
    )
}