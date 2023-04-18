import Link from "next/link";

const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/saikrishna488/repos");
  const data = await res.json();
  return data;
};

export default async function Home() {

  const repos = await fetchRepos();
  return (
    <>
    <din className="container">
      <h1>Projects</h1>
      <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <h2>{repo.name}</h2>
              <p>
                {repo.description
                  ? repo.description.length > 160
                    ? repo.description.slice(0, 160) + "...."
                    : repo.description
                  : "No description"}
              </p>
              <Link target="_black" id={repo.homepage ? 'btn' : ''} style={{textDecoration: 'none',color:'white'}} href={repo.homepage ? repo.homepage : '#'}>{repo.homepage ? 'Project Demo' : 'Demo Not Available'}</Link>
            </li>
          ))}
      </ul>
    </din>
    </>
  )
}
