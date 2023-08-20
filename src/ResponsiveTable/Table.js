import React, { useEffect, useState } from 'react';
import './Table.scss';
import bookData from "../json/book.json"
import Footer from '../Footer/Footer';

const Table = () => {
    const [data,setData] = useState(bookData.Extracts)
    const [sortedField, setSortedField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
  
    const handleSort = (field) => {
      if (sortedField === field) {
        if (sortOrder === 'asc') {
          setSortOrder('desc');
        } else if (sortOrder === 'desc') {
          setSortOrder(null);
          setSortedField(null);
        }
      } else {
        setSortedField(field);
        setSortOrder('asc');
      }
    };

    // const sortedDates = dates.sort((a, b) => {
    //     const dateA = new Date(`20${a.replace('/', '-')}`).toISOString();
    //     const dateB = new Date(`20${b.replace('/', '-')}`).toISOString();
      
    //     if (dateA < dateB) {
    //       return -1;
    //     } else if (dateA > dateB) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   });
      
    const formatedDate = (inputDateString) => {
        const date = new Date(inputDateString);
        
        // Extract year, month, and day components
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month because it's 0-based
        const day = date.getUTCDate().toString().padStart(2, '0');

        // Format the date as MM/DD/YY
        const formattedDate = `${month}/${day}/${year.toString().slice(-2)}`;
        return formattedDate
      }
  
    const sortedData = data.slice().sort((a, b) => {
      if (sortedField) {
        // if(sortedField == 'Publicationdate'){
        //     console.log("--data--",a,b)
        // //    return  console.log('==sortedField===',new Date(a['publicationDate']) - new Date(b['publicationDate'])
        // //    )
        // }
        if (a[sortedField] < b[sortedField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortedField] > b[sortedField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      } else {
        return 0;
      }
    });

      

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
            <th onClick={() => handleSort('author')}>Author</th>
            <th>Biography</th>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('estimatedReadingTimeMinutes')}>Reading time</th>
            <th onClick={() => handleSort('Publicationdate')}>Publication date</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((item,index) => (
            <tr>
              <td data-label="ID">{index+1}</td>
              <td data-label="Cover"  onClick={()=>handleClick(item.isbn)}><img src={item.jacketUrl}/></td>
              <td data-label="Author">{item.author}</td>
              <td data-label="Biography"><span dangerouslySetInnerHTML={{__html: item.authorBiography}}/></td>
              <td data-label="Title" onClick={()=>handleClick(item.isbn)}>{item.title}</td>
              <td data-label="Readingtime">{item.estimatedReadingTimeMinutes}</td>
              <td data-label="Publicationdate">{formatedDate(item.publicationDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Table;
