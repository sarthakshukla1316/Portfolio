import './product.css';

const Product = ({ key, img, githubLink, projectUrl, name, stack}) => {
    
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={projectUrl} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>  
            <h6 className="name">{name}</h6>
            <p className="stack">Tech Stack: {stack}</p>

            <div style={{ marginTop: '24px' }}>
                <a href={projectUrl} target="_blank" className="resume">Project URL</a>
                <a href={githubLink} target="_blank" className="resume">Github Link</a>
            </div>
        </div>
         
    )
}

export default Product