import { withUser } from './withUser';

export const UserInfoForm = withUser(({ person, onChangePerson }) => {
    const { name, age, hairColor } = person || {};
    return person ? (
        <>
            <br />
            <form onSubmit={() => console.log("cc")}>
                <div className="form-group">
                    <label>
                        Name: <input
                            value={name}
                            className="form-control"
                            onChange={e => onChangePerson({ name: e.target.value })}
                            data-cy="input-user-name"
                        />
                    </label>
                </div>
                <div>
                <label>
                    Age: <input value={age} className="form-control" onChange={e => onChangePerson({ age: e.target.value })} />
                </label>
                </div>
                <div>
                <label>
                    Hair Color: <input value={hairColor} className="form-control" onChange={e => onChangePerson({ hairColor: e.target.value })} />
                </label>
                </div>
                <br />
                <button className="btn btn-danger container" type="submit">Save Changes</button>
            </form>
            <p>{name} {age} ans, cheveux {hairColor}</p>
        </>
    ) : <p>Loading...</p>
}, "person");
