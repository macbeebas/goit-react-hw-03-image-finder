import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Modal } from './Modal/Modal.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Loader } from './Loader/Loader.jsx';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore.jsx';
import { GetFromApi } from './GetFromApi/GetFromApi.jsx';

import css from './App.module.css';

Notify.init({
  position: 'center-center',
});

export class App extends Component {
  // 'state' declaration
  state = {
    actualPage: 1,
    pictures: [],
    searchQuery: '',
    isModal: false,
    isLoader: false,
    totalHits: 0,
    totalPages: 0,
    isBtnLoadMore: false,
    bigPictureUrl: '',
    bigPictureTags: '',
  };

  handleSubmitForm = query => {
    window.scrollTo(0, 0);
    if (query.trim() === '') {
      Notify.warning("Search request shouldn't be empty");
      return;
    }
    this.setState({ searchQuery: query, actualPage: 1, pictures: [] });
  };

  async componentDidUpdate(_, prevState) {
    console.log('prevState:', prevState);
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.actualPage !== this.state.actualPage
    ) {
      this.setState({ isLoader: true });
      const response = await GetFromApi(
        this.state.searchQuery,
        this.state.actualPage
      );
      console.log('in App - "response" is:', response);
      if (response) {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...response.pictures],
          totalHits: response.totalHits,
          isLoader: false,
          totalPages: response.totalPages,
        }));

        if (response.pictures.length === 0) Notify.warning('No pictures found');

        if (response.pictures.length > 0 && this.state.actualPage === 1)
          Notify.success(
            `Found ${response.totalHits} pictures ${
              response.totalHits === 500 ? 'or more' : ''
            }`
          );
        console.log(
          `Last page? this.state.actualPage:${this.state.actualPage} response.totalPages:${response.totalPages}`
        );
        if (
          this.state.actualPage === response.totalPages &&
          response.totalPages > 1
        )
          Notify.info(`This is the last page`);
      }
    }
  }

  toggleModalPict = () => {
    this.setState(({ isModal }) => ({
      isModal: !isModal,
    }));
  };

  handleModalPict = e => {
    if (e.target.nodeName === 'IMG') {
      const openPict = e.target.getAttribute('data-modal');
      const openPictTags = e.target.getAttribute('data-tags');
      this.setState({
        bigPictureUrl: openPict,
        bigPictureTags: openPictTags,
      });
      this.toggleModalPict();
    }
  };

  handleIsBtnLoadMore = () => {
    this.setState(prevState => {
      return { actualPage: prevState.actualPage + 1 };
    });
  };

  render() {
    // destructuring 'state' variables
    const {
      actualPage,
      pictures,
      searchQuery,
      isModal,
      isLoader,
      totalHits,
      totalPages,
      isBtnLoadMore,
      bigPictureUrl,
      bigPictureTags,
    } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {totalHits > 0 && (
          <ImageGallery pictures={pictures} onClick={this.handleModalPict} />
        )}
        {isLoader && <Loader />}
        {/* {isBtnLoadMore && actualPage < totalPages && <ButtonLoadMore />} */}
        {/* {actualPage < totalPages && <ButtonLoadMore />} */}
        {totalHits > 0 && actualPage < totalPages && (
          <ButtonLoadMore isBtnLoadMore={this.handleIsBtnLoadMore} />
        )}

        {isModal && (
          <Modal
            onClose={this.toggleModalPict}
            bigPictureUrl={bigPictureUrl}
            bigPictureTags={bigPictureTags}
          />
        )}
        {console.log(
          'return "state":',
          { actualPage },
          { pictures },
          { searchQuery },
          { isModal },
          { isLoader },
          { totalHits },
          { totalPages },
          { isBtnLoadMore },
          { bigPictureUrl },
          { bigPictureTags }
        )}
      </div>
    );
  }
}
