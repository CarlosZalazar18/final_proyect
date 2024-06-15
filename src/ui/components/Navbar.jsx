import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';


export const Navbar = () => {

    const navigate = useNavigate();
    const [ categories, setCategories ] = useState([]);
    const categoriesCollectionRef = collection(db, "categories");

    useEffect(() => {
        const getCategories = async () => {
            const data = await getDocs(categoriesCollectionRef);
            setCategories(data.docs.map( (doc) => ({...doc.data(), id: doc.id})));
        };
        getCategories();
    }, []);

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                TechMart
            </Link>

            <div className="navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            { 
                            categories.map( category => {
                                return (<li key={category.id}><a className="dropdown-item" href={`/categoria/${category.name}`}>{ category.name }</a></li>);
                            })
                            }
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}