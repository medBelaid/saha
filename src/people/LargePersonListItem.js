import { useResource } from "../useResource";
import people from '../people.json';

export const LargePersonListItem = ({ title, index }) => {
    const person = useResource(() => people[index]);
    const { name, age, hairColor } = person || {};
    return person ? (
        <>
            {title && <h2>{title}</h2>}
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
        </>
    ) : <p>Loading...</p>
}
