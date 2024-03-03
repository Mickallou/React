const PageHeader = (props) => {
    return (
        <div className="center">
            <h1>{props.title}</h1>
            <p>Welcome the my WebSite {props.name}</p>
        </div>
    );
}

export default PageHeader;