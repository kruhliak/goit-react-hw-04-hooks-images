import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setimages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSubmit = value => {
    setSearchQuery(value);
    setimages([]);
    setPage(1);
  };

  const btnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  const modalShow = data => {
    setShowModal(true);
    setModalImage(data);
  };
  const togleLoader = () => {
    setShowLoader(prevState => !prevState);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    async function API(searchQuery, page) {
      const KEY = '21737964-f95ae509173e22fa890b9705b';
      axios.defaults.baseURL = 'https://pixabay.com/api/';
      togleLoader();
      const response = await axios.get(
        `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      );
      togleLoader();

      setimages(prevState => [...prevState, ...response.data.hits]);
      setShowLoader(false);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (isFirstRender.current === false) {
      API(searchQuery, page);
    }

    isFirstRender.current = false;
  }, [page, searchQuery]);

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onClick={modalShow} />
      {images.length !== 0 && <Button text="Load More" onClick={btnClick} />}
      {showModal && <Modal onClose={modalClose} onOpen={modalImage} />}
      {showLoader && <Loader />}
    </div>
  );
}
