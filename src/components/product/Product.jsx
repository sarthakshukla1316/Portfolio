import './product.css';

const Product = ({ key, img, link, name, stack}) => {
    
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>  
            <h6 className="name">{name}</h6>
            <p className="stack">Tech Stack: {stack}</p>
        </div>
         
    )
}

export default Product
