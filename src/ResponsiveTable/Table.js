import React, { useEffect, useState } from 'react';
import './Table.scss';
import bookData from "../json/book.json"
import Footer from '../Footer/Footer';

const Table = () => {
  let books = bookData.Extracts
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  });

  const sortedBooks = [...books].sort((a, b) => {
    if (sortConfig.key === 'publicationDate') {
      const dateA = new Date(a[sortConfig.key]);
      const dateB = new Date(b[sortConfig.key]);
      return dateA - dateB;
    } else if (sortConfig.key === 'author' || sortConfig.key === 'title') {
      return a[sortConfig.key].localeCompare(b[sortConfig.key]);
    } else if (sortConfig.key === 'estimatedReadingTimeMinutes') {
      return a[sortConfig.key] - b[sortConfig.key];
    }
    return 0;
  });

  if (sortConfig.direction === 'desc') {
    sortedBooks.reverse();
  }

  const handleSort = (key) => {
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      setSortConfig({ key, direction: 'desc' });
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      setSortConfig({ key: null, direction: 'asc' });
    } else {
      setSortConfig({ key, direction: 'asc' });
    }
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  const handleClick = (id) => {
    window.location.assign(`https://extracts.panmacmillan.com/extract?isbn=${id}`)       
  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cover</th>
            <th onClick={() => handleSort('author')}>Author {getSortIcon('author')}</th>
            <th>Biography</th>
            <th onClick={() => handleSort('title')}>Title {getSortIcon('title')}</th>
            <th onClick={() => handleSort('estimatedReadingTimeMinutes')}>Reading time {getSortIcon('estimatedReadingTimeMinutes')}</th>
            <th onClick={() => handleSort('Publicationdate')}>Publication date {getSortIcon('Publicationdate')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks?.map((item,index) => (
            <tr>
              <td data-label="ID">{index+1}</td>
              <td data-label="Cover"  onClick={()=>handleClick(item.isbn)}><img src={item.jacketUrl}/></td>
              <td data-label="Author">{item.author}</td>
              <td data-label="Biography"><span dangerouslySetInnerHTML={{__html: item.authorBiography}}/></td>
              <td data-label="Title" onClick={()=>handleClick(item.isbn)}>{item.title}</td>
              <td data-label="Readingtime">{item.estimatedReadingTimeMinutes}</td>
              <td data-label="Publicationdate">{new Date(item.publicationDate).toLocaleDateString('en-US', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Table;
