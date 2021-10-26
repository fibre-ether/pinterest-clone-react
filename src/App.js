import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './comps/navbar';
import Card from './comps/card';
import axios from 'axios'; 
import Nothing from './comps/nothing';
import BigImg from './comps/bigImg';
import {FaCaretUp, FaQuestion} from 'react-icons/fa';
import Pagination from './comps/pagination';
function App() {
  const [data,setData] = useState({total:1, total_pages:1,results:[{
    urls:{small:""},
    description:"",
    alt_description:"alt",
    user:{name:""}},{
      urls:{small:""},
      description:"",
      alt_description:"alt",
      user:{name:""}}]
  });
  const [searchTerm, setSearchTerm] = useState("photos");
  const [pageNum, setPageNum] = useState(2);
  const [showImg, setShowImg] = useState(false);
  const [imgStatus, setImgStatus] = useState({src:"", alt:""});
  const GetItems = async(numPage=2) => {
    try {
        const url = "https://api.unsplash.com/search/photos";
        const query = searchTerm;
        const APP_ID = "-kj6HOsxSX-2-rPZSQA2RZGlhycYC7CsZeOb_kBKKFY";
        console.log("geting useEffect");
        const response = await axios.get(`https://api.unsplash.com/search/photos/?page=${numPage}&per_page=30&query=${query}&client_id=${APP_ID}`);
        console.log("getting response");
        console.log(response.data);
        setData(response.data);
    } catch (error){
        console.log("getting error");
        console.log("error", error);
    }
  }

  useEffect(() => {
    GetItems(pageNum.toString());
  },[searchTerm, pageNum]);

  const onSearchSubmit = (e,searched) => {
    e.preventDefault();
    setSearchTerm(searched);
    console.log(searched);
  };

  const onImgClick = (e,src,alt) => {
    e.preventDefault();
    setImgStatus(prevState => ({
      ...prevState,
      src:src,
      alt:alt
    }))
    setShowImg(true);
    console.log(src);
  };

  const onImgClose = () => {
    setShowImg(false);
  }

  const onPageChange = (e,direction) => {
    e.preventDefault();
    console.log(direction, pageNum);
    if (direction==="prev") {
      console.log("prev called");
      setPageNum(i => i-1);
    } else {
      console.log("next called")
      setPageNum(i => i+1);
    }
    onScrollToTop();
  }

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const onRequestInfo = () => {
    console.log("clicked info button");
  };
  return (
    <>
      <Navbar handleSubmit={onSearchSubmit}/>
      <button onClick={onScrollToTop} className="fixed right-4 bottom-48 z-10 bg-white shadow-lg border-2 rounded-full h-14 w-14 pb-1 pr-0.5 flex justify-center items-center">
      <FaCaretUp size={50} />
      </button>
      <button onClick={onRequestInfo} className="fixed right-4 bottom-28 z-10 bg-white shadow-lg border-2 rounded-full h-14 w-14 pb-0.5 pr-0.5 flex justify-center items-center">
      <FaQuestion size={30} />
      </button>
      <div>
      {data.total===0? <Nothing /> :
      <div className="relative ">
      <div className="grid grid-cols-2 gap-2 mx-8 place-items-center mt-20 2xl:grid-cols-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 align-center">
        {data.results.map((item,index)=>{
            return <Card img={item.urls.small} desc={item.description} alt={item.alt_description} name={item.user.name} clickHandle={onImgClick} key={index}/>
        })}
      </div>
      <Pagination pageNum={pageNum} totalPages={data.total_pages} handleClick={onPageChange} handleTop={onScrollToTop}/>
      </div>
      }
      
      </div>
    </>
  );
}

export default App;
