import { products } from '../../data';
import Product from '../product/Product';
import './productList.css';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Sarthak</h1>
                <h1 className="pl-title">Personal Projects</h1>
                <p className="pl-desc">
                Sarthak is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
                </p>
            </div>
            <div className="pl-list">
                {
                    products.map(({id, img, githubLink, projectUrl, name, stack}) => (
                        <Product key={id} img={img} githubLink={githubLink} projectUrl={projectUrl} name={name} stack={stack} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
