import React, {useEffect, useState} from 'react';
import animalData from './assets/animals.json'
import './App.css';
import Navbar from './comps/navbar';
import Card from './comps/card';
import axios from 'axios'; 
import Nothing from './comps/nothing';
import {FaCaretUp, FaQuestion, FaCaretDown} from 'react-icons/fa';
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
  const [pageNum, setPageNum] = useState(1);
  const [theme, setTheme] = useState("light");
  const GetItems = async(numPage=1) => {
    try {
        const query = searchTerm;
        const APP_ID = "-kj6HOsxSX-2-rPZSQA2RZGlhycYC7CsZeOb_kBKKFY";
        const response = await axios.get(`https://api.unsplash.com/search/photos/?page=${numPage}&per_page=30&query=${query}&client_id=${APP_ID}`);
        console.log(response)
        if (response.data) {
          setData(response.data);
        } else {
          setData(animalData);
        }
    } catch (error){
        console.log("error", error);
    }
  }


  useEffect(() => {
    GetItems(pageNum.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTerm, pageNum]);

  const onSearchSubmit = (e,searched) => {
    e.preventDefault();
    setSearchTerm(searched);
    //console.log(searched);
  };

  const onImgClick = (e,src,alt) => {
    e.preventDefault();
    /*
    setImgStatus(prevState => ({
      ...prevState,
      src:src,
      alt:alt
    }))
    */
    //setShowImg(true);
    //console.log(src);
  };
/*
  const onImgClose = () => {
    setShowImg(false);
  }
*/
  const onPageChange = (e,direction) => {
    e.preventDefault();
    //console.log(direction, pageNum);
    if (direction==="prev" && pageNum>1) {
      //console.log("prev called");
      setPageNum(i => i-1);
    } else if (direction==="next" && pageNum<data.total_pages) {
      //console.log("next called")
      setPageNum(i => i+1);
    }
    onScrollToTop();
  }

  const onScrollToTop = (dir) => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const onScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    });
  };

  const onRequestInfo = () => {
    //console.log("clicked info button");
  };

  const onThemeChange = () => {
    //console.log("Theme changed from"+theme);
    if (theme === 'dark') { setTheme('light')} else { setTheme('dark') }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark', 'bg-gray-800')
    } else {
      document.documentElement.classList.remove('dark', 'bg-gray-800')
    }
  };

  const onLink = () => {
    window.open("https://github.com/fibre-ether/pinterest-clone-react");
  }

  useEffect(() => {
    onThemeChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar handleSubmit={onSearchSubmit} handleThemeChange={onThemeChange} theme={theme} handleLink={onLink} className="dark"/>
      <button onClick={onScrollToTop} className="fixed transform duration-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 right-4 bottom-48 z-10 bg-white shadow-lg border-2 rounded-full h-14 w-14 pb-1 pr-0.5 flex justify-center items-center">
      <FaCaretUp size={50} />
      </button>
      <button onClick={onRequestInfo} className="fixed transform duration-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 group right-4 bottom-32 z-10 bg-white shadow-lg border-2 rounded-full h-14 w-14 pb-0.5 pr-0.5 flex justify-center items-center">
      <FaQuestion size={30} />
      <div className=" absolute bg-white text-sm sm:text-base dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 font-semibold rounded-md h-auto p-2 w-40 right-16 shadow-lg opacity-100 scale-0 transform duration-100 group-focus:scale-100 transition-all">
        A photo gallery web app made using React.js and Tailwind CSS
      </div>
      </button>
      <button onClick={onScrollToBottom} className="fixed transform duration-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 right-4 bottom-16 z-10 bg-white shadow-lg border-2 rounded-full h-14 w-14 pb-1 pr-0.5 flex justify-center items-center">
      <FaCaretDown size={50} />
      </button>
      <div>
      {data.total===0? <Nothing /> :
      <div className="relative ">
      <div className="grid grid-cols-2 gap-0 mx-4 place-items-center mt-20 2xl:grid-cols-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 align-center">
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
