const RepoInfo = ({ repo, key }) => {
    return (
        <li className="list-group-item" key={key}>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                    <a className="text-decoration-none" href={repo.url}>
                        {repo.name}
                    </a>
                    <p className="small">{repo.description}</p>
                </div>
            </div>

        </li>
    )
}
export default RepoInfo