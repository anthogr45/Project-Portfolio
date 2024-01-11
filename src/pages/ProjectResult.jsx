function ResultList(props) {

    console.log ("i am here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+props)
    return (
        <div>
        <h2>GitHub Repositories</h2>
        <ul className="list-group">
          {props.map((prop) => (
            <li className="list-group-item" key={prop.id}>
              <a href={prop.html_url}>{prop.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ResultList;