import React,{useState, useEffect} from 'react';
import './Unsplash.css';
import UnsplashImage from './UnsplashImage';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'; 

function UnsplashApp() {

  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("india");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');

    useEffect(()=>{
        fetchimage();
    },[page,query]);

    const fetchimage = async () =>{
        const getdata = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH}`);
        const data = await getdata.json();
        setItem(data.results);
        setTotalPage(data.total_pages);
    };

   const updateSearch = (e)=>{
      setSearch(e.target.value)
    };

    const getSearch = (e)=>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };
    
    const nextPage = ()=>{
      setPage(page+1);     
    };
    const prevPage = ()=>{
      setPage(page-1)
    };

  return (
    <div className="App">
      <div className="form">
      <form onSubmit={getSearch} >
        <input type="text" value={search} onChange={updateSearch} placeholder="Search Image" />
        <button type="submit">Search</button>
      </form>
      </div>
      <div className="second">
      {item.map(photo =>(
        <UnsplashImage
        key={photo.id}
        image={photo.urls.small}
        title={photo.alt_description}
        id={photo.id}
        largeImage={photo.urls.regular} />
      ))}

      </div>
      <div className="pageNav action">
        <button onClick={prevPage} 

        style={{ display: page===1 ? "none" : "block" }}
        
        > <KeyboardBackspaceIcon/> </button>
        <button>Page {page} of {totalPage}</button>
        <button onClick={nextPage} ><ArrowRightAltIcon/> </button>
      </div>
        
    </div>
  );
}

export default UnsplashApp;
